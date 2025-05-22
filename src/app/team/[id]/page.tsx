import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers, TeamMember } from "@/data/teamMembers";
import Footer from "@/components/Footer";

// Get team member by ID from the shared data source
const getTeamMember = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = getTeamMember(params.id);
  
  if (!member) {
    notFound();
  }
  
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
          <Link href="/events" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Events</Link>
          <Link href="/apply" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Apply</Link>
          <Link href="/contact" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Contact</Link>
        </nav>
      </div>
      
      {/* Back button */}
      <div className="max-w-5xl mx-auto w-full px-6 mt-4">
        <Link href="/team" className="flex items-center text-white hover:text-white hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Team
        </Link>
      </div>
      
      {/* Member Profile */}
      <div className="w-full max-w-5xl mx-auto p-6 mt-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border border-white/40">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center md:max-w-xs">
            <div className="h-48 w-48 rounded-full mb-6 overflow-hidden shadow-lg">
              {member.imageUrl ? (
                <Image 
                  src={member.imageUrl} 
                  alt={member.name}
                  width={192} 
                  height={192}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[var(--primary)]/40 to-[var(--primary)]/80 flex items-center justify-center text-6xl font-extrabold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold text-center text-[#2a5d7c] mb-2">{member.name}</h1>
            <h2 className="text-xl text-[var(--primary)] font-medium text-center mb-4">{member.role}</h2>
            
            <div className="mt-4 flex justify-center gap-4">
              {/* LinkedIn */}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              
              {/* Twitter/X */}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-blue-700 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              
              {/* GitHub */}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              
              {/* Email */}
              {member.contact && (
                <a href={`mailto:${member.contact}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Details */}
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#2a5d7c] mb-4">About</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{member.bio}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#2a5d7c] mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#2a5d7c] mb-4">Projects</h3>
              <div className="space-y-4">
                {member.projects.map((project, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="text-lg font-semibold text-[#2a5d7c]">{project.name}</h4>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
} 