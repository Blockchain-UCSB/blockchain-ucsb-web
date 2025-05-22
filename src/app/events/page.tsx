import Image from "next/image";
import Link from "next/link";
import { events } from "@/data/events";
import { format, parseISO } from "date-fns";
import Footer from "@/components/Footer";

export default function Events() {
  // Sort events by date (most recent first)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] to-white/80 flex flex-col">
      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-10 py-6">
        <div className="flex items-center">
          <Image src="/full-logo.png" alt="Blockchain at UCSB Logo" width={180} height={48} priority />
        </div>
        <nav className="flex gap-10">
          <Link href="/" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Home</Link>
          <Link href="/team" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Team</Link>
          <Link href="/events" className="text-xl font-medium text-[var(--primary)] font-semibold">Events</Link>
          <Link href="/apply" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Apply</Link>
          <Link href="/contact" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Contact</Link>
        </nav>
      </div>
      
      {/* Events Content */}
      <div className="w-full max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-[var(--foreground)]">Events</h1>
        <p className="text-xl text-center text-[var(--foreground)]/80 mb-12 max-w-3xl mx-auto">
          Join us for exciting blockchain events at UCSB!<br />
        </p>
        
        <div className="space-y-12">
          {sortedEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/40 transition-all hover:shadow-xl group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-1/3 h-60 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/30 to-[var(--primary)]/5 z-10"></div>
                  <Image 
                    src={event.imageUrl} 
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform group-hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Event Details */}
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-2xl font-bold text-[#2a5d7c] mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {event.title}
                      </h2>
                      <div className="text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full">
                        {format(parseISO(event.date), "MMMM d, yyyy")}
                      </div>
                    </div>
                    <p className="text-base text-gray-700 mb-4">{event.summary}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  {event.link && (
                    <div className="mt-4">
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium transition"
                      >
                        Learn more
                        <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#2a5d7c] mb-4">Want to organize or speak at an event?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for speakers, workshop hosts, and collaborators. 
            If you're interested in organizing or participating in an event, get in touch with us!
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-400 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
} 