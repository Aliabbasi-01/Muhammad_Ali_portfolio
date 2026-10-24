import { FormEvent, ReactNode, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "code"
  | "external"
  | "github"
  | "layers"
  | "mail"
  | "menu"
  | "phone"
  | "server"
  | "smartphone"
  | "tools"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" />
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    mail: (
      <>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.9.7 2 2 0 0 1 1.6 1.9Z" />
    ),
    server: (
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </>
    ),
    smartphone: (
      <>
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
    tools: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L7.5 3.5l3 3 2.2-2.2a4 4 0 0 0 2 2Z" />
        <path d="m8 8-6 6 4 4 6-6" />
        <path d="m16 12 6 6-4 4-6-6" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "Service Car",
    description:
      "A streamlined mobile experience for managing car service schedules, maintenance history, and timely reminders.",
    tags: ["Flutter", "Firebase", "REST API"],
  },
  {
    number: "02",
    title: "Expense Tracker",
    description:
      "Log daily spending, understand habits, and make better decisions with clear visual breakdowns.",
    tags: ["Kotlin", "Android", "Charts"],
  },
  {
    number: "03",
    title: "Sleep Tracker",
    description:
      "Track sleep patterns over time with simple charts, practical insights, and a calm mobile interface.",
    tags: ["Flutter", "Dart", "SQLite"],
  },
  {
    number: "04",
    title: "CV Builder",
    description:
      "Create polished, professional resumes from flexible templates and export them as shareable PDFs.",
    tags: ["Flutter", "PDF", "Firebase"],
  },
  {
    number: "05",
    title: "Mobile Secret Codes",
    description:
      "A fast reference library for useful secret and diagnostic codes across popular mobile devices.",
    tags: ["Kotlin", "Android", "Room DB"],
  },
  {
    number: "06",
    title: "Habit Tracker",
    description:
      "Build consistency with daily streaks, flexible routines, progress views, and encouraging reminders.",
    tags: ["Flutter", "Dart", "Notifications"],
  },
  {
    number: "07",
    title: "Task Manager",
    description:
      "Organise work and personal tasks using categories, priorities, due dates, and smart reminders.",
    tags: ["Kotlin", "Firebase", "MVVM"],
  },
  {
    number: "08",
    title: "Notes App",
    description:
      "A fast, distraction-free notes app built around reliable offline access and instant search.",
    tags: ["Flutter", "SQLite", "Offline-first"],
  },
];

const skills = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Android",
  "REST APIs",
  "Backend Development",
  "Firebase",
  "Git",
];

const skillGroups = [
  {
    icon: "smartphone" as IconName,
    eyebrow: "01 / Mobile",
    title: "Mobile development",
    items: ["Flutter & Dart", "Kotlin & Android", "Responsive UI", "State management"],
  },
  {
    icon: "server" as IconName,
    eyebrow: "02 / Backend",
    title: "Backend systems",
    items: ["RESTful APIs", "Firebase", "Database design", "Authentication"],
  },
  {
    icon: "tools" as IconName,
    eyebrow: "03 / Tools",
    title: "Workflow & delivery",
    items: ["Git & GitHub", "Android Studio", "Postman", "Clean architecture"],
  },
];

