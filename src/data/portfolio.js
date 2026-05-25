export const personal = {
  name: 'PRASANNARAJ S',
  // nameShort: 'PS',
  title: 'Fullstack Web Developer',
  tagline: 'Code. Create. Solve. Grow.',
  location: 'Chennai, India',
  email: 'prasannaasrini@gmail.com',
  phone: '+91 9655305184',
  resumeUrl: '/Prasannaraj-Resume.pdf',
  bio: [
    "I'm a passionate Fullstack Web Developer and Computer Science Engineering graduate from Sathyabama Institute of Science and Technology. I love building intelligent, user-centric web applications that solve real-world problems.",    
    'From crafting responsive interfaces with React and Tailwind to building robust APIs with FastAPI and Django — I enjoy the full spectrum of web development. Currently exploring AI integration in modern web apps.',
  ],
}

export const social = {
  github:   'https://github.com/prasanna-rajs',
  linkedin: 'https://www.linkedin.com/in/prasannarajs/',
}

export const education = {
  degree: 'BE — Computer Science & Engineering',
  institution: 'Sathyabama Institute of Science and Technology',
  period: '2022 – 2026',
}

export const stats = [
  { num: '2+',  label: 'Projects' },
  { num: '10+', label: 'Technologies' },
  { num: '3',   label: 'Certifications' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'langs',
    icon: '💻',
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'ReactJS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend',
    skills: ['Django', 'Node.js', 'FastAPI'],
  },
  {
    id: 'databases',
    icon: '🗄️',
    title: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    id: 'tools',
    icon: '🛠',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    id: 'concepts',
    icon: '🧠',
    title: 'Core Concepts',
    skills: ['OOPs', 'DBMS', 'REST APIs', 'JWT Authentication', 'Responsive Design'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    num: '01',
    title: 'Public Health Awareness Website',
    description:
      'A responsive public health awareness platform providing disease prevention, vaccination awareness, hygiene practices, and mental health guidance through an easy-to-use interface.',
    tech: ['HTML5', 'CSS3'],
    tags: [{ label: 'Health', color: 'teal' }, { label: 'Web', color: 'pink' }],
    github: 'https://github.com/prasanna-rajs/HealthPortal',
    live:   'https://prasanna-rajs.github.io/HealthPortal/',
  },
  {
    id: 2,
    num: '02',
    title: 'AI Career Recommendation Platform',
    description:
      'An AI-powered career recommendation platform that helps users identify suitable career paths using quizzes, resume analysis, skill gap detection, and personalized learning recommendations.',
    tech: ['ReactJS', 'FastAPI', 'Python', 'SQLite', 'Google Gemini API', 'Tailwind CSS', 'JWT Auth', 'REST APIs'],
    tags: [{ label: 'AI', color: 'purple' }, { label: 'Fullstack', color: 'pink' }],
    github: 'https://github.com/prasanna-rajs/AI-Career-recommendation-system',
    live:   null,
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    icon: '🌐',
    title: 'Fullstack Web Development',
    issuer: 'Credo Systemz',
  },
  {
    id: 2,
    icon: '💬',
    title: 'Soft Skills Certification',
    issuer: 'TCS iON',
  },
  {
    id: 3,
    icon: '🐍',
    title: 'Python Programming',
    issuer: 'Udemy',
  },
]

// ─── Typing phrases ───────────────────────────────────────────────────────────
export const typingPhrases = [
  'Fullstack Web Developer',
  'React Enthusiast',
  'Python Developer',
  'UI/UX Craftsman',
]
