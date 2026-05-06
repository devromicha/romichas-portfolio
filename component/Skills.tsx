'use client'
import { useState } from 'react'

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React', level: 'Advanced', icon: '⚛️' },
      { name: 'Next.js', level: 'Advanced', icon: '▲' },
      { name: 'TypeScript', level: 'Intermediate', icon: '📘' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
      { name: 'HTML5', level: 'Advanced', icon: '🌐' },
      { name: 'CSS3', level: 'Advanced', icon: '✨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '🛠',
    skills: [
      { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
      { name: 'Express.js', level: 'Intermediate', icon: '🚂' },
      { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
      { name: 'REST API', level: 'Advanced', icon: '🔗' },
      { name: 'JWT Auth', level: 'Intermediate', icon: '🔐' },
      { name: 'Mongoose', level: 'Intermediate', icon: '🗄️' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🔧',
    skills: [
      { name: 'Git', level: 'Advanced', icon: '🐙' },
      { name: 'GitHub', level: 'Advanced', icon: '🐱' },
      { name: 'VS Code', level: 'Advanced', icon: '💻' },
      { name: 'Figma', level: 'Intermediate', icon: '🎭' },
      { name: 'Postman', level: 'Intermediate', icon: '📮' },
      { name: 'Vercel', level: 'Advanced', icon: '▲' },
    ],
  },
]

const levelColor: Record<string, string> = {
  Advanced: 'text-[#c8f135] border-[#c8f135]/30 bg-[#c8f135]/8',
  Intermediate: 'text-[#7c3aed] border-[#7c3aed]/30 bg-[#7c3aed]/8',
}

export default function Skills() {
  const [active, setActive] = useState('frontend')

  const current = categories.find((c) => c.id === active)!

  return (
    <section id="skills" className="relative  overflow-hidden">



      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #c8f135 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      <div className="relative z-10  px-8 md:px-16">

        {/* ── Header ── */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#c8f135]/60 uppercase mb-3">
            What I work with
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-[#c8f135]">Skills</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c8f135]/60" />
            <div className="w-2 h-2 rounded-full bg-[#c8f135]" />
            <div className="w-24 h-[1px] bg-[#c8f135]/40" />
            <div className="w-2 h-2 rounded-full border border-[#7c3aed]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#7c3aed]/60" />
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`
                relative px-6 py-2.5 rounded-full font-syne font-bold text-sm tracking-wide
                transition-all duration-300
                ${active === cat.id
                  ? 'bg-gradient-to-r from-[#c8f135] to-[#a3e635] text-black shadow-[0_0_20px_rgba(200,241,53,0.25)]'
                  : 'border border-white/10 text-white/40 hover:border-white/20 hover:text-white/70'
                }
              `}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {current.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-[#c8f135]/30 hover:bg-[#c8f135]/[0.04] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${levelColor[skill.level]}`}>
                  {skill.level}
                </span>
              </div>

              {/* Skill name */}
              <p className="font-syne font-bold text-white/80 group-hover:text-white text-base transition-colors duration-300">
                {skill.name}
              </p>

              {/* Bottom shimmer line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-[#c8f135] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="text-center text-white/20 text-xs font-mono tracking-widest mt-12 uppercase">
          Always learning · Always building
        </p>

      </div>
    </section>
  )
}