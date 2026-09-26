import careerCounsellingPhoto from "../assets/photos/services/career-counselling.jpg";
import testPreparationPhoto from "../assets/photos/services/test-preparation.jpg";
import applicationProcessPhoto from "../assets/photos/services/application-process.jpg";
import loanAssistancePhoto from "../assets/photos/services/loan-assistance.jpg";
import mockInterviewsPhoto from "../assets/photos/services/mock-interviews.jpg";
import visaGuidancePhoto from "../assets/photos/services/visa-guidance.jpg";
import preDeparturePhoto from "../assets/photos/services/pre-departure.jpg";

const services = [
  {
    slug: "career-counselling",
    photo: careerCounsellingPhoto,
    icon: "counsel",
    tone: 0,
    name: "Career Counselling",
    short: "Free one-on-one guidance to pick the right course, country and university for you.",
    description:
      "Before you fill a single application, we sit down with you to understand your academic background, budget and long-term goals. Our counsellors map that against real admission data — not guesswork — to shortlist courses and universities where you genuinely have a strong chance of getting in and thriving.",
    included: [
      "Aptitude and goal-mapping session",
      "Course and university shortlisting based on your profile",
      "Budget planning across tuition, living costs and travel",
      "Realistic timeline built around your target intake",
    ],
  },
  {
    slug: "test-preparation",
    photo: testPreparationPhoto,
    icon: "book",
    tone: 1,
    name: "Test Preparation",
    short: "Structured IELTS, PTE and TOEFL coaching to help you hit the score you need.",
    description:
      "Most rejected applications aren't about grades — they're about a test score that fell half a band short. Our trainers run small batches with weekly mock tests, so you know exactly where you stand and what to fix before test day.",
    included: [
      "IELTS Academic — all four modules with weekly mocks",
      "PTE Academic — computer-based practice on real exam interface",
      "TOEFL iBT — reading, listening, speaking and writing drills",
      "One-on-one speaking practice with detailed feedback",
    ],
  },
  {
    slug: "application-process",
    photo: applicationProcessPhoto,
    icon: "documents",
    tone: 2,
    name: "Application Process",
    short: "End-to-end help with SOPs, LORs, transcripts and university applications.",
    description:
      "A strong profile can still get rejected because of a rushed statement of purpose or a missing document. We manage the entire application process — from document checklists to SOP editing to submission — so nothing falls through the cracks.",
    included: [
      "Statement of Purpose (SOP) drafting and review",
      "Letter of Recommendation (LOR) guidance for your referees",
      "Transcript and document verification checklist",
      "Application tracking across every university you apply to",
    ],
  },
  {
    slug: "loan-assistance",
    photo: loanAssistancePhoto,
    icon: "piggybank",
    tone: 3,
    name: "Loan Assistance",
    short: "Partner-bank introductions and paperwork support for your education loan.",
    description:
      "Financing is usually the most stressful part of studying abroad. We work with partner banks and NBFCs to help you compare secured and unsecured loan options, and prepare the paperwork so your sanction comes through without delays.",
    included: [
      "Comparison of loan offers across partner banks and NBFCs",
      "Guidance on collateral vs. non-collateral loans",
      "Help assembling income, property and co-applicant documents",
      "Support through disbursement and forex planning",
    ],
  },
  {
    slug: "mock-interviews",
    photo: mockInterviewsPhoto,
    photoPosition: "center 5%",
    icon: "interview",
    tone: 2,
    name: "Mock Interviews",
    short: "Practice runs for university and visa interviews before the real thing.",
    description:
      "Whether it's a university admissions panel or a visa officer, interviews are won or lost on preparation. We run realistic mock sessions and give you direct, specific feedback so you walk in confident, not caught off guard.",
    included: [
      "University admission interview practice",
      "Visa interview simulation with common question banks",
      "Body language and communication coaching",
      "Recorded sessions with detailed feedback notes",
    ],
  },
  {
    slug: "visa-guidance",
    photo: visaGuidancePhoto,
    icon: "passport",
    tone: 0,
    name: "Visa Guidance",
    short: "Document checklists, financial proofs and filing support for your student visa.",
    description:
      "Visa rules change often and a single missing document can cost you a semester. Our team stays current with embassy requirements for every country we serve, and personally reviews your file before it's submitted.",
    included: [
      "Country-specific visa document checklist",
      "Financial proof and sponsorship letter review",
      "Visa form filing and appointment scheduling",
      "Guidance on refusal cases and reapplication strategy",
    ],
  },
  {
    slug: "pre-departure-orientation",
    photo: preDeparturePhoto,
    icon: "suitcase",
    tone: 1,
    name: "Pre-Departure Orientation",
    short: "A practical briefing on housing, banking, culture and settling in abroad.",
    description:
      "Getting the visa is not the finish line. Our pre-departure sessions cover the everyday things students usually learn the hard way — from opening a bank account to finding safe accommodation — so your first month abroad feels manageable, not overwhelming.",
    included: [
      "Accommodation search and short-let booking guidance",
      "Airport pickup and local SIM/banking setup checklist",
      "Cultural orientation and academic expectations abroad",
      "Emergency contacts and community/alumni introductions",
    ],
  },
];

export default services;
