/**
 * Crops each partner logo to its artwork by tightening the viewBox.
 *
 * Why this is needed: several of these files pad the artwork inside a square box
 * (Chrysler's mark fills just 16% of its box height, Kia's 24%). Sizing by box
 * height therefore renders the padded logos far smaller than the tightly cropped
 * ones, which is the size mismatch on the partner row.
 *
 * No path data is touched. The viewBox is a window onto an unchanged user-space
 * coordinate system, so narrowing it to the artwork's bounds only removes empty
 * margin -- every logo stays pixel-identical in shape and proportion. Results are
 * written to a separate directory so the originals remain available.
 *
 * Run: node scripts/tighten-logos.mjs
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const SRC_DIR = "public/logos"
const OUT_DIR = "public/logos/tight"
/** Render tall so thin wordmarks still produce enough pixels to measure. */
const RENDER_HEIGHT = 600
/** Alpha above this counts as artwork; filters out antialiasing fringe. */
const ALPHA_FLOOR = 12

mkdirSync(OUT_DIR, { recursive: true })

const files = readdirSync(SRC_DIR)
  .filter((f) => f.endsWith(".svg"))
  .sort()

const measured = []

for (const file of files) {
  const raw = readFileSync(path.join(SRC_DIR, file), "utf8")
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1]
  if (!viewBox) {
    console.log(`[v0] ${file}: no viewBox, skipped`)
    continue
  }

  const [vbX, vbY, vbW, vbH] = viewBox.split(/[\s,]+/).map(Number)

  const png = await sharp(Buffer.from(raw), { density: 300 })
    .resize({ height: RENDER_HEIGHT, fit: "inside" })
    .png()
    .toBuffer()

  const img = sharp(png).ensureAlpha()
  const { width, height } = await img.metadata()
  const { data } = await img.raw().toBuffer({ resolveWithObject: true })

  let minX = width
  let minY = height
  let maxX = -1
  let maxY = -1
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > ALPHA_FLOOR) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }

  if (maxX < 0) {
    console.log(`[v0] ${file}: rendered empty, skipped`)
    continue
  }

  // Map pixel bounds back into the original user-space coordinates.
  const toUserX = (px) => vbX + (px / width) * vbW
  const toUserY = (py) => vbY + (py / height) * vbH
  const nx = toUserX(minX)
  const ny = toUserY(minY)
  const nw = toUserX(maxX + 1) - nx
  const nh = toUserY(maxY + 1) - ny

  const round = (n) => +n.toFixed(4)
  const nextViewBox = `${round(nx)} ${round(ny)} ${round(nw)} ${round(nh)}`

  // Replace the viewBox, and drop any width/height so the intrinsic ratio comes
  // from the new viewBox alone rather than the old padded box.
  let out = raw.replace(/viewBox="[^"]+"/, `viewBox="${nextViewBox}"`)
  out = out.replace(/<svg([^>]*)>/, (match, attrs) => {
    const cleaned = attrs.replace(/\s(?:width|height)="[^"]*"/g, "")
    return `<svg${cleaned}>`
  })

  writeFileSync(path.join(OUT_DIR, file), out)
  measured.push({ name: path.basename(file, ".svg"), ratio: +(nw / nh).toFixed(4) })
}

console.log(`\n[v0] wrote ${measured.length} cropped logos to ${OUT_DIR}\n`)
console.log("ratios after cropping (width / height):")
for (const m of measured) console.log(`  ${m.name.padEnd(16)} ${m.ratio}`)
