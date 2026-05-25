import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolio'

/* ── Tag color map ──────────────────────────────────────────────── */
const TAG_COLORS = {
  teal:   'bg-[#00d4aa]/10 text-[#00d4aa]',
  pink:   'bg-[#ff6b9d]/10 text-[#ff6b9d]',
  purple: 'bg-[#7c6bff]/10 text-[#7c6bff]',
  amber:  'bg-amber-400/10 text-amber-400',
}

/* ── Project card ───────────────────────────────────────────────── */
function ProjectCard({ project, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="
        relative p-7 rounded-2xl overflow-hidden
        dark:bg-white/[0.04] bg-white/80
        backdrop-blur-sm
        border dark:border-white/[0.08] border-gray-200
        group cursor-default
        transition-shadow duration-300
        hover:shadow-[0_24px_60px_rgba(124,107,255,0.18)]
      "
    >
      {/* Hover gradient overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-[#7c6bff]/5 via-transparent to-[#ff6b9d]/5
        opacity-0 group-hover:opacity-100
        transition-opacity duration-400 pointer-events-none
      " />

      {/* Large project number (decorative) */}
      <span className="
        absolute top-5 right-6 font-head font-extrabold text-5xl
        gradient-text opacity-10 select-none pointer-events-none
      ">
        {project.num}
      </span>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {project.tags.map(t => (
          <span
            key={t.label}
            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide font-body ${TAG_COLORS[t.color] ?? TAG_COLORS.purple}`}
          >
            {t.label}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-head font-bold text-xl dark:text-white text-gray-900 mb-3 relative z-10">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body dark:text-gray-400 text-gray-600 text-[15px] leading-relaxed mb-5 relative z-10">
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
        {project.tech.map(t => (
          <span
            key={t}
            className="
              px-2 py-0.5 text-[11px] rounded-md font-body font-medium
              dark:bg-white/[0.06] bg-gray-100
              dark:text-gray-400 text-gray-500
              dark:border dark:border-white/[0.08] border border-gray-200
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 relative z-10">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium font-head
              border dark:border-white/[0.15] border-gray-300
              dark:bg-white/[0.05] bg-white
              dark:text-gray-300 text-gray-600
              dark:hover:text-white hover:text-gray-900
              transition-colors duration-200
            "
          >
            <FiGithub size={13} /> GitHub
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium font-head
              btn-grad text-white border-none
            "
          >
            <FiExternalLink size={13} /> Live Demo
          </motion.a>
        )}
      </div>
    </motion.article>
  )
}

/* ── Component ──────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader title="Projects" subtitle="Things I've built that I'm proud of" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={0.12 * i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
