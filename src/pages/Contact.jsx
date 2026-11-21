

 export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          I'm always open to discussing new projects, freelance opportunities,
          and collaborations.
        </p>

        <div className="contact-info">
          <p>
            📧 Email:{" "}
             <a href="mailto:jacktonmulongo8@gmail.com">
            jacktonmulongo8@gmail.com
          </a>
          </p>

        {/*  <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/johndoe
            </a>
          </p>
           */}
          <p>
            🐙 GitHub:{" "}
            <a
            href="https://github.com/jack2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Jack
          </a>
          </p>
        </div>

        <a href="mailto:johndoe@email.com" className="contact-btn">
          Send Me an Email
        </a>
      </div>
    </div>
  );
}

