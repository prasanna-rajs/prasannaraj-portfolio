import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { social, personal } from '../data/portfolio'

const NAV = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="
      dark:bg-[#080810] bg-[#e8e5ff]
      border-t dark:border-white/[0.06] border-gray-200
      py-10 px-[5%]
    ">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        {/* Logo */}
        {/* <span className="font-head font-extrabold text-2xl gradient-text">PS</span> */}

        {/* Quick nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="
                    text-xs uppercase tracking-widest font-medium
                    dark:text-gray-500 text-gray-400
                    dark:hover:text-white hover:text-gray-900
                    transition-colors duration-200
                    bg-transparent border-none cursor-pointer
                  "
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex gap-4">
          {[
            { href: social.github,   icon: <FiGithub size={16} />,   label: 'GitHub' },
            { href: social.linkedin, icon: <FiLinkedin size={16} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-9 h-9 rounded-full
                border dark:border-white/[0.12] border-gray-300
                flex items-center justify-center
                dark:text-gray-500 text-gray-400
                dark:hover:text-white hover:text-gray-900
                dark:hover:border-white/30 hover:border-gray-500
                transition-all duration-200
              "
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs dark:text-gray-600 text-gray-400 flex items-center gap-1.5 text-center">
          Crafted with <FiHeart size={11} className="text-[#ff6b9d]" /> by{' '}
          <span className="gradient-text font-semibold">{personal.name}</span>
          &nbsp;·&nbsp; Chennai, India
        </p>
        <p className="text-[11px] dark:text-gray-700 text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
