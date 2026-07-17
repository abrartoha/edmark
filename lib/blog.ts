export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-course-in-australia",
    title: "How to Choose the Right Course in Australia",
    excerpt:
      "With over 1,200 institutions and 22,000 courses, choosing the right program can feel overwhelming. Here's a practical framework to narrow your options.",
    category: "Courses",
    date: "2026-07-14",
    readTime: "7 min read",
  },
  {
    slug: "complete-guide-to-australian-student-visas-2026",
    title: "Complete Guide to Australian Student Visas in 2026",
    excerpt:
      "Everything you need to know about the Subclass 500 student visa — requirements, costs, processing times and common mistakes to avoid.",
    category: "Visa",
    date: "2026-07-07",
    readTime: "10 min read",
  },
  {
    slug: "top-scholarships-for-international-students-in-australia",
    title: "Top Scholarships for International Students in Australia",
    excerpt:
      "From government-funded Australia Awards to university-specific grants, here are the scholarships worth applying for — and how to win them.",
    category: "Scholarships",
    date: "2026-06-30",
    readTime: "8 min read",
  },
  {
    slug: "cost-of-living-in-melbourne-student-guide",
    title: "Cost of Living in Melbourne: A Student's Guide",
    excerpt:
      "A realistic breakdown of what you'll spend on rent, food, transport and fun in Melbourne — plus tips to stretch your budget further.",
    category: "Student Life",
    date: "2026-06-23",
    readTime: "6 min read",
  },
  {
    slug: "ielts-vs-pte-which-english-test-should-you-take",
    title: "IELTS vs PTE: Which English Test Should You Take?",
    excerpt:
      "Both tests are accepted by Australian universities, but they suit different strengths. Here's how to decide which one gives you the best shot.",
    category: "Test Prep",
    date: "2026-06-16",
    readTime: "5 min read",
  },
  {
    slug: "how-to-write-a-research-proposal-for-australian-universities",
    title: "How to Write a Research Proposal for Australian Universities",
    excerpt:
      "A strong research proposal is the make-or-break element of any Masters by Research or PhD application. Here's exactly how to write one that gets accepted.",
    category: "Research",
    date: "2026-07-17",
    readTime: "12 min read",
  },
];
