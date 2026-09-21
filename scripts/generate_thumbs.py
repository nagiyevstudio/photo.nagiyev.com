import os
import json
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_IMAGES = os.path.join(BASE_DIR, 'public', 'images')
THUMBS_DIR = os.path.join(PUBLIC_IMAGES, 'thumbs')
DATA_FILE = os.path.join(BASE_DIR, 'src', 'data', 'portfolioData.json')

MAX_SIZE = (1200, 1200) # Crisp for Retina displays, 100-180KB per image
QUALITY = 85

def generate_thumbnails():
    categories = ['architecture', 'fine-art', 'hero']
    generated = 0
    total_orig_size = 0
    total_thumb_size = 0

    for cat in categories:
        src_cat_dir = os.path.join(PUBLIC_IMAGES, cat)
        dest_cat_dir = os.path.join(THUMBS_DIR, cat)
        os.makedirs(dest_cat_dir, exist_ok=True)

        if not os.path.exists(src_cat_dir):
            continue

        for fname in os.listdir(src_cat_dir):
            if not fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                continue

            src_path = os.path.join(src_cat_dir, fname)
            base_name, _ = os.path.splitext(fname)
            thumb_name = f"{base_name}.webp"
            thumb_path = os.path.join(dest_cat_dir, thumb_name)

            orig_bytes = os.path.getsize(src_path)
            total_orig_size += orig_bytes

            with Image.open(src_path) as im:
                # Convert RGBA/P to RGB if saving as WebP (or preserve RGBA)
                if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                    im_to_save = im.convert('RGBA')
                else:
                    im_to_save = im.convert('RGB')

                # Resize maintaining aspect ratio
                im_to_save.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
                im_to_save.save(thumb_path, 'WEBP', quality=QUALITY, method=6)

            thumb_bytes = os.path.getsize(thumb_path)
            total_thumb_size += thumb_bytes
            generated += 1
            print(f"[{cat}] {fname} -> {thumb_name} ({orig_bytes/1024:.1f} KB -> {thumb_bytes/1024:.1f} KB)")

    print(f"\nDone! Generated {generated} thumbnails.")
    print(f"Original total: {total_orig_size/1024/1024:.2f} MB")
    print(f"Thumbnails total: {total_thumb_size/1024/1024:.2f} MB")
    print(f"Saved: {(total_orig_size - total_thumb_size)/1024/1024:.2f} MB ({(1 - total_thumb_size/total_orig_size)*100:.1f}%)")

def update_portfolio_data():
    if not os.path.exists(DATA_FILE):
        print("Data file not found!")
        return

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for section_name in ['hero', 'architecture', 'fineArt']:
        if section_name not in data:
            continue

        cat_folder = 'fine-art' if section_name == 'fineArt' else section_name
        for item in data[section_name]:
            src = item.get('src', '')
            fname = os.path.basename(src)
            base_name, _ = os.path.splitext(fname)
            thumb_path = f"/images/thumbs/{cat_folder}/{base_name}.webp"
            
            # Check if thumb actually exists
            local_thumb = os.path.join(PUBLIC_IMAGES, 'thumbs', cat_folder, f"{base_name}.webp")
            if os.path.exists(local_thumb):
                item['thumb'] = thumb_path
            else:
                item['thumb'] = src

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("Updated portfolioData.json with thumb URLs!")

if __name__ == '__main__':
    generate_thumbnails()
    update_portfolio_data()
