# Open Graph artwork

One file per route, **1200×630 JPEG**, named after the route path with the
slashes turned into dashes:

| Route | File |
| --- | --- |
| `/` | `home.jpg` |
| `/about` | `about.jpg` |
| `/courses/short-courses` | `courses-short-courses.jpg` |
| `/courses/higher-education/undergraduate` | `courses-higher-education-undergraduate.jpg` |

Dynamic routes share one section image rather than one per item:

| Route | File |
| --- | --- |
| `/blog/<slug>` | `blog.jpg` |
| `/courses/<slug>` | `courses.jpg` |
| `/services/<slug>` | `services.jpg` |

Any route with no file here falls back to `/og-image.jpg` automatically, so a
missing file degrades to the site card rather than to no image. Drop the JPEGs
in and they take over with no code change.

The path is derived in `lib/seo.ts` (`ogImagePath`).

## What is here

All 18 indexable routes. `privacy`, `terms` and `complaints` deliberately have
no file: they are `noindex` and rarely shared, so the site card is the right
result for them.

The photographs carry no text. Generated lettering garbles, and every platform
draws the page title and description over the card anyway, so baking words
into the image only risks a typo no one can correct later. Anything that would
put an institution's name or mark on the card was reshot for the same reason
the testimonials do not name employers: we can show the setting without
implying an endorsement.
