import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import emailjs from 'emailjs-com'

import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { personal, social } from '../data/portfolio'

// ─── EmailJS Environment Variables ───────────────────────────────
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
// ────────────────────────────────────────────────────────────────

const SOCIAL = [
  {
    href: social.github,
    icon: <FiGithub size={18} />,
    label: 'GitHub',
  },
  {
    href: social.linkedin,
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
  },
  {
    href: `mailto:${personal.email}`,
    icon: <FiMail size={18} />,
    label: 'Email',
  },
]

const CONTACT_ITEMS = [
  {
    icon: <FiMail size={17} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FiPhone size={17} />,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: <FiMapPin size={17} />,
    label: 'Location',
    value: personal.location,
    href: null,
  },
]

/* ── Input Field Component ───────────────────────────────────── */
function Field({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="
          text-sm font-medium font-head
          dark:text-gray-400 text-gray-500
          tracking-wide
        "
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputCls = `
  input-field w-full px-4 py-3 rounded-xl text-sm
  dark:bg-white/[0.05] bg-white
  border dark:border-white/[0.1] border-gray-200
  dark:text-white text-gray-900
  dark:placeholder-gray-600 placeholder-gray-400
  transition-all duration-200
  font-body
`

/* ── Contact Component ───────────────────────────────────────── */
export default function Contact() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-60px',
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      )

      setStatus('success')

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }

    setTimeout(() => {
      setStatus(null)
    }, 6000)
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Contact"
        subtitle="Let's build something great together"
      />

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        {/* ── Left Side ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-head font-bold dark:text-white text-gray-900 mb-3">
              Get In Touch
            </h3>

            <p className="font-body dark:text-gray-400 text-gray-600 leading-relaxed text-[15px]">
              I'm currently looking for new opportunities. Whether you
              have a project in mind, a question, or just want to say hi
              — my inbox is always open!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-3">
            {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  dark:bg-white/[0.03] bg-white/70
                  border dark:border-white/[0.07] border-gray-200
                  dark:hover:bg-white/[0.07] hover:bg-white
                  transition-colors duration-200
                "
              >
                <div
                  className="
                    w-10 h-10 rounded-xl flex-shrink-0
                    bg-gradient-to-br from-[#7c6bff] to-[#ff6b9d]
                    flex items-center justify-center text-white
                  "
                >
                  {icon}
                </div>

                <div>
                  <p
                    className="
                      text-[10px] uppercase tracking-widest
                      dark:text-gray-500 text-gray-400
                      font-medium
                    "
                  >
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="
                        text-[15px]
                        dark:text-gray-200 text-gray-700
                        hover:text-[#7c6bff]
                        transition-colors
                      "
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] dark:text-gray-200 text-gray-700">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {SOCIAL.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-11 h-11 rounded-full
                  border dark:border-white/[0.15] border-gray-200
                  dark:bg-white/[0.04] bg-white
                  flex items-center justify-center
                  dark:text-gray-400 text-gray-500
                  dark:hover:text-white hover:text-[#7c6bff]
                  transition-colors duration-200
                "
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Right Side Form ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="
            p-7 rounded-2xl
            dark:bg-white/[0.04] bg-white/80
            backdrop-blur-sm
            border dark:border-white/[0.08] border-gray-200
          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name" id="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  minLength={2}
                  className={inputCls}
                />
              </Field>

              <Field label="Email" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Subject */}
            <Field label="Subject" id="subject">
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                minLength={3}
                className={inputCls}
              />
            </Field>

            {/* Message */}
            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                minLength={2}
                className={`${inputCls} resize-y min-h-[120px]`}
              />
            </Field>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={
                status !== 'sending'
                  ? { scale: 1.02 }
                  : {}
              }
              whileTap={
                status !== 'sending'
                  ? { scale: 0.98 }
                  : {}
              }
              className="
                btn-grad w-full py-3.5 rounded-xl
                text-white font-head font-medium text-sm
                flex items-center justify-center gap-2
                disabled:opacity-60 disabled:cursor-not-allowed
                border-none cursor-pointer
              "
            >
              <FiSend size={15} />

              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </motion.button>

            {/* Success Message */}
            {status === 'success' && (
              <p
                className="
                  text-center text-sm
                  text-[#00d4aa]
                  bg-[#00d4aa]/10
                  border border-[#00d4aa]/20
                  rounded-xl py-3 px-4
                "
              >
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <p
                className="
                  text-center text-sm
                  text-[#ff6b9d]
                  bg-[#ff6b9d]/10
                  border border-[#ff6b9d]/20
                  rounded-xl py-3 px-4
                "
              >
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}