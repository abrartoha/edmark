// ---------------------------------------------------------------------------
// LEGAL DOCUMENTS
//
// Privacy, terms and complaints, held as text rather than as JSX so the
// wording can be edited without touching a component. Written by the business,
// reproduced verbatim; do not reword any of it in passing.
//
// PLACEHOLDERS
// ------------
// A `TODO(abrar): ...` inside backticks is a value only the business can
// supply, such as a retention period or the countries our records are hosted
// in. They are not decoration: while any document still contains one, that
// page renders a draft notice and stays noindex, and it publishes itself once
// the last one is replaced. See needsWork() and the routes that call it.
// ---------------------------------------------------------------------------

export type LegalDoc = {
  slug: string;
  /** Page title, also the H1. The body must not repeat it. */
  title: string;
  subtitle: string;
  description: string;
  body: string;
};

/** True while a document still carries an unfilled placeholder. */
export function needsWork(doc: LegalDoc): boolean {
  return doc.body.includes("TODO(abrar)");
}

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  subtitle:
    "What we collect, why we collect it, who we give it to, and how you can see or correct it.",
  description:
    "How Edmark Education collects, uses, discloses and retains your personal information, who we disclose it to, and how to access, correct or complain about it.",
  body: `**Last updated:** \`TODO(abrar): publication date\`

Edmark Education Pty Ltd (ACN 700 341 028, ABN 75 700 341 028) collects personal information about you when we help you apply to study in Australia. This page explains what we collect, why, who we give it to, and how you can see or correct it.

We handle personal information in line with the Australian Privacy Principles.

---

## What we collect

To do our job we usually need:

- **Identity and contact details** — your name, date of birth, nationality, passport number, address, phone number and email
- **Academic history** — transcripts, certificates, English test results (IELTS, PTE, TOEFL), and details of previous study
- **Study and work background** — your CV, employment history, and any professional registrations
- **Financial information** — evidence of funds where an institution asks for it as part of an application
- **Visa and immigration status** — your current visa subclass, expiry date and travel history, so we can tell you which courses you can apply for
- **Health information** — only where it is needed to arrange your Overseas Student Health Cover, or where an institution requires a disclosure for a placement or a course with health requirements

Health information is sensitive information. We only collect it with your consent, and only when it is necessary.

We also collect basic technical information when you use this website. See **Cookies and analytics** below.

## Why we collect it

We use your personal information to:

- Give you course, institution and pathway advice
- Prepare and lodge applications on your behalf
- Follow up applications, offers, payments and your Confirmation of Enrolment
- Arrange your Overseas Student Health Cover
- Book and prepare you for PTE, NAATI and Professional Year programs
- Answer your questions and keep you updated on your application
- Meet our obligations to the institutions we work with
- Keep our own business records

We do not sell your personal information. We do not use it for advertising to you unless you have opted in, and you can opt out at any time.

## Who we share it with

We disclose your personal information to:

- **Education institutions** — universities, TAFEs and colleges, when we lodge an application for you or follow it up. This is the main reason we collect your information, and applications cannot proceed without it.
- **Health insurers** — the OSHC provider you choose, when we arrange your cover.
- **Test and program providers** — PTE, NAATI and Professional Year providers, where you ask us to book or enrol you.
- **Registered migration agents** — only where you ask us to refer you, and only with your consent. We are not migration agents ourselves.
- **Our service providers** — the companies that host our website, email and application records. They are bound to keep your information confidential and use it only to provide their service to us.
- **Anyone else you tell us to** — for example a parent, sponsor or education counsellor you have asked us to keep informed.

We may also disclose information where the law requires it.

## Information sent overseas

Some of the institutions you apply to, and some of the technology we use, are located outside Australia. Where we send your information overseas, we take reasonable steps to make sure it is handled with protections comparable to the Australian Privacy Principles.

\`TODO(abrar): confirm where your CRM, email and file storage are hosted, and list the countries here.\`

## Cookies and analytics

This website uses cookies and similar technology to remember your preferences and to understand how the site is used. We use \`TODO(abrar): name your analytics tool, e.g. Google Analytics\` for aggregate visitor statistics.

You can turn cookies off in your browser settings. Some parts of the site may not work properly if you do.

\`TODO(abrar): if you run Meta or Google advertising pixels, name them here.\`

## How we protect it

We store your information in access-controlled systems and limit access to the staff who need it. We use encrypted connections for our website and our email.

No system is perfectly secure. If a data breach happens that is likely to cause you serious harm, we will tell you and notify the Office of the Australian Information Commissioner.

## How long we keep it

We keep your file for \`TODO(abrar): choose a period — seven years is a common default for business records\` after your last contact with us, then destroy or de-identify it. We may keep some records longer where an institution agreement or the law requires it.

## Seeing and correcting your information

You can ask us for a copy of the personal information we hold about you, and you can ask us to correct anything that is wrong. Email **info@edmark.com.au** and we will respond within 30 days.

There is no charge for asking. If your request takes significant work, we will tell you the cost before we start.

You can also ask us to delete your information. We will do so unless we are required to keep it.

## Complaints

If you think we have mishandled your personal information, email **info@edmark.com.au** with "Privacy complaint" in the subject line. We will acknowledge it within \`TODO(abrar): 2 business days suggested\` and give you a written response within 30 days.

If you are not satisfied with our response, or we have not replied within 30 days, you can complain to the Office of the Australian Information Commissioner:

- **Web:** oaic.gov.au
- **Phone:** 1300 363 992
- **Post:** GPO Box 5218, Sydney NSW 2001

Our full complaints process is at [edmark.com.au/complaints](/complaints).

## Changes to this policy

We update this page when our practices change. The date at the top tells you when it was last revised.

## Contact us

**Edmark Education Pty Ltd**
Level 5, 12 Clarke Street, Sunshine VIC 3020
03 7057 3443
info@edmark.com.au`,
};

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  subtitle:
    "What our service covers, what it does not, and what we can and cannot promise.",
  description:
    "The terms on which Edmark Education provides education consulting: what the service covers, what it does not, how we are paid, and the limits of what we can promise.",
  body: `**Last updated:** \`TODO(abrar): publication date\`

These terms apply when you use this website or engage Edmark Education Pty Ltd (ACN 700 341 028, ABN 75 700 341 028) as your education consultant.

Please read them. If anything is unclear, ask us before you proceed.

---

## 1. What we do

We are an education consultancy. We help international students choose a course, apply to Australian institutions, and get to their first day on campus. That includes:

- Course and pathway counselling
- Preparing and lodging applications
- Following up offers, payments and Confirmation of Enrolment
- Arranging Overseas Student Health Cover
- Booking and preparing you for PTE, NAATI and Professional Year programs
- Pre-departure and arrival guidance

## 2. What we do not do

**We are not registered migration agents.** Under Australian law, only a registered migration agent or an Australian legal practitioner can give immigration assistance. We do not prepare, lodge or advise on visa applications.

What we do is get the education side right — your offer letter, your Confirmation of Enrolment and your OSHC. Those are the documents a visa application depends on. When you are ready to lodge, we will refer you to a registered migration agent if you ask.

You can check any migration agent's registration for free on the Office of the Migration Agents Registration Authority register.

We also do not provide legal, financial, taxation or medical advice.

## 3. No guarantees

We cannot guarantee:

- That any institution will make you an offer. Admission decisions belong to the institution.
- That you will receive a scholarship, or any particular amount.
- That your visa will be granted. That decision belongs to the Department of Home Affairs.
- Any particular academic result, employment outcome, salary or migration outcome.

Anything we tell you about your chances is our honest opinion based on your profile and our experience. It is not a promise.

## 4. How we are paid

Our service is free to you. Institutions pay us a commission when a student enrols. Commission rates differ between institutions.

We do not let commission decide your shortlist. If the right course is at an institution we have no agreement with, we will tell you, and we will help you apply anyway. If you want to know what we earn on a course we have recommended, ask us and we will tell you.

\`TODO(abrar): if you charge students for anything at all — PTE bookings, document courier, Professional Year enrolment — list those fees here with amounts and when they are payable. If everything is genuinely free to the student, replace this line with a sentence saying so.\`

## 5. Your responsibilities

When you work with us, you agree to:

- Give us accurate, complete and current information
- Provide genuine documents only. Submitting fraudulent or altered documents is a serious matter that can end your application, your enrolment and your visa, and may be a criminal offence.
- Tell us promptly if your circumstances change — your address, your visa status, your study plans
- Read the offer letter, the institution's terms and the refund policy before you accept or pay anything
- Meet the institution's deadlines for documents and payments

If you give us false information, we may stop acting for you.

## 6. Institutions are separate from us

The institutions you apply to are independent organisations. We are not their agent for the purpose of making promises on their behalf, and we are not responsible for:

- Their admission, deferral or cancellation decisions
- The fees they charge, or changes to those fees
- The quality or delivery of their courses
- Their refund policies, or refunds themselves

Your contract for your course is with the institution, not with us. Their refund policy governs your money, and their complaints process governs disputes about your course.

## 7. Third-party information

Our website links to institution websites, government pages and other external sources. We check what we publish, but course details, fees, entry requirements and government requirements change frequently. Always confirm the current position with the institution or the relevant government body before you rely on it.

## 8. Intellectual property

The content, design and branding of this website belong to Edmark Education Pty Ltd. Institution and insurer logos belong to their owners and appear with permission.

You may read, print and share our pages for your own use. You may not republish our content commercially without our written permission.

## 9. Your rights under Australian Consumer Law

Nothing in these terms excludes, restricts or modifies any consumer guarantee, right or remedy you have under the Australian Consumer Law that cannot lawfully be excluded.

Where we are permitted to limit our liability, our liability for a failure to comply with a consumer guarantee is limited to resupplying the service, or paying the cost of having it resupplied.

Subject to that, we are not liable for indirect or consequential loss.

## 10. Ending the arrangement

You can stop working with us at any time. Tell us in writing and we will stop acting for you.

We may stop acting for you if you give us false information, ask us to do something unlawful, or behave abusively toward our staff.

If we stop, we will hand over the documents you gave us and tell you where your applications stand.

## 11. Privacy

We collect and handle your personal information as described in our [Privacy Policy](/privacy).

## 12. Complaints

If something goes wrong, our complaints process is at [edmark.com.au/complaints](/complaints). We would much rather hear about it than not.

## 13. Changes to these terms

We may update these terms. The date at the top shows when they last changed. The version in force is the one published when you engage us.

## 14. Governing law

These terms are governed by the laws of Victoria, Australia. The courts of Victoria have jurisdiction.

---

**Edmark Education Pty Ltd**
Level 5, 12 Clarke Street, Sunshine VIC 3020
03 7057 3443
info@edmark.com.au`,
};

