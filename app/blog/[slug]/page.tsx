import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
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

Not every student enters their dream course directly. Pathway programs such as foundation studies, diplomas and English language courses can bridge the gap between where you are now and where you want to be. Many pathway programs guarantee entry into a bachelor's degree with full credit transfer.

## Get expert guidance

With over 22,000 courses across more than 1,100 registered providers, the options can feel overwhelming. That's where a free consultation with an education advisor makes a real difference. We've helped hundreds of students find the course that matches their goals, budget and career aspirations, and we can do the same for you.
`,
  "complete-guide-to-australian-student-visas-2026": `
## What is the Subclass 500 visa?

The Student visa (Subclass 500) is the main visa for international students studying in Australia. It allows you to study full-time at an Australian educational institution for the duration of your course, with the right to work part-time during your studies.

## Eligibility requirements

To apply for a Subclass 500 visa, you need:

- **Confirmation of Enrolment (CoE)** from a CRICOS-registered institution
- **Genuine Student (GS) responses** explaining why you chose this course, how it fits your background and career plans, and how you will meet your visa conditions
- **English language proficiency** (IELTS, PTE, TOEFL or Cambridge)
- **Financial capacity** to cover tuition fees, living costs and travel (at least AUD $29,710 per year for living costs)
- **Overseas Student Health Cover (OSHC)** for the duration of your stay
- **Character and health requirements** including police clearances and medical examinations

## How to apply

The application process is completed online through the Department of Home Affairs ImmiAccount portal:

1. Receive your Confirmation of Enrolment (CoE) from your institution
2. Create an ImmiAccount and start your application
3. Upload all required documents (passport, CoE, financial evidence, OSHC, English test results)
4. Answer the Genuine Student (GS) questions, 150 words or fewer each
5. Pay the visa application charge (AUD $2,500 for the primary applicant from 1 July 2026; AUD $2,050 for ELICOS and non-award courses)
6. Attend a medical examination if required
7. Wait for a decision

## Processing times

Processing times vary but typically range from 4 to 12 weeks. We recommend applying at least 3 months before your course start date. Some nationalities may experience longer processing times.

## Work rights

Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during scheduled course breaks. This is a significant benefit that helps students gain work experience and offset living costs.

## Common mistakes to avoid

- **Submitting incomplete documents**: this is the number one reason for delays
- **Insufficient financial evidence**: make sure your bank statements cover the required amounts
- **Weak Genuine Student responses**: these should show a clear, consistent line from your background to this course to your career
- **Applying too late**: don't leave it until the last minute

## How Edmark can help

Most of what decides whether an application goes smoothly happens well before it is lodged, and that is where we work. We get you into the right course at a CRICOS-registered provider, secure your Confirmation of Enrolment, make sure your English result actually meets your course's requirement rather than nearly meeting it, arrange OSHC for the correct dates, and help you set out your course choice and study plan clearly and consistently.

That is what the common mistakes above really come down to: a file with gaps in it, or one that contradicts itself. Get the enrolment side complete and coherent and most of the risk is gone. Requirements, charges and processing times are set by the Department of Home Affairs and do change, so check the current details on the official website before you lodge.
`,
  "top-scholarships-for-international-students-in-australia": `
## Why scholarships matter

Studying in Australia is a significant financial investment, with tuition fees ranging from $20,000 to $50,000 AUD per year depending on the course and institution. Scholarships can reduce this burden substantially, with some covering full tuition and others providing partial fee waivers or living cost support.

## Government scholarships

### Australia Awards
The Australian Government's flagship scholarship program for students from developing countries. Australia Awards cover full tuition, return airfare, establishment allowance, living costs and health insurance. They are highly competitive but transformational for successful applicants.

### Destination Australia
A government program that provides scholarships for students studying at regional Australian campuses. Awards of up to $15,000 AUD per year help offset tuition and living costs while encouraging students to study outside major cities.

## University-specific scholarships

Most Australian universities offer their own scholarship programs. Some notable examples:

