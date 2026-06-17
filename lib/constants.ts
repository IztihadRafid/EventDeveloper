export interface EventItem {
  slug: string;
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;

  description: string;
  overview: string;
  venue: string;
  mode: "offline" | "online" | "hybrid";
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
}
export const events: EventItem[] = [
  {
    slug: "react-conf-2026",
    image: "/images/event1.webp",
    title: "React Conf 2026",
    location: "San Francisco, CA",
    date: "2026-03-15",
    time: "09:00",

    description: "The biggest React community conference featuring core team updates, performance insights, and ecosystem talks.",
    overview: "A full-day event for React developers to explore the future of React and modern frontend architecture.",
    venue: "Moscone Center",
    mode: "offline",
    audience: "Frontend Developers, React Engineers",
    agenda: ["Keynote", "React 2026 Updates", "Performance Optimization", "Networking"],
    organizer: "React Community",
    tags: ["react", "frontend", "javascript", "conference"],
  },

  {
    slug: "nextjs-summit",
    image: "/images/event2.webp",
    title: "Next.js Summit",
    location: "Austin, TX",
    date: "2026-04-22",
    time: "10:00",

    description: "Explore the latest features of Next.js including server actions, rendering strategies, and full-stack capabilities.",
    overview: "A summit focused on modern full-stack development using Next.js.",
    venue: "Austin Convention Center",
    mode: "offline",
    audience: "Full Stack Developers",
    agenda: ["Opening Talk", "App Router Deep Dive", "Server Actions", "Case Studies"],
    organizer: "Vercel Community",
    tags: ["nextjs", "react", "fullstack", "web"],
  },

  {
    slug: "javascript-world",
    image: "/images/event3.webp",
    title: "JavaScript World Conference",
    location: "New York, NY",
    date: "2026-05-08",
    time: "08:30",

    description: "A global JavaScript event covering modern JS, frameworks, and advanced engineering patterns.",
    overview: "Meet JavaScript experts and learn modern development practices.",
    venue: "Javits Center",
    mode: "offline",
    audience: "JavaScript Developers",
    agenda: ["ESNext Features", "Architecture Patterns", "Framework Wars", "Q&A"],
    organizer: "JS World Org",
    tags: ["javascript", "web", "conference"],
  },

  {
    slug: "ai-hackathon-2026",
    image: "/images/event4.webp",
    title: "AI Innovation Hackathon",
    location: "Seattle, WA",
    date: "2026-06-14",
    time: "00:00",

    description: "A 48-hour hackathon where developers build AI-powered real-world solutions.",
    overview: "Build innovative AI applications and compete for prizes.",
    venue: "Microsoft Reactor Seattle",
    mode: "hybrid",
    audience: "AI Developers, Students, Engineers",
    agenda: ["Team Formation", "Problem Statement", "Build Phase", "Final Demo"],
    organizer: "AI Builders Hub",
    tags: ["ai", "ml", "hackathon", "innovation"],
  },

  {
    slug: "web3-developer-meetup",
    image: "/images/event5.webp",
    title: "Web3 Developer Meetup",
    location: "Miami, FL",
    date: "2026-07-20",
    time: "18:00",

    description: "A meetup for blockchain developers exploring Web3 technologies and decentralized apps.",
    overview: "Discuss blockchain, smart contracts, and decentralized systems.",
    venue: "Miami Tech Hub",
    mode: "offline",
    audience: "Blockchain Developers",
    agenda: ["Web3 Trends", "Smart Contracts", "DApp Demo", "Networking"],
    organizer: "Web3 Collective",
    tags: ["web3", "blockchain", "crypto"],
  },

  {
    slug: "fullstack-conference",
    image: "/images/event6.webp",
    title: "Full Stack Conference",
    location: "Denver, CO",
    date: "2026-08-12",
    time: "09:00",

    description: "A conference covering both frontend and backend development best practices.",
    overview: "Learn modern full-stack architectures and scalable systems.",
    venue: "Denver Expo Center",
    mode: "offline",
    audience: "Full Stack Developers",
    agenda: ["Frontend Scaling", "Backend APIs", "Database Design", "System Design"],
    organizer: "FullStack Org",
    tags: ["fullstack", "backend", "frontend"],
  },

  {
    slug: "devops-unleashed",
    image: "/images/event7.webp",
    title: "DevOps Unleashed",
    location: "Chicago, IL",
    date: "2026-09-05",
    time: "08:00",

    description: "An event focused on CI/CD, cloud infrastructure, and DevOps automation practices.",
    overview: "Master modern DevOps tools and deployment pipelines.",
    venue: "Chicago Tech Hall",
    mode: "offline",
    audience: "DevOps Engineers",
    agenda: ["CI/CD Pipelines", "Kubernetes", "Cloud Automation", "Monitoring"],
    organizer: "DevOps Community",
    tags: ["devops", "cloud", "kubernetes"],
  },

  {
    slug: "cybersecurity-conference",
    image: "/images/event8.webp",
    title: "Cybersecurity Conference",
    location: "Boston, MA",
    date: "2026-11-02",
    time: "08:00",

    description: "A deep dive into modern cybersecurity threats, defense systems, and ethical hacking.",
    overview: "Learn how to protect systems from modern cyber threats.",
    venue: "Boston Convention Center",
    mode: "offline",
    audience: "Security Engineers, Ethical Hackers",
    agenda: ["Threat Analysis", "Pen Testing", "Security Tools", "Case Studies"],
    organizer: "CyberSec Alliance",
    tags: ["cybersecurity", "hacking", "security"],
  },

  {
    slug: "data-science-hackathon",
    image: "/images/event9.webp",
    title: "Data Science Hackathon",
    location: "San Diego, CA",
    date: "2026-12-07",
    time: "00:00",

    description: "A competitive hackathon focused on solving real-world data science problems.",
    overview: "Work with data, build ML models, and present insights.",
    venue: "UC San Diego Innovation Lab",
    mode: "hybrid",
    audience: "Data Scientists, ML Engineers",
    agenda: ["Data Exploration", "Model Building", "Evaluation", "Presentation"],
    organizer: "DataX Community",
    tags: ["data science", "machine learning", "ai"],
  },

  {
    slug: "cloud-native-meetup",
    image: "/images/event10.webp",
    title: "Cloud Native Meetup",
    location: "Portland, OR",
    date: "2025-01-15",
    time: "18:30",

    description: "A meetup focused on cloud-native architectures and modern deployment strategies.",
    overview: "Explore Kubernetes, microservices, and cloud infrastructure.",
    venue: "Portland Tech Space",
    mode: "offline",
    audience: "Cloud Engineers",
    agenda: ["Kubernetes Basics", "Microservices", "Scaling Systems", "Networking"],
    organizer: "Cloud Native Group",
    tags: ["cloud", "kubernetes", "devops"],
  },
];