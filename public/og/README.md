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
