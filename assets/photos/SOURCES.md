# Photo sources — Golden Ride Car Care demo

**No photographs were included.** All image slots in the site are designed placeholders
(dark plate, gold hairline frame, PHOTO label) that can be swapped for real files without
any layout change.

What was attempted, in the order of preference given:

1. **Photos pre-placed in `assets/photos/`** — the folder did not exist before this build;
   no images were supplied.
2. **The business's own public social media**
   - Instagram `@goldenride.ae` — profile bio is public and was used for facts (handle,
     phone, services), but photo posts require login. No login was attempted, no login wall
     was bypassed. https://www.instagram.com/goldenride.ae/
   - TikTok `@goldenride.ae1` — page returned no content; ownership NOT VERIFIED.
   - No website exists (none found in any listing).
3. **Google Maps photos uploaded by the owner** — the Maps place page is a JavaScript app;
   photo files are not present in the served HTML and require Google's internal API. Not
   fetched. https://maps.app.goo.gl/7pimMKEe4TP1zuHx9?g_st=ic
4. **Third-party directories** (magicpin shows 21 photos, etc.) — provenance unknown
   (may be customer uploads or Google imports); excluded per the no-customer-photo rule.

## Expected files when real photos arrive

| File | Slot | Aspect ratio | Max size |
|---|---|---|---|
| `hero.webp` / `hero.jpg` | hero (`.plate-hero`) | 4:3 landscape (≥1600 px wide) | 200 KB |
| `g1.webp` / `g1.jpg` | gallery wide top | 16:10 | 120 KB |
| `g2.webp` / `g2.jpg` | gallery tall | 3:4 | 120 KB |
| `g3.webp` / `g3.jpg` | gallery tall | 3:4 | 120 KB |
| `g4.webp` / `g4.jpg` | gallery square | 1:1 | 120 KB |
| `g5.webp` / `g5.jpg` | gallery square | 1:1 | 120 KB |
| `g6.webp` / `g6.jpg` | gallery strip | 21:6 | 120 KB |

Rules when editing photos: skip images with identifiable faces, crop/blur license plates,
no watermarks or heavy filters, keep both WebP and JPEG fallback, record the source URL of
every image in this file.
