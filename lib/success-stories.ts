export type SuccessStory = {
  name: string;
  course: string;
  university: string;
  origin: string;
  quote: string;
  story: string;
  outcome: string;
};

export const successStories: SuccessStory[] = [
  {
    name: "Priya S.",
    // TODO: confirm Priya's actual course and provider. University of
    // Melbourne does not offer an undergraduate Bachelor of Nursing, so the
    // previous pairing was not a claim we could stand behind.
    course: "Bachelor of Nursing",
    university: "Melbourne, Victoria",
    origin: "India",
    quote:
      "I had no idea where to start. Edmark mapped out three perfect courses, got my application in early, and I received my offer within weeks. Genuinely life-changing.",
    story:
      "Priya came to us overwhelmed by the sheer number of nursing programs available in Australia. She wasn't sure whether to pursue a diploma or a full degree, and she had limited knowledge of the providers available to her. After a single consultation, we identified three programs that matched her clinical interests and budget. We handled her application, secured a partial scholarship, and prepared her for life in Melbourne, from finding affordable accommodation near campus to setting up her health insurance.",
    outcome: "Now working as a registered nurse at a Melbourne hospital",
  },
  {
    name: "Lucia F.",
    course: "Diploma of Business",
    university: "Melbourne Polytechnic",
    origin: "Brazil",
    quote:
      "Professional, responsive and genuinely caring. Mahin and the team answered every question and made a stressful process feel simple.",
    story:
      "Lucia was a career changer in her late twenties who wanted to study business but felt uncertain about committing to a full bachelor's degree in a new country. We recommended starting with a diploma program that offered a guaranteed pathway to a bachelor's degree with full credit transfer. This gave her the confidence to take the first step, and she thrived in the hands-on learning environment.",
    outcome: "Now pursuing a Bachelor of Business with plans to start her own consultancy",
  },
  {
    name: "Ahmed H.",
    course: "ELICOS + Diploma of IT pathway",
    university: "RMIT University",
    origin: "Bangladesh",
    quote:
      "My English wasn't strong enough for direct entry, but Edmark showed me a pathway I didn't know existed. Now I'm at one of the best tech universities in Australia.",
    story:
      "Ahmed dreamed of studying IT in Australia but his IELTS score fell short of direct entry requirements. Instead of giving up, we designed a pathway: starting with an English language course (ELICOS), progressing to a Diploma of IT, and then articulating into a bachelor's degree at RMIT with full credit. This structured approach gave Ahmed the time to build his language skills while progressing toward his degree, without losing a year.",
    outcome: "Currently completing his Bachelor of IT at RMIT with a high distinction average",
  },
  {
    name: "Dr. Fatima N.",
    course: "PhD in Computer Science",
    university: "University of Melbourne",
    origin: "Pakistan",
    quote:
      "I had been rejected twice before I came to Edmark. They completely restructured my research proposal, helped me find the perfect supervisor, and I got accepted with a full scholarship. I couldn't believe it.",
    story:
      "Fatima had a strong honours degree and two published papers, but her previous PhD applications had been rejected because her research proposals were too broad and didn't align with any supervisor's expertise. We worked with her over six weeks to narrow her research focus, identify three potential supervisors at the University of Melbourne whose work directly complemented her interests, and rewrite her proposal from scratch. We also helped her craft a professional approach email that led to a meeting with her now-supervisor before she even submitted her formal application.",
    outcome: "Completed her PhD with a full RTP scholarship and now works as a postdoctoral researcher",
  },
  {
    name: "Tanvir R.",
    course: "Masters by Research in Engineering",
    university: "Swinburne University of Technology",
    origin: "Bangladesh",
    quote:
      "Writing a research proposal felt impossible until Edmark showed me exactly how to structure it. They understood what Australian universities actually want to see.",
    story:
      "Tanvir was an experienced engineer in Bangladesh who wanted to transition into research but had never written an academic research proposal. He came to Edmark with a rough idea about sustainable construction materials but no clear methodology or literature review. Over multiple sessions, we helped him define a precise research question, structure a methodology section that demonstrated feasibility, and position his work within the existing literature. We also identified a Swinburne research group working in exactly his area and helped him secure a research scholarship that covered his tuition and provided a living stipend.",
    outcome: "Currently completing his Masters by Research with plans to upgrade to a PhD",
  },
];
