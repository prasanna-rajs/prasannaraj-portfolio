# PRASANNARAJ S — Portfolio

A modern, fully-responsive Fullstack Developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🌗 Dark / Light mode (system-aware + localStorage)
- 🎬 Framer Motion scroll & entry animations
- ⌨️ Typing animation (Hero section)
- 🟣 Glassmorphism cards throughout
- 📱 Mobile-first responsive design
- 📊 Scroll progress indicator
- 📬 EmailJS contact form
- ♿ Semantic HTML + ARIA labels
- ⚡ Vite — lightning-fast dev & build

---

## 🗂 Folder Structure

```
prasannaraj-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionWrapper.jsx
│   │   └── SectionHeader.jsx
│   ├── data/
│   │   └── portfolio.js    ← Edit ALL content here
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollProgress.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the build
npm run preview
```

---

## 📬 EmailJS Setup (Contact Form)

1. Sign up at [https://emailjs.com](https://emailjs.com) — free tier works.
2. Go to **Email Services** → Add Service (choose Gmail or Outlook) → note the **Service ID**.
3. Go to **Email Templates** → Create Template. Map these variables in the template body:
   - `{{from_name}}` — sender's name
   - `{{reply_to}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
   - Note the **Template ID**.
4. Go to **Account → API Keys** → copy your **Public Key**.
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```

---

## 📄 Resume

Drop your resume PDF at `public/resume.pdf`.  
The download button in the Hero section is already wired to `/resume.pdf`.

---

## 🌐 Vercel Deployment

```bash
# Option A — Vercel CLI
npm install -g vercel
vercel

# Option B — GitHub
# 1. Push this repo to GitHub
# 2. Go to https://vercel.com → New Project
# 3. Import your GitHub repo
# 4. Framework: Vite  |  Build: npm run build  |  Output: dist
# 5. Click Deploy — done!
```

> Your site will be live at `https://prasannaraj-portfolio.vercel.app` or your custom domain.

---

## ✏️ Updating Content

All portfolio data lives in **`src/data/portfolio.js`**. Edit once, updates everywhere:

- `personal` — name, tagline, email, phone, resume URL
- `social` — GitHub & LinkedIn URLs
- `education` — degree, institution, years
- `stats` — the 3 hero stat numbers
- `skillCategories` — skill groups and chips
- `projects` — project cards (title, description, tech, links)
- `certifications` — cert cards
- `typingPhrases` — the rotating typing strings in the Hero

---

## 💡 Recommended Improvements

| Feature | How |
|---|---|
| Analytics | Add `vercel analytics` or Google Analytics via gtag |
| Blog section | Add MDX support with `@mdx-js/rollup` |
| Project screenshots | Add `image` field to projects data + render in card |
| Testimonials | Add a `testimonials` array to `portfolio.js` |
| Dark-mode OG image | Generate with `@vercel/og` |
| Unit tests | Add Vitest + React Testing Library |
| Lint | `npm install -D eslint @eslint/js eslint-plugin-react-hooks` |
| Animations perf | Wrap heavy animations in `useReducedMotion()` from Framer |

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react + react-dom | UI framework |
| framer-motion | Scroll & entry animations |
| emailjs-com | Serverless contact form |
| react-icons | FiGithub, FiMail, etc. |
| tailwindcss | Utility-first CSS |
| vite | Build tool |

---

© 2025 Prasannaraj S — Chennai, India
