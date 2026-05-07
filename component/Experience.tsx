'use client'

const experiences = [

 {
    role: 'Frontend Developer',
    company: 'Softvence Omega',
    org: 'Betopia Group',
    duration: 'Oct 2025 — Present',
    type: 'Full-time',

    points: [
      'Developing pixel-perfect UI with React.js & Next.js',
      'Working closely with design and backend teams',
      'Improving performance and user experience across projects',
      'Maintaining scalable and reusable component architecture',
    ],
  },
    {
    role: 'Full Stack Developer (Industrial Attachment)',
    company: 'E-learning & Earning Ltd',
    org: 'Full Stack Training Program',
    duration: 'July 2024 — Oct 2024',
    type: 'Training / Internship',

    points: [
      'Building modern responsive web applications using React.js & Next.js',
      'Working with REST APIs for dynamic data handling',
      'Implementing authentication systems using JWT & Firebase',
      'Creating reusable UI components with Tailwind CSS',
      'Collaborating in team projects using Git & GitHub',
      'Practicing real-world MERN stack development workflow',
    ],
  },
]
export default function Experience() {
  return (
    <section id="experience" className="relative  overflow-hidden bg-[#050505]">

    

      <div className="relative z-10  px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-white/40 text-xs tracking-[0.35em] uppercase">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-3">
            Where I’ve <span className="text-[#c8f135]">Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8">

          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-14 last:mb-0">

              {/* dot */}
              <div className="absolute -left-[40px] top-2 w-4 h-4 rounded-full bg-[#c8f135] shadow-[0_0_20px_rgba(200,241,53,0.6)]" />

              {/* card */}
              <div className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#c8f135]/30 hover:bg-white/[0.05]">

                {/* top glow line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c8f135] to-[#7c3aed] transition-all duration-500" />

                {/* header */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#c8f135] transition">
                      {exp.role}
                    </h3>

                    <p className="text-[#c8f135] text-sm font-mono">
                      {exp.company}
                    </p>

                    <p className="text-white/30 text-xs">
                      {exp.org}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs rounded-full border border-[#c8f135]/20 text-[#c8f135] bg-[#c8f135]/10">
                      {exp.type}
                    </span>

                    <p className="text-white/30 text-xs mt-2 font-mono">
                      {exp.duration}
                    </p>
                  </div>

                </div>

                {/* points */}
                <ul className="space-y-3">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c8f135]" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* status */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
                  <span className="text-xs tracking-[0.25em] text-[#c8f135]/60 uppercase">
                    Currently working
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}







//   'use client'

// const experiences = [
//   {
//     role: 'Frontend Developer',
//     company: 'Softvence Omega',
//     org: 'from Betopia Group',
//     duration: 'Oct 2025 — Present',
//     type: 'Full-time',
//     points: [
//       'Building responsive, pixel-perfect UIs with React & Next.js',
//       'Collaborating with design & backend teams on real-world products',
//       'Maintaining clean, scalable component architecture',
//       'Optimizing performance and user experience across projects',
//     ],
//   },
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="relative  overflow-hidden">

//       {/* Background glows */}
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c8f135]/6 blur-[130px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#7c3aed]/8 blur-[110px] pointer-events-none" />

//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.06]"
//         style={{
//           backgroundImage: `radial-gradient(circle, #c8f135 1px, transparent 1px)`,
//           backgroundSize: '38px 38px',
//         }}
//       />

//       <div className="relative z-10 ">

//         {/* ── Header ── */}
//         <div className="flex flex-col items-center mb-20">
//           <span className="text-[11px] font-mono tracking-[0.4em] text-[#c8f135]/60 uppercase mb-3">
//             Where I&apos;ve Worked
//           </span>
//           <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
//             Work <span className="text-[#c8f135]">Experience</span>
//           </h2>
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c8f135]/60" />
//             <div className="w-2 h-2 rounded-full bg-[#c8f135]" />
//             <div className="w-24 h-[1px] bg-[#c8f135]/40" />
//             <div className="w-2 h-2 rounded-full border border-[#7c3aed]" />
//             <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#7c3aed]/60" />
//           </div>
//         </div>

//         {/* ── Timeline ── */}
//         <div className="relative pl-8 border-l-2 border-[#c8f135]/15">
//           {experiences.map((exp, i) => (
//             <div key={i} className="relative mb-12 last:mb-0">

//               {/* Glowing dot */}
//               <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-[#c8f135] shadow-[0_0_14px_rgba(200,241,53,0.7)] ring-4 ring-[#c8f135]/15" />

//               {/* Card */}
//               <div className="group p-7 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-[#c8f135]/25 hover:bg-[#c8f135]/[0.03] transition-all duration-300 relative overflow-hidden">

//                 {/* Shimmer line top */}
//                 <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c8f135] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                 {/* Header row */}
//                 <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
//                   <div>
//                     <h3 className="font-syne font-extrabold text-white text-xl mb-1">{exp.role}</h3>
//                     <p className="text-[#c8f135] font-mono text-sm font-semibold">{exp.company}</p>
//                     <p className="text-white/30 font-mono text-xs">{exp.org}</p>
//                   </div>

//                   <div className="flex flex-col items-start sm:items-end gap-2">
//                     <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-[#c8f135]/30 text-[#c8f135]/80 bg-[#c8f135]/8 whitespace-nowrap">
//                       {exp.type}
//                     </span>
//                     <div className="flex items-center gap-1.5">
//                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff40" strokeWidth="2">
//                         <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
//                       </svg>
//                       <span className="text-white/35 text-xs font-mono whitespace-nowrap">{exp.duration}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="w-full h-[1px] bg-white/5 mb-5" />

//                 {/* Bullet points */}
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {exp.points.map((point, j) => (
//                     <li key={j} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
//                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c8f135]/70 shrink-0" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Currently working badge */}
//                 <div className="mt-6 flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
//                   <span className="text-[11px] font-mono text-[#c8f135]/60 tracking-widest uppercase">
//                     Currently working here
//                   </span>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }