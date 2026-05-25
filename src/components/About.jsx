import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { personal, education, stats } from '../data/portfolio'

/* ── Stat card ─────────────────────────────────────────────────── */
function StatCard({ num, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="
        dark:bg-white/[0.04] bg-white/70 backdrop-blur-sm
        border dark:border-white/[0.08] border-gray-200
        rounded-2xl py-5 px-3 text-center overflow-hidden min-w-0
      "
    >
      <p className="text-2xl md:text-3xl font-extrabold font-head gradient-text">
        {num}
      </p>

      <p
        className="
          text-[10px] md:text-xs
          uppercase tracking-wide
          dark:text-gray-400 text-gray-500
          mt-1 break-words
        "
      >
        {label}
      </p>
    </motion.div>
  )
}

/* ── Component ─────────────────────────────────────────────────── */
export default function About() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
    <SectionWrapper id="about">
      <SectionHeader
        title="About Me"
        subtitle="Get to know the developer behind the code"
      />

      <div
        ref={ref}
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-16
          items-center
        "
      >
        {/* ── Avatar column ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          {/* Avatar ring */}
          <div className="relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-br from-[#7c6bff] to-[#ff6b9d]">
              <div
                className="
                  w-full h-full rounded-full
                  dark:bg-[#16161f] bg-[#e5e0ff]
                  flex items-center justify-center
                  font-head font-extrabold text-6xl
                  gradient-text overflow-hidden
                "
              >
                <img
                  src="/avatar.png"
                  alt="Prasannaraj"
                  className="
                    w-[102%] h-[102%]
                    rounded-full
                    object-cover object-top
                    scale-[1.01]
                  "
                />

              </div>
            </div>

            {/* Location badge */}
            <div
              className="
                absolute -bottom-2 left-1/2 -translate-x-1/2
                flex items-center gap-1.5
                px-3 py-1.5 rounded-full
                bg-gradient-to-r from-[#7c6bff] to-[#ff6b9d]
                text-white text-xs font-semibold
                whitespace-nowrap shadow-lg
              "
            >
              <FiMapPin size={11} />
              {personal.location}
            </div>
          </div>

          {/* Stats row */}
          <div
            className="
              grid grid-cols-3
              gap-4
              w-full
              max-w-[500px]
              px-4
            "
          >
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                num={s.num}
                label={s.label}
                delay={0.1 * i}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Text column ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            delay: 0.1,
          }}
          className="flex flex-col gap-5"
        >
          <h3 className="text-2xl md:text-3xl font-head font-bold dark:text-white text-gray-900">
            Hi, I'm{' '}
            <span className="gradient-text">
              Prasannaraj S
            </span>
          </h3>

          {personal.bio.map((para, i) => (
            <p
              key={i}
              className="
                font-body
                dark:text-gray-400 text-gray-600
                leading-relaxed text-[15px]
              "
            >
              {para}
            </p>
          ))}

          {/* Education card */}
          <div
            className="
              border-l-4 border-[#7c6bff]
              pl-5 py-3 rounded-r-2xl
              dark:bg-white/[0.03] bg-white/60
              backdrop-blur-sm
            "
          >
            <div className="flex items-start gap-2">
              <span className="text-xl mt-0.5">
                🎓
              </span>

              <div>
                <h4
                  className="
                    font-body font-semibold
                    dark:text-white text-gray-900
                    text-sm
                  "
                >
                  {education.degree}
                </h4>

                <p
                  className="
                    font-body
                    dark:text-gray-400 text-gray-500
                    text-sm mt-0.5
                  "

                >
                  {education.institution}
                </p>

                <p
                  className="
                    text-[#7c6bff]
                    text-xs font-semibold mt-1
                  "
                >
                  {education.period}
                </p>
              </div>
            </div>
          </div>

          {/* Quick contact row */}
          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href={`mailto:${personal.email}`}
              className="
                text-xs
                dark:text-gray-400 text-gray-500
                dark:hover:text-white hover:text-gray-900
                transition-colors
              "
            >
              ✉ {personal.email}
            </a>

            <span className="text-xs dark:text-gray-600 text-gray-300">
              ·
            </span>

            <span className="text-xs dark:text-gray-400 text-gray-500">
              📞 {personal.phone}
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}