import { useTheme }        from './hooks/useTheme'
import Navbar             from './components/Navbar'
import Hero               from './components/Hero'
import About              from './components/About'
import Skills             from './components/Skills'
import Projects           from './components/Projects'
import Certifications     from './components/Certifications'
import Contact            from './components/Contact'
import Footer             from './components/Footer'

/**
 * App — root component.
 * Manages the dark/light theme and renders the full page layout.
 */
export default function App() {
  const { dark, toggleTheme } = useTheme()

  return (
    // The 'dark' class on this div activates Tailwind's dark-mode variants
    <div className={dark ? 'dark' : ''}>
      <div className="dark:bg-[#0a0a0f] bg-[#f4f3ff] dark:text-white text-gray-900 min-h-screen transition-colors duration-300">

        {/* ── Fixed chrome ── */}
        <Navbar dark={dark} toggleTheme={toggleTheme} />

        {/* ── Page sections ── */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
