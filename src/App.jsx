import './App.css'

function App() {
  return (
    <>
      <section className="portfolio">
        <div className="hero">
          <h1 className="hero-title">Jack</h1>

          <h2 className="hero-subtitle">
            Fronnd-End Developer
          </h2>

          <p className="hero-text">
            I build modern web applications using React, Node.js, JavaScript,
            and cloud technologies. Passionate about creating beautiful,
            fast, and user-friendly digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <section className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience building responsive
            websites, enterprise applications, dashboards, and REST APIs.
            I enjoy solving real-world problems through technology.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>

          <div className="skills-container">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "HTML",
              "CSS",
              "Git",
              "GitHub",
              "REST API",
            ].map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>
                Online store built with React, Node.js, and MongoDB featuring
                cart, checkout, and authentication.
              </p>
            </div>

            <div className="project-card">
              <h3>Task Management App</h3>
              <p>
                Productivity tool for tracking daily tasks with real-time
                updates and progress reporting.
              </p>
            </div>

            <div className="project-card">
              <h3>Business Dashboard</h3>
              <p>
                Analytics dashboard for monitoring KPIs, sales metrics, and
                business performance.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="contact-title">Contact</h2>

          <div className="contact-links">
            <a href="mailto:jacktonmulongo8@gmail.com">
              📧 Email
            </a>

            <a
              href="https://github.com/jack2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 GitHub
            </a>
          </div>
        </section>
      </section>
    </>
  )
}

export default App