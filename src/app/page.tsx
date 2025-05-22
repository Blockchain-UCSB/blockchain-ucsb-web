import Image from "next/image";
import Link from "next/link";
import { Antic } from "next/font/google";
import Footer from "@/components/Footer";
import { organizationSocials } from "@/data/config";

const antic = Antic({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] to-white/80 flex flex-col">
      {/* Hero Section with absolutely positioned navbar */}
      <section className="relative flex flex-col items-center justify-center min-h-screen">
        {/* Navbar row absolutely at the top */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6">
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
        {/* Centered logo and welcome message */}
        <Image 
          src="/ucsb-logo.png" 
          alt="UCSB Logo" 
          width={300} 
          height={300} 
          className="mb-8 w-[30vw] max-w-[300px] min-w-[120px] h-auto" 
          priority 
        />
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold font-extrabold text-center text-[var(--foreground)] mb-8 ${antic.className}`}>
          Blockchain at UCSB
        </h1>
        <a href="/apply" className="inline-block mt-2 px-8 py-4 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-400 transition-all">Apply to Join</a>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          {/* LinkedIn */}
          <a 
            href={organizationSocials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Twitter/X */}
          <a 
            href={organizationSocials.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="Twitter"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a 
            href={organizationSocials.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="Instagram"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* Email */}
          <a 
            href={`mailto:${organizationSocials.email}`}
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="Email"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Info Section - appears after scrolling */}
      <section className="py-24 px-6 bg-white animate-fadein opacity-0 will-change-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--background)]">About Us</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image on the left */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/about-image.png" 
                  alt="Blockchain at UCSB event" 
                  width={600} 
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div className="md:w-1/2 flex flex-col items-end">
              <div className="text-right max-w-xl">
                <p className="text-xl leading-relaxed mb-6 text-[var(--background)]">
                  Blockchain at UCSB is a student organization that supports UCSB students throughout their crypto journey. We host events, workshops with industry experts, and participate in research projects, hackathons, and various conferences.
                </p>
                <p className="text-xl leading-relaxed text-[var(--background)]">
                  Join us to learn, build, and connect with like-minded individuals passionate about blockchain technology and its applications across various industries.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/team" 
                    className="inline-block px-6 py-3 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-600 transition-all"
                  >
                    Meet Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FifTech Lab Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[var(--background)] to-white/80 animate-fadein opacity-0 will-change-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Research Partnership</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text on the left */}
            <div className="md:w-1/2 flex flex-col">
              <div className="max-w-xl">
                <p className="text-xl leading-relaxed mb-6 text-white">
                  We collaborate with the Foundations of Financial Technology (FifTech) Lab at UCSB, led by Prof. Dahlia Malkhi. The lab researches distributed systems for blockchain infrastructure and explores decentralized finance's impact on economics, regulation, and society.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://fiftech.cs.ucsb.edu/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full bg-white text-[var(--background)] font-bold text-lg shadow-lg hover:scale-105 hover:bg-gray-100 transition-all"
                  >
                    Visit FifTech Lab
                  </a>
                </div>
              </div>
            </div>
            
            {/* Image on the right */}
            <div className="md:w-1/2 md:flex md:items-center md:h-full">
              <div className="rounded-lg overflow-hidden shadow-xl h-auto w-full mt-[-74px]">
                <Image 
                  src="/fftech-lab.png" 
                  alt="FifTech Lab at UCSB" 
                  width={600} 
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Fundamentals Course Section */}
      <section className="py-24 px-6 bg-white animate-fadein opacity-0 will-change-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--background)]">Blockchain Fundamentals</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image on the left */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/fundamentals.jpeg" 
                  alt="Blockchain Fundamentals Course" 
                  width={600} 
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div className="md:w-1/2 flex flex-col">
              <div className="max-w-xl">
                <p className="text-xl leading-relaxed mb-6 text-[var(--background)]">
                  Our annual Blockchain Fundamentals course offers UCSB students a comprehensive introduction to blockchain technology, cryptocurrencies, and decentralized applications.
                </p>
                <p className="text-xl leading-relaxed mb-6 text-[var(--background)]">
                  Taught by club members and industry guests, this course covers everything from basic concepts to advanced topics in Web3 development, tokenomics, and blockchain use cases.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/events" 
                    className="inline-block px-6 py-3 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-600 transition-all"
                  >
                    Learn More About Our Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
