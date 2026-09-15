import { EventItem, ImportantDate } from '../types';

export const SYMPOSIUM_INFO = {
  name: "XMPLARZ’26",
  eventType: "A NATIONAL LEVEL TECHNICAL SYMPOSIUM",
  tagline: "The power to change the world.",
  college: "MAHENDRA INSTITUTE OF TECHNOLOGY",
  department: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
  address: "Mahendhirapuri, Mallasamudram (W), Tiruchengode (Tk), Namakkal Dt – 637503",
  eventDate: "30th SEP 2026",
  eventDateIso: "2026-09-30",
  registrationFee: "₹250 per head",
  teamRequirement: "Pay ₹250 for one participant and participate in all eligible events.",
  submissionStarts: "20.09.2026",
  lastSubmissionDate: "26.09.2026",
  googleFormUrl: "[PASTE GOOGLE FORM URL HERE]",
  officialEmail: "xmplarzmitcse2026@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/QZL5ZnhZt8kpyUaLA",
  contacts: [
    { number: "6380570376", label: "Student Coordinator 1" },
    { number: "9944757838", label: "Student Coordinator 2" },
    { number: "9894566087", label: "Staff Coordinator" }
  ],
  formFieldsSummary: [
    "Participant Name",
    "College Name",
    "Department",
    "Year of Study",
    "Email ID",
    "Mobile Number",
    "Selected Technical Event(s)",
    "Selected Non-Technical Event(s)",
    "Project/Paper Title & Abstract",
    "Payment Receipt (₹250/Head)"
  ]
};

export const TECHNICAL_EVENTS: EventItem[] = [
  {
    id: "tech-paper-presentation",
    number: "01",
    name: "Paper Presentation",
    category: "technical",
    shortDescription: "Present your ideas and research in IEEE format.",
    fullDescription: "An esteemed platform for young researchers and students to present pioneering ideas, methodologies, and technical findings in standardized IEEE format.",
    iconName: "FileText",
    teamSize: "3 Members Compulsory",
    format: "IEEE Format"
  },
  {
    id: "tech-project-presentation",
    number: "02",
    name: "Project Presentation",
    category: "technical",
    shortDescription: "Showcase your technical project and demonstrate your solution.",
    fullDescription: "Demonstrate working hardware/software prototypes, software architectures, and real-world technology solutions before an expert panel.",
    iconName: "Cpu",
    teamSize: "2 Members Compulsory"
  },
  {
    id: "tech-debugging",
    number: "03",
    name: "Debugging",
    category: "technical",
    shortDescription: "Find errors, solve problems, and prove your programming skills.",
    fullDescription: "Put your analytical skills and syntax precision to the test by diagnosing code errors, rectifying logic bugs, and optimizing code snippets under time constraints.",
    iconName: "Code2",
    teamSize: "1 Member (Individual)"
  },
  {
    id: "tech-quiz",
    number: "04",
    name: "Technical Quiz",
    category: "technical",
    shortDescription: "Test your knowledge across computer science and technology.",
    fullDescription: "A comprehensive technical trivia and rapid-fire quiz testing foundational concepts, computing history, algorithms, operating systems, and cutting-edge tech trends.",
    iconName: "Terminal",
    teamSize: "1 Member (Individual)"
  }
];

export const NON_TECHNICAL_EVENTS: EventItem[] = [
  {
    id: "nontech-ad-zap",
    number: "01",
    name: "Ad-Zap",
    category: "non-technical",
    shortDescription: "A creative advertising challenge focused on presentation and quick thinking.",
    fullDescription: "Step into the shoes of creative marketers. Conceive, script, and pitch an unconventional product or tech concept with impromptu wit and theatrical flair. Note: Participation in at least one technical event is compulsory.",
    iconName: "Sparkles",
    teamSize: "1 Member (Individual)"
  },
  {
    id: "nontech-connection",
    number: "02",
    name: "Connection",
    category: "non-technical",
    shortDescription: "A fun challenge that tests observation, logic, and teamwork.",
    fullDescription: "Decipher interconnected visual puzzles, bridge cryptic technical imagery, and unravel underlying concepts through lateral deduction. Note: Participation in at least one technical event is compulsory.",
    iconName: "Link2",
    teamSize: "1 Member (Individual)"
  },
  {
    id: "nontech-tech-charades",
    number: "03",
    name: "Tech-Charades",
    category: "non-technical",
    shortDescription: "Guess technology-related terms through creative acting and communication.",
    fullDescription: "Test your non-verbal communication skills by acting out complex computing jargon, hardware components, and software applications without speaking. Note: Participation in at least one technical event is compulsory.",
    iconName: "Eye",
    teamSize: "1 Member (Individual)"
  },
  {
    id: "nontech-guess-the-technology",
    number: "04",
    name: "Guess the Technology",
    category: "non-technical",
    shortDescription: "Identify technologies through clues, visuals, and hints.",
    fullDescription: "An engaging puzzle challenge where teams identify breakthrough algorithms, computing pioneers, tech gadgets, and system architectures. Note: Participation in at least one technical event is compulsory.",
    iconName: "HelpCircle",
    teamSize: "1 Member (Individual)"
  }
];

export const IMPORTANT_DATES: ImportantDate[] = [
  {
    date: "20.09.2026",
    title: "Submission Starts",
    description: "Official online portal open for registrations and abstract submissions."
  },
  {
    date: "30.09.2026",
    title: "XMPLARZ’26 Event Day",
    description: "The national symposium opens at Mahendra Institute of Technology campus.",
    isMainEvent: true
  }
];
