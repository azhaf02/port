import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
];

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.about .section__header', {
        scrollTrigger: {
          trigger: '.about .section__header',
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Bio animation
      gsap.from('.about__bio', {
        scrollTrigger: {
          trigger: '.about__bio',
          start: 'top 85%',
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: 'power3.out',
      });

      // Skill cards stagger
      gsap.from('.skill__card', {
        scrollTrigger: {
          trigger: '.skills__grid',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.06,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Who I Am</span>
          <h2 className="section__title">Building with passion,<br /><em>delivering precision.</em></h2>
        </div>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm <strong>Alex Mercer</strong>, a full stack developer with over 5 years of
              experience crafting scalable web applications and user-centric interfaces.
              Based in San Francisco, I work with startups and established companies worldwide.
            </p>
            <p>
              My approach blends <strong>technical depth</strong> with a keen eye for design.
              I believe the best products are those where functionality and aesthetics reinforce
              each other — not compete.
            </p>
            <p>
              When I'm not shipping code, I'm exploring generative art, contributing to
              open source, or hiking trails in the Bay Area.
            </p>
            <div className="about__highlight">
              <p>
                "I don't just write code — I architect experiences that scale, delight users,
                and stand the test of time."
              </p>
            </div>
          </div>

          <div>
            <p className="about__skills-heading">Tech Stack & Tools</p>
            <div className="skills__grid">
              {skills.map((skill, i) => (
                <div
                  className="skill__card"
                  key={skill.name}
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <span className="skill__icon">{skill.icon}</span>
                  <span className="skill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
