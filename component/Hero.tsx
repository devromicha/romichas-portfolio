'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const roles = ['Frontend Developer.', 'MERN Stack Developer.']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const displayed = roles[roleIndex].slice(0, charIndex)

  // Typewriter
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45)
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative  flex items-center overflow-hidden"
    >
     
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #c8f135 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      {/* ── Main Layout ── */}
      <div className="relative z-10 w-full  flex flex-col md:flex-row items-center justify-between gap-14 pt-24 pb-16">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 flex flex-col items-start">

          {/* Hello I'm */}
          <p className="text-white/40 text-sm md:text-base font-mono tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="font-syne text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#c8f135] via-green-400 to-[#00e5ff] 
bg-clip-text text-transparent tracking-tight leading-none mb-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      Romicha
          </h1>

          {/* Typewriter role */}
          <div className="h-[40px] flex items-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl md:text-2xl font-syne font-bold text-[#c8f135]">
              {displayed}
              <span
                className="inline-block w-[2px] h-[1.1em] bg-[#c8f135] ml-[2px] align-middle"
                style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </h2>
          </div>

          {/* Description */}
          <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-md mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate Full Stack Developer | MERN Enthusiast.
            <br />
            Turning ideas into interactive web experiences with clean, efficient,
            and modern code. I thrive on building solutions that are not just
            functional, but memorable.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#c8f135] to-[#a3e635] text-black font-syne font-bold text-sm tracking-wide hover:scale-105 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>

           <button
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-6 py-3 rounded-md 
    bg-white/5 backdrop-blur-md border border-[#c8f135]/40 
    text-[#c8f135] font-syne font-bold text-sm tracking-wide 
    hover:bg-[#c8f135]/10 hover:border-[#c8f135] 
    transition-all duration-300 shadow-md"
  >
    Get In Touch
  </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* GitHub */}
            <a href="#" className="text-white/40 hover:text-[#c8f135] transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white/40 hover:text-[#c8f135] transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Phone */}
            <a href="#" className="text-white/40 hover:text-[#c8f135] transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.99 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.99 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
              </svg>
            </a>
            {/* Email */}
            <a href="#" className="text-white/40 hover:text-[#c8f135] transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.25s' }}>
          <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] xl:h-[440px] xl:w-[440px]">

            {/* Outer gradient ring */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#c8f135] via-green-400 to-[#00e5ff]">
              <div className="w-full h-full rounded-full bg-[#0e0e0e]" />
            </div>

            {/* Animated glow behind */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#c8f135]/20 to-[#7c3aed]/20 blur-md animate-pulse" style={{ animationDuration: '3s' }} />

            {/* Photo area — replace with your <Image /> */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#161616] flex items-center justify-center group">
              
               
                <Image src="/romicha.png" alt="Romicha" fill  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"/>
             
              <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#111] flex items-center justify-center">
                <span className="text-white/15 text-xs font-mono tracking-widest">YOUR PHOTO</span>
              </div>
            </div>

            {/* Floating "Open to work" badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0e0e0e] border border-[#c8f135]/30 flex items-center gap-2 whitespace-nowrap shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
              <span className="text-[11px] font-mono text-[#c8f135]/80 tracking-wider">Open to work</span>
            </div>

          </div>
        </div>

      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.7s ease forwards;
        }
      `}</style>
    </section>
  )
}