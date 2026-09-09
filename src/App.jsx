import "./App.css";

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Hema<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href={`${baseUrl}resume.pdf`}
          download="Hemamaalani_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>
            Hemamaalani <span>SJ</span>
          </h1>

          <h2>Computer Science Graduate</h2>

          <p className="hero-description">
            I'm a Computer Science and Engineering graduate passionate about
            building web applications, exploring AI tools, creating digital
            content, and turning ideas into real projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects →
            </a>

            <a
              href="https://github.com/Hemamaalani"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              GitHub ↗
            </a>
          </div>

          <div className="contact-mini">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hemamaalani24@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ✉ hemamaalani24@gmail.com
            </a>

            <a
              href="https://github.com/Hemamaalani"
              target="_blank"
              rel="noreferrer"
            >
              ◉ github.com/Hemamaalani
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>

          <img
            src={`${baseUrl}profile.jpeg`}
            alt="Hemamaalani SJ"
          />
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about" className="about-section">

        <div className="about">
          <p className="section-label">ABOUT ME</p>

          <h2>Who I am</h2>

          <p>
            I am a Computer Science and Engineering graduate with a CGPA of
            7.8. I have a strong interest in web development, AI tools,
            video editing, animation, quality assurance, and creative
            technology.
          </p>

          <p>
            I enjoy solving problems, learning new technologies, and
            building practical projects that turn ideas into useful
            solutions.
          </p>

          <div className="about-info">
            <span>📍 Tamil Nadu, India</span>
            <span>🎓 CSE Graduate</span>
            <span>⭐ CGPA: 7.8</span>
          </div>
        </div>

        <div id="skills" className="skills">
          <p className="section-label">MY SKILLS</p>

          <h2>Technologies & Skills</h2>

          <div className="skills-grid">
            <div className="skill">🌐 HTML</div>
            <div className="skill">🎨 CSS</div>
            <div className="skill">⚡ JavaScript</div>
            <div className="skill">⚛️ React</div>
            <div className="skill">🐍 Python</div>
            <div className="skill">🗄️ SQL</div>
            <div className="skill">🔧 Git & GitHub</div>
            <div className="skill">✅ QA / Software Testing</div>
            <div className="skill">🎬 Video Editing</div>
            <div className="skill">✨ Animation</div>
            <div className="skill">🧠 Prompt Engineering</div>
            <div className="skill">🤖 AI Tools</div>
          </div>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">

        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-icon">🛒</span>
            </div>

            <h3>ShopNest</h3>

            <p className="project-type">
              E-commerce Website
            </p>

            <p>
              A responsive e-commerce website built using React and Vite.
              The project focuses on a clean user interface, product
              listing, and a practical shopping experience.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Hemamaalani/shopnest-store"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://hemamaalani.github.io/shopnest-store/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-icon">📊</span>
            </div>

            <h3>Job Application Tracker</h3>

            <p className="project-type">
              Job Search Organizer
            </p>

            <p>
              A web application designed to organize job applications,
              track application status, and manage the job search process
              efficiently.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Hemamaalani/job-application-tracker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">

        <p className="section-label">EXPERIENCE</p>

        <h2>My Experience</h2>

        <div className="experience-card">

          <div className="experience-logo">
            D
          </div>

          <div>

            <h3>
              AI Animation Specialist Intern
            </h3>

            <h4>
              Dinamalar
            </h4>

            <p className="date">
              March 2026 – April 2026
            </p>

            <ul>

              <li>
                Worked with AI-powered tools to create video and animation
                content.
              </li>

              <li>
                Explored tools including NotebookLM, Grok, Google AI Studio,
                LTX Studio, and Krea AI.
              </li>

              <li>
                Created AI-assisted digital content and experimented with
                prompt-based workflows.
              </li>

              <li>
                Used AI voice generation and text-to-voice tools for
                digital content creation.
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="education-section">

        <p className="section-label">EDUCATION</p>

        <h2>Education</h2>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <h3>
              B.E. / B.Tech – Computer Science and Engineering
            </h3>

            <p>
              Computer Science and Engineering Graduate
            </p>

            <span>
              CGPA: 7.8
            </span>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div>

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's connect
          </h2>

          <p>
            I'm open to entry-level opportunities in software development,
            QA, web development, AI, and other technology roles.
          </p>

        </div>

        <div className="contact-buttons">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hemamaalani24@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            ✉ Email Me
          </a>

          <a
            href="https://github.com/Hemamaalani"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            GitHub ↗
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Hemamaalani SJ. All rights reserved.
        </p>

        <a href="#home">
          ↑ Back to top
        </a>

      </footer>

    </div>
  );
}

export default App;