const navItems = ["About", "Projects", "Skills", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroImage = "/images/ali-portrait.png";
  const fallbackImage = "/images/ali-original.jpg";

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:muhammadalicodes4@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#090909] text-[#f5f1e8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#090909]/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <a className="group flex items-center gap-2.5 font-semibold tracking-tight" href="#home">
            <span className="flex size-8 items-center justify-center rounded-lg bg-[#e4bd57] text-[#171208] transition-transform group-hover:-rotate-6">
              <Icon name="code" size={17} />
            </span>
            <span className="text-lg">Ali.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                className="text-sm text-[#a49d92] transition-colors hover:text-[#e4bd57]"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            className="hidden items-center gap-2 rounded-full border border-[#e4bd57]/30 px-4 py-2 text-sm font-medium text-[#e4bd57] transition-colors hover:bg-[#e4bd57] hover:text-[#171208] md:flex"
            href="#contact"
          >
            Let&apos;s talk <Icon name="arrow" size={16} />
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/10 p-2 text-[#d8e2dc] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? "x" : "menu"} size={22} />
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/8 bg-[#111111] px-5 py-5 md:hidden">
            {navItems.map((item) => (
              <a
                className="block border-b border-white/6 py-3 text-sm text-[#d4d0c7]"
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px bg-[#e4bd57] shadow-[0_0_10px_#e4bd57]"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      <main>
        <section
          className="relative flex min-h-screen items-center overflow-hidden pt-24"
          id="home"
        >
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="orb absolute -right-52 top-24 size-[34rem] rounded-full bg-[#c8942f]/8 blur-[120px]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
            <div className="max-w-3xl">
              <div className="hero-enter mb-7 flex items-center gap-3 text-sm font-medium text-[#e4bd57]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#e4bd57] opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#e4bd57]" />
                </span>
                Available for new opportunities
              </div>
              <p className="hero-enter hero-delay-1 mb-4 text-xl font-medium text-[#bbb5aa] sm:text-2xl">
                Hi, I&apos;m Muhammad Ali — a
              </p>
              <h1 className="hero-enter hero-delay-1 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.15rem] xl:text-[4.55rem]">
                Software Engineer
                <span className="mt-2 block text-[#8f8a80]">
                  Flutter &amp; Kotlin Developer
                </span>
              </h1>
              <p className="hero-enter hero-delay-2 mt-7 max-w-2xl text-base leading-7 text-[#a49d92] sm:text-lg">
                I build polished mobile apps with thoughtful user experiences and solid backends
                that are ready to scale.
              </p>
              <div className="hero-enter hero-delay-3 mt-10 flex flex-wrap gap-3">
                <a
                  className="flex items-center gap-2 rounded-full bg-[#e4bd57] px-6 py-3.5 text-sm font-semibold text-[#171208] transition-all hover:-translate-y-0.5 hover:bg-[#f2d589]"
                  href="#projects"
                >
                  View Projects <Icon name="arrow" size={17} />
                </a>
                <a
                  className="rounded-full border border-white/14 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-enter hero-delay-3 relative mx-auto h-[430px] w-full max-w-md lg:h-[640px] lg:max-w-none">
              <div className="portrait-float absolute inset-x-5 bottom-0 top-12 overflow-hidden rounded-[2.5rem] border border-[#e4bd57]/20 bg-[#121212] shadow-2xl shadow-black/40">
                <img
                  alt="Ali, Software Engineer and mobile application developer"
                  className="block h-full w-full object-cover object-center"
                  decoding="async"
                  fetchPriority="high"
                  src={heroImage}
                  onError={(event) => {
                    const target = event.currentTarget;
                    if (target.src !== `${window.location.origin}${fallbackImage}`) {
                      target.src = fallbackImage;
                    }
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/8" />
              </div>
              <div className="absolute left-1/2 top-[48%] size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4bd57]/15 sm:size-96" />
              <div className="absolute left-1/2 top-[48%] size-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4bd57]/10 blur-3xl sm:size-72" />
              <span className="absolute right-8 top-20 font-mono text-[10px] uppercase tracking-[.2em] text-[#8d867a]">
                Software Engineer
              </span>
              <span className="tech-float tech-float-one">Flutter</span>
              <span className="tech-float tech-float-two">Kotlin</span>
              <span className="tech-float tech-float-three">REST APIs</span>
              <div className="absolute bottom-5 left-0 flex items-center gap-3 rounded-xl border border-white/10 bg-[#171717]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5 lg:bottom-8">
                <span className="flex size-9 items-center justify-center rounded-lg bg-[#e4bd57]/10 text-[#e4bd57]">
                  <Icon name="smartphone" size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#857f75]">Focus</p>
                  <p className="text-sm font-medium">Mobile + Backend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Technology highlights"
          className="section-border overflow-hidden bg-[#0d0d0d]"
        >
          <div className="mx-auto grid max-w-7xl border-x border-white/8 sm:grid-cols-3">
            <div className="stat-item">
              <strong>08</strong>
              <span>Featured projects</span>
            </div>
            <div className="stat-item">
              <strong>02</strong>
              <span>Mobile ecosystems</span>
            </div>
            <div className="stat-item">
              <strong>01</strong>
              <span>Full-stack mindset</span>
            </div>
          </div>
          <div className="ticker border-t border-white/8 py-4">
            <div className="ticker-track">
              {[...skills, ...skills].map((skill, index) => (
                <span className="flex items-center gap-5" key={`${skill}-${index}`}>
                  {skill}
                  <i className="size-1 rounded-full bg-[#e4bd57]" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-border py-24 sm:py-32" id="about">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <div data-reveal>
                <p className="section-label">01 — About me</p>
                <h2 className="section-title mt-5">Code with purpose. Products with polish.</h2>
                <figure className="about-portrait group relative mt-10 max-w-md overflow-hidden rounded-2xl border border-white/10">
                  <img
                    alt="Ali in a professional portrait"
                    className="block aspect-[4/3] w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    src={heroImage}
                    onError={(event) => {
                      const target = event.currentTarget;
                      if (target.src !== `${window.location.origin}${fallbackImage}`) {
                        target.src = fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#090909]/95 to-transparent px-5 pb-5 pt-16">
                    <div>
                      <p className="text-sm font-semibold text-white">Ali</p>
                      <p className="mt-1 text-xs text-[#a5b2aa]">Software Engineer</p>
                    </div>
                    <span className="rounded-full border border-[#e4bd57]/30 bg-[#101010]/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.15em] text-[#e4bd57] backdrop-blur-md">
                      Open to work
                    </span>
                  </div>
                </figure>
              </div>
              <div data-reveal>
                <p className="max-w-2xl text-xl leading-9 text-[#bdc8c1] sm:text-2xl">
                  I&apos;m a mobile and backend developer who enjoys turning ideas into dependable
                  digital products.
                </p>
                <p className="mt-5 max-w-2xl leading-7 text-[#8f8a80]">
                  My journey started with a curiosity for how great apps work, and grew into a
                  passion for building them. Today, I focus on clean Flutter and Kotlin
                  experiences, backed by practical, maintainable services. I care about the small
                  details, clear communication, and software that genuinely helps people.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4" data-reveal>
              {skills.map((skill, index) => (
                <div
                  className="group flex min-h-28 items-end justify-between border-b border-r border-white/10 p-5 transition-colors hover:bg-[#e4bd57]/5"
                  key={skill}
                >
                  <span className="text-sm font-medium text-[#d8d2c7] group-hover:text-white">
                    {skill}
                  </span>
                  <span className="font-mono text-[10px] text-[#625d55]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-border bg-[#0d0d0d] py-24 sm:py-32" id="projects">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end" data-reveal>
              <div>
                <p className="section-label">02 — Selected work</p>
                <h2 className="section-title mt-5">Projects built to be useful.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#858077]">
                A collection of mobile products focused on performance, clarity, and everyday
                utility.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  className="project-card group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-white/9 bg-[#121212] p-6 sm:p-8"
                  data-reveal
                  key={project.title}
                >
                  <div className="absolute right-5 top-3 font-mono text-7xl font-semibold tracking-tighter text-white/[.025] transition-colors group-hover:text-[#e4bd57]/[.05]">
                    {project.number}
                  </div>
                  <div className="relative flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.025] text-[#e4bd57]">
                      <Icon name={Number(project.number) % 2 ? "smartphone" : "layers"} size={20} />
                    </span>
                    <span className="font-mono text-xs text-[#625c52]">{project.number}</span>
                  </div>
                  <div className="relative mt-10">
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#969087]">
                      {project.description}
                    </p>
                  </div>
                  <div className="relative mt-auto pt-8">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          className="rounded-full border border-white/9 px-3 py-1 text-[11px] text-[#9b9489]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-5 border-t border-white/8 pt-5">
                      <button className="project-link" type="button">
                        <Icon name="github" size={16} /> GitHub
                      </button>
                      <button className="project-link" type="button">
                        <Icon name="external" size={15} /> Live Demo
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-border py-24 sm:py-32" id="skills">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
              <div data-reveal>
                <p className="section-label">03 — Skills &amp; tools</p>
                <h2 className="section-title mt-5">A practical toolkit for modern products.</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#8f8a80]">
                  From the first screen to the final API endpoint, I use proven technologies to
                  ship thoughtful, reliable software.
                </p>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10" data-reveal>
                {skillGroups.map((group) => (
                  <div
                    className="group grid gap-5 py-8 sm:grid-cols-[auto_1fr_1fr] sm:items-center"
                    key={group.title}
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#e4bd57]/8 text-[#e4bd57] transition-transform group-hover:scale-105">
                      <Icon name={group.icon} size={21} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#746e64]">
                        {group.eyebrow}
                      </p>
                      <h3 className="mt-2 text-lg font-medium">{group.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#958e83]">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-border relative bg-[#0e0e0e] py-24 sm:py-32" id="contact">
          <div className="contact-glow absolute inset-x-0 bottom-0 mx-auto h-64 max-w-4xl bg-[#c8942f]/5 blur-[100px]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div data-reveal>
              <p className="section-label">04 — Get in touch</p>
              <h2 className="section-title mt-5">
                Have an idea?
                <span className="block text-[#969087]">Let&apos;s build it well.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#8f8a80]">
                I&apos;m always open to discussing mobile apps, backend systems, or interesting
                software opportunities.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  className="contact-line"
                  href="mailto:muhammadalicodes4@gmail.com"
                >
                  <span><Icon name="mail" size={18} /></span>
                  <div>
                    <small>Email</small>
                    muhammadalicodes4@gmail.com
                  </div>
                </a>
                <a className="contact-line" href="tel:+923207200909">
                  <span><Icon name="phone" size={18} /></span>
                  <div>
                    <small>Phone</small>
                    0320 7200909
                  </div>
                </a>
              </div>
              <div className="mt-9 flex gap-3">
                <a
                  aria-label="LinkedIn"
                  className="social-link"
                  href="https://www.linkedin.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  in
                </a>
                <a
                  aria-label="GitHub"
                  className="social-link"
                  href="https://github.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="github" size={18} />
                </a>
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8"
              data-reveal
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>Your name</span>
                  <input name="name" placeholder="Ali Raza" required type="text" />
                </label>
                <label className="form-field">
                  <span>Email address</span>
                  <input name="email" placeholder="you@example.com" required type="email" />
                </label>
              </div>
              <label className="form-field mt-5">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Tell me a little about your project..."
                  required
                  rows={6}
                />
              </label>
              <button
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e4bd57] px-6 py-4 text-sm font-semibold text-[#171208] transition-colors hover:bg-[#c1ffcf]"
                type="submit"
              >
                Send Message <Icon name="arrow" size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#090909]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-[#756f65] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ali. All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </footer>
    </div>
  );
}
