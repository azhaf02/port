import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    title: 'Luminary SaaS',
    description: 'A full-featured SaaS analytics dashboard with real-time data visualization, team collaboration, and AI-powered insights. Built for scale.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    number: '02',
    title: 'Forge E-Commerce',
    description: 'High-converting e-commerce platform with a headless CMS, dynamic product pages, cart system, and Stripe payments integration.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    number: '03',
    title: 'Orbit Chat App',
    description: 'Real-time messaging platform with end-to-end encryption, file sharing, voice rooms, and support for 10,000+ concurrent users.',
    tags: ['React', 'Socket.io', 'Redis', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects .section__header', {
        scrollTrigger: { trigger: '.projects .section__header', start: 'top 85%' },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.project__card', {
        scrollTrigger: { trigger: '.projects__grid', start: 'top 80%' },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Selected Work</span>
          <h2 className="section__title">Projects that<br /><em>speak for themselves.</em></h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project__card" key={project.number}>
              <div className="project__image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project__image-overlay" />
                <span className="project__number">{project.number}</span>
              </div>

              <div className="project__body">
                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span className="project__tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>

                <div className="project__links">
                  <a
                    href={project.github}
                    className="project__link project__link--github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="project__link project__link--demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
