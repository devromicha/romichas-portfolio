'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Palette, Monitor, Server, Globe, Rocket, Cpu, Boxes, Layers3, Languages, Flame,
} from 'lucide-react'

import { BsBootstrapFill, BsGithub } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import { FiFigma } from 'react-icons/fi'
import {
  SiExpress, SiFirebase, SiGraphql, SiJavascript, SiJsonwebtokens,
  SiMongodb, SiNetlify, SiRedux, SiShadcnui,
} from 'react-icons/si'

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Monitor size={18} />,
    skills: [
      { name: 'React', level: 'Advanced', icon: <Code2 size={26} /> },
      { name: 'Next.js', level: 'Advanced', icon: <Rocket size={26} /> },
      { name: 'TypeScript', level: 'Intermediate', icon: <Cpu size={26} /> },
      { name: 'JavaScript', level: 'Advanced', icon: <SiJavascript size={26} /> },
      { name: 'Tailwind CSS', level: 'Advanced', icon: <Palette size={26} /> },
      { name: 'Bootstrap 5', level: 'Advanced', icon: <BsBootstrapFill size={26} /> },
      { name: 'HTML5', level: 'Advanced', icon: <Globe size={26} /> },
      { name: 'CSS3', level: 'Advanced', icon: <Layers3 size={26} /> },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={18} />,
    skills: [
      { name: 'Node.js', level: 'Intermediate', icon: <Server size={26} /> },
      { name: 'Express.js', level: 'Intermediate', icon: <SiExpress size={26} /> },
      { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb size={26} /> },
      { name: 'REST API', level: 'Advanced', icon: <Globe size={26} /> },
      { name: 'GraphQL', level: 'Intermediate', icon: <SiGraphql size={26} /> },
      { name: 'JWT Auth', level: 'Intermediate', icon: <SiJsonwebtokens size={26} /> },
      { name: 'Firebase', level: 'Intermediate', icon: <SiFirebase size={26} /> },
    ],
  },
  {
    id: 'state',
    label: 'State & Libraries',
    icon: <Layers3 size={18} />,
    skills: [
      { name: 'Redux', level: 'Intermediate', icon: <SiRedux size={26} /> },
      { name: 'Context API', level: 'Advanced', icon: <Flame size={26} /> },
      { name: 'i18next', level: 'Intermediate', icon: <Languages size={26} /> },
      { name: 'GraphQL', level: 'Intermediate', icon: <SiGraphql size={26} /> },
      { name: 'shadcn/ui', level: 'Advanced', icon: <SiShadcnui size={26} /> },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <Cpu size={18} />,
    skills: [
      { name: 'Git', level: 'Advanced', icon: <BsGithub size={26} /> },
      { name: 'GitHub', level: 'Advanced', icon: <GrGithub size={26} /> },
      { name: 'VS Code', level: 'Advanced', icon: <Monitor size={26} /> },
      { name: 'Figma', level: 'Advanced', icon: <FiFigma size={26} /> },
      { name: 'Postman', level: 'Intermediate', icon: <Boxes size={26} /> },
      { name: 'Vercel', level: 'Advanced', icon: <Rocket size={26} /> },
      { name: 'Netlify', level: 'Advanced', icon: <SiNetlify size={26} /> },
    ],
  },
]