- **University of Melbourne**: Melbourne International Undergraduate Scholarship (up to $28,000 fee remission)
- **Monash University**: International Merit Scholarship (up to $10,000 per year)
- **RMIT University**: RMIT International Scholarship (up to 25% fee waiver)
- **Deakin University**: Deakin International Scholarship (up to 25% fee reduction)

These scholarships are typically merit-based and assessed on academic performance, but some also consider financial need and community involvement.

## Country-specific scholarships

Some scholarships are reserved for students from specific countries or regions. For example, many universities offer dedicated scholarships for students from South Asia, Southeast Asia, Latin America and Africa.

## How to maximise your chances

1. **Start early**: many scholarships have deadlines 6-12 months before the course starts
2. **Apply to multiple scholarships**: don't put all your eggs in one basket
3. **Write a compelling personal statement**: explain your goals, achievements and why you deserve funding
4. **Maintain strong academic results**: most merit scholarships require a minimum GPA
5. **Get professional help**: an experienced education advisor can identify scholarships you didn't know existed

## How Edmark helps you win scholarships

We screen your eligibility for every available scholarship, help you prepare winning applications, and advise on fee structures and payment plans. Many of our students have received scholarships they never would have discovered on their own.
`,
  "cost-of-living-in-melbourne-student-guide": `
## The big picture

Melbourne is consistently ranked as one of the world's most liveable cities, and it's also one of Australia's most popular student destinations. While it's not the cheapest city, it offers excellent value when you factor in quality of life, work opportunities and cultural experiences.

The Australian Government requires international students to show at least AUD $29,710 per year for living costs (excluding tuition). In Melbourne, your actual costs will depend on your lifestyle, accommodation choices and spending habits.

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

- **Public transport (myki)**: a 2-hour full fare is $5.70 and the full-fare daily cap is $11.40. Victoria has halved fares statewide from 1 June 2026 until 1 January 2027, so the daily cap is currently $5.70
- **Student concession**: international students in Victoria are generally not eligible for the standard PTV concession and pay full fare. Some undergraduates can get an iUSEpass, which takes 50% off an annual myki, but availability depends on your institution
- **Cycling**: Melbourne has excellent bike lanes and share bikes

Many students live close to campus and walk or cycle to save on transport costs.

## Other expenses

- **Phone plan**: $20–$40 per month
- **Internet** (if not included in rent): $60–$80 per month
- **OSHC health insurance**: $620–$800 per year for single cover
- **Textbooks and supplies**: $500–$1,000 per year
- **Entertainment and social**: $50–$100 per week

> Costs current as at July 2026. Government charges and fares change, often at the start of a financial year, so check the official source before you budget against them.

## Tips to save money

1. **Cook at home**: meal prep saves hundreds per month
2. **Use student discounts**: your student ID unlocks discounts on food, transport, entertainment and software
3. **Work part-time**: student visa holders can work up to 48 hours per fortnight
4. **Live in the inner suburbs**: areas like Footscray, Brunswick and Clayton offer cheaper rent with good transport links
5. **Buy second-hand textbooks**: check campus noticeboards and online marketplaces
`,
  "how-to-write-a-research-proposal-for-australian-universities": `
## Why the research proposal matters more than your grades

For coursework programs, your academic transcript is king. For research degrees, it's your research proposal. A well-crafted proposal demonstrates three things universities need to see: that you understand your field, that your research question is original and feasible, and that you have the skills to execute the project.

A mediocre proposal from a student with excellent grades will be rejected. A strong proposal from a student with good (not perfect) grades will get serious attention. This is where most applicants get it wrong. They invest all their energy into their CV and treat the proposal as an afterthought.

## The anatomy of a winning research proposal

### Title

Your title should be specific, concise and informative. Avoid vague titles like "A Study of Machine Learning in Healthcare." Instead, try something like "Federated Learning for Privacy-Preserving Disease Prediction in Rural Australian Health Networks." The title signals immediately whether your thinking is precise or fuzzy.

### Research background and context

This section (usually 1–2 pages) demonstrates your understanding of the field. You need to:

- Summarise the current state of knowledge in your area
- Identify a clear gap, problem or contradiction in existing research
- Cite key papers and position your work within the literature
- Explain why this research matters, both academically and practically

