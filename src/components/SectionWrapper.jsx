import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * SectionWrapper — wraps every portfolio section with:
 *  - scroll-triggered fade-up entry animation
 *  - consistent padding / max-width
 *  - optional alt background stripe
 */
export default function SectionWrapper({
  id,
  children,
  alt = false,       // true → renders the alternating background stripe
  className = '',
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`
        ${alt
          ? 'dark:bg-[#111118] bg-[#ede9ff]/50'
          : 'dark:bg-[#0a0a0f] bg-[#f4f3ff]'}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="section-padding"
      >
        {children}
      </motion.div>
    </section>
  )
}
