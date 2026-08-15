// ---------------------------------------------------------------------------
// LEGAL DOCUMENTS
//
// Privacy, terms and complaints, held as text rather than as JSX so the
// wording can be edited without touching a component. Written by the business,
// reproduced verbatim; do not reword any of it in passing.
//
// The overseas-disclosure section describes categories of recipient rather
// than naming the vendors behind them, which is the usual form and means a
// change of host or mail provider does not require a policy revision. Keep it
// that way: naming a supplier in a public policy tells the internet what the
// business runs on, and it dates the moment one is swapped out.
// ---------------------------------------------------------------------------

export type LegalDoc = {
  slug: string;
  /** Page title, also the H1. The body must not repeat it. */
  title: string;
  subtitle: string;
  description: string;
  body: string;
};

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  subtitle:
    "What we collect, why we collect it, who we give it to, and how you can see or correct it.",
  description:
    "How Edmark Education collects, uses, discloses and retains your personal information, who we disclose it to, and how to access, correct or complain about it.",
  body: `**Last updated:** 16 August 2026

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

## Cookies and analytics

This website uses cookies and similar technology to remember your preferences and to understand how the site is used. We use Google Analytics for aggregate visitor statistics: how many people visit, which pages they read, and roughly where they are in the world. We do not use it to identify you.

You can turn cookies off in your browser settings. Some parts of the site may not work properly if you do.

We do not run advertising or remarketing pixels on this website. Nothing you do here is used to follow you around other sites.

## How long we keep it

We keep your file for seven years after your last contact with us, then destroy or de-identify it. We may keep some records longer where an institution agreement or the law requires it.

## Seeing and correcting your information

You can ask us for a copy of the personal information we hold about you, and you can ask us to correct anything that is wrong. Email **info@edmark.com.au** and we will respond within 30 days.

There is no charge for asking. If your request takes significant work, we will tell you the cost before we start.

You can also ask us to delete your information. We will do so unless we are required to keep it.

## Complaints

If you think we have mishandled your personal information, email **info@edmark.com.au** with "Privacy complaint" in the subject line. We will acknowledge it and give you a written response.

Our full complaints process, including what to do if you are not satisfied with our answer, is at [edmark.com.au/complaints](/complaints).

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
  body: `**Last updated:** 16 August 2026

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

We charge you nothing. There is no consultation fee, no application fee, no service fee and no success fee.

Money you pay during the process is paid to someone else, not to us: tuition and application fees to the institution, your premium to the OSHC insurer, test fees to PTE or NAATI, and course fees to a Professional Year provider. You pay those directly, and their terms and refund policies apply.

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
    "How to raise a complaint with Edmark Education, when you will hear back, how it is handled, and how to ask for it to be reviewed if our answer does not settle it.",
  body: `**Last updated:** 16 August 2026

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

1. **We acknowledge it** within 2 business days. You will get a name and a direct contact.
2. **We look into it.** We read the file, talk to the staff involved, and come back to you if we need more detail.
3. **We respond in writing** within 20 business days. If it is going to take longer, we will tell you why and give you a new date.
4. **We tell you what we found**, what we are doing about it, and what to do if you disagree.

If our answer does not settle it, you can ask for the matter to be reviewed by a senior member of our team who was not involved the first time. Ask in writing and we will arrange it.

We keep a record of every complaint and what came of it, so the same thing does not keep happening.

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