### Research questions and objectives

State your primary research question clearly and concisely. Then break it into 2–4 specific objectives that, when achieved, will answer the overarching question. Your objectives should be measurable and achievable within the timeframe of your degree (typically 2 years for a Masters by Research, 3–4 years for a PhD).

### Methodology

This is where many proposals fall apart. You need to explain:

- **What data or materials** you will work with
- **How you will collect or generate** that data
- **What methods or techniques** you will use to analyse it
- **Why these methods** are appropriate for your research questions
- **What tools, software or equipment** you will need

Be specific. "I will use qualitative methods" is not a methodology. "I will conduct semi-structured interviews with 20 clinical practitioners, analysed using thematic analysis following Braun & Clarke's (2006) framework" is a methodology.

### Timeline

Provide a realistic timeline showing key milestones across your candidature. Include literature review, data collection, analysis, writing and submission dates. This shows the university you've thought about feasibility.

### References

Include a reference list of 15–30 key papers you've cited. This demonstrates your familiarity with the literature and helps potential supervisors assess whether your interests align with their own.

## Finding the right supervisor

Before you submit a formal application, you should ideally have a supervisor who has agreed to work with you. Here's how:

1. **Search university research profiles**: most universities list faculty members' research interests, publications and current projects
2. **Read their recent papers**: understand what they're currently working on, not what they published ten years ago
3. **Check if they're accepting students**: some supervisors have full quotas
4. **Write a professional approach email**: introduce yourself, explain your research interest, attach your CV and a 1-page proposal summary, and ask if they'd be open to a conversation

### What NOT to do when contacting supervisors

- Don't send a generic email to 50 supervisors. They can tell
- Don't attach a 20-page proposal as a first contact. Keep it to a 1-page summary
- Don't ask them to suggest a topic for you. Come with your own ideas
- Don't ignore their recent work. Reference something specific they've published

## Research scholarships in Australia

Research degree students have access to funding that coursework students don't:

- **Research Training Program (RTP)**: Australian Government-funded scholarships covering tuition fees and a living stipend. The 2026 base rate is around $34,315 AUD/year, and many universities top it up, with rates from roughly $37,000 to $42,000 at the larger research institutions. Available at all Australian universities.
- **University-specific research scholarships**: many universities offer their own research awards with stipends and travel grants
- **Industry-partnered PhDs**: some research projects are co-funded by industry partners, offering higher stipends and industry experience
- **International postgraduate research scholarships**: specifically for international students, covering tuition and living costs

## Common mistakes that get research applications rejected

1. **Research question too broad**: "I want to study AI" is not a research question
2. **No clear gap in the literature**: you must explain what's missing and why it matters
3. **Methodology is vague or inappropriate**: "I will use mixed methods" without specifics won't cut it
4. **No supervisor alignment**: applying to a department where nobody works in your area
5. **Weak writing quality**: your proposal is a writing sample; if it's poorly written, it signals you'll struggle with a thesis

## How Edmark can help

Research degree applications are complex, and the stakes are high. We help you:

- Define and refine your research questions
- Structure your proposal to meet Australian university standards
- Identify and approach potential supervisors
- Prepare your academic CV and publication portfolio
- Find and apply for research scholarships
- Manage your entire application from submission to offer

Book a free consultation and let's discuss your research goals.
`,
  "10-ielts-tips-to-score-7-or-higher": `
## Tip 1: Understand the scoring system

IELTS scores each module (Listening, Reading, Writing, Speaking) on a band scale of 0–9 in 0.5 increments. Your overall score is the average of all four modules. To score 7.0 overall, you don't need 7.0 in every module, but you can't afford anything below 6.5.

## Tip 2: Master time management in Reading

You have 60 minutes for 40 questions across three passages. Many students run out of time on the third passage. Practice the habit of spending no more than 18 minutes per passage, leaving 6 minutes for review.

## Tip 3: Don't leave any answer blank

There is no negative marking in IELTS. If you're unsure, make your best guess. A blank answer is always wrong, but a guess has a chance of being right.

