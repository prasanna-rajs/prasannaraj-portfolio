import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useScrollProgress } from '../hooks/useScrollProgress'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const progress = useScrollProgress()

  /* ── Detect scroll ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close mobile menu on resize ───────────── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)

    return () =>
      window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)

    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Scroll progress ── */}
      <div
        className="
          fixed top-0 left-0
          z-[9999]
          h-[3px]
          progress-shimmer
          transition-all duration-100
        "
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className={`
          fixed top-0 left-0 right-0
          z-[1000]
          h-[70px]
          transition-all duration-300
          transform-gpu will-change-transform

          ${
            scrolled
              ? 'backdrop-blur-md md:backdrop-blur-xl border-b border-white/[0.08] dark:bg-[#0a0a0f]/80 bg-white/80 shadow-sm'
              : 'bg-transparent'
          }
        `}
      >
        <div className="relative flex items-center justify-center max-w-7xl mx-auto h-full px-6">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="
              absolute left-6
              font-head font-extrabold
              text-2xl gradient-text
              select-none
            "
            aria-label="Prasannaraj S — home"
          >
            {/* PS */}
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="
                    relative
                    text-xs font-medium
                    tracking-widest uppercase
                    text-gray-400
                    hover:text-white
                    transition-colors duration-200
                    group
                    bg-transparent border-none
                    cursor-pointer
                  "
                >
                  {label}

                  <span
                    className="
                      absolute -bottom-1 left-0
                      w-0 h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#7c6bff]
                      to-[#ff6b9d]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="
              absolute right-6
              md:hidden
              flex items-center justify-center
              w-10 h-10
              cursor-pointer
              bg-transparent border-none
            "
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen ? 'Close menu' : 'Open menu'
            }
          >
            {menuOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              fixed top-[70px] left-0 right-0
              z-[999]
              list-none
              flex flex-col gap-1
              px-5 py-4
              dark:bg-[#111118]/95 bg-white/95
              backdrop-blur-md
              border-b
              dark:border-white/[0.08]
              border-gray-200
              md:hidden
            "
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="
                    w-full text-left
                    py-3 px-4 rounded-xl
                    text-sm font-medium
                    dark:text-gray-300 text-gray-600
                    dark:hover:bg-white/[0.06]
                    hover:bg-gray-100
                    transition-colors duration-150
                    cursor-pointer
                    bg-transparent border-none
                  "
                >
                  {label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  )
}