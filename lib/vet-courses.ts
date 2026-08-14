// ---------------------------------------------------------------------------
// VOCATIONAL COURSE DATA
// Lifted out of the services page so the course catalogue can read one list
// rather than parsing a page component. Same shape as the higher-education
// courses, so both feed the same card and the same browser.
// ---------------------------------------------------------------------------
import type { Course } from "./higher-education";

export const vetCourses: Course[] = [
      {
        name: "Certificate III in Carpentry (CPC30220)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 9000,
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
        name: "Certificate III in Individual Support (Ageing and Disability) (CHC33021)",
        duration: "6 to 12 months",
        tuitionMin: 4000,
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
        name: "Certificate III in Early Childhood Education and Care (CHC30125)",
        duration: "6 to 12 months",
        tuitionMin: 7500,
        tuitionMax: 15000,
        entryRequirement:
          "Year 12 or equivalent. Working with Children Check and placement hours are required.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Early Childhood Education",
      },
      {
        name: "Diploma of Early Childhood Education and Care (CHC50125)",
        duration: "56 weeks to 2 years",
        tuitionMin: 8000,
        tuitionMax: 26000,
        entryRequirement:
          "Year 12 or equivalent. Qualifies you as a lead educator or room leader.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Multiple intakes a year at most providers",
        field: "Early Childhood Education",
      },
      {
        name: "Certificate III in Joinery (CPC31920)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Bricklaying and Blocklaying (CPC33020)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Wall and Floor Tiling (CPC31320)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Solid Plastering (CPC31020)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Painting and Decorating (CPC30620)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Concreting (CPC30320)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Cabinet Making and Timber Technology (MSF30322)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Roof Plumbing (CPC32620)",
        duration: "3 to 4 years, including on-the-job training",
        tuitionMin: 9000,
        tuitionMax: 22000,
        entryRequirement:
          "Year 12 or equivalent. A licensed trade, and licensing is regulated state by state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate IV in Building and Construction (CPC40120)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent, or a related Certificate III for credit. Commonly used toward builder registration, which is assessed state by state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Certificate III in Instrumentation and Control (UEE31220)",
        duration: "3 to 4 years, including on-the-job training",
        tuitionMin: 14000,
        tuitionMax: 22000,
        entryRequirement:
          "Year 12 or equivalent. A licensed trade, and licensing is regulated state by state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Electrical & Refrigeration",
      },
      {
        name: "Certificate III in Air Conditioning and Refrigeration (UEE32225)",
        duration: "3 to 4 years, including on-the-job training",
        tuitionMin: 14000,
        tuitionMax: 22000,
        entryRequirement:
          "Year 12 or equivalent. A licensed trade, and licensing is regulated state by state.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Electrical & Refrigeration",
      },
      {
        name: "Certificate III in Engineering - Fabrication Trade (MEM31922)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Engineering & Fabrication",
      },
      {
        name: "Certificate III in Engineering - Mechanical Trade (MEM30219)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Engineering & Fabrication",
      },
      {
        name: "Advanced Diploma of Engineering (MEM60122)",
        duration: "18 months to 2 years",
        tuitionMin: 16000,
        tuitionMax: 26000,
        entryRequirement:
          "Year 12 or equivalent, or a related Certificate III or IV for credit. A recognised credit pathway into an engineering degree at several universities.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Engineering & Fabrication",
      },
      {
        name: "Certificate III in Heavy Commercial Vehicle Mechanical Technology (AUR31120)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Automotive",
      },
      {
        name: "Certificate III in Automotive Electrical Technology (AUR30320)",
        duration: "2 to 3 years, including on-the-job training",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Automotive",
      },
      {
        name: "Certificate III in Glass and Glazing (MSF30422)",
        duration: "48 weeks",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent. A nationally recognised trade qualification delivered by a registered training organisation. Material fees are charged separately.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Diploma of Building and Construction (Building) (CPC50220)",
        duration: "48 weeks",
        tuitionMin: 9000,
        tuitionMax: 20000,
        entryRequirement:
          "Year 12 or equivalent, or a related Certificate III for credit. Commonly used toward builder registration, which is assessed state by state. Material fees are charged separately.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Construction & Trades",
      },
      {
        name: "Diploma of Business (BSB50120)",
        duration: "52 weeks",
        tuitionMin: 5000,
        tuitionMax: 16000,
        entryRequirement:
          "Year 12 or equivalent. Covers management, operations and business planning, and can carry credit into a bachelor degree. Material fees are charged separately.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Business",
      },      {
        name: "Graduate Diploma of Management (Learning) (BSB80120)",
        duration: "52 weeks",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "Australian Year 12 or equivalent. A vocational qualification at graduate diploma level, aimed at organisational learning and capability development. Application and material fees are charged separately.",
        englishRequirement: "IELTS Academic 6.0, or PTE Academic 50.",
        nextIntake: "Monthly intakes",
        field: "Business",
      },
      {
        name: "Certificate IV in Disability Support (CHC43121)",
        duration: "30 weeks",
        tuitionMin: 5000,
        tuitionMax: 8000,
        entryRequirement:
          "A Certificate III in Individual Support is a prerequisite, plus Year 11 or 12 transcripts. Includes 120 hours of work placement. The lower fee is the onshore rate; applying from overseas costs more.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Certificate IV in Mental Health Peer Work (CHC43515)",
        duration: "38 weeks",
        tuitionMin: 5000,
        tuitionMax: 8000,
        entryRequirement:
          "Year 11 or 12 transcripts. For workers with lived experience of mental illness, as a consumer or a carer. Includes 80 hours of work placement. The lower fee is the onshore rate; applying from overseas costs more.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Diploma of Mental Health (CHC53315)",
        duration: "78 weeks",
        tuitionMin: 11500,
        tuitionMax: 16500,
        entryRequirement:
          "Year 11 or 12 transcripts. Includes 400 hours of work placement. The lower fee is the onshore rate; applying from overseas costs more.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },
      {
        name: "Diploma of Community Services (Case Management, Child, Youth and Family Welfare) (CHC52025)",
        duration: "78 weeks",
        tuitionMin: 11500,
        tuitionMax: 16500,
        entryRequirement:
          "Year 11 or 12 transcripts. Covers case management across mental health, homelessness, family violence and child protection settings. Includes 400 hours of work placement. The lower fee is the onshore rate; applying from overseas costs more.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Health & Community Care",
      },

      {
        name: "Certificate III in Hospitality (SIT30622)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 18000,
        entryRequirement:
          "Year 12 or equivalent. Front-of-house service across cafes, bars, hotels and restaurants, and the usual entry point to a hospitality career.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Certificate III in Patisserie (SIT31021)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 18000,
        entryRequirement:
          "Year 12 or equivalent. Specialist training in pastries, cakes, desserts and breads for work as a pastry cook or patissier.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Certificate IV in Patisserie (SIT40721)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "A Certificate III in Patisserie or equivalent experience. Advanced technique plus the supervisory skills for senior pastry roles.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Certificate IV in Kitchen Management (SIT40521)",
        duration: "12 to 18 months",
        tuitionMin: 12000,
        tuitionMax: 20000,
        entryRequirement:
          "A Certificate III in Commercial Cookery or equivalent. Supervisory cookery and kitchen operations, including rostering, menu costing and food safety.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Advanced Diploma of Hospitality Management (SIT60322)",
        duration: "18 months to 2 years",
        tuitionMin: 16000,
        tuitionMax: 26000,
        entryRequirement:
          "A diploma in a hospitality field, or equivalent industry experience. Senior management, strategy and business planning for leadership roles.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Hospitality & Cookery",
      },
      {
        name: "Certificate IV in School Based Education Support (CHC40221)",
        duration: "12 months",
        tuitionMin: 8000,
        tuitionMax: 15000,
        entryRequirement:
          "Year 12 or equivalent. Prepares you to work as an education support worker or teacher's aide, assisting teachers and students in schools.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Early Childhood Education",
      },
      {
        name: "Diploma of School Age Education and Care (CHC50221)",
        duration: "18 months to 2 years",
        tuitionMin: 8000,
        tuitionMax: 18000,
        entryRequirement:
          "Year 12 or equivalent, or a related Certificate III for credit. Supporting school-aged children in before and after school programs and vacation care.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Rolling intakes at most RTOs",
        field: "Early Childhood Education",
      },
];
