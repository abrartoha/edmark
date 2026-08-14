import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { IconCheck, IconArrow } from "@/components/Icons";
import ServiceIcon from "@/components/ServiceIcon";
import CourseBrowser from "@/components/CourseBrowser";
import { VET_FEE_BANDS, VET_FIELD_ORDER } from "@/lib/higher-education";
import { INDICATIVE_NOTICE } from "@/lib/compliance";
import type { Course } from "@/lib/higher-education";

const serviceExtras: Record<
  string,
  {
    whoFor: string[];
    whatToExpect: string[];
    extended: string;
    /** Optional. When present the page renders a course list. */
    courses?: Course[];
  }
> = {
  "student-counselling": {
    extended:
      "Choosing what and where to study is one of the biggest decisions you'll make, and it shouldn't be rushed or based on incomplete information. Our student counselling sessions are designed to give you clarity. We explore your academic history, career aspirations, budget and personal circumstances to build a realistic, personalised study plan.\n\nUnlike agents who push whichever institution pays the most, we recommend what's genuinely right for you. That's why most of our students come to us through referrals.",
    whoFor: [
      "High school leavers unsure which course to pursue",
      "Working professionals looking to upskill or change careers",
      "International students exploring Australian education options",
      "Parents seeking guidance for their children's education",
    ],
    whatToExpect: [
      "A relaxed conversation, in person or online",
      "An honest assessment of your options based on your profile",
      "A personalised shortlist of courses and institutions",
      "Clear next steps and a timeline for your journey",
    ],
  },
  "pr-pathway-courses": {
    extended:
      "For many students, studying in Australia is also the first step toward permanent residency. But the course you choose matters. Qualifications tied to occupations in demand can strengthen your skilled migration profile, while others may not count toward it at all.\n\nWe help you understand how course choice, location and level of study interact with the skilled occupation lists and points test, so your study decision supports your long-term goals. Important: migration rules change often, and formal, personalised migration advice must come from a registered migration agent (MARA), whom we can connect you with.",
    whoFor: [
      "Students who want their study to support a residency pathway",
      "Graduates considering further study to improve their prospects",
      "Applicants weighing regional versus metropolitan study",
      "Anyone confused by skilled occupation lists and points",
    ],
    whatToExpect: [
      "A review of your goals and current profile",
      "Course and location options aligned to in-demand occupations",
      "An overview of how study choices can affect your points",
      "Referral to a registered migration agent for formal advice",
    ],
  },
  "application-support": {
    extended:
      "Applications are lost on detail far more often than on grades: a missing transcript page, an English result that expired last month, a course code that changed between intakes. We build your document set against each institution's own criteria, submit to several providers in parallel so you are never waiting on a single answer, and chase admissions on your behalf until decisions land.\n\nOnce offers arrive we go through them with you honestly, including the ones we think you should turn down, then handle acceptance, tuition payment and your Confirmation of Enrolment (CoE). We also prepare you for the Genuine Student (GS) requirement, which replaced the Genuine Temporary Entrant test in March 2024 and asks targeted questions, 150 words or fewer each, about why this course, why now, and how it fits your career.",
    whoFor: [
      "Students applying to more than one institution at once",
      "Anyone who has had an application delayed or knocked back",
      "Applicants unsure how to answer the Genuine Student questions",
      "Students transferring between providers or courses",
    ],
    whatToExpect: [
      "A document checklist tailored to each provider",
      "Applications lodged in parallel, not one at a time",
      "Draft review of your Genuine Student responses",
      "A plain comparison of every offer you receive",
      "Acceptance, payment and CoE handled end to end",
    ],
  },
  "health-insurance": {
    extended:
      "Overseas Student Health Cover (OSHC) is a mandatory requirement for your student visa. You must hold valid cover for the entire length of your stay. Choosing the right policy protects both your visa status and your health while you study.\n\nWe make it simple. We compare the major OSHC providers, explain what's covered, and help you arrange single, couple or family cover that matches your visa dates and enrolment. If you ever need to make a claim or renew, we're here to help.",
    whoFor: [
      "New international students applying for a student visa",
      "Students bringing a partner or family to Australia",
      "Anyone renewing or extending their existing cover",
      "Students unsure which provider or level of cover to choose",
    ],
    whatToExpect: [
      "A comparison of OSHC providers and levels of cover",
      "The right policy for your visa and CoE dates",
      "Help arranging single, couple or family cover",
      "Guidance on claims, extensions and renewals",
    ],
  },
  "research-degrees": {
    extended:
      "Research degrees such as Masters by Research and PhDs are fundamentally different from coursework programs. There are no set classes or assignments. Instead, you work closely with a supervisor on an original research project that contributes new knowledge to your field. Getting accepted requires a completely different application strategy.\n\nUniversities don't just look at your grades. They want a well-defined research proposal, evidence of research capability, and a clear alignment between your interests and the expertise of their academic staff. Most importantly, you often need a supervisor willing to take you on before you even submit your formal application.\n\nThis is where most applicants struggle, with generic proposals, vague supervisor emails, or applications sent without understanding what the research group needs. We help you navigate the process, from identifying the right research group to crafting a proposal that gets accepted at leading Australian universities.",
    whoFor: [
      "Graduates wanting to pursue a Masters by Research in Australia",
      "PhD applicants looking for supervisor matches",
      "Researchers needing help writing or refining a research proposal",
      "Honours graduates considering the transition to a research career",
    ],
    whatToExpect: [
      "A detailed assessment of your research background and interests",
      "Supervisor search and shortlisting across Australian universities",
      "Research proposal drafting, structuring and review",
      "Academic CV support and research scholarship guidance",
    ],
  },
  "pte-naati-py": {
    extended:
      "English proficiency, community-language credentials and Australian work experience can each add valuable points toward skilled migration. PTE Academic is one of the most widely accepted English tests, the NAATI CCL test rewards applicants who speak an eligible community language, and the Professional Year Program (PYP) provides supervised local work experience for graduates in accounting, IT and engineering.\n\nWe help you understand which tests and programs apply to you, what scores to aim for, and how to prepare, including practice resources, test strategy, booking support, and enrolment into an approved Professional Year provider.",
    whoFor: [
      "Students needing an English test for a visa or admission",
      "Skilled migration applicants seeking extra points",
      "Bilingual applicants eligible for the NAATI CCL test",
      "Accounting, IT and engineering graduates considering a Professional Year",
    ],
    whatToExpect: [
      "Advice on the right test and target score for your goal",
      "PTE Academic preparation and booking support",
      "NAATI CCL guidance and study resources",
      "Professional Year Program eligibility and provider selection",
    ],
  },
  "professional-year": {
    extended:
      "The Professional Year Program runs 44 weeks and pairs classroom learning in Australian workplace practice with a 12-week internship at a host company in your field. For many graduates the internship matters more than the points: it is often the first line of local experience on an Australian resume.\n\nCompleted with an approved provider in an area related to your nominated occupation, it is worth 5 points in the skilled migration points test. You will generally need a Temporary Graduate (subclass 485) visa and an Australian bachelor degree or higher in accounting, IT or engineering, recognised by the body governing your stream: ACS, CPA Australia or CA ANZ, or Engineers Australia. Since the program takes about a year, start it at least 12 months before your 485 expires.\n\nOne caution we would rather give up front: a Professional Year does not on its own deliver permanent residency. It sits alongside your occupation, English score, work experience and skills assessment, and those settings change. We help you choose a provider and time your enrolment, then refer you to a registered migration agent (MARA) for formal advice.",
    whoFor: [
      "Accounting, IT and engineering graduates of Australian degrees",
      "Temporary Graduate (485) visa holders planning their next step",
      "Graduates with no Australian work experience yet",
      "Anyone weighing 5 points against a year of study",
    ],
    whatToExpect: [
      "An eligibility check against your degree and visa",
      "Provider comparison across the three streams",
      "Timing advice so the program fits inside your 485",
      "Enrolment support and document preparation",
      "Referral to a MARA agent for formal migration advice",
    ],
  },
  "short-courses": {
    courses: [
      {
        name: "Certificate III in Carpentry (CPC30220)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. Setting out, building, assembling and installing structures on residential and commercial sites.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Plumbing (CPC32420)",
        duration: "3 to 4 years, including on-the-job training",
        tuitionMin: 14000,
        tuitionMax: 22000,
        entryRequirement:
          "Year 12 or equivalent. Plumbing is a licensed trade, and licensing is regulated state by state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Electrotechnology Electrician (UEE30820)",
        duration: "3 to 4 years, including on-the-job training",
        tuitionMin: 14000,
        tuitionMax: 22000,
        entryRequirement:
          "Year 12 or equivalent. The pathway to an electrical licence, which is regulated separately in each state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Light Vehicle Mechanical Technology (AUR30620)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. Diagnosing, servicing and repairing light vehicles.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Automotive",
      },
      {
        name: "Certificate III in Commercial Cookery (SIT30821)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 18000,
        entryRequirement:
          "Year 12 or equivalent. Includes supervised commercial kitchen service hours.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Diploma of Hospitality Management (SIT50422)",
        duration: "12 to 18 months",
        tuitionMin: 16000,
        tuitionMax: 26000,
        entryRequirement:
          "Year 12 or equivalent, or a Certificate III in a hospitality field for credit.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Multiple intakes a year at most providers",
        field: "Hospitality & Cookery",
      },
      {
        name: "Diploma of Nursing (HLT54121)",
        duration: "18 months to 2 years",
        tuitionMin: 18000,
        tuitionMax: 28000,
        entryRequirement:
          "Year 12 or equivalent. Leads to AHPRA registration as an Enrolled Nurse.",
        englishRequirement:
          "IELTS Academic 7.0 with 7.0 in every band, set by AHPRA for registration rather than by the provider.",
        nextIntake: "February and July, with extra intakes at some RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Certificate II in Security Operations (CPP20218)",
        duration: "2 to 4 weeks full time",
        tuitionMin: 1000,
        tuitionMax: 1800,
        tuitionBasis: "for the full course",
        entryRequirement:
          "Over 18 with current work rights. In Victoria the licence is issued by Victoria Police, and its Licensing and Regulation Division only recognises training completed by overseas students where the course is both delivered by an approved RTO and CRICOS registered. Confirm CRICOS registration before you enrol, because training that is not registered will not count toward a licence. Your visa work-hour limit still applies once you are licensed.",
        englishRequirement: "Provider placement test, commonly around IELTS 5.5.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Security",
      },
      {
        name: "Certificate III in Individual Support (Ageing)",
        duration: "6 to 12 months",
        tuitionMin: 8000,
        tuitionMax: 15000,
        entryRequirement:
          "Year 12 or equivalent. Police check and supervised placement hours are required.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Certificate IV in Ageing Support",
        duration: "12 months",
        tuitionMin: 10000,
        tuitionMax: 18000,
        entryRequirement:
          "Usually follows a Certificate III in Individual Support and leads to team leader and coordinator roles.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Certificate III in Early Childhood Education and Care",
        duration: "6 to 12 months",
        tuitionMin: 8000,
        tuitionMax: 15000,
        entryRequirement:
          "Year 12 or equivalent. Working with Children Check and placement hours are required.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Early Childhood Education",
      },
      {
        name: "Diploma of Early Childhood Education and Care",
        duration: "18 months to 2 years",
        tuitionMin: 16000,
        tuitionMax: 26000,
        entryRequirement:
          "Year 12 or equivalent. Qualifies you as a lead educator or room leader.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Multiple intakes a year at most providers",
        field: "Early Childhood Education",
      },
    ],
    extended:
      "Short vocational (VET) courses are one of the fastest, most affordable ways to gain nationally recognised, job-ready skills. Whether you want to start working sooner or add a practical qualification, these courses open doors in high-demand industries.\n\nWe help you choose the right course and provider in popular areas such as Security, Aged Care and Child Care, and connect you with quality registered training organisations (RTOs) so your qualification is recognised and respected by employers.",
    whoFor: [
      "People wanting job-ready skills quickly",
      "Students seeking an affordable, practical qualification",
      "Anyone entering security, aged care or child care",
      "Workers looking to upskill or change fields",
    ],
    whatToExpect: [
      "Help choosing the right short course for your goal",
      "Matching to a quality registered training organisation (RTO)",
      "Guidance on licensing and certification requirements",
      "Enrolment support from start to finish",
    ],
  },
};

