import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { IconArrow } from "@/components/Icons";

const blogContent: Record<string, string> = {
  "how-to-choose-the-right-course-in-australia": `
## Start with your career goals, not the course name

The most common mistake students make is choosing a course based on its title rather than where it leads. Before browsing university websites, ask yourself: what job do I want to be doing in five years? Work backwards from there.

## Consider the institution type

Australia offers several types of institutions, each with different strengths:

- **Universities** offer bachelor's, master's and PhD programs with a focus on theory and research. Ideal for students pursuing professional careers in fields like medicine, law, engineering or academia.
- **TAFEs** (Technical and Further Education) provide practical, hands-on training through certificates and diplomas. Perfect for trades, hospitality, IT and creative fields.
- **Private colleges** often offer specialised programs with smaller class sizes and industry connections.

Many students use TAFE as a stepping stone to university, with credits transferring directly into a bachelor's degree.

## Check course outcomes, not just rankings

University rankings matter, but they're not everything. Look at graduate employment rates, industry partnerships, practical placement opportunities and alumni networks. A lower-ranked university with a 95% employment rate in your field may serve you better than a top-10 university with limited industry connections.

## Factor in location and lifestyle

Melbourne, Sydney and Brisbane are popular choices, but regional universities often offer lower tuition fees, smaller class sizes and stronger community support. Consider the cost of living, part-time work opportunities and lifestyle when choosing your city.

## Think about pathways and flexibility

Not every student enters their dream course directly. Pathway programs — such as foundation studies, diplomas and English language courses — can bridge the gap between where you are now and where you want to be. Many pathway programs guarantee entry into a bachelor's degree with full credit transfer.

## Get expert guidance

With over 22,000 courses across 40+ institutions, the options can feel overwhelming. That's where a free consultation with an education advisor makes a real difference. We've helped hundreds of students find the course that matches their goals, budget and career aspirations — and we can do the same for you.
`,
  "complete-guide-to-australian-student-visas-2026": `
## What is the Subclass 500 visa?

The Student visa (Subclass 500) is the main visa for international students studying in Australia. It allows you to study full-time at an Australian educational institution for the duration of your course, with the right to work part-time during your studies.

## Eligibility requirements

To apply for a Subclass 500 visa, you need:

- **Confirmation of Enrolment (CoE)** from a CRICOS-registered institution
- **Genuine Temporary Entrant (GTE) statement** explaining why you want to study in Australia
- **English language proficiency** (IELTS, PTE, TOEFL or Cambridge)
- **Financial capacity** to cover tuition fees, living costs and travel (approximately $24,505 AUD per year for living costs)
- **Overseas Student Health Cover (OSHC)** for the duration of your stay
- **Character and health requirements** including police clearances and medical examinations

## How to apply

The application process is completed online through the Department of Home Affairs ImmiAccount portal:

1. Receive your Confirmation of Enrolment (CoE) from your institution
2. Create an ImmiAccount and start your application
3. Upload all required documents (passport, CoE, financial evidence, OSHC, English test results)
4. Write your GTE statement
5. Pay the visa application charge (currently $710 AUD)
6. Attend a medical examination if required
7. Wait for a decision

## Processing times

Processing times vary but typically range from 4 to 12 weeks. We recommend applying at least 3 months before your course start date. Some nationalities may experience longer processing times.

## Work rights

Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during scheduled course breaks. This is a significant benefit that helps students gain work experience and offset living costs.

## Common mistakes to avoid

- **Submitting incomplete documents** — this is the number one reason for delays
- **Insufficient financial evidence** — make sure your bank statements cover the required amounts
- **Weak GTE statement** — this should clearly explain your motivation for studying in Australia
- **Applying too late** — don't leave it until the last minute

## How Edmark can help

While we are not migration agents, we guide you through every step of the visa process. We help you prepare your documents, write a compelling GTE statement, and connect you with a registered migration agent if you need specialist assistance.
`,
  "top-scholarships-for-international-students-in-australia": `
## Why scholarships matter

Studying in Australia is a significant financial investment, with tuition fees ranging from $20,000 to $50,000 AUD per year depending on the course and institution. Scholarships can reduce this burden substantially — some covering full tuition, while others provide partial fee waivers or living cost support.

## Government scholarships

### Australia Awards
The Australian Government's flagship scholarship program for students from developing countries. Australia Awards cover full tuition, return airfare, establishment allowance, living costs and health insurance. They are highly competitive but transformational for successful applicants.

### Destination Australia
A government program that provides scholarships for students studying at regional Australian campuses. Awards of up to $15,000 AUD per year help offset tuition and living costs while encouraging students to study outside major cities.

## University-specific scholarships

Most Australian universities offer their own scholarship programs. Some notable examples:

- **University of Melbourne** — Melbourne International Undergraduate Scholarship (up to $28,000 fee remission)
- **Monash University** — International Merit Scholarship (up to $10,000 per year)
- **RMIT University** — RMIT International Scholarship (up to 25% fee waiver)
- **Deakin University** — Deakin International Scholarship (up to 25% fee reduction)

These scholarships are typically merit-based and assessed on academic performance, but some also consider financial need and community involvement.

## Country-specific scholarships

Some scholarships are reserved for students from specific countries or regions. For example, many universities offer dedicated scholarships for students from South Asia, Southeast Asia, Latin America and Africa.

## How to maximise your chances

1. **Start early** — many scholarships have deadlines 6-12 months before the course starts
2. **Apply to multiple scholarships** — don't put all your eggs in one basket
3. **Write a compelling personal statement** — explain your goals, achievements and why you deserve funding
4. **Maintain strong academic results** — most merit scholarships require a minimum GPA
5. **Get professional help** — an experienced education advisor can identify scholarships you didn't know existed

## How Edmark helps you win scholarships

We screen your eligibility for every available scholarship, help you prepare winning applications, and advise on fee structures and payment plans. Many of our students have received scholarships they never would have discovered on their own.
`,
  "cost-of-living-in-melbourne-student-guide": `
## The big picture

Melbourne is consistently ranked as one of the world's most liveable cities, and it's also one of Australia's most popular student destinations. While it's not the cheapest city, it offers excellent value when you factor in quality of life, work opportunities and cultural experiences.

The Australian Government estimates that international students need approximately $24,505 AUD per year for living costs (excluding tuition). In Melbourne, your actual costs will depend on your lifestyle, accommodation choices and spending habits.

## Accommodation

Accommodation is typically your biggest expense. Here's what to expect:

- **Shared apartment/house**: $150–$250 per week
- **Purpose-built student accommodation**: $250–$450 per week
- **Studio apartment (solo)**: $300–$500 per week
- **Homestay**: $250–$350 per week (usually includes meals)

Most students share a house or apartment with other students, which keeps costs manageable and is a great way to make friends.

## Food and groceries

- **Groceries**: $80–$120 per week (cooking at home)
- **Eating out**: $15–$25 per meal at casual restaurants
- **Coffee**: $4–$6 (Melbourne takes its coffee seriously)

Shopping at Aldi, Woolworths or Coles and cooking at home is the most budget-friendly approach. Melbourne's multicultural food scene means affordable options from every cuisine.

## Transport

- **Public transport (myki card)**: $4.60 per day / up to $9.20 on weekends
- **Student concession**: Available for some visa holders
- **Cycling**: Melbourne has excellent bike lanes and share bikes

Many students live close to campus and walk or cycle to save on transport costs.

## Other expenses

- **Phone plan**: $20–$40 per month
- **Internet** (if not included in rent): $60–$80 per month
- **OSHC health insurance**: $500–$700 per year
- **Textbooks and supplies**: $500–$1,000 per year
- **Entertainment and social**: $50–$100 per week

## Tips to save money

1. **Cook at home** — meal prep saves hundreds per month
2. **Use student discounts** — your student ID unlocks discounts on food, transport, entertainment and software
3. **Work part-time** — student visa holders can work up to 48 hours per fortnight
4. **Live in the inner suburbs** — areas like Footscray, Brunswick and Clayton offer cheaper rent with good transport links
5. **Buy second-hand textbooks** — check campus noticeboards and online marketplaces
`,
  "ielts-vs-pte-which-english-test-should-you-take": `
## Both tests are accepted

The good news is that virtually all Australian universities accept both IELTS (International English Language Testing System) and PTE Academic (Pearson Test of English). So your choice comes down to which format suits your strengths.

## IELTS overview

IELTS has been the gold standard for English testing for decades. It tests four skills:

- **Listening** (30 minutes): Multiple choice, matching, sentence completion
- **Reading** (60 minutes): Three long passages with various question types
- **Writing** (60 minutes): Two tasks — a report/letter and an essay
- **Speaking** (11–14 minutes): Face-to-face interview with an examiner

**Key features:**
- The Speaking test is conducted in person with a human examiner
- The Writing test is handwritten (Academic IELTS)
- Scores are on a band scale from 0 to 9
- Results available in 13 days (or 3–5 days for computer-based)
- Test fee: approximately $395 AUD

## PTE Academic overview

PTE Academic is a newer, fully computer-based test:

- **Speaking & Writing** (54–67 minutes): Combined section with read-aloud, essays, summaries
- **Reading** (29–30 minutes): Multiple choice, re-order paragraphs, fill in the blanks
- **Listening** (30–43 minutes): Summarise spoken text, multiple choice, fill in the blanks

**Key features:**
- Entirely computer-based — you speak into a microphone
- AI-scored (no human examiner for speaking)
- Scores on a scale of 10–90
- Results available in 1–2 days
- Test fee: approximately $395 AUD

## Which test suits you?

**Choose IELTS if:**
- You prefer speaking to a real person
- You're comfortable with handwriting (for paper-based IELTS)
- You're strong at structured essay writing
- You prefer a traditional test format

**Choose PTE if:**
- You prefer typing to handwriting
- You're comfortable speaking into a microphone
- You want faster results (1–2 days vs 13 days)
- You're strong at reading aloud and pronunciation
- You get nervous in face-to-face interviews

## Score equivalences

Here's a rough guide to how IELTS and PTE scores compare:

- IELTS 6.0 ≈ PTE 50
- IELTS 6.5 ≈ PTE 58
- IELTS 7.0 ≈ PTE 65
- IELTS 7.5 ≈ PTE 73
- IELTS 8.0 ≈ PTE 79

## Our advice

There's no objectively "better" test — it depends on your skills and preferences. We recommend taking a free practice test for both IELTS and PTE to see which format you feel more comfortable with. If you're unsure, book a free consultation and we'll help you decide based on your strengths.
`,
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug] || "";
  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="container-page mx-auto max-w-3xl">
          <header className="mb-12">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <span className="text-xs text-brand-900/50">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="mt-3 block text-sm text-brand-900/50"
            >
              {new Date(post.date).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </header>

          <div className="prose-edmark">
            {content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return (
                  <h2
                    key={i}
                    className="mt-10 mb-4 text-2xl font-bold text-brand-900"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              if (trimmed.startsWith("### "))
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 text-xl font-bold text-brand-900"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              if (trimmed.startsWith("- **"))
                return (
                  <li
                    key={i}
                    className="ml-5 mb-2 text-brand-900/70 leading-relaxed list-disc"
                    dangerouslySetInnerHTML={{
                      __html: trimmed
                        .replace(/^- /, "")
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                );
              if (trimmed.startsWith("- "))
                return (
                  <li
                    key={i}
                    className="ml-5 mb-2 text-brand-900/70 leading-relaxed list-disc"
                  >
                    {trimmed.replace("- ", "")}
                  </li>
                );
              if (/^\d+\./.test(trimmed))
                return (
                  <li
                    key={i}
                    className="ml-5 mb-2 text-brand-900/70 leading-relaxed list-decimal"
                    dangerouslySetInnerHTML={{
                      __html: trimmed
                        .replace(/^\d+\.\s*/, "")
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                );
              return (
                <p
                  key={i}
                  className="mb-4 text-brand-900/70 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: trimmed.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              );
            })}
          </div>
        </div>
      </article>

      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold text-brand-900">
            More from our blog
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-hover group"
              >
                <span className="text-xs font-semibold text-brand-500">
                  {p.category}
                </span>
                <h3 className="mt-2 font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <span className="mt-2 flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Read <IconArrow className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
