import { useRef } from 'react';
import {
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  TerminalSquare,
} from 'lucide-react';
import { profile, projects, skillGroups, stats, timeline } from './data/portfolio.js';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}&su=${encodeURIComponent('Portfolio inquiry')}`;

function getExternalLinkProps(href) {
  return href.startsWith('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}

function App() {
  const shellRef = useRef(null);
  const trailLayerRef = useRef(null);
  const lastTrailRef = useRef(0);

  function handlePointerMove(event) {
    if (!shellRef.current || !trailLayerRef.current) {
      return;
    }

    const now = performance.now();
    if (now - lastTrailRef.current < 45) {
      return;
    }

    lastTrailRef.current = now;

    const trail = document.createElement('span');
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;
    trailLayerRef.current.appendChild(trail);
    trail.addEventListener('animationend', () => trail.remove(), { once: true });
  }

  return (
    <main className="app-shell" ref={shellRef} onPointerMove={handlePointerMove}>
      <div className="cursor-trail-layer" ref={trailLayerRef} aria-hidden="true" />
      <Header />
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            CS portfolio
          </p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="hero-actions" aria-label="Primary portfolio links">
            <a className="button primary" href="#projects">
              <Rocket size={18} aria-hidden="true" />
              View projects
            </a>
            <a className="button secondary" href={profile.resumeUrl}>
              <ArrowUpRight size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
          <div className="meta-row">
            <span>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <a href={gmailComposeUrl} {...getExternalLinkProps(gmailComposeUrl)}>
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract technology workspace illustration">
          <img src="/assets/hero-portfolio.png" alt="" />
          <div className="signal-panel">
            <TerminalSquare size={18} aria-hidden="true" />
            <span>Building CS foundations</span>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Portfolio highlights">
        <div className="section-wrap stats-grid">
          {stats.length > 0 ? (
            stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))
          ) : (
            <EmptyState
              title="Add a portfolio highlight"
              action="Add a stat in src/data/portfolio.js."
            />
          )}
        </div>
      </section>

      <section className="section-wrap content-section" id="projects">
        <SectionHeading
          icon={<Code2 size={20} aria-hidden="true" />}
          eyebrow="Project direction"
          title="Projects planned around CS growth"
        />
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.type}</span>
                <Braces size={22} aria-hidden="true" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="impact">{project.impact}</p>
              {project.stack.length > 0 ? (
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="Add project tools"
                  action={`List the stack for ${project.title}.`}
                />
              )}
              <div className="card-actions">
                <a href={project.links.code} {...getExternalLinkProps(project.links.code)}>
                  <Github size={17} aria-hidden="true" />
                  Code
                </a>
                <a href={project.links.demo} {...getExternalLinkProps(project.links.demo)}>
                  <ArrowUpRight size={17} aria-hidden="true" />
                  Demo
                </a>
              </div>
            </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Add a first project"
            action="Create a project entry in src/data/portfolio.js."
          />
        )}
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <SectionHeading
            icon={<GraduationCap size={20} aria-hidden="true" />}
            eyebrow="Technical range"
            title="Skills growing through study and practice"
          />
          {skillGroups.length > 0 ? (
            <div className="skill-grid">
              {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                {group.skills.length > 0 ? (
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="Add skills here"
                    action={`Add skills under ${group.title}.`}
                  />
                )}
              </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Add a skill group"
              action="Create a skill group in src/data/portfolio.js."
            />
          )}
        </div>
      </section>

      <section className="section-wrap content-section timeline-section" id="timeline">
        <SectionHeading
          icon={<TerminalSquare size={20} aria-hidden="true" />}
          eyebrow="Current trajectory"
          title="Learning by building"
        />
        {timeline.length > 0 ? (
          <div className="timeline">
            {timeline.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Add a learning milestone"
            action="Create a timeline entry in src/data/portfolio.js."
          />
        )}
      </section>

      <section className="contact-band" id="contact">
        <div className="section-wrap contact-grid">
          <div>
            <p className="eyebrow">
              Contact
            </p>
            <h2>Let's build something that earns a second look.</h2>
          </div>
          <div className="contact-actions" aria-label="Contact links">
            <a className="button primary" href={gmailComposeUrl} {...getExternalLinkProps(gmailComposeUrl)}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a className="button secondary" href={profile.githubUrl} {...getExternalLinkProps(profile.githubUrl)}>
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button secondary" href={profile.linkedinUrl} {...getExternalLinkProps(profile.linkedinUrl)}>
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function EmptyState({ title, action }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{action}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label={`${profile.name} home`}>
        <span>
          <img src="/assets/hero-portfolio.png" alt="" />
        </span>
        Portfolio
      </a>
      <nav aria-label="Portfolio navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ icon, eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {icon}
        {eyebrow}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
