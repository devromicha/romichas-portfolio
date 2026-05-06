'use client'
import Image from 'next/image'

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Done' },
  { number: '5+', label: 'Happy Clients' },
]

const tags = ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind']

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32  overflow-hidden"
    >
  

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #c8f135 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      <div className="relative z-10  px-8 md:px-16">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#c8f135]/60 uppercase mb-3">Get to know me</span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-[#c8f135]">Me</span>
          </h2>
          {/* Decorative line */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c8f135]/60" />
            <div className="w-2 h-2 rounded-full bg-[#c8f135]" />
            <div className="w-24 h-[1px] bg-[#c8f135]/40" />
            <div className="w-2 h-2 rounded-full border border-[#7c3aed]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#7c3aed]/60" />
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* ── LEFT: Photo ── */}
          <div className="flex-shrink-0 flex flex-col items-center gap-8">

            {/* Photo with ring */}
           <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] group transition-all duration-500">
  
  {/* Spinning dashed border */}
  <div
    className="absolute inset-0 rounded-full border-2 border-dashed border-[#c8f135]/25 animate-spin"
    style={{ animationDuration: '12s' }}
  />

  {/* Gradient ring */}
  <div className="absolute inset-[8px] rounded-full p-[3px] bg-gradient-to-r from-[#c8f135] via-green-400 to-[#00e5ff]">
    <div className="w-full h-full rounded-full bg-[#0e0e0e]" />
  </div>

  {/* Photo container */}
  <div className="absolute inset-[11px] rounded-full overflow-hidden bg-[#161616]">
    
    <div className="relative w-full h-full group overflow-hidden rounded-full">
      
      <Image
        src="/romicha.png"
        alt="Romicha"
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* soft overlay for premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
    </div>
  </div>

  {/* Glow dot */}
  <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-[#c8f135] animate-pulse shadow-[0_0_15px_#c8f135]" />

  {/* outer glow on hover */}
  <div className="absolute inset-0 rounded-full transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(200,241,53,0.25)]" />
</div>

            {/* ── Stats row ── */}
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="font-syne text-2xl font-extrabold text-[#c8f135]">{s.number}</span>
                  <span className="text-[10px] font-mono tracking-wider text-white/35 text-center leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Greeting line */}
            <p className="text-[#c8f135] font-mono text-sm tracking-widest uppercase">
               who I am
            </p>

            {/* Main paragraph */}
            <p className="text-white/60 text-sm md:text-base leading-[1.9] font-light">
              Hello! I&apos;m{' '}
              <span className="text-white font-semibold">Romicha</span>, a passionate
              Frontend & MERN Stack Developer driven by the challenge of building
              complete, end-to-end web experiences. My journey into tech started
              with a fascination for how ideas become functional applications —
              and that curiosity fuels me every single day.
            </p>

            <p className="text-white/50 text-sm md:text-base leading-[1.9] font-light">
              My expertise lies in building{' '}
              <span className="text-[#c8f135]/80">responsive, pixel-perfect interfaces</span>{' '}
              with React & Next.js, and robust server-side logic with Node.js &
              MongoDB. I&apos;m particularly passionate about clean code, bold design,
              and creating digital experiences that are not just functional — but
              truly <span className="text-[#c8f135]/80">memorable</span>.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-[#c8f135]/20 text-[#c8f135]/70 bg-[#c8f135]/5 hover:border-[#c8f135]/50 hover:text-[#c8f135] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 text-sm font-syne font-bold text-[#c8f135] tracking-widest uppercase hover:gap-5 transition-all duration-300"
              >
                Let&apos;s Work Together
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#c8f135]/40 group-hover:border-[#c8f135] group-hover:bg-[#c8f135]/10 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}