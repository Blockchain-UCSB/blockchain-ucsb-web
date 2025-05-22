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
  }
]; 