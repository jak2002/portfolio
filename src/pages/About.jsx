export default function About() {
  return (
    <div className="page about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          Passionate Front-End Developer focused on building modern,
          responsive, and user-friendly web applications.
        </p>
      </div>

      <section className="about-section">
        <h2>Who I Am</h2>

        <p>
          Hello! I'm Jack, a developer who enjoys turning ideas into
          interactive digital experiences. I specialize in building
          modern websites and web applications using React, JavaScript,
          HTML, and CSS.
        </p>

        <p>
          My passion for technology started with curiosity about how
          websites work behind the scenes. Since then, I have dedicated
          myself to learning software development and building projects
          that solve real-world problems.
        </p>
      </section>

      <section className="about-section">
        <h2>What I Do</h2>

        <ul>
          <li>Build responsive React applications</li>
          <li>Create modern and attractive user interfaces</li>
          <li>Develop REST API integrations</li>
          <li>Optimize website performance</li>
          <li>Implement mobile-first designs</li>
          <li>Work with Git and GitHub version control</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>REST APIs</span>
        </div>
      </section>

      <section className="about-section">
        <h2>Career Goals</h2>

        <p>
          My goal is to grow into a highly skilled Full-Stack Software
          Engineer capable of designing, developing, and deploying
          scalable applications that improve people's lives.
        </p>

        <p>
          I am constantly learning new technologies, improving my coding
          practices, and seeking opportunities to contribute to impactful
          projects.
        </p>
      </section>

      <section className="about-section">
        <h2>Fun Facts</h2>

        <div className="stats-container">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Technologies Learned</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h3>∞</h3>
            <p>Passion For Learning</p>
          </div>
        </div>
      </section>
    </div>
  );
}