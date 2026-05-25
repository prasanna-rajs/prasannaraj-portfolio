import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { certifications } from '../data/portfolio'

/* ── Cert card ──────────────────────────────────────────────────── */
function CertCard({ cert, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="
        card-hover p-6 rounded-2xl flex items-start gap-4
        dark:bg-white/[0.04] bg-white/80
        backdrop-blur-sm
        border dark:border-white/[0.08] border-gray-200
        group
      "
    >
      {/* Icon */}
      <div className="
        w-14 h-14 rounded-xl flex-shrink-0
        bg-gradient-to-br from-[#7c6bff] to-[#ff6b9d]
        flex items-center justify-center text-2xl
        shadow-lg shadow-[#7c6bff]/20
        group-hover:scale-110 transition-transform duration-300
      ">
        {cert.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="font-head font-bold text-base dark:text-white text-gray-900 mb-1 leading-snug">
          {cert.title}
        </h3>
        <p className="dark:text-gray-400 text-gray-500 text-sm mb-2">{cert.issuer}</p>
        <span className="
          inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider
          bg-[#00d4aa]/10 text-[#00d4aa]
        ">
          ✓ Completed
        </span>
      </div>
    </motion.div>
  )
}

/* ── Component ──────────────────────────────────────────────────── */
export default function Certifications() {
  return (
    <SectionWrapper id="certifications" alt>
      <SectionHeader
        title="Certifications"
        subtitle="Credentials that back up my skills"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} delay={0.1 * i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
