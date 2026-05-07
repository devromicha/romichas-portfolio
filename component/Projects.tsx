'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'ElectroPoint',
    subtitle: 'Electronics eCommerce Website',
    description: 'A modern electronics e-commerce platform with category-wise browsing, secure Firebase & JWT auth, cart/buy-now flow, and role-based admin dashboard for managing products, users & orders.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase', 'JWT', 'TanStack Query'],
    live: 'https://client-electropoint.web.app/',
    github: '#',
    featured: true,
    gradient: 'from-[#7c3aed]/20 to-[#9f67ff]/10',
    dotColor: '#7c3aed',
  },
  {
    id: 2,
    title: 'Online Class Website',
    subtitle: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with live sessions, downloadable resources, quizzes, personalized course recommendations, and real-time progress tracking for students.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    live: 'https://online-class-5f780.web.app/',
    github: '#',
    featured: false,
    gradient: 'from-[#9f67ff]/20 to-[#7c3aed]/10',
    dotColor: '#9f67ff',
  },
  {
    id: 3,
    title: 'Book Management System',
    subtitle: 'MERN Stack Application',
    description: 'A full-stack MERN app for managing books with pagination, sorting, and category filtering. Demonstrates clean CRUD operations and responsive UI without auth complexity.',
    category: 'Full Stack',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    live: 'https://book-managment-system-mern.vercel.app/',
    github: '#',
    featured: false,
    gradient: 'from-[#7c3aed]/15 to-[#9f67ff]/15',
    dotColor: '#7c3aed',
  },
  {
    id: 4,
    title: 'ShopNext',
    subtitle: 'Beauty & Jewelry eCommerce',
    description: 'A fully-featured Beauty and Jewelry e-commerce site built with Next.js & TypeScript. Includes admin panel, real-time order tracking, inventory management, and detailed analytics.',
    category: 'Frontend',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    live: 'https://shop-next-vryf.vercel.app/',
    github: '#',
    featured: true,
    gradient: 'from-[#9f67ff]/20 to-[#7c3aed]/10',
    dotColor: '#9f67ff',
  },
  {
    id: 5,
    title: 'Japan Bangladesh Connect',
    subtitle: 'Informational Web Platform',
    description: "A curated info platform about Japan with blogs, top categories, today's deals, and best-selling products. Features Firebase auth, dynamic routing, and seamless responsive design.",
    category: 'Frontend',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    live: 'https://japan-bd-connect.vercel.app/',
    github: '#',
    featured: false,
    gradient: 'from-[#7c3aed]/20 to-[#9f67ff]/10',
    dotColor: '#7c3aed',
  },
  {
    id: 6,
    title: 'Tour & Travel Website',
    subtitle: 'Travel Booking Platform',
    description: 'A travel management platform with diverse packages, detailed itineraries, secure bookings, real-time availability, user reviews, and destination guides for a seamless travel experience.',
    category: 'Frontend',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://traval-tour-62d62.web.app/',
    github: '#',
    featured: false,
    gradient: 'from-[#9f67ff]/15 to-[#7c3aed]/15',
    dotColor: '#9f67ff',
  },
]

const filters = ['All', 'Full Stack', 'Frontend']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      <div className="relative z-10 px-8 md:px-16">

        {/* Header */}
        <div data-aos="fade-down" className="flex flex-col items-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#7c3aed]/70 uppercase mb-3">
            What I&apos;ve Built
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-[#7c3aed]">Projects</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#7c3aed]/60" />
            <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            <div className="w-24 h-[1px] bg-[#7c3aed]/40" />
            <div className="w-2 h-2 rounded-full border border-[#9f67ff]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#9f67ff]/60" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`
                px-6 py-2.5 rounded-full font-syne font-bold text-sm tracking-wide transition-all duration-300
                ${active === f
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#9f67ff] text-white shadow-[0_0_20px_rgba(124,58,237,0.25)]'
                  : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                }
              `}
            >
              {f}
              {f !== 'All' && (
                <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${active === f ? 'bg-white/20' : 'bg-white/10'}`}>
                  {projects.filter((p) => p.category === f).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
               data-aos="fade-left"
              data-aos-delay={i * 100}
              className="group relative flex flex-col rounded-2xl border border-white/20 bg-white/[0.02] hover:border-white/12 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient banner */}
              <div className={`relative h-[140px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-syne font-extrabold"
                    style={{
                      background: `linear-gradient(135deg, ${project.dotColor}22, ${project.dotColor}44)`,
                      border: `1px solid ${project.dotColor}40`,
                      color: project.dotColor,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{
                      color: project.dotColor,
                      background: `${project.dotColor}15`,
                      border: `1px solid ${project.dotColor}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-syne font-extrabold text-white text-lg leading-tight mb-1">{project.title}</h3>
                <p className="text-[#7c3aed]/70 font-mono text-xs mb-3">{project.subtitle}</p>
                <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-white/40 bg-white/[0.03]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#9f67ff] text-white font-syne font-bold text-xs tracking-wide hover:scale-105 transition-transform" >
                  
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/50 font-syne font-bold text-xs tracking-wide hover:border-white/25 hover:text-white/80 transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(to right, ${project.dotColor}, #9f67ff)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs font-mono tracking-widest mt-14 uppercase">
          More projects on{' '}
          <a href="#" className="text-[#7c3aed]/50 hover:text-[#7c3aed] transition-colors duration-300">
            GitHub →
          </a>
        </p>

      </div>
    </section>
  )
}