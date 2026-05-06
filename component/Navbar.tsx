'use client'
import { useState, useEffect, useRef } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -100, y: -100 })
  const pos = useRef({ x: -100, y: -100 })

  // 🎯 Cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', move)
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    let raf: number
    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12)
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.x + 'px'
        ringRef.current.style.top = pos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  // 📜 Scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 🎯 Scroll active section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    navItems.forEach((n) => {
      const el = document.getElementById(n.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Cursor */}
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />

      {/* ─── NAVBAR ─── */}
      <nav
        className={`
          fixed z-50 flex items-center justify-between
          transition-all duration-500 ease-in-out  w-[90%] max-w-7xl mx-auto
          ${
            scrolled
              ? 'top-4 left-1/2 -translate-x-1/2 px-6 h-[56px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(200,241,53,0.08)]'
              : 'top-0 left-0 right-0 w-full px-6 md:px-10 h-[68px] bg-transparent border-b border-transparent'
          }
        `}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-0">
      <span className="font-syne text-xl font-extrabold tracking-tight 
bg-gradient-to-r from-[#c8f135] via-green-400 to-[#00e5ff] 
bg-clip-text text-transparent">
  Romicha
</span>
          <span className="font-syne text-xl font-extrabold text-[#c8f135]">.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => {
            const isActive = active === item.toLowerCase()
            return (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`
                    relative text-sm font-medium tracking-wide transition-all duration-300
                    ${isActive ? 'text-[#c8f135]' : 'text-white/50 hover:text-white/90'}
                  `}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#c8f135] rounded-full transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0'}`}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Hire Me Button */}
       <button
  onClick={() => scrollTo('contact')}
  className="hidden md:block text-[0.7rem] font-syne font-bold tracking-widest uppercase px-5 py-2 rounded-full 
  bg-gradient-to-r from-[#c8f135] to-[#00e5ff] text-black 
  transition-all duration-300 hover:scale-105 hover:brightness-110"
>
  Hire Me
</button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      <div
        className={`fixed z-40 left-1/2 -translate-x-1/2 bg-[#0e0e0e]/95 backdrop-blur-md border border-white/10 md:hidden transition-all duration-300 overflow-hidden
        ${scrolled ? 'top-[76px] w-[90%] max-w-3xl rounded-2xl' : 'top-[68px] w-full rounded-none'}
        ${menuOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-base font-medium transition-colors duration-200
                ${active === item.toLowerCase() ? 'text-[#c8f135]' : 'text-white/50'}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#c8f135] to-[#7c3aed] text-black font-bold text-sm"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  )
}