## Tip 4: Learn the Writing Task 2 structure

For Task 2 (the essay), use this proven structure: introduction (2–3 sentences with a clear thesis), body paragraph 1 (main argument + example), body paragraph 2 (second argument + example), conclusion (summary of position). Aim for 270–290 words.

## Tip 5: Use linking words naturally

Words like "however," "furthermore," "in contrast" and "consequently" improve your coherence score, but only if they're used correctly. Don't force them in where they don't belong. Practice using them in sentences until they feel natural.

## Tip 6: Practice Speaking with a timer

The Speaking test is only 11–14 minutes. Part 2 gives you 1 minute to prepare and 2 minutes to speak. Practice speaking for exactly 2 minutes on random topics. Record yourself and listen back for fluency and pronunciation.

## Tip 7: Read academic texts daily

The Reading module uses academic passages from journals, textbooks and magazines. Build your reading speed and vocabulary by reading The Economist, New Scientist or academic abstracts for 20 minutes daily.

## Tip 8: Focus on Listening keywords

Before each Listening section, read the questions quickly and underline keywords. Listen for synonyms and paraphrases, because IELTS rarely uses the exact same words in the question and the recording.

## Tip 9: Get professional feedback on Writing

Writing is the hardest module to improve alone because you can't objectively assess your own work. Get feedback from a teacher or experienced IELTS tutor on at least 5 practice essays before your test.

## Tip 10: Take official practice tests under exam conditions

Complete at least 3 full practice tests (Cambridge IELTS books are the gold standard) under real exam conditions: timed, no breaks, no distractions. This builds stamina and reduces test-day anxiety.
`,
  "pte-academic-preparation-guide": `
## What is PTE Academic?

PTE Academic (Pearson Test of English) is a computer-based English language test accepted by all Australian universities and the Department of Home Affairs for visa applications. It tests your speaking, writing, reading and listening skills in a single 2-hour session.

## Test format overview

- **Speaking & Writing** (54–67 minutes): Read aloud, repeat sentence, describe image, re-tell lecture, answer short question, summarise written text, essay
- **Reading** (29–30 minutes): Multiple choice, re-order paragraphs, fill in the blanks
- **Listening** (30–43 minutes): Summarise spoken text, multiple choice, fill in the blanks, highlight correct summary, select missing word, highlight incorrect words, write from dictation

## Scoring

PTE scores range from 10 to 90. Here's how they map to university requirements:

- PTE 50 (≈ IELTS 6.0): minimum for most undergraduate programs
- PTE 58 (≈ IELTS 6.5): common postgraduate requirement
- PTE 65 (≈ IELTS 7.0): required for competitive programs and some professional courses

## Top preparation strategies

### 1. Master "Read Aloud"

Read Aloud contributes to both your reading and speaking scores. Practice reading academic sentences at a natural pace with clear pronunciation. Record yourself and listen back. Focus on word stress and sentence intonation.

### 2. Practice "Write from Dictation" obsessively

This task contributes heavily to your writing and listening scores. You hear a sentence once and must type it exactly. Practice with dictation exercises daily. This single task can significantly boost your overall score.

### 3. Use official PTE practice tests

Pearson offers scored practice tests that simulate the real exam. Take at least 2 scored practice tests before your real test to understand your strengths and weaknesses.

### 4. Improve your typing speed

PTE is entirely computer-based. If you type slowly, you'll run out of time in the writing sections. Aim for at least 40 words per minute. Use free typing practice websites to build speed.

### 5. Don't pause too long in Speaking

The microphone auto-detects silence. If you pause for more than 3 seconds, it will move to the next question. Practice maintaining a steady flow of speech, even if you need to use filler phrases like "let me think about this" while gathering your thoughts.

## Free resources

- **PTE Official Website**: free practice questions and scored mock tests
- **E2Language**: free YouTube tutorials for every PTE task type
- **PTE Study App**: mobile practice on the go
- **Cambridge English**: general English skill building

## Our advice

If you're targeting PTE 58+ and struggling to get there, book a free consultation with us. We can recommend preparation courses and help you plan your test timeline around your application deadlines.
`,
  "how-to-write-a-statement-of-purpose-for-australian-universities": `
