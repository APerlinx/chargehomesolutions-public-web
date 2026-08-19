
import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const here = path.dirname(fileURLToPath(import.meta.url))
const SOURCE = path.join(here, "../public/brand/chs-logo-source.png")
const OUTPUT = path.join(here, "../public/brand/chs-logo-mask.png")


const FLOOR = 0.1

const CEIL = 0.62


const ERASE_BOXES = [{ left: 78, top: 158, right: 254, bottom: 262 }]

const image = sharp(SOURCE).ensureAlpha()
const { width, height } = await image.metadata()
const { data } = await image.raw().toBuffer({ resolveWithObject: true })

const alpha = Buffer.alloc(width * height)

for (let i = 0, p = 0; p < alpha.length; i += 4, p++) {
  const luma = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255
  const coverage = (luma - FLOOR) / (CEIL - FLOOR)
  alpha[p] = Math.round(Math.max(0, Math.min(1, coverage)) * 255)
}

for (const box of ERASE_BOXES) {
  for (let y = box.top; y <= box.bottom; y++) {
    for (let x = box.left; x <= box.right; x++) {
      alpha[y * width + x] = 0
    }
  }
}

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

await sharp(OUTPUT).flatten({ background: "#0b0f14" }).png().toFile("/tmp/logo/preview.png")
