# Photo sources — Golden Ride Car Care demo

**All seven photos are free-licence stock stand-ins**, downloaded and stored locally
(`assets/photos/*.webp`) — they are *not* Golden Ride's own work and must be replaced with
the shop's real photos before this site goes in front of customers. Alt text describes what
each image actually shows.

Licence: **Unsplash License** — free for commercial use, no attribution required
(https://unsplash.com/license). Source URL for each file (downloaded 2026-10-07):

| File | Shows | Source (images.unsplash.com) |
|---|---|---|
| `hero.webp` 1200×1500, 61 KB | man machine-polishing a dark car in a workshop | `photo-1708805282706-f44730b7e527` |
| `g1.webp` 1120×700, 89 KB | pressure-washing a black sports car | `photo-1520340356584-f9917d1eea6f` |
| `g2.webp` 960×1280, 35 KB | orbital polisher on a masked hood | `photo-1620584898989-d39f7f9ed1b7` |
| `g3.webp` 960×1280, 47 KB | machine-polishing a taped black fender | `photo-1620584899131-a5ff5f8fbb03` |
| `g4.webp` 1000×1000, 48 KB | brush-detailing a black alloy wheel | `photo-1633014041037-f5446fb4ce99` |
| `g5.webp` 800×800, 86 KB | wash mitt + suds on a black panel | `photo-1694678505383-676d78ea3b96` |
| `g6.webp` 1400×520, 94 KB | cars being washed in a service bay | `photo-1732357624591-f2137085659b` |

Every file was tone-graded on download (gamma + highlight rolloff + slight warm bias) so the
set sits together against the `#0B0A09` page background; source IDs above are the ungraded
originals. Total payload: ~461 KB, all `loading="lazy"` except the hero.

Full URL pattern: `https://images.unsplash.com/<id>?w=1800&q=80&fm=jpg&fit=max`

## Why the shop's own photos were not used (first build)

1. **Instagram `@goldenride.ae`** — bio public (used for facts), photo posts behind a
   login wall. No login attempted, no wall bypassed.
2. **Google Maps** — place page is a JavaScript app; photo files require Google's internal
   API. Not fetched.
3. **Third-party directories** (magicpin shows 21 photos, etc.) — provenance unknown
   (customer uploads or Google imports); excluded.
4. **No website exists** — nothing to source from.
5. No images were supplied in the project folder before the build.

## Replacing with real photos

| File | Slot | Aspect | Max size |
|---|---|---|---|
| `hero.webp` | hero (`.plate-hero`) | 4:5 portrait (renders 4:5 mobile / 4:3.4 desktop, cover-cropped) | 200 KB |
| `g1.webp` | gallery wide top | 16:10 | 120 KB |
| `g2.webp` / `g3.webp` | gallery tall | 3:4 | 120 KB |
| `g4.webp` / `g5.webp` | gallery square | 1:1 | 120 KB |
| `g6.webp` | gallery strip | 21:6 | 120 KB |

Same filenames = drop-in replacement, no HTML/CSS edits needed (width/height attributes in
`index.html` should match the new files). Also update each `alt` (bilingual EN / AR) to
describe the new photo.

Rules for the real photos: skip images with identifiable faces, crop/blur licence plates,
no watermarks or heavy filters, record the source (owner delivery / shoot date) in this file.
