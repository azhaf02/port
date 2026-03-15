import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
const line3Ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .to([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
      }, '-=0.4')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .to(actionsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .to(statsRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow" ref={eyebrowRef}>
            <span className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Available for freelance work</span>
          </div>

          <h1 className="hero__heading">
            <span className="line" ref={line1Ref}>Hi, I'm <span className="hero__name">Anas Shariff.</span></span>
          <span className="line" ref={line2Ref}>I build things</span>
<span className="line" ref={line3Ref} style={{ color: 'var(--text-2)' }}>for the web.</span>
</h1>

          <p className="hero__subtitle" ref={subtitleRef}>
           Data Scientist
          </p>

          <p className="hero__desc" ref={descRef}>
            I craft high-performance web applications with elegant interfaces and
            thoughtful user experiences. Turning complex problems into simple,
            beautiful digital solutions.
          </p>

          <div className="hero__actions" ref={actionsRef}>
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__stats" ref={statsRef}>
          <div className="hero__stat">
            <div className="hero__stat-number">5+</div>
            <div className="hero__stat-label">Years Exp.</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">40+</div>
            <div className="hero__stat-label">Projects</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">20+</div>
            <div className="hero__stat-label">Clients</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
