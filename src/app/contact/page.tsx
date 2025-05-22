"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const organization = formData.get('organization') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, organization, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError("There was an error sending your message. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
          <Link href="/contact" className="text-xl font-medium text-[var(--primary)] font-semibold">Contact</Link>
        </nav>
      </div>

      <div className="w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[var(--foreground)]">Contact Us</h1>
        <p className="text-lg text-center text-[var(--foreground)]/80 mb-8 max-w-xl mx-auto">
          Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="bg-green-100/90 text-green-900 p-8 rounded-2xl text-center shadow-xl border border-green-200">
            <span className="text-2xl font-bold block mb-2">Message sent!</span>
            <span>Thank you for reaching out. We'll respond to your inquiry shortly.</span>
          </div>
        ) : (
          <form
            className="flex flex-col gap-6 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/40"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input 
                id="name"
                name="name"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Your Name" 
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
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <input 
                id="subject"
                name="subject"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="What's this regarding?" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="organization" className="block text-gray-700 font-medium mb-1">What company/university are you from?</label>
              <input 
                id="organization"
                name="organization"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="UCSB, Google, etc." 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea 
                id="message"
                name="message"
                required 
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition text-gray-800" 
                placeholder="Your message here..." 
                rows={6} 
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
} 