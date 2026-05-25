import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { skillCategories } from '../data/portfolio'

/* ── Skill chip ─────────────────────────────────────────────────── */
function SkillChip({ skill }) {
  return (
    <span
      className="
        px-3 py-1.5 rounded-full text-sm font-medium
        border dark:border-white/[0.08] border-gray-200
        dark:bg-white/[0.03] bg-white/70
        dark:text-gray-300 text-gray-600
        transition-all duration-200
      "
    >
      {skill}
    </span>
  )
}


/* ── Category Card ──────────────────────────────────────────────── */
function CategoryCard({ category, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      className="
        relative p-6 rounded-2xl overflow-hidden
        dark:bg-white/[0.04] bg-white/80
        backdrop-blur-sm
        border dark:border-white/[0.08] border-gray-200
        group
        transform-gpu
        transition-shadow duration-300
        hover:shadow-[0_24px_60px_rgba(124,107,255,0.18)]
      "
    >
      {/* Hover gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#7c6bff]/5
          via-transparent
          to-[#ff6b9d]/5
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
        "
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <span className="text-xl">
          {category.icon}
        </span>

        <h3
          className="
            font-head font-bold text-sm
            uppercase tracking-wider
            dark:text-gray-200 text-gray-700
          "
        >
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill) => (
          <SkillChip
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  )
}

/* ── Component ──────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <SectionWrapper id="skills" alt>
      <SectionHeader
        title="Skills"
        subtitle="Technologies I work with"
      />

      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {skillCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            delay={0.12 * index}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}