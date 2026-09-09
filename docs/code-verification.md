# Training code verification checklist

Every national code referenced on the careers pages, for checking against
[training.gov.au](https://training.gov.au). Until a row is completed, its
`codeStatus` in `lib/careers.ts` stays `"unverified"` — nothing in the build
guesses whether a code is current, because guessing is what this whole
remediation exists to stop.

**How to complete a row**

1. Open the register link.
2. Confirm the title matches `tgaTitle` exactly, with no added specialisation.
3. Record the status shown on the register: Current, or Superseded (note the
   code that replaces it).
4. Update `codeStatus` for that pathway in `lib/careers.ts` to `"current"` or
   `"superseded"`, and set the career's `lastReviewed` to the date you checked.

**Two rows need attention before the rest**

- **CHC43015** — this qualification had *no* national code on the site at all.
  The code was supplied by Edmark and has not been verified. Check it first.
- **CHC33021** and **CHC52025** — the site had altered these titles by
  appending specialisation streams ("(Ageing and Disability)", "(Case
  Management, Child, Youth and Family Welfare)"). They now carry the plain
  title. Confirm the plain title is what the register states.

Codes below are as referenced on 10 September 2026.

| # | Code | Title as published | Career page | Register | Status | Checked by / date |
|---|------|--------------------|-------------|----------|--------|-------------------|
| 1 | `AUR30320` | Certificate III in Automotive Electrical Technology | [Automotive electrician](/careers/automotive-electrician) | [check](https://training.gov.au/training/details/AUR30320) |  |  |
| 2 | `AUR30620` | Certificate III in Light Vehicle Mechanical Technology | [Light vehicle mechanic](/careers/light-vehicle-mechanic) | [check](https://training.gov.au/training/details/AUR30620) |  |  |
| 3 | `AUR31120` | Certificate III in Heavy Commercial Vehicle Mechanical Technology | [Heavy vehicle mechanic](/careers/heavy-vehicle-mechanic) | [check](https://training.gov.au/training/details/AUR31120) |  |  |
| 4 | `BSB50120` | Diploma of Business | [Business administrator and manager](/careers/business-administrator) | [check](https://training.gov.au/training/details/BSB50120) |  |  |
| 5 | `BSB80120` | Graduate Diploma of Management (Learning) | [Learning and development officer](/careers/learning-and-development-officer) | [check](https://training.gov.au/training/details/BSB80120) |  |  |
| 6 | `CHC30125` | Certificate III in Early Childhood Education and Care | [Early childhood educator](/careers/early-childhood-educator) | [check](https://training.gov.au/training/details/CHC30125) |  |  |
| 7 | `CHC33021` | Certificate III in Individual Support | [Aged care and disability support worker](/careers/aged-care-and-disability-support-worker) | [check](https://training.gov.au/training/details/CHC33021) |  |  |
| 8 | `CHC40221` | Certificate IV in School Based Education Support | [Education support officer and teacher's aide](/careers/education-support-officer) | [check](https://training.gov.au/training/details/CHC40221) |  |  |
| 9 | `CHC43015` | Certificate IV in Ageing Support | [Aged care and disability support worker](/careers/aged-care-and-disability-support-worker) | [check](https://training.gov.au/training/details/CHC43015) |  |  |
| 10 | `CHC43121` | Certificate IV in Disability Support | [Aged care and disability support worker](/careers/aged-care-and-disability-support-worker) | [check](https://training.gov.au/training/details/CHC43121) |  |  |
| 11 | `CHC43515` | Certificate IV in Mental Health Peer Work | [Mental health support worker](/careers/mental-health-support-worker) | [check](https://training.gov.au/training/details/CHC43515) |  |  |
| 12 | `CHC50125` | Diploma of Early Childhood Education and Care | [Early childhood educator](/careers/early-childhood-educator) | [check](https://training.gov.au/training/details/CHC50125) |  |  |
| 13 | `CHC50221` | Diploma of School Age Education and Care | [Education support officer and teacher's aide](/careers/education-support-officer) | [check](https://training.gov.au/training/details/CHC50221) |  |  |
| 14 | `CHC52025` | Diploma of Community Services | [Community services worker and case manager](/careers/community-services-worker) | [check](https://training.gov.au/training/details/CHC52025) |  |  |
| 15 | `CHC53315` | Diploma of Mental Health | [Mental health support worker](/careers/mental-health-support-worker) | [check](https://training.gov.au/training/details/CHC53315) |  |  |
| 16 | `CPC30220` | Certificate III in Carpentry | [Carpenter](/careers/carpenter) | [check](https://training.gov.au/training/details/CPC30220) |  |  |
| 17 | `CPC30320` | Certificate III in Concreting | [Concreter](/careers/concreter) | [check](https://training.gov.au/training/details/CPC30320) |  |  |
| 18 | `CPC30620` | Certificate III in Painting and Decorating | [Painter and decorator](/careers/painter-and-decorator) | [check](https://training.gov.au/training/details/CPC30620) |  |  |
| 19 | `CPC31020` | Certificate III in Solid Plastering | [Plasterer](/careers/plasterer) | [check](https://training.gov.au/training/details/CPC31020) |  |  |
| 20 | `CPC31320` | Certificate III in Wall and Floor Tiling | [Wall and floor tiler](/careers/wall-and-floor-tiler) | [check](https://training.gov.au/training/details/CPC31320) |  |  |
| 21 | `CPC31920` | Certificate III in Joinery | [Joiner](/careers/joiner) | [check](https://training.gov.au/training/details/CPC31920) |  |  |
| 22 | `CPC32420` | Certificate III in Plumbing | [Plumber](/careers/plumber) | [check](https://training.gov.au/training/details/CPC32420) |  |  |
| 23 | `CPC32620` | Certificate III in Roof Plumbing | [Plumber](/careers/plumber) | [check](https://training.gov.au/training/details/CPC32620) |  |  |
| 24 | `CPC33020` | Certificate III in Bricklaying and Blocklaying | [Bricklayer](/careers/bricklayer) | [check](https://training.gov.au/training/details/CPC33020) |  |  |
| 25 | `CPC40120` | Certificate IV in Building and Construction | [Builder and building supervisor](/careers/builder) | [check](https://training.gov.au/training/details/CPC40120) |  |  |
| 26 | `CPC50220` | Diploma of Building and Construction (Building) | [Builder and building supervisor](/careers/builder) | [check](https://training.gov.au/training/details/CPC50220) |  |  |
| 27 | `CPP20218` | Certificate II in Security Operations | [Security officer and crowd controller](/careers/security-officer) | [check](https://training.gov.au/training/details/CPP20218) |  |  |
| 28 | `HLT54121` | Diploma of Nursing | [Enrolled nurse](/careers/enrolled-nurse) | [check](https://training.gov.au/training/details/HLT54121) |  |  |
| 29 | `MEM30219` | Certificate III in Engineering - Mechanical Trade | [Mechanical fitter](/careers/mechanical-fitter) | [check](https://training.gov.au/training/details/MEM30219) |  |  |
| 30 | `MEM31922` | Certificate III in Engineering - Fabrication Trade | [Metal fabricator and boilermaker](/careers/metal-fabricator) | [check](https://training.gov.au/training/details/MEM31922) |  |  |
| 31 | `MEM60122` | Advanced Diploma of Engineering | [Engineering technician](/careers/engineering-technician) | [check](https://training.gov.au/training/details/MEM60122) |  |  |
| 32 | `MSF30322` | Certificate III in Cabinet Making and Timber Technology | [Cabinet maker](/careers/cabinet-maker) | [check](https://training.gov.au/training/details/MSF30322) |  |  |
| 33 | `MSF30422` | Certificate III in Glass and Glazing | [Glazier](/careers/glazier) | [check](https://training.gov.au/training/details/MSF30422) |  |  |
| 34 | `SIT30622` | Certificate III in Hospitality | [Hospitality and venue manager](/careers/hospitality-manager) | [check](https://training.gov.au/training/details/SIT30622) |  |  |
| 35 | `SIT30821` | Certificate III in Commercial Cookery | [Chef and commercial cook](/careers/chef) | [check](https://training.gov.au/training/details/SIT30821) |  |  |
| 36 | `SIT31021` | Certificate III in Patisserie | [Pastry chef](/careers/pastry-chef) | [check](https://training.gov.au/training/details/SIT31021) |  |  |
| 37 | `SIT40521` | Certificate IV in Kitchen Management | [Chef and commercial cook](/careers/chef) | [check](https://training.gov.au/training/details/SIT40521) |  |  |
| 38 | `SIT40721` | Certificate IV in Patisserie | [Pastry chef](/careers/pastry-chef) | [check](https://training.gov.au/training/details/SIT40721) |  |  |
| 39 | `SIT50422` | Diploma of Hospitality Management | [Hospitality and venue manager](/careers/hospitality-manager) | [check](https://training.gov.au/training/details/SIT50422) |  |  |
| 40 | `SIT60322` | Advanced Diploma of Hospitality Management | [Hospitality and venue manager](/careers/hospitality-manager) | [check](https://training.gov.au/training/details/SIT60322) |  |  |
| 41 | `UEE30820` | Certificate III in Electrotechnology Electrician | [Electrician](/careers/electrician) | [check](https://training.gov.au/training/details/UEE30820) |  |  |
| 42 | `UEE31220` | Certificate III in Instrumentation and Control | [Instrumentation and control technician](/careers/instrumentation-and-control-technician) | [check](https://training.gov.au/training/details/UEE31220) |  |  |
| 43 | `UEE32225` | Certificate III in Air Conditioning and Refrigeration | [Air conditioning and refrigeration technician](/careers/air-conditioning-and-refrigeration-technician) | [check](https://training.gov.au/training/details/UEE32225) |  |  |

_43 codes across 32 career pages._
