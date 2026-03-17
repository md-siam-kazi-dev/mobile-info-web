const https = require("https")
const fs = require("fs")
const path = require("path")

const phones = require("./phones_data_v3.json").phones

const OUTPUT_DIR = "./public/phones"

// Create folder if not exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

function downloadImage(url, slug) {
  return new Promise((resolve) => {
    const filePath = path.join(OUTPUT_DIR, `${slug}.jpg`)

    // Skip if already downloaded
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skip: ${slug}`)
      return resolve()
    }

    const file = fs.createWriteStream(filePath)

    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file)
        file.on("finish", () => {
          file.close()
          console.log(`✅ Done: ${slug}`)
          resolve()
        })
      } else {
        file.close()
        fs.unlinkSync(filePath)
        console.log(`❌ Failed (${res.statusCode}): ${slug}`)
        resolve()
      }
    }).on("error", (err) => {
      console.log(`❌ Error: ${slug} — ${err.message}`)
      resolve()
    })
  })
}

// Download one by one (avoid rate limiting)
async function run() {
  console.log(`📱 Downloading ${phones.length} images...\n`)

  for (const phone of phones) {
    await downloadImage(phone.image_url, phone.slug)
    // Small delay to avoid getting blocked
    await new Promise(r => setTimeout(r, 300))
  }

  console.log("\n🎉 All done!")
}

run()