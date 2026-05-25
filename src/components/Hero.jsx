import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
} from 'react-icons/fi'

import {
  personal,
  social,
  typingPhrases,
} from '../data/portfolio'

/* ── Typing hook ─────────────────────────────────────────────────── */
function useTyping(phrases) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]

    const speed = deleting ? 45 : 90

    const delay =
      !deleting && charIdx === current.length
        ? 1800
        : deleting && charIdx === 0
        ? 400
        : speed

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))

        if (charIdx + 1 === current.length) {
          setDeleting(true)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setText(current.slice(0, charIdx - 1))

        if (charIdx - 1 === 0) {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, charIdx, deleting, phraseIdx, phrases])

  return text
}

/* ── Social button ──────────────────────────────────────────────── */
const SocialBtn = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="
      w-11 h-11 rounded-full
      border border-white/20 dark:border-white/15
      flex items-center justify-center text-lg
      dark:text-gray-400 text-gray-500
      dark:hover:text-white hover:text-indigo-600
      dark:hover:border-white/40 hover:border-indigo-400
      transition-all duration-200
      transform-gpu will-change-transform
    "
  >
    {icon}
  </motion.a>
)

/* ── Component ──────────────────────────────────────────────────── */
export default function Hero() {
  const typedText = useTyping(typingPhrases)

  const scrollTo = (id) => {
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="
        relative min-h-[90vh]
        flex items-center justify-center
        text-center overflow-hidden
        dark:bg-[#0a0a0f] bg-[#f4f3ff]
        pt-[70px]
      "
    >
      {/* ── Decorative blobs ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className="
            blob
            w-[320px] h-[320px]
            md:w-[550px] md:h-[550px]
            bg-[#7c6bff]
            -top-20 -left-20
            md:-top-32 md:-left-32
            transform-gpu will-change-transform
          "
          style={{ animationDelay: '0s' }}
        />

        <div
          className="
            blob
            w-[260px] h-[260px]
            md:w-[420px] md:h-[420px]
            bg-[#ff6b9d]
            -bottom-16 -right-16
            md:-bottom-24 md:-right-24
            transform-gpu will-change-transform
          "
          style={{ animationDelay: '3.5s' }}
        />
      </div>

      {/* ── Grid overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#7c6bff 1px,transparent 1px),linear-gradient(90deg,#7c6bff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            border border-white/20
            dark:bg-white/[0.05] bg-white/70
            backdrop-blur-sm md:backdrop-blur-md
            text-sm
            dark:text-gray-400 text-gray-500
            mb-8
            transform-gpu
          "
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] pulse-dot" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            hero-name font-head font-bold
            leading-none tracking-tight mb-3
            dark:text-white text-gray-900
            flex flex-wrap justify-center
            transform-gpu
          "
        >
          <span className="gradient-text">
            PRASANNARAJ S
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            text-xl md:text-2xl
            font-light
            dark:text-gray-300 text-gray-600
            mb-4 min-h-[40px]
            transform-gpu
          "
        >
          <span className="text-[#7c6bff] font-medium">
            {typedText}
          </span>

          <span className="cursor-blink text-[#ff6b9d] font-bold ml-0.5">
            |
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="
            text-sm tracking-[0.25em]
            uppercase
            dark:text-gray-500 text-gray-400
            mb-10
          "
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="
            flex flex-col sm:flex-row
            gap-4 justify-center items-center
            mb-12
            transform-gpu
          "
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#projects')}
            className="
              btn-grad
              px-8 py-3 rounded-full
              text-white font-semibold text-sm
              cursor-pointer border-none
            "
          >
            View Projects ↓
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="
              px-8 py-3 rounded-full
              font-semibold text-sm cursor-pointer
              border border-white/25 dark:border-white/20
              dark:bg-white/[0.05] bg-white/70
              backdrop-blur-sm md:backdrop-blur-md
              dark:text-white text-gray-800
              dark:hover:bg-white/10 hover:bg-white/90
              transition-all duration-200
            "
          >
            Hire Me ✉
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={personal.resumeUrl}
            download
            className="
              px-8 py-3 rounded-full
              font-semibold text-sm cursor-pointer
              border border-white/25 dark:border-white/20
              dark:bg-white/[0.05] bg-white/70
              backdrop-blur-sm md:backdrop-blur-md
              dark:text-white text-gray-800
              dark:hover:bg-white/10 hover:bg-white/90
              transition-all duration-200
            "
          >
            Resume ↓
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="
            flex gap-4 justify-center
            mb-14 md:mb-16
            transform-gpu
          "
        >
          <SocialBtn
            href={social.github}
            icon={<FiGithub size={18} />}
            label="GitHub"
          />

          <SocialBtn
            href={social.linkedin}
            icon={<FiLinkedin size={18} />}
            label="LinkedIn"
          />

          <SocialBtn
            href={`mailto:${personal.email}`}
            icon={<FiMail size={18} />}
            label="Email"
          />
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="
          scroll-bounce
          absolute bottom-8 left-1/2
          -translate-x-1/2
          flex flex-col items-center gap-2
          cursor-pointer
        "
        onClick={() => scrollTo('#about')}
        role="button"
        aria-label="Scroll to About section"
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === 'Enter' && scrollTo('#about')
        }
      >
        <span
          className="
            text-[10px]
            tracking-[0.15em]
            uppercase
            dark:text-gray-500 text-gray-400
          "
        >
          Scroll
        </span>

        <FiArrowDown
          size={16}
          className="text-[#7c6bff]"
        />
      </div>
    </section>
  )
}