## What is a Statement of Purpose?

A Statement of Purpose (SOP) is a personal essay that explains why you want to study a particular course at a particular university. It's your chance to go beyond grades and test scores and show the admissions committee who you are, what drives you, and why you're a strong fit.

## Why it matters

Many Australian universities, especially for postgraduate and competitive programs, weigh your SOP heavily. A strong SOP can compensate for a slightly lower GPA. A weak SOP can get an otherwise strong application rejected.

## Structure of a winning SOP

### Opening paragraph: Hook + purpose

Start with something specific: a moment, experience, or realisation that sparked your interest in this field. Then state clearly what you're applying for and why.

**Bad:** "I have always been interested in business."
**Good:** "When I helped my family's small retail business survive a cash flow crisis at age 19, I realised that financial literacy wasn't just an academic concept. It was the difference between a family keeping and losing their livelihood."

### Body paragraph 1: Academic background

Summarise your academic journey, highlighting relevant coursework, projects, and achievements. Connect your academic experience to the course you're applying for. Show progression and growing expertise.

### Body paragraph 2: Professional experience

Describe relevant work experience, internships, or research. Focus on what you learned and how it prepared you for this program. Use specific examples with measurable outcomes where possible.

### Body paragraph 3: Why this university and course

This is where most SOPs fail. Generic statements like "your university has a great reputation" mean nothing. Research the specific program and mention:

- Specific courses or specialisations that interest you
- Faculty members whose research aligns with your goals
- Unique features of the program (industry placements, labs, partnerships)
- Why this university's location and culture suit you

### Closing paragraph: Future goals

Explain what you plan to do after graduating and how this program connects to your career aspirations. Be specific and realistic.

## Common mistakes to avoid

1. **Being too generic**: every sentence should be specific to you and to this program
2. **Repeating your CV**: the SOP adds context and narrative, not a list of achievements
3. **Negative language**: don't dwell on failures or weaknesses; focus on growth
4. **Exceeding the word limit**: if they say 500 words, stay under 500 words
5. **Grammatical errors**: have someone proofread your SOP; errors signal carelessness

## How Edmark can help

We've reviewed hundreds of SOPs and know exactly what Australian admissions committees look for. Our team helps you brainstorm, structure, write and refine your SOP until it's compelling, authentic and polished. This service is included in our free consultation, so book one today.
`,
  "ielts-vs-pte-which-english-test-should-you-take": `
## Both tests are accepted

The good news is that virtually all Australian universities accept both IELTS (International English Language Testing System) and PTE Academic (Pearson Test of English). So your choice comes down to which format suits your strengths.

## IELTS overview

IELTS has been the gold standard for English testing for decades. It tests four skills:

- **Listening** (30 minutes): Multiple choice, matching, sentence completion
- **Reading** (60 minutes): Three long passages with various question types
- **Writing** (60 minutes): Two tasks, a report/letter and an essay
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
- Entirely computer-based, so you speak into a microphone
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

There's no objectively "better" test. It depends on your skills and preferences. We recommend taking a free practice test for both IELTS and PTE to see which format you feel more comfortable with. If you're unsure, book a free consultation and we'll help you decide based on your strengths.
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
  return pageSeo({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    // Every post shares the section card: there is no per-post artwork.
    image: "/og/blog.jpg",
    publishedTime: post.date,
  });
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
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                {post.category}
              </span>
              <span className="text-xs text-brand-900/50">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-medium text-brand-900 sm:text-4xl">
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
                    className="mt-10 mb-4 text-2xl font-medium text-brand-900"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              if (trimmed.startsWith("### "))
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 text-xl font-medium text-brand-900"
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
          <h2 className="text-center text-2xl font-medium text-brand-900">
            More from our blog
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-hover group"
              >
                <span className="text-xs font-medium text-brand-500">
                  {p.category}
                </span>
                <h3 className="mt-2 font-medium text-brand-900 group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <span className="mt-2 flex items-center gap-1 text-sm font-medium text-brand-600">
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