const levelColor: Record<string, string> = {
  Advanced: 'text-[#7c3aed] border-[#7c3aed]/20 bg-[#7c3aed]/10',
  Intermediate: 'text-[#7c3aed]/60 border-[#7c3aed]/15 bg-[#7c3aed]/8',
}

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const current = categories.find((c) => c.id === active)!

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="relative z-10 px-5">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#7c3aed]/70 uppercase mb-3">
            What I work with
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-[#7c3aed]">Skills</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base text-center max-w-xl">
            Crafting modern and scalable web applications with clean UI, smooth experience, and powerful backend solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl border
              ${
                active === cat.id
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#9f67ff] text-white border-transparent shadow-[0_0_35px_rgba(124,58,237,0.45)]'
                  : 'bg-white/[0.04] border-white/10 text-white/70 hover:border-[#7c3aed]/30 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)]'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/6
                bg-white/[0.02] backdrop-blur-xl
                p-6 transition-all duration-300
                hover:border-[#7c3aed]/25
                hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#7c3aed]/10 to-[#9f67ff]/10 transition" />

              {/* Top */}
              <div className="relative z-10 flex justify-between mb-6">
                <div className="text-[#7c3aed] group-hover:scale-110 transition">
                  {skill.icon}
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-full border text-[#9f67ff]`}>
                  {skill.level}
                </span>
              </div>

              {/* Name */}
              <h3 className="relative z-10 font-bold text-white group-hover:text-[#7c3aed] transition">
                {skill.name}
              </h3>

            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-white/20 text-xs font-mono tracking-[0.3em] mt-14 uppercase">
          Always learning · Always building
        </p>

      </div>
    </section>
  )
}




// 'use client'

// import { useState } from 'react'
// import {
//   Code2,
//   Palette,
//   Monitor,
//   Database,
//   ShieldCheck,
//   Server,

//   Globe,
//   Rocket,
//   Cpu,
//   Boxes,
//   Layers3,
//   Languages,
//   Flame,
// } from 'lucide-react'
// import { BsBootstrapFill, BsGithub } from 'react-icons/bs'
// import { GrGithub } from 'react-icons/gr'
// import { FiFigma } from 'react-icons/fi'
// import { SiExpress, SiFirebase, SiGraphql, SiJavascript, SiJsonwebtokens, SiMongodb, SiNetlify, SiRedux, SiShadcnui } from 'react-icons/si'

// const categories = [
// {
//   id: 'frontend',
//   label: 'Frontend',
//   icon: <Monitor size={18} />,
//   skills: [
//     { name: 'React', level: 'Advanced', icon: <Code2 size={26} /> },
//     { name: 'Next.js', level: 'Advanced', icon: <Rocket size={26} /> },
//     { name: 'TypeScript', level: 'Intermediate', icon: <Cpu size={26} /> },
//     { name: 'JavaScript',level: 'Advanced',icon: <SiJavascript size={26} />
// },
//     { name: 'Tailwind CSS', level: 'Advanced', icon: <Palette size={26} /> },
//     { name: 'Bootstrap 5', level: 'Advanced', icon: <BsBootstrapFill size={26} /> },
//     { name: 'HTML5', level: 'Advanced', icon: <Globe size={26} /> },
//     { name: 'CSS3', level: 'Advanced', icon: <Layers3 size={26} /> },

//   ],
// },
//   {
//     id: 'backend',
//     label: 'Backend',
//     icon: <Server size={18} />,
//     skills: [
//     { name: 'Node.js', level: 'Intermediate', icon: <Server size={26} /> },
//     { name: 'Express.js', level: 'Intermediate', icon: <SiExpress size={26} /> },
//     { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb size={26} /> },
//     { name: 'REST API', level: 'Advanced', icon: <Globe size={26} /> },
    
//     { name: 'JWT Auth', level: 'Intermediate', icon: <SiJsonwebtokens size={26} /> },
//     { name: 'Mongoose', level: 'Intermediate', icon: <Database size={26} /> },
//     { name: 'Firebase', level: 'Intermediate', icon: <SiFirebase size={26} /> },
//   ],
//   },
//   {
//   id: 'state',
//   label: 'State & Libraries',
//   icon: <Layers3 size={18} />,
//   skills: [
//     {
//       name: 'Redux',
//       level: 'Intermediate',
//       icon: <SiRedux size={26} />,
//     },
//     {
//       name: 'Context API',
//       level: 'Advanced',
//       icon: <Flame size={26} />,
//     },
//     {
//       name: 'i18next',
//       level: 'Intermediate',
//       icon: <Languages size={26} />,
//     },
//     {
//       name: 'GraphQL',
//       level: 'Intermediate',
//       icon: <SiGraphql size={26} />,
//     },
//     {
//       name: 'shadcn/ui',
//       level: 'Advanced',
//       icon: <SiShadcnui size={26} />,
//     },
//   ],
// },
//   {
//     id: 'tools',
//     label: 'Tools & Development',
//     icon: <Cpu size={18} />,
//     skills: [
//       { name: 'Git', level: 'Advanced', icon: <BsGithub size={26} /> },
//       { name: 'GitHub', level: 'Advanced', icon: <GrGithub size={26} /> },
   
//       { name: 'VS Code', level: 'Advanced', icon: <Monitor size={26} /> },
//       { name: 'Figma', level: 'Advanced', icon: <FiFigma size={26} /> },
//       { name: 'Postman', level: 'Intermediate', icon: <Boxes size={26} /> },
//       { name: 'Vercel', level: 'Advanced', icon: <Rocket size={26} /> },
//      {name: 'Netlify', level: 'Advanced', icon: <SiNetlify size={26} /> }
//     ],
//   },
// ]

// const levelColor: Record<string, string> = {
//   Advanced:
//     'text-[#c8f135] border-[#c8f135]/20 bg-[#c8f135]/10',
//   Intermediate:
//     'text-[#7c3aed] border-[#7c3aed]/20 bg-[#7c3aed]/10',
// }

// export default function Skills() {
//   const [active, setActive] = useState('frontend')

//   const current = categories.find((c) => c.id === active)!

//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden py-24"
//     >
     

//       {/* Dot Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage:
//             'radial-gradient(circle,#c8f135 1px,transparent 1px)',
//           backgroundSize: '35px 35px',
//         }}
//       />

//       <div className="relative z-10">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-16">
//           <span className="text-[11px] font-mono tracking-[0.4em] text-[#c8f135]/60 uppercase mb-3">
//             What I work with
//           </span>

//           <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
//             My <span className="text-[#c8f135]">Skills</span>
//           </h2>

//           <p className="text-white/40 text-sm md:text-base text-center max-w-xl">
//             Crafting modern and scalable web applications with
//             clean UI, smooth experience, and powerful backend
//             solutions.
//           </p>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActive(cat.id)}
//               className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl border
              
//               ${
//                 active === cat.id
//                   ? 'bg-gradient-to-r from-[#c8f135] to-[#a3e635] text-black border-transparent shadow-[0_0_35px_rgba(200,241,53,0.45)]'
//                   : 'bg-white/[0.04] border-white/10 text-white/70 hover:border-[#c8f135]/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]'
//               }
//               `}
//             >
//               {cat.icon}
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//           {current.skills.map((skill, i) => (
//             <div
//               key={skill.name}
//               style={{
//                 animationDelay: `${i * 0.05}s`,
//               }}
//               className="
//               group relative overflow-hidden
//               rounded-3xl
//               border border-white/10
//               bg-white/[0.03]
//               backdrop-blur-xl
//               p-6
//               transition-all duration-500
//               hover:-translate-y-2
//               hover:border-[#c8f135]/30
//               hover:bg-[#c8f135]/[0.05]
//               hover:shadow-[0_0_40px_rgba(200,241,53,0.15)]
//               "
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#c8f135]/10 via-transparent to-[#7c3aed]/10" />

//               {/* Top */}
//               <div className="relative z-10 flex items-start justify-between mb-6">
//                 <div className="text-[#c8f135] group-hover:scale-110 transition duration-300">
//                   {skill.icon}
//                 </div>

//                 <span
//                   className={`text-[10px] font-mono px-2 py-1 rounded-full border ${levelColor[skill.level]}`}
//                 >
//                   {skill.level}
//                 </span>
//               </div>

//               {/* Name */}
//               <h3 className="relative z-10 font-syne font-bold text-white text-lg group-hover:text-[#c8f135] transition duration-300">
//                 {skill.name}
//               </h3>

//               {/* Bottom Line */}
//               <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c8f135] to-green-400 transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <p className="text-center text-white/20 text-xs font-mono tracking-[0.3em] mt-14 uppercase">
//           Always learning · Always building
//         </p>
//       </div>
//     </section>
//   )
// }