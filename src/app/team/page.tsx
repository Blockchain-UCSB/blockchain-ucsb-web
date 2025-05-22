import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/teamMembers";
import Footer from "@/components/Footer";

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] to-white/80 flex flex-col">
      {/* Merged Navbar */}
      <div className="w-full flex items-center justify-between px-10 py-6">
        <div className="flex items-center">
          <Image src="/full-logo.png" alt="Blockchain at UCSB Logo" width={180} height={48} priority />
        </div>
        <nav className="flex gap-10">
          <Link href="/" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Home</Link>
          <Link href="/team" className="text-xl font-medium text-[var(--primary)] font-semibold">Team</Link>
          <Link href="/events" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Events</Link>
          <Link href="/apply" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Apply</Link>
          <Link href="/contact" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Contact</Link>
        </nav>
      </div>
      <div className="w-full max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-[var(--foreground)]">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Link 
              href={`/team/${member.id}`} 
              key={member.id} 
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white cursor-pointer group"
            >
              <div className="h-36 w-36 rounded-full mb-6 overflow-hidden flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                {member.imageUrl ? (
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name}
                    width={144} 
                    height={144}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--primary)]/40 to-[var(--primary)]/70 flex items-center justify-center text-5xl font-extrabold text-white group-hover:from-[var(--primary)]/60 group-hover:to-[var(--primary)] transition-all">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold mb-2 text-[#2a5d7c] group-hover:text-[#1a4a6b] transition-colors text-center w-full">
                {member.name}
              </div>
              <div className="text-lg text-[#2a5d7c]/90 font-medium mb-3 text-center w-full">
                {member.role}
              </div>
              <div className="text-blue-500 group-hover:text-blue-700 transition-colors text-center text-sm">
                Click to view full profile
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
} 