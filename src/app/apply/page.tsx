"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { officerApplicationConfig } from "@/data/config";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const year = formData.get('year') as string;
    const major = formData.get('major') as string;
    const why = formData.get('why') as string;
    const excitementAboutBlockchain = formData.get('excitementAboutBlockchain') as string;

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, year, major, why, excitementAboutBlockchain }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your application. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] to-white/80 flex flex-col">
      {/* Merged Navbar */}
      <div className="w-full flex items-center justify-between px-10 py-6">
        <div className="flex items-center">
          <Image src="/full-logo.png" alt="Blockchain at UCSB Logo" width={180} height={48} priority />
        </div>
        <nav className="flex gap-10">
          <Link href="/" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Home</Link>
          <Link href="/team" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Team</Link>
          <Link href="/events" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Events</Link>
          <Link href="/apply" className="text-xl font-medium text-[var(--primary)] font-semibold">Apply</Link>
          <Link href="/contact" className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">Contact</Link>
        </nav>
      </div>
      <div className="w-full max-w-lg mx-auto py-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[var(--foreground)]">Officer Application</h1>
        
        {officerApplicationConfig.isApplicationOpen && (
          <p className="text-lg text-center text-[var(--foreground)]/80 mb-8 max-w-xl mx-auto">
            Want to be more than just a member of our community? Apply now!
          </p>
        )}

        {!officerApplicationConfig.isApplicationOpen ? (
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl text-center shadow-xl border border-white/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Applications Currently Closed</h2>
            <p className="text-lg text-gray-700 mb-2">
              Unfortunately, we are not accepting officer applications at this moment.
            </p>
            <p className="text-lg text-gray-700">
              Please check back around the beginning of <span className="font-semibold text-[var(--primary)]">{officerApplicationConfig.estimatedNextApplicationDate}</span>.
            </p>
            <Link href="/contact" className="mt-8 inline-block px-8 py-4 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-400 transition-all">
              Contact Us With Questions
            </Link>
          </div>
        ) : submitted ? (
          <div className="bg-green-100/90 text-green-900 p-8 rounded-2xl text-center shadow-xl border border-green-200">
            <span className="text-2xl font-bold block mb-2">Thank you for applying!</span>
            <span>We will be in touch soon.</span>
          </div>
        ) : (
          <form
            className="flex flex-col gap-6 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/40"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input 
                id="fullName"
                name="fullName"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Alice Smith" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input 
                id="email"
                name="email"
                required 
                type="email" 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="you@example.com" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="year" className="block text-gray-700 font-medium mb-1">Year</label>
              <input 
                id="year"
                name="year"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Sophomore" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="major" className="block text-gray-700 font-medium mb-1">Major</label>
              <input 
                id="major"
                name="major"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Computer Science" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="why" className="block text-gray-700 font-medium mb-1">Why do you want to join as an officer?</label>
              <textarea 
                id="why"
                name="why"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Tell us about your interest in blockchain technology and this position..." 
                rows={4} 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="excitementAboutBlockchain" className="block text-gray-700 font-medium mb-1">What excites you the most about blockchain technology?</label>
              <textarea 
                id="excitementAboutBlockchain"
                name="excitementAboutBlockchain"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Share your thoughts on what aspects of blockchain technology you find most exciting..." 
                rows={4} 
              />
            </div>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}
            
            <button 
              type="submit" 
              className="mt-4 px-8 py-4 rounded-full bg-[var(--background)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-400 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
} 