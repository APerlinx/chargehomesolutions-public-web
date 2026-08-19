
import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const DIR = "public/logos"

const RENDER_HEIGHT = 400

const files = readdirSync(DIR)
  .filter((f) => f.endsWith(".svg"))
  .sort()

const rows = []

for (const file of files) {
  const raw = readFileSync(path.join(DIR, file), "utf8")
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1]
  if (!viewBox) {
    console.log(`[v0] ${file}: no viewBox, skipped`)
    continue
  }
  const [, , vbW, vbH] = viewBox.split(/[\s,]+/).map(Number)
  const vbRatio = vbW / vbH

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
      if (data[(y * width + x) * 4 + 3] > 12) {
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

  const inkW = maxX - minX + 1
  const inkH = maxY - minY + 1
  rows.push({
    name: path.basename(file, ".svg"),
    vbRatio: +vbRatio.toFixed(3),
    inkRatio: +(inkW / inkH).toFixed(3),
    fillY: +(inkH / height).toFixed(3),
    fillX: +(inkW / width).toFixed(3),
  })
}

console.log("\nname            vbRatio  inkRatio  fillX  fillY")
for (const r of rows) {
  console.log(
    r.name.padEnd(16) + String(r.vbRatio).padEnd(9) + String(r.inkRatio).padEnd(10) + String(r.fillX).padEnd(7) + r.fillY,
  )
}
