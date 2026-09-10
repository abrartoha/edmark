// Student stories.
//
// None of these render. consentOnFile is false on every record, and the page
// shows nothing until a signed consent exists for that student.
//
// These are real people, named by first name and initial, with their country,
// their course, their institution and their outcome. That is identifiable, and
// publishing it needs their permission in writing — which we do not hold.
export type SuccessStory = {
  name: string;
  course: string;
  university: string;
  origin: string;
  quote: string;
  story: string;
  outcome: string;
  /**
   * Signed consent from the student to publish their story. False on every
   * record: no consents are on file, so nothing renders.
   *
   * Publishing an identifiable student's course, institution and outcome
   * without written permission is a privacy problem before it is a marketing
   * one. Set by hand against a signed document, never by a script.
   */
  consentOnFile: boolean;
  consentDate: string | null;
  /** Whether the outcome described can be evidenced if anyone asks. */
  evidenceOnFile: boolean;
};

export const successStories: SuccessStory[] = [
  {
    name: "Priya S.",
    course: "Bachelor of Nursing",
    university: "Australian Catholic University",
    origin: "India",
    quote:
      "I had no idea where to start. Edmark mapped out three perfect courses, got my application in early, and I received my offer within weeks. Genuinely life-changing.",
    story:
      "Priya came to us overwhelmed by the sheer number of nursing programs available in Australia. She wasn't sure whether to pursue a diploma or a full degree, and she had limited knowledge of the providers available to her. After a single consultation, we identified three programs that matched her clinical interests and budget. We handled her application, secured a partial scholarship, and prepared her for life in Melbourne, from finding affordable accommodation near campus to setting up her health insurance.",
    outcome: "Now working as a registered nurse at a Melbourne hospital",
    consentOnFile: false,
    consentDate: null,
    evidenceOnFile: false,
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
    consentOnFile: false,
    consentDate: null,
    evidenceOnFile: false,
  },
  {
    name: "Arif R.",
    course: "Masters by Research in Engineering",
    university: "Swinburne University of Technology",
    origin: "Bangladesh",
    quote:
      "Writing a research proposal felt impossible until Edmark showed me exactly how to structure it. They understood what Australian universities actually want to see.",
    story:
      "Arif was an experienced engineer in Bangladesh who wanted to transition into research but had never written an academic research proposal. He came to Edmark with a rough idea about sustainable construction materials but no clear methodology or literature review. Over multiple sessions, we helped him define a precise research question, structure a methodology section that demonstrated feasibility, and position his work within the existing literature. We also identified a Swinburne research group working in exactly his area and helped him secure a research scholarship that covered his tuition and provided a living stipend.",
    outcome: "Currently completing his Masters by Research with plans to upgrade to a PhD",
    consentOnFile: false,
    consentDate: null,
    evidenceOnFile: false,
  },
];
