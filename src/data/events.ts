export interface Event {
  id: string;
  title: string;
  date: string; // ISO format date
  location: string;
  summary: string;
  imageUrl: string;
  link?: string; // Optional link to event details or registration
}

// Events ordered by date (most recent first)
export const events: Event[] = [
  {
    id: "fbc-25",
    title: "FBC'25 Summit",
    date: "2025-05-17",
    location: "UCSB Campus",
    summary: "Our second iteration of the yearly blockchain summit. FBC 2025 formalized the format and paved the way for the future summits to come.",
    imageUrl: "/events/fbc25.jpeg",
    link: "https://ucsbblockchainsummit2025.com/"
  },
  {
    id: "bf-2025",
    title: "Blockchain Fundamentals 2025",
    date: "2025-03-15",
    location: "North Hall",
    summary: "Our yearly blockchain fundamentals course!",
    imageUrl: "/events/bf2025.jpeg"
  },
  {
    id: "defi-2025",
    title: "Decentralized Finance 2025",
    date: "2025-01-15",
    location: "Phelps Hall",
    summary: "Our first iteration of the decentralized finance course! We covered the basics like stablecoins, exchanges, automated market makers, real-world assets, and more.",
    imageUrl: "/events/defi2025.jpg"
  },
]; 