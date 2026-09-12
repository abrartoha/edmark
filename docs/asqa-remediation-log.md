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

**Gated behind a flag** — institution logos and testimonials
(`consentOnFile: false` on all 5, none rendering). Both are set by hand, never
by a script.

Logos were initially turned off on all 32 institutions and were **turned back
on at Edmark's direction on 11 September 2026**. A logo is a trade mark and
displaying one implies a relationship and an endorsement, so the written
permissions belong on file per institution. Recorded here because the decision
was Edmark's, not the developer's. The per-institution flag remains, so any
single logo can be withdrawn without touching a component.

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


---

## Note on how the guards run (11 September 2026)

The guards block a deploy when they find a violation. They do **not** block a
deploy when they cannot run.

That distinction was learned the hard way. The guards are TypeScript executed
directly by Node, which needs Node 22.6 or newer. Wired straight into the build
command, a host on an older Node fails the guard, fails the build, and deploys
nothing — with no symptom except a site that stops updating. Nine commits of
this remediation sat on the main branch, pushed and passing locally, while
production served a build from before any of it.

`scripts/verify.mjs` now separates the two cases: a finding fails the build,
an environment failure warns loudly in the build log and lets the site ship.

Enforcement therefore lives in CI rather than in the deploy build:
`.github/workflows/verify.yml` runs both guards on a pinned Node 22 on every
push to main, with no tolerance. That is also the audit trail — a recorded pass
or fail against these checks for every commit, which is what makes the control
demonstrable rather than merely asserted.


---

# Round 3 — higher education follows the same path (11 September 2026)

The 53 higher-education course pages are retired and replaced by career pages,
on Edmark's instruction, for the reason that applied to the vocational ones: a
page built around a qualification Edmark neither delivers nor issues is
somebody else's product being marketed without the provider named. The
occupation is Edmark's to write about. The course is not.

- 53 courses map onto 27 occupations. 23 career pages are new; 4 existing ones
  (business administrator, early childhood educator, community services worker,
  hospitality manager) gained degree pathways alongside their vocational ones.
- The pathway model now carries both registers. A vocational qualification
  points at training.gov.au with its national code; a degree points at the
  CRICOS register, which is where a reader finds the institutions registered to
  deliver it to international students.
- 56 permanent redirects: every retired course URL to the career page that
  replaced it, plus the higher-education hub and its two level pages. Verified,
  all 56.
- `/courses/` now holds research degrees only. The course browser, course card
  and course catalogue are deleted.
- No fee, duration, intake or entry requirement appears on any of the 55 career
  pages, and verify:careers enforces that across all 96 qualifications.

The careers are presented in two lists, matching the navigation: higher
education (27 occupations) and vocational education (32). The split is derived
from each career's pathways rather than stored on the record, so the lists
cannot drift from the qualifications they cover. Four careers appear in both,
which is the point of organising by occupation: an early childhood educator is
the same job whether a Certificate III or a Master of Teaching got them there.
The retired hubs redirect to the matching half rather than to the mixed list.

Institution logos were turned back on across all 32 partners at Edmark's
direction the same day; see the note in Round 2.


---

## Change of position: the agent-role statement (11 September 2026)

The statement that Edmark is an education agent and is not a registered
training organisation, an education provider or a registered migration agent
has been **removed from the site footer and from the career pages**, at
Edmark's direction.

It had appeared three times on a career page — in the "How Edmark helps" panel,
at the foot of the qualification pathway section, and in the site-wide footer.
The duplication was raised, along with the option of keeping one instance;
Edmark chose to remove all three.

Recorded here because this log describes the response to the ASQA notice of
2 September 2026, and a log that describes a control the site no longer has
would be worse than the removal itself.

**What still addresses the ASQA finding.** The notice was that a reader could
not readily identify the organisation responsible for delivering and issuing
each qualification. That is answered by the structure of the pages rather than
by this statement, and the structure is unchanged:

- No page advertises a training product. No fee, duration, intake, entry
  requirement or English requirement appears on any of the 55 career pages, and
  `verify:careers` fails the build if one reappears.
- Each qualification is named as a fact and linked to its register —
  training.gov.au for vocational qualifications, CRICOS for higher education —
  so a reader can identify the organisations approved to deliver it.
- No provider is named anywhere as being in a relationship with Edmark that is
  not evidenced.

**What no longer appears anywhere on the site.** A plain statement that Edmark
does not deliver training or issue qualifications. Three pages still describe
the agent role in passing — `/services`, `/partners` and `/complaints` — but
none of them is a site-wide disclosure, and a reader landing on a career page
from search will not see one.

## Higher-education course section restored, with indicative detail (13 September 2026)

At Edmark's direction:

- The higher-education course section (`/courses/higher-education`, its level
  pages and all 53 course pages) is back, replacing the higher-education career
  conversion from Round 3. Vocational qualifications remain career pages and
  their old course URLs still 301 to them.
- Typical duration, indicative tuition, entry requirement, English requirement
  and next intake show again on every higher-education course page and card.
  None of the 53 names a provider. Each page carries `INDICATIVE_NOTICE` beside
  the figures, and the listing pages carry it beside the grid.
- This reverses the Round 2 rule that no fee, duration or entry requirement
  appears without a named provider and a fee source. The risk was raised before
  the change: the ASQA response is due 16 September 2026, and a reviewer may
  read an unattributed fee as advertising. Edmark accepted it.
- `verify:facts` still fails a course that names a provider without the CRICOS
  code, fee source and check date.

Partners: "Private colleges & pathway providers" and "TAFE & polytechnic
partners" merged into one group, "Private Colleges, TAFE and Polytechnic
Partners". Macquarie University and University of Canberra added; both show
their names until logo files are supplied.

Also at Edmark's direction, 13 September 2026:

- Higher education careers retired. `/careers/higher-education` and the 23
  careers reached only through a degree 301 to `/courses/higher-education`.
  The 32 careers with a vocational qualification remain.
- The `/how-were-paid` page removed and 301'd to the homepage. The commission
  disclosure remains as a section on the homepage.
- About page hero photograph replaced with a campus photograph of students.
- Tuition and next intake removed from every higher-education course page and
  card. Duration, entry requirement and English requirement remain, beside
  `INDICATIVE_NOTICE`. The course browser no longer filters by budget, intake
  or IELTS/PTE score; its study-area filter is renamed "Sector of study".
- Homepage "What we do" section moved above the partner carousel and course
  matcher.
