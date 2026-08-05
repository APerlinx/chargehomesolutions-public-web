/**
 * Turns the supplied ChargeHome Solutions logo (white artwork on a baked-in dark
 * gradient) into a transparent, tightly-trimmed alpha mask.
 *
 * The artwork is pure white and the background is near-black, so a pixel's
 * luminance is effectively its coverage. We use that as the alpha channel, which
 * preserves every antialiased edge of the original lines and letterforms exactly.
 * The result is used as a CSS mask so the mark can be tinted with currentColor.
 */
import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const here = path.dirname(fileURLToPath(import.meta.url))
const SOURCE = path.join(here, "../public/brand/chs-logo-source.png")
const OUTPUT = path.join(here, "../public/brand/chs-logo-mask.png")

/** Below this luminance the pixel is background, not artwork. */
const FLOOR = 0.1
/** At or above this luminance the pixel is fully opaque artwork. */
const CEIL = 0.62

/**
 * Regions cleared from the artwork, in source pixel coordinates.
 *
 * The car's rear bumper is drawn as a "C" curl — a stroke at y 242-252, another at
 * y 193-203, a cap joining them at the left edge, and a small flick at y 166-176.
 * This box lifts that whole assembly out. Its top edge sits at y 158, which clears
 * the roofline: that line tapers in at x 196 / y 152 and only climbs from there, so
 * it survives intact. The right edge stops at x 254, just before the underside
 * begins sweeping up into the side skirt, leaving that sweep as the new rear line.
 */
const ERASE_BOXES = [{ left: 78, top: 158, right: 254, bottom: 262 }]

const image = sharp(SOURCE).ensureAlpha()
const { width, height } = await image.metadata()
const { data } = await image.raw().toBuffer({ resolveWithObject: true })

const alpha = Buffer.alloc(width * height)

for (let i = 0, p = 0; p < alpha.length; i += 4, p++) {
  // Rec. 709 luma, matching how the eye weights the channels.
  const luma = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255
  // Remap through the window so the dark navy background clears to fully
  // transparent and the strokes stay solid, without eating the soft edges.
  const coverage = (luma - FLOOR) / (CEIL - FLOOR)
  alpha[p] = Math.round(Math.max(0, Math.min(1, coverage)) * 255)
}

// Clear the unwanted regions before measuring, so the trim tightens around what
// actually remains rather than around the removed artwork.
for (const box of ERASE_BOXES) {
  for (let y = box.top; y <= box.bottom; y++) {
    for (let x = box.left; x <= box.right; x++) {
      alpha[y * width + x] = 0
    }
  }
}

// Find the artwork's bounding box so the asset carries no dead margin and can be
// sized purely by its own aspect ratio.
let top = height
let bottom = -1
let left = width
let right = -1

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (alpha[y * width + x] < 8) continue
    if (y < top) top = y
    if (y > bottom) bottom = y
    if (x < left) left = x
    if (x > right) right = x
  }
}

const box = {
  left,
  top,
  width: right - left + 1,
  height: bottom - top + 1,
}

await sharp(
  // White artwork carrying the computed alpha: white keeps the mask neutral and
  // makes the PNG legible on its own if ever used directly.
  Buffer.concat(
    Array.from({ length: width * height }, (_, p) => Buffer.from([255, 255, 255, alpha[p]])),
  ),
  { raw: { width, height, channels: 4 } },
)
  .extract(box)
  .png()
  .toFile(OUTPUT)

console.log(`[v0] source ${width}x${height} -> mask ${box.width}x${box.height}`)
console.log(`[v0] aspect ratio ${(box.width / box.height).toFixed(4)}`)
console.log(`[v0] set LOGO_RATIO to "${box.width} / ${box.height}"`)

// A flattened copy for eyeballing the result; not shipped to the app.
await sharp(OUTPUT).flatten({ background: "#0b0f14" }).png().toFile("/tmp/logo/preview.png")
