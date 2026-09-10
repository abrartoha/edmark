# ASQA remediation log

**Regulator:** Australian Skills Quality Authority (ASQA), Intelligence Team
**Notice received:** 2 September 2026 (tip-off regarding marketing of
nationally recognised training on `edmark.com.au`)
**Response due:** 16 September 2026
**Remediation completed:** 10 September 2026
**Entity:** Edmark Education Pty Ltd, ABN 75 700 341 028 — an education agent,
not a registered training organisation.

---

## 1. What ASQA identified

The website advertised Australian Qualifications Framework qualifications
without identifying the RTO responsible for delivering and issuing each one.
ASQA's finding was that prospective students could not readily determine which
organisation was responsible for the qualifications being promoted.

## 2. What we found on review

The problem was larger than the page ASQA named.

| Location | What it published |
|---|---|
| `/courses/short-courses` and 43 course detail pages | 43 AQF qualifications by title and national code, each with an indicative fee range, a course duration, an intake claim and an English-requirement claim |
| Homepage course matcher (`lib/pathways.ts`) | A further 13 vocational qualifications with indicative annual tuition, duration, entry requirement and intake — **not** on the page ASQA named |
| Course records (12 instances) | The sentence "A nationally recognised trade qualification delivered by a registered training organisation", with no RTO named |
| Course records (43 instances) | "Rolling intakes at most RTOs" |
| Two course titles | AQF titles altered by appending specialisation streams |
| One course | No national code at all |
| Site-wide structured data | `schema.org/EducationalOrganization`, asserting in machine-readable form that Edmark is an educational institution |

Not found, and therefore not an issue: the Nationally Recognised Training (NRT)
logo does not appear anywhere in the codebase or in `/public`. There was no
`schema.org/Course` structured data on any page.

## 3. The decision

ASQA asked us to identify the RTO name and code for each qualification. **We
could not.** Edmark holds no written marketing agreement with any RTO, and
naming a provider we have no agreement with would be a more serious breach than
naming none.

So we stopped marketing nationally recognised training altogether.

The 43 course pages were **replaced with 32 career pages**. The subject of the
page changed from the qualification to the occupation:

- **Marketing a training product** — presenting a qualification as something on
  offer, with a price, a duration, an intake, an entry requirement, or an
  invitation to apply or enrol. This triggers the RTO-identification
  obligation. We no longer do it.
- **Careers information** — explaining an occupation and stating as a matter of
  fact which qualification is the usual entry pathway, linked to the national
  register. Naming an AQF code as a fact is not advertising it.

A disclaimer on a course page was considered and rejected. The page would still
have led with a qualification title and code, still quoted a fee and a
duration, and still invited an application. Only the substance changing fixes
the finding.

## 4. What changed, file by file

### Content and data

| File | Change |
|---|---|
| `lib/careers.ts` | **New.** 32 occupations, referencing all 43 national codes. Carries no fee, duration, intake, English requirement, entry requirement or provider name. Absent facts are omitted, not set to placeholder values |
| `lib/vet-courses.ts` | **Deleted.** Held the 43 course records with all the claims above |
| `lib/pathways.ts` | 13 vocational entries converted to career pointers; fee, duration, entry requirement and intake removed. Two duplicates dropped. Higher-education entries unchanged |
| `lib/content.ts` | VET service copy rewritten from delivery verbs ("we cover", "before you enrol") to advice verbs ("we help you compare"). Now states Edmark is not an RTO |
| `lib/course-catalog.ts` | Vocational qualifications removed from the course catalogue |
| `lib/site.ts` | Navigation: "Vocational (VET) & short courses" → "Careers & pathways", pointing at `/careers` |
| `lib/compliance.ts` | Added `AGENT_ROLE_DISCLOSURE` |

### Pages and components

| File | Change |
|---|---|
| `app/careers/page.tsx` | **New.** Careers index. Occupation cards only — no codes, no fees |
| `app/careers/[slug]/page.tsx` | **New.** Career page. `h1` is the occupation; no national code in the `h1`, slug, `<title>` or meta description |
| `components/QualificationPathway.tsx` | **New.** The single place a national code appears, low on the page, as a factual statement linked to training.gov.au |
| `components/CareerCard.tsx` | **New.** Job title and one line only |
| `components/CourseMatcher.tsx` | Vocational results render as occupations with no commercial detail |
| `components/Footer.tsx` | Role disclosure added site-wide, in body copy above the copyright rule |
| `components/NotificationBar.tsx` | Site-wide banner no longer announces an intake |
| `app/courses/short-courses/` | **Deleted** |
| `app/layout.tsx` | `EducationalOrganization` → `Organization` in structured data |

