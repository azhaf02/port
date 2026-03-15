import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/contact.css';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: 'GitHub',
    handle: '@alexmercer',
    icon: '⌥',
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    handle: 'Alex Mercer',
    icon: 'in',
    url: 'https://linkedin.com',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact .section__header', {
        scrollTrigger: { trigger: '.contact .section__header', start: 'top 85%' },
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.contact__info', {
        scrollTrigger: { trigger: '.contact__inner', start: 'top 80%' },
        opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.contact__form', {
        scrollTrigger: { trigger: '.contact__inner', start: 'top 80%' },
        opacity: 0, x: 40, duration: 0.9, ease: 'power3.out', delay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! I\'ll be in touch soon.');
    e.target.reset();
  };

  return (
    <>
      <section className="contact" id="contact" ref={sectionRef}>
        <div className="container">
          <div className="section__header">
            <span className="section__label">Get In Touch</span>
            <h2 className="section__title">Let's build something<br /><em>remarkable.</em></h2>
          </div>

          <div className="contact__inner">
            <div className="contact__info">
              <p>
                Whether you have a project in mind, an opportunity to discuss, or just
                want to say hello — my inbox is always open. I typically respond within 24 hours.
              </p>

              <div className="contact__socials">
                {socials.map((social) => (
                  <a
                    href={social.url}
                    className="contact__social"
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="contact__social-icon">
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--gold)' }}>
                        {social.icon}
                      </span>
                    </div>
                    <div className="contact__social-info">
                      <span className="contact__social-name">{social.name}</span>
                      <span className="contact__social-handle">{social.handle}</span>
                    </div>
                    <span className="contact__social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form__input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form__input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="form__input"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form__textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="form__submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <p className="footer__text">
              © 2025 Alex<span>.</span> Crafted with care.
            </p>
            <button
              className="footer__back"
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