export function generateStaticParams() {
  // pr-pathway-courses has its own folder route with sub-pages, and
  // research-degrees redirects to the fuller /research-degrees page.
  return services
    .filter(
      (s) => s.slug !== "pr-pathway-courses" && s.slug !== "research-degrees"
    )
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} Free consultation with Edmark Education, Australia's trusted education consultancy.`,
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const extras = serviceExtras[params.slug];
  const otherServices = services.filter((s) => s.slug !== params.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.long,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "AU",
    serviceType: "Education Consulting",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* service.short is a sentence and service.long runs to several
          paragraphs, so using them as the heading and subheading pushed the
          content far down the page. The title is the page name, the subtitle
          is the one-line summary, and the long copy stays where it belongs:
          in the body below, and as the meta description. */}
      <PageHero
        eyebrow="Services"
        title={service.title}
        subtitle={service.short}
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Courses lead the page where a service has them, so clicking through
          to VET lands on the list and its filters rather than on service copy.
          The explanatory sections follow underneath. */}
      {extras?.courses && (
        <section className="border-b border-line bg-paper py-12 lg:py-16">
          <div className="container-page">
            <p className="eyebrow">Courses</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              What you can study
            </h2>
            {/* Same browser as higher education, configured for vocational
                study: trade study areas, annual fee tiers rather than per
                semester, and no Level group since VET has none. */}
            <CourseBrowser
              courses={extras.courses.map((c) => ({
                ...c,
                levelSlug: "",
                levelTitle: "",
              }))}
              fieldOrder={VET_FIELD_ORDER}
              feeBands={VET_FEE_BANDS}
              feeLegend="Budget per year"
            />
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-sage">
              {INDICATIVE_NOTICE}
            </p>
          </div>
        </section>
      )}

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-brand-500">
              <ServiceIcon name={service.icon} className="h-9 w-9" />
            </div>
            <h2 className="mt-6 text-3xl font-medium text-brand-900">
              {service.title}
            </h2>
            {extras?.extended.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="mt-4 text-brand-900/70 leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
              <h3 className="text-lg font-medium text-brand-900">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3">
                {service.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm font-medium text-brand-800"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {extras && (
              <>
                <div className="card">
                  <h3 className="text-lg font-medium text-brand-900">
                    Who is this for?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {extras.whoFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-900/70"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-medium text-brand-900">
                    What to expect
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {extras.whatToExpect.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-900/70"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950 text-xs font-medium">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </div>
        </div>

      </section>

      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-center text-2xl font-medium text-brand-900">
            Explore our other services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-hover group flex items-start gap-4"
              >
                <div className="shrink-0 text-brand-500">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-900 group-hover:text-brand-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-900/60 line-clamp-2">
                    {s.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