export const complaints: LegalDoc = {
  slug: "complaints",
  title: "Complaints and Feedback",
  subtitle:
    "If we have got something wrong, we want to know. It costs you nothing and it will not affect your application.",
  description:
    "How to raise a complaint with Edmark Education, when you will hear back, how it is handled, and the external bodies you can go to if you are not satisfied.",
  body: `**Last updated:** \`TODO(abrar): publication date\`

If we have got something wrong, we want to know. Complaining costs you nothing, it will not affect your application, and we will not treat you differently for raising it.

---

## How to make a complaint

Email **info@edmark.com.au** with "Complaint" in the subject line, call **03 7057 3443**, or come into the office at Level 5, 12 Clarke Street, Sunshine.

Tell us:

- Your name and the best way to reach you
- What happened, and roughly when
- Who you dealt with, if you remember
- What outcome you are looking for

You can complain in writing or by phone. If English is not your first language, you can bring someone to help you, or write to us in your own language and we will arrange a translation.

## What happens next

1. **We acknowledge it** within \`TODO(abrar): 2 business days suggested\`. You will get a name and a direct contact.
2. **We look into it.** We read the file, talk to the staff involved, and come back to you if we need more detail.
3. **We respond in writing** within \`TODO(abrar): 20 business days suggested\`. If it is going to take longer, we will tell you why and give you a new date.
4. **We tell you what we found**, what we are doing about it, and what to do if you disagree.

We keep a record of every complaint and what came of it, so the same thing does not keep happening.

## If you are not satisfied

You can ask for the matter to be reviewed internally by a senior member of our team who was not involved the first time. Ask in writing and we will arrange it.

If you are still not satisfied, you can go outside Edmark. Which body you go to depends on what your complaint is about.

### Complaints about how we handled your personal information

**Office of the Australian Information Commissioner**
oaic.gov.au · 1300 363 992 · GPO Box 5218, Sydney NSW 2001

Complain to us first. If we have not responded within 30 days, or you are unhappy with our response, the OAIC can take it from there.

### Complaints about us as a Victorian business

**Consumer Affairs Victoria**
consumer.vic.gov.au · 1300 55 81 81

For issues about the service you were promised and the service you received.

### Complaints about misleading conduct

**Australian Competition and Consumer Commission**
accc.gov.au · 1300 302 502

### Complaints about your education provider

Your course contract is with your institution, not with us, so complaints about fees, refunds, teaching, deferrals or cancellation go to them first. Every registered provider must have a complaints and appeals process — ask them for it in writing.

If you have been through their internal process and you are not satisfied:

**Overseas Students Ombudsman** — for students at private registered providers
ombudsman.gov.au/overseas-students · 1300 362 072

For students at public universities and TAFEs, the relevant state ombudsman handles it. In Victoria that is the Victorian Ombudsman: ombudsman.vic.gov.au · 1800 806 314.

### Complaints about immigration advice

We are not registered migration agents and we do not give immigration assistance. If you believe anyone has given you unlawful immigration advice, you can report it to the Office of the Migration Agents Registration Authority at mara.gov.au.

You can also check whether any agent is registered, for free, on the same site.

---

## Feedback that is not a complaint

If something went well, or you have an idea for how we could do better, email **info@edmark.com.au**. We read all of it.

---

**Edmark Education Pty Ltd**
ACN 700 341 028 · ABN 75 700 341 028
Level 5, 12 Clarke Street, Sunshine VIC 3020
03 7057 3443 · info@edmark.com.au`,
};

export const legalDocs = [privacy, terms, complaints];