### Routing

| File | Change |
|---|---|
| `next.config.mjs` | 44 permanent (301) redirects: each retired course URL to the career page that replaced it, and `/courses/short-courses` → `/careers`. Verified: all 43 return 308→301 to the correct target |
| `app/sitemap.ts` | Career pages listed; retired course URLs removed. Verified: 33 career URLs present, 0 retired URLs |

### Out of scope, deliberately unchanged

The ~55 higher-education course pages. Those relate to universities and
colleges Edmark has genuine relationships with, and sit under TEQSA and the
ESOS framework rather than under ASQA. They remain courses. The resulting split
is intentional: `/courses/` is what we place students into; `/careers/` is
information about occupations.

## 5. The control that prevents recurrence

**`scripts/verify-careers.ts`, run by `npm run verify:careers` and wired into
`npm run build`.** The build fails — it does not warn — if any career page or
its data contains:

- a fee or currency amount
- a course duration
- an intake claim
- an English test score requirement
- an entry requirement claim
- an "apply" or "enrol" call to action
- an RTO, provider or CRICOS reference
- a national training code in the `h1`, the slug or the page title
- a labour-market claim without a named source

Each rule reports why it exists, so it reads as a compliance boundary rather
than a lint rule to be silenced.

The guard has been negative-tested: five deliberate violations were injected
across four career records and all six resulting problems were caught, with
exit code 1. On clean data it exits 0.

This is the substantive difference from a wording fix. Wording drifts back
during a redesign or a copy edit. A failing build does not.

## 6. Outstanding — requires Edmark, not the developer

1. **Training code verification.** All 43 codes carry `codeStatus:
   "unverified"`. `docs/code-verification.md` lists every code with a link to
   the register and a blank status column. Nothing guesses whether a code is
   current.
2. **CHC43015** (Certificate IV in Ageing Support) had no national code on the
   site at all. The code was supplied by Edmark and is unverified — check this
   one first.
3. **CHC33021 and CHC52025** had altered titles ("(Ageing and Disability)",
   "(Case Management, Child, Youth and Family Welfare)"). They now carry the
   plain title; confirm against the register.
4. **Job outlook is absent from all 32 pages.** No salary or employment figure
   has been published, because none has been sourced. Any figure added later
   must cite Jobs and Skills Australia or the ABS; the guard rejects an
   unsourced one.
5. **Licensing statements** name the responsible authority and tell the reader
   to confirm current requirements at the source. They should be reviewed by
   Edmark for accuracy in each state before the ASQA response is sent.

## 7. Evidence

`docs/evidence/before/` and `docs/evidence/after/` — full-page captures of
`/courses/short-courses`, three representative course detail pages, and the
homepage course matcher, taken 10 September 2026 immediately before and after
the change.

Captured with reduced motion enabled so that every section renders at full
opacity in a single full-page capture; the site uses CSS scroll-driven reveal
animations, which otherwise leave un-scrolled sections transparent in an
automated screenshot.

---

# Round 2 — site-wide compliance

**Completed:** 11 September 2026
**Trigger:** internal review following the ASQA notice of 2 September 2026,
which found the same underlying defect outside the VET pages — confident
factual claims with no named source and no review date.

## 1. What the review found

| Area | Defect |
|---|---|
| `/study-in-australia` | Minimum wage published as "$24.10 AUD/hour (2026)" — the rate from 1 July **2024** |
| `/faq` | "Over 50 institutions" against 27 listed on `/partners` |
| `/partners` | "Every university, TAFE and college on this page is a direct partner", "your application goes straight to an admissions team that already knows us", "an open line to admissions teams", "priority assessment", "exclusive scholarships not publicly advertised" — none of it evidenced |
| `/partners`, homepage | 33 institution logos displayed with no written licence |
| Higher education | 53 courses with per-semester fees, durations and entry requirements; no delivering provider named, no CRICOS code — the same defect ASQA cited for VET |
| Testimonials | 5 identifiable students named with course, institution and outcome; no signed consent for any |
| Homepage matcher, blog, `/scholarships`, `/study-in-australia` | ~40 further figures — living costs, tuition ranges, scholarship amounts, RTP stipends — none sourced, none dated |
| `/privacy` | No reference to the *Privacy Act 1988* (Cth), no APP 8 section, no OAIC path, no named privacy role |
| `/complaints` | No external escalation of any kind |
| Both forms | Personal information collected with no consent checkbox and no link to the policy |
| `/how-were-paid` | Said institutions pay Edmark directly; in most cases commission arrives through a partner agency |

