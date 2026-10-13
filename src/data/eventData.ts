import { EventItem, ImportantDate } from '../types';

export const SYMPOSIUM_INFO = {
  name: "XMPLARZ’26",
  eventType: "A NATIONAL LEVEL TECHNICAL SYMPOSIUM",
  tagline: "The power to change the world.",
  college: "MAHENDRA INSTITUTE OF TECHNOLOGY",
  department: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
  address: "Mahendhirapuri, Mallasamudram (W), Tiruchengode (Tk), Namakkal Dt – 637503",
  eventDate: "16/10/2026",
  eventDateIso: "2026-10-16",
  registrationFee: "₹250 per head",
  teamRequirement: "Maximum a student can participate in 2 technical events.",
  submissionStarts: "01.10.2026",
  lastSubmissionDate: "14.10.2026",
  onSpotRegistrationNotice: "On-spot registration is available",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcRJed2ZoWB2ZCeM6Isj-LOiQf5p56nhAyLjDfcluTxXIobQ/viewform?usp=publish-editor",
  registrationQrCodeUrl: "/assets/registration-qr.png",
  officialEmail: "xmplarzmitcse2026@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/QZL5ZnhZt8kpyUaLA",
  staffConvenors: [
    { name: "Mr. K. Meiyalakan", designation: "AP/CSE", number: "9597741787" },
    { name: "Mr. R. Ashok Kumar", designation: "AP/CSE", number: "8825419722" },
    { name: "Mr. N. Sankar", designation: "AP/CSE", number: "9952358716" }
  ],
  studentCoordinators: [
    { name: "Arjun S", designation: "Student Coordinator", number: "9360531080" },
    { name: "Sriram K", designation: "Student Coordinator", number: "9944757838" },
    { name: "Dhinesh S", designation: "Student Coordinator", number: "9894566087" }
  ],
  contacts: [
    { name: "Mr. K. Meiyalakan", label: "Staff Convenor", designation: "AP/CSE", number: "9597741787" },
    { name: "Mr. R. Ashok Kumar", label: "Staff Convenor", designation: "AP/CSE", number: "8825419722" },
    { name: "Mr. N. Sankar", label: "Staff Convenor", designation: "AP/CSE", number: "9952358716" },
    { name: "Arjun S", label: "Student Coordinator", designation: "CSE", number: "9360531080" },
    { name: "Sriram K", label: "Student Coordinator", designation: "CSE", number: "9944757838" },
    { name: "Dhinesh S", label: "Student Coordinator", designation: "CSE", number: "9894566087" }
  ],
  formFieldsSummary: [
    "Participant Name",
    "College Name",
    "Department",
    "Year of Study",
    "Email ID",
    "Mobile Number",
    "Selected Technical Event(s)",
    "Project/Paper Title & Abstract",
    "Payment Receipt (₹250/Head)"
  ]
};

export const TECHNICAL_EVENTS: EventItem[] = [
  {
    id: "tech-paper-presentation",
    number: "01",
    name: "PAPER PRESENTATION",
    category: "technical",
    shortDescription: "Present your research papers in standard IEEE format with up to 3 authors per team.",
    fullDescription: "An esteemed platform for students and young researchers to present pioneering research papers, software architectures, and automated tech solutions.",
    iconName: "FileText",
    teamSize: "3 Authors per team",
    format: "IEEE Format",
    rules: [
      "3 Authors per team",
      "Papers in IEEE format",
      "Abstract and full paper must be submitted prior to the deadline",
      "Presentation duration: 8-10 minutes followed by Q&A"
    ]
  },
  {
    id: "tech-project-presentation",
    number: "02",
    name: "PROJECT PRESENTATION",
    category: "technical",
    shortDescription: "Showcase working software or hardware prototypes and innovative solutions.",
    fullDescription: "Demonstrate working hardware/software prototypes, system architectures, and real-world technology solutions before an expert panel.",
    iconName: "Cpu",
    teamSize: "2 Members per team",
    rules: [
      "2 Members per team",
      "Working prototype or live demo is encouraged",
      "Hardware/software requirements must be stated in advance",
      "Presentation duration: 10 minutes total"
    ]
  },
  {
    id: "tech-debugging",
    number: "03",
    name: "DEBUGGING",
    category: "technical",
    shortDescription: "Find errors, rectify logic bugs, and prove your code optimization skills.",
    fullDescription: "Put your analytical skills and syntax precision to the test by diagnosing code errors, rectifying logic bugs, and optimizing code snippets under time constraints.",
    iconName: "Code2",
    teamSize: "1 Member per team",
    rules: [
      "1 Member per team",
      "Time-bound code debugging challenge across programming languages",
      "No external aids or internet search allowed during the contest",
      "Evaluation based on accuracy and completion time"
    ]
  },
  {
    id: "tech-quiz",
    number: "04",
    name: "TECHNICAL QUIZ",
    category: "technical",
    shortDescription: "Test your computer science, technology, and algorithmic trivia knowledge.",
    fullDescription: "A comprehensive technical trivia and rapid-fire quiz testing foundational concepts, computing history, algorithms, operating systems, and cutting-edge tech trends.",
    iconName: "Terminal",
    teamSize: "1 Member per team",
    rules: [
      "1 Member per team",
      "Multiple rounds including preliminary screening and rapid-fire finals",
      "Covers CS fundamentals, algorithms, emerging technologies, and tech trivia",
      "Quiz master's decision will be final"
    ]
  }
];

export const NON_TECHNICAL_EVENTS: EventItem[] = [];

export const WORKSHOP_INFO = {
  title: "Next-Gen Software Engineering",
  subtitle: "Full stack AI Application Delivery with GitHub Actions & LLMs",
  badge: "SPECIAL INDUSTRY WORKSHOP",
  description: "Hands-on session on AI-driven software architecture, automated CI/CD pipelines with GitHub Actions, and shipping production LLM applications.",
  tags: ["GitHub Actions", "LLM Integration", "Full Stack AI", "CI/CD Pipelines"],
  speakers: [
    {
      name: "David Netto",
      role: "TA Leader",
      company: "Knackforge",
      image: "/assets/david-netto.jpg"
    },
    {
      name: "Vijay Manian",
      role: "Head - People Strategy & Culture",
      company: "Amnet ContentSource",
      image: "/assets/vijay-manian.jpg"
    },
    {
      name: "Sumithra Krishnan",
      role: "Sr. Manager HR",
      company: "Works Application (India)",
      image: "/assets/sumithra-krishnan.jpg"
    }
  ]
};

export const IMPORTANT_DATES: ImportantDate[] = [
  {
    date: "14.10.2026",
    title: "Registration Deadline",
    description: "Last date for online registration. (On-spot registration is available)"
  },
  {
    date: "16.10.2026",
    title: "XMPLARZ’26 Event Day",
    description: "The national symposium opens at Mahendra Institute of Technology campus.",
    isMainEvent: true
  }
];
