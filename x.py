import requests
import os
import json
import time
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

IMAGE_DIR = "images"
os.makedirs(IMAGE_DIR, exist_ok=True)


# ✅ check url valid
def is_valid(url):
    try:
        r = requests.head(url, timeout=5)
        return r.status_code == 200
    except:
        return False


# ✅ fallback: MobileDokan scrape
def get_mobiledokan_image(slug):
    try:
        url = f"https://www.mobiledokan.com/mobile/{slug}"
        res = requests.get(url, headers=HEADERS, timeout=10)

        if res.status_code != 200:
            return None

        soup = BeautifulSoup(res.text, "html.parser")

        img = soup.select_one(".mobile-details img")

        if img and img.get("src"):
            return img["src"]

        return None
    except:
        return None


# ✅ download image
def download_image(url, filename):
    try:
        res = requests.get(url, stream=True, timeout=10)

        if res.status_code == 200:
            filepath = os.path.join(IMAGE_DIR, filename)

            with open(filepath, "wb") as f:
                for chunk in res.iter_content(1024):
                    f.write(chunk)

            return filepath

        return None
    except:
        return None


# ✅ load data
with open("phones_data_v3.json", "r") as f:
    data = json.load(f)


for phone in data["phones"]:
    slug = phone["slug"]
    gsm_url = phone.get("image_url")

    print(f"\n📱 Processing: {slug}")

    final_url = None

    # 1️⃣ try gsmarena
    if gsm_url and is_valid(gsm_url):
        final_url = gsm_url
        print("✅ GSM OK")

    # 2️⃣ fallback mobiledokan
    else:
        print("❌ GSM failed → trying MobileDokan")
        md_url = get_mobiledokan_image(slug)

        if md_url:
            final_url = md_url
            print("✅ MobileDokan OK")

    # 3️⃣ download or fallback
    if final_url:
        filename = f"{slug}.jpg"
        local_path = download_image(final_url, filename)

        if local_path:
            phone["local_image"] = local_path
        else:
            phone["local_image"] = None
    else:
        phone["local_image"] = None

    time.sleep(0.5)  # avoid blocking


# ✅ save final data
with open("phones_final.json", "w") as f:
    json.dump(data, f, indent=2)

print("\n🚀 ALL DONE!")