## 2. The control

**`scripts/verify-facts.ts`**, run by `npm run verify:facts` and wired into
`npm run build` alongside the Part 1 careers guard. The build **fails** when:

- a published figure has no source, no source URL, or a malformed date
- a figure has not been verified in **6 months**
- a higher-education course renders a fee without `providerLegalName`,
  `cricosProviderCode`, `feeSource` and `lastVerified`

Every figure the site publishes now lives in `lib/facts.ts` as a `SourcedFact`:
value, publisher, URL, the date it took effect, and the date a human last
checked it. Nothing is typed into a paragraph. The build prints how many
higher-education courses are attributed, so that number cannot drift quietly.

Negative-tested before wiring in: a blanked source and a back-dated
`lastVerified` both produce findings and exit code 1; clean data exits 0.

## 3. What changed

**Corrected** — minimum wage to $26.44 from 1 July 2026 (Fair Work Ombudsman).
Institution count derived from the partners list, so claim and list cannot
diverge.

**Deleted rather than softened** — the direct-partnership and special-access
claims; the 485 visa "2 to 4 years" (no stream named, flagged for
verification); scholarship ranges with no source; thirteen named universities'
scholarship amounts; RTP stipend rates; sector-wide tuition ranges; a per-city
living-cost table of twenty figures quoted to the dollar from nowhere. Where
the information is useful, pages now point at the government source that
maintains it.

**Gated behind a flag, off by default** — institution logos
(`logoLicensed: false` on all 33) and testimonials (`consentOnFile: false` on
all 5). Both are set by hand against a document. Nothing in the build sets
either.

**Two-mode rendering** for the 53 higher-education courses, matching Part 1:
attributed shows the full page with "Delivered by {provider} · CRICOS provider
code {code}" above the fold; unattributed — all 53 today — shows no fee, no
duration and no entry requirement. The gate is on the course card as well as
the page; a fee was leaking through the related-courses strip until that was
caught.

**Institution relationships** — the site states that they are direct and
sub-partnered, and says no more than that. Which arrangement applies to which
institution is recorded in the data and not published: a student's outcome does
not turn on it, and what matters on the page is that Edmark is the agent and
the institution named on the offer is the provider.

**Legal** — `/privacy` gains the *Privacy Act 1988* (Cth), a sensitive
information section under APP 3, an APP 8 overseas disclosure section, the OAIC
escalation path and a named Privacy Officer. `/complaints` gains the Overseas
Students Ombudsman, the OAIC and Consumer Affairs Victoria, and states that a
student need not exhaust Edmark's process first. Both forms gain a consent
checkbox linking to the policy, with a separate express tick for health
information.

**Site-wide footer** now reads: not a registered training organisation, not an
education provider, not a registered migration agent. Verified on all 120
pages.

## 4. Outstanding — requires Edmark

1. **Overseas disclosure specifics** in `/privacy` — the countries where
   hosting, email and records sit, and any offshore party receiving student
   information. Tracked in a source comment above the document in
   `lib/legal.ts`, deliberately not in the published policy: a policy that
   prints its own unfinished business tells a reader it is unfinished.
2. **OSHC commission** — whether Edmark receives any benefit for arranging
   cover. Marked TODO in `/how-were-paid`; deliberately not asserted either way.
3. **485 visa period** — verify against Home Affairs and name the stream.
4. **Provider attribution** for the 53 higher-education courses. Until then
   they publish no commercial detail.
5. **Logo licences and testimonial consents** — 33 and 5 documents respectively.
6. **The OSHC price range** ($500–$700) is attributed to Edmark's own review of
   policies on the government comparison site, because no government body
   publishes a range. Replace with a provider citation if one exists.
7. **"1,200+ students" and "5+ years"** were left as they are, per instruction.
   They are Edmark's own claims and would need a basis if challenged.
