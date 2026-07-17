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

const serviceExtras: Record<
  string,
  { whoFor: string[]; whatToExpect: string[]; extended: string }
> = {
  "free-career-counselling": {
    extended:
      "Choosing a course is one of the biggest decisions of your life — and it shouldn't be rushed or based on incomplete information. Our free career counselling sessions are designed to give you clarity. We'll explore your academic history, your career aspirations, your personal circumstances and your budget to build a realistic, personalised study roadmap.\n\nUnlike other agents who push whichever institution pays the most, we recommend what's genuinely right for you. That's why students trust us — and why most of our business comes from referrals.",
    whoFor: [
      "High school leavers unsure which degree to pursue",
      "Working professionals looking to upskill or change careers",
      "International students exploring Australian education options",
      "Parents wanting guidance for their children's education",
    ],
    whatToExpect: [
      "A relaxed 30-minute conversation (in person or online)",
      "An honest assessment of your options based on your profile",
      "A personalised shortlist of courses and institutions",
      "Clear next steps and a timeline for your journey",
    ],
  },
  "university-course-selection": {
    extended:
      "Australia has over 40 universities and more than 22,000 courses. Without expert guidance, it's easy to choose the wrong course, the wrong campus, or miss a better option entirely. We cut through the noise by matching you with the programs where you'll actually thrive.\n\nOur partnerships with leading Australian institutions give us insider knowledge of entry requirements, course outcomes and campus culture. We don't just match you to a course — we match you to the right career path.",
    whoFor: [
      "Students who feel overwhelmed by too many options",
      "Anyone unsure whether to pursue university or TAFE",
      "Students wanting to study at a Group of Eight university",
      "Career changers looking for the best return on investment",
    ],
    whatToExpect: [
      "A detailed profile assessment covering academics, goals and budget",
      "A curated shortlist of 3–5 best-fit programs",
      "Comparison of course outcomes, fees and campus locations",
      "Guidance on entry requirements and how to strengthen your application",
    ],
  },
  "admission-application": {
    extended:
      "The application process for Australian institutions involves multiple documents, strict deadlines and specific formatting requirements. A single mistake can delay your offer by months — or result in a rejection. We take the stress out of the entire process.\n\nOur team reviews every document, crafts compelling personal statements, and submits your application on time. We follow up with institutions on your behalf and keep you informed at every step.",
    whoFor: [
      "Students applying to multiple institutions simultaneously",
      "Anyone unfamiliar with Australian application processes",
      "Students who want professional help with personal statements",
      "Applicants who need document certification and translation",
    ],
    whatToExpect: [
      "Complete application preparation and document review",
      "Professional statement of purpose and CV writing support",
      "Submission management and deadline tracking",
      "Regular updates on application status and next steps",
    ],
  },
  "scholarship-guidance": {
    extended:
      "Thousands of dollars in scholarships go unclaimed every year simply because students don't know they exist or don't know how to apply. Our scholarship specialists identify every grant, discount and merit-based award you qualify for and help you present the strongest possible application.\n\nWe've helped students save anywhere from $2,000 to $40,000 on their education. Whether you're looking for merit-based, need-based or government-funded scholarships, we know where to look and how to win.",
    whoFor: [
      "Students with strong academic records seeking merit scholarships",
      "Students from developing countries eligible for government awards",
      "Anyone who wants to reduce their tuition costs",
      "Students unsure which scholarships they qualify for",
    ],
    whatToExpect: [
      "A comprehensive scholarship eligibility screening",
      "A shortlist of all scholarships you can apply for",
      "Essay and application writing support",
      "Fee structure and payment plan advice",
    ],
  },
  "pre-departure-support": {
    extended:
      "Getting your offer letter is exciting — but it's also when the practical challenges begin. Where will you live? How do you set up a bank account? What health insurance do you need? How do you get from the airport to your accommodation on day one?\n\nWe've helped hundreds of students prepare for life in Australia, and we know exactly what you need to do before you fly. Our pre-departure support covers everything from accommodation and insurance to cultural tips and first-week essentials.",
    whoFor: [
      "First-time international students moving to Australia",
      "Students who want help finding accommodation",
      "Anyone unsure about health insurance and banking requirements",
      "Parents who want to know their child is fully prepared",
    ],
    whatToExpect: [
      "Accommodation options and cost comparisons for your city",
      "OSHC (Overseas Student Health Cover) setup and provider guidance",
      "Banking and SIM card setup advice",
      "A comprehensive pre-departure checklist and orientation brief",
    ],
  },
  "ongoing-student-support": {
    extended:
      "Your relationship with Edmark doesn't end when you enrol. Throughout your studies, you'll have access to a dedicated advisor who can help with course changes, progression planning, and any challenges you face along the way.\n\nWhether you need to transfer courses, extend your program, or start planning your next qualification after graduation, we're just a call or message away. Your success is our reputation — and we take that seriously.",
    whoFor: [
      "Currently enrolled students needing course change advice",
      "Students considering extending or upgrading their program",
      "Graduates planning further study or career transitions",
      "Anyone who wants a trusted advisor throughout their journey",
    ],
    whatToExpect: [
      "Responsive support via phone, email or WhatsApp",
      "Course transfer and credit assessment guidance",
      "Academic progression and pathway planning",
      "Career advice and post-graduation options",
    ],
  },
  "research-degree-support": {
    extended:
      "Research degrees — Masters by Research and PhDs — are fundamentally different from coursework programs. There are no set classes or assignments. Instead, you work closely with a supervisor on an original research project that contributes new knowledge to your field. Getting accepted requires a completely different application strategy.\n\nUniversities don't just look at your grades. They want to see a well-defined research proposal, evidence of research capability (publications, conference presentations, or a strong honours thesis), and a clear alignment between your research interests and the expertise of their academic staff. Most importantly, you need a supervisor who is willing to take you on — and that relationship often needs to be established before you even submit your formal application.\n\nThis is where most applicants struggle. They write generic proposals, contact supervisors with vague emails, or apply to programs without understanding what the research group actually needs. We've helped dozens of students navigate this process successfully — from identifying the right research group to crafting proposals that get accepted at Group of Eight universities.",
    whoFor: [
      "Graduates wanting to pursue a Masters by Research in Australia",
      "PhD applicants looking for supervisor matches at Australian universities",
      "Researchers needing help writing or refining their research proposal",
      "International academics seeking research positions in Australia",
      "Honours graduates considering the transition to a research career",
      "Industry professionals wanting to pursue practice-based research",
    ],
    whatToExpect: [
      "A detailed assessment of your research background and interests",
      "Supervisor search and shortlisting across Australian universities",
      "Research proposal drafting, structuring and review (multiple rounds)",
      "Academic CV and publication portfolio preparation",
      "Guidance on contacting supervisors with a professional approach email",
      "Research scholarship identification and application support",
      "Full application management from submission to offer",
    ],
  },
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
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
      <PageHero
        eyebrow={service.title}
        title={service.short}
        subtitle={service.long}
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-brand-950 shadow-glow">
              <ServiceIcon name={service.icon} className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand-900">
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
              <h3 className="text-lg font-bold text-brand-900">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3">
                {service.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm font-medium text-brand-800"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-brand-950">
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
                  <h3 className="text-lg font-bold text-brand-900">
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
                  <h3 className="text-lg font-bold text-brand-900">
                    What to expect
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {extras.whatToExpect.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-900/70"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-brand-950 text-xs font-bold">
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
          <h2 className="text-center text-2xl font-bold text-brand-900">
            Explore our other services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-hover group flex items-start gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-brand-950">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
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
