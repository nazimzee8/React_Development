import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const LINKS = {
  linkedin: "https://linkedin.com/in/nazim-zerrouki-1966a51b7",
  facebook: "https://www.facebook.com/nazerrouki/",
  twitter: "https://twitter.com/NaZerrouki",
  github: "https://github.com/nazimzee8",
  email: "mailto:nazerrouki@gmail.com",
};

const IMAGERY = {
  hero: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=80",
  about: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=2000&q=80",
  skills: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
  purpose: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80",
  tips: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80",
  contact: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=2000&q=80",
  profile: "https://i.imgur.com/FpV5ylC.jpg?1",
};

const SECTION_KEYS = ["home", "about", "skills", "purpose", "tips", "contact"];

function formatToday() {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

function useActiveSection(sectionRefs) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const entries = SECTION_KEYS.map((k) => [k, sectionRefs[k]?.current]).filter(([, el]) => el);
    const targets = entries.map(([, el]) => el);
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (obsEntries) => {
        const visible = obsEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target) return;

        const match = entries.find(([, el]) => el === visible.target);
        if (match?.[0]) setActive(match[0]);
      },
      { threshold: [0.25, 0.4, 0.6], rootMargin: "-15% 0px -70% 0px" }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [sectionRefs]);

  return active;
}

function NavBtn({ active, onClick, children }) {
  return (
    <button className={`nz-navbtn ${active ? "is-active" : ""}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function IconLink({ label, href, src }) {
  return (
    <a className="nz-iconlink" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      <img src={src} alt={label} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, subtitle, image }) {
  return (
    <div className="nz-sectionhead">
      <div className="nz-sectionhead-bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="nz-sectionhead-overlay" />
      <div className="nz-container nz-sectionhead-inner">
        {eyebrow ? <div className="nz-eyebrow">{eyebrow}</div> : null}
        <h2 className="nz-h2">{title}</h2>
        {subtitle ? <div className="nz-subtitle">{subtitle}</div> : null}
      </div>
    </div>
  );
}

function MiniCard({ title, subtitle, img, onClick }) {
  return (
    <button className="nz-minicard" onClick={onClick} type="button">
      <span className="nz-minicard-bg" style={{ backgroundImage: `url(${img})` }} />
      <span className="nz-minicard-overlay" />
      <span className="nz-minicard-text">
        <span className="nz-minicard-title">{title}</span>
        <span className="nz-minicard-sub">{subtitle}</span>
      </span>
    </button>
  );
}

function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    purpose: useRef(null),
    tips: useRef(null),
    contact: useRef(null),
  };

  const active = useActiveSection(refs);
  const currDate = useMemo(() => formatToday(), []);

  const scrollTo = (key) => {
    const el = refs[key]?.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="nz-root">
      <div className="nz-ambient" aria-hidden="true">
        <div className="nz-orb nz-orb-a" />
        <div className="nz-orb nz-orb-b" />
        <div className="nz-orb nz-orb-c" />
        <div className="nz-grid" />
      </div>

      <div className="nz-topbar">
        <div className="nz-topbar-inner">
          <div className="nz-topbar-left">
            <span className="nz-badge">Updated</span>
            <span className="nz-muted">{currDate}</span>
          </div>
          <div className="nz-topbar-right">
            <a className="nz-toplink" href={LINKS.email}>
              Contact Me
            </a>
            <div className="nz-social-inline" aria-label="Social links">
              <IconLink
                label="LinkedIn"
                href={LINKS.linkedin}
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              />
              <IconLink
                label="GitHub"
                href={LINKS.github}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
              <IconLink
                label="Twitter"
                href={LINKS.twitter}
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              />
              <IconLink
                label="Facebook"
                href={LINKS.facebook}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              />
            </div>
          </div>
        </div>
      </div>

      <header className="nz-nav">
        <div className="nz-nav-inner">
          <button className="nz-logo" onClick={() => scrollTo("home")} type="button">
            <span className="nz-logo-dot" />
            <span className="nz-logo-text">Nazim’s Portfolio</span>
          </button>

          <nav className="nz-nav-links" aria-label="Primary navigation">
            <NavBtn active={active === "about"} onClick={() => scrollTo("about")}>
              About
            </NavBtn>
            <NavBtn active={active === "skills"} onClick={() => scrollTo("skills")}>
              Skills
            </NavBtn>
            <NavBtn active={active === "purpose"} onClick={() => scrollTo("purpose")}>
              Purpose
            </NavBtn>
            <NavBtn active={active === "tips"} onClick={() => scrollTo("tips")}>
              Tips
            </NavBtn>
            <NavBtn active={active === "contact"} onClick={() => scrollTo("contact")}>
              Contacts
            </NavBtn>
          </nav>

          <div className="nz-nav-cta">
            <button className="nz-btn nz-btn-ghost" onClick={() => scrollTo("contact")} type="button">
              Get in touch
            </button>
            <button className="nz-btn" onClick={() => scrollTo("about")} type="button">
              Read More
            </button>
          </div>
        </div>
      </header>

      <section ref={refs.home} className="nz-hero" aria-label="Hero">
        <div className="nz-hero-bg" style={{ backgroundImage: `url(${IMAGERY.hero})` }} />
        <div className="nz-hero-overlay" />
        <div className="nz-container nz-hero-inner">
          <div className="nz-hero-left">
            <div className="nz-kicker">
              <span className="nz-kicker-pill">Nazim’s Graduate Portfolio</span>
              <span className="nz-kicker-date">{currDate}</span>
            </div>

            <h1 className="nz-title">
             Building scalable software and data-driven systems with <span className="nz-accent">real-world impact</span>.
            </h1>

            <p className="nz-lead">
              I'm Nazim, an aspiring software engineer who enjoys tackling complex problems to provide
              software integrated solutions that address user painpoints.
            </p>

            <div className="nz-hero-actions">
              <button className="nz-btn" onClick={() => scrollTo("about")} type="button">
                Explore
              </button>
              <button className="nz-btn nz-btn-ghost" onClick={() => scrollTo("skills")} type="button">
                Jump to Skills
              </button>
            </div>

            <div className="nz-mini-grid" aria-label="Quick navigation tiles">
              <MiniCard title="Learn More" subtitle="About Me" img={IMAGERY.about} onClick={() => scrollTo("about")} />
              <MiniCard
                title="Hard Skills"
                subtitle="Programming Languages"
                img={IMAGERY.skills}
                onClick={() => scrollTo("skills")}
              />
              <MiniCard
                title="The Objective"
                subtitle="Purpose"
                img={IMAGERY.purpose}
                onClick={() => scrollTo("purpose")}
              />
              <MiniCard title="Strategies" subtitle="Tips" img={IMAGERY.tips} onClick={() => scrollTo("tips")} />
            </div>
          </div>

          <aside className="nz-profile" aria-label="Profile">
            <div className="nz-profile-card">
              <div className="nz-profile-top">
                <img className="nz-avatar" src={IMAGERY.profile} alt="Profile pic" />
                <div className="nz-profile-meta">
                  <div className="nz-name">Nazim Zerrouki</div>
                  <div className="nz-role">Aspiring Software Developer</div>
                  <div className="nz-meta-row">
                    <span className="nz-chip">UW Tacoma (CS & Systems)</span>
                    <span className="nz-chip">Projects • Skills • Growth</span>
                  </div>
                </div>
              </div>

              <div className="nz-profile-actions">
                <a className="nz-btn nz-btn-wide" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="nz-btn nz-btn-ghost nz-btn-wide" href={LINKS.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <div className="nz-profile-footer">
                <span className="nz-muted">Scroll for About, Skills, Purpose, Tips, and Contact.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section ref={refs.about} className="nz-section" aria-label="About">
        <SectionHeader eyebrow="Learn More | Nazim Zerrouki" title="About Me" image={IMAGERY.about} />
        <div className="nz-container">
          <div className="nz-grid-2">
            <div className="nz-card">
              <div className="nz-prose">
                <h3>
                  I am an aspiring software developer currently purusing the MSIS program at University of Washington Foster
                  with a passion for delivering software solutions to fix complex problems that impact the daily lives of many.
                  Beyond the MSIS program, I am learning cloud fundamentals, network infrastructure, and IT infrastructure.
                  Understanding infrastructure is instrumental for deploying public software-integrated solutions.
                  <br />
                  <br />
                  Education:
                  <ul>
                    <li>University of Washington, Tacoma. Bachelors' of Science in Computer Science and Systems, 2016-2020.</li>
                    <li>University of Washington, Tacoma. Masters' of Science in Computer Science and Systems, 2020-2023.</li>
                    <li>University of Washington Seattle. Masters' of Science in Infromation Systems, 2025-2026.</li>
                  </ul>
                  <br />
                  <br />
                  For more information and inquiries, please get in touch with me. &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="nz-inline-btn" onClick={() => window.location.replace(LINKS.linkedin)} type="button">
                    Contact Me
                  </button>
                </h3>
              </div>
            </div>

            <div className="nz-card nz-card-media">
              <div className="nz-media" style={{ backgroundImage: `url(${IMAGERY.about})` }} />
              <div className="nz-card-overlay">
                <div className="nz-overlay-title">Background</div>
                <div className="nz-overlay-sub">University of Washington • Projects • Growth mindset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.skills} className="nz-section" aria-label="Skills">
        <SectionHeader
          eyebrow="Hard Skills; Programming Languages"
          title="Cultivating Skills from University of Washington and Self-Learning"
          subtitle={`${currDate} | By Nazim Zerrouki`}
          image={IMAGERY.skills}
        />
        <div className="nz-container">
          <div className="nz-grid-2">
            <div className="nz-card">
              <div className="nz-card-head">
                <div className="nz-card-title">Hard Skills</div>
                <img
                  className="nz-card-icon"
                  alt="Hard skills icon"
                  src="https://static.vecteezy.com/system/resources/previews/014/541/527/original/administrator-system-icon-simple-style-vector.jpg"
                />
              </div>

              <div className="nz-prose">
                <h4>
                  Specific skills, competencies, knowledge, and abilities of programming languages, frameworks, and APIs
                  that can be leveraged for developing software applications.
                </h4>
                <h4 style={{ fontWeight: "bold" }}> Hard Skills:</h4>
                <h4>
                  <ul>
                    <li>Object Oriented Programming (Java, Python, JavaScript, C)</li>
                    <li>Algorithms (Dynammic Programming, Recursion) </li>
                    <li>Database Design (Relational Databases, SQL, OracleDB, Microsoft Azure)</li>
                    <li>Web Development (HTML/CSS, JavaScript, Node.js, Reactjs)</li>
                    <li>Machine Learning (Neural Networks, Model-based, Model-free)</li>
                    <li>Web Services (Node-red, Rest API (Java), Flask (Python))</li>
                    <li>Data Analytics</li>
                    <li>Full-Stack Development (HTML/CSS, JavaScript, Node.js, Reactjs, PHP) </li>
                    <li>Artificial Intelligence</li>
                    <li>Cloud Computing (GCP, AWS, Azure)</li>
                    <li>Mobile App Development (Java)</li>
                  </ul>
                </h4>
              </div>
            </div>

            <div className="nz-card">
              <div className="nz-card-head">
                <div className="nz-card-title">Soft Skills</div>
                <img
                  className="nz-card-icon"
                  alt="Soft skills icon"
                  src="https://i.pinimg.com/736x/d7/1b/70/d71b703a681d8674bec810570ab1809a.jpg"
                />
              </div>

              <div className="nz-prose">
                <h4>
                  Personality traits, behaviors, interpersonal skills, and social competencies that can be used while
                  managing tasks and interacting with others when developing projects.
                </h4>
                <h4 style={{ fontWeight: "bold" }}> Soft Skills:</h4>
                <h4>
                  <ul>
                    <li>Communication</li>
                    <li>Collaboration</li>
                    <li>Teamwork</li>
                    <li>Research</li>
                    <li>Friendliness</li>
                    <li>Adaptability</li>
                    <li>Prioritization</li>
                    <li>Time Management</li>
                    <li>Problem Solver</li>
                    <li>Flexible</li>
                    <li>Self-Motivated</li>
                    <li>Leadership Skills</li>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.purpose} className="nz-section" aria-label="Purpose">
        <SectionHeader eyebrow="The Objective | Nazim Zerrouki" title="Purpose" image={IMAGERY.purpose} />
        <div className="nz-container">
          <div className="nz-grid-2">
            <div className="nz-card">
              <div className="nz-prose">
                <h3>
                  <p>
                    I enjoyed my time developing multiple programming skills at Univerisity of Washington, Tacoma.
                    However, there were also numerous difficulties that I had to overcome; some of which left me questioning
                    if I was ever going to graduate and succeed. This feeling of doubt and unieasiness was something that he begun
                    during my first year at University of Washington which had persisted during the time I was enrolled in their
                    Computer Science program. My first programming course was an introduction to programming where I first learned
                    how to program in python. There were some students that also struggled but many others who grasped these concepts
                    relatively quickly whereas for me, it felt like a foreign language; incomprehensible.
                  </p>

                  <p>
                    I was typically an A student who made it to the Deans' list within the majority of my academic career and yet
                    I scored one of the lowest grades I had ever received in a class, a 3.0. Towards the end of the class, I was actually
                    relieved that it was finally over. None of the material that was discussed in the class made any sense to me.
                    Creating my own for loops to solve a problem without hardcoding it was perplexing to me, I didn't even remotely understand
                    how to parse through a file, and I didn't understand how to construdct my own functions to effectively solve a problem
                    in respect to different parameters.
                  </p>

                  <p>
                    While I didn't understand it at the time, programming is very similar to math; not in the sense of rationalizing
                    complex problems using a set of rules. It's all about comparmentalizing a problem and interpreting each piece in a way
                    that is understandable to you via pseudocode. This is often done by thinking simplistically about what needs to be done before
                    translating it into code.
                  </p>

                  <p>
                    This wasn't the only time I struggled. My last year at University of Washington was especially a difficult one where
                    I worked in a group on a big project that was especially difficult to work with. There are things that I had learned
                    throughout my academic career to help me succeed throughout my undergraduate and graduate ventures at University of Washington.
                  </p>
                </h3>
              </div>
            </div>

            <div className="nz-card nz-card-media">
              <div className="nz-media" style={{ backgroundImage: `url(${IMAGERY.purpose})` }} />
              <div className="nz-card-overlay">
                <div className="nz-overlay-title">Persistence</div>
                <div className="nz-overlay-sub">Learning, compartmentalizing, and pushing through</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.tips} className="nz-section" aria-label="Tips & Strategies">
        <SectionHeader title="Tips & Strategies" image={IMAGERY.tips} />
        <div className="nz-container">
          <div className="nz-grid-2">
            <div className="nz-card nz-card-media">
              <div className="nz-media" style={{ backgroundImage: `url(${IMAGERY.tips})` }} />
              <div className="nz-card-overlay">
                <div className="nz-overlay-title">What it takes</div>
                <div className="nz-overlay-sub">Collaboration • Focus • Resourcefulness</div>
              </div>
            </div>

            <div className="nz-card">
              <div className="nz-prose">
                <ul className="nz-tiplist">
                  <li>
                    <h3>
                      <u>Collaborate with others.</u>&ensp;
                      Forming tight-knit groups using various different channels such as Zoom and Discord is an excellent way to gain additional support and learn from others.
                      This varies across schools, but as long as the work that is produced is your own, any collaborative work is welcome.
                      Through my experience, I found that collaboration has had a profound impact on the work that I produced.
                      It will also better prepare you for the real world.
                    </h3>
                  </li>

                  <li>
                    <h3>
                      <u>Don't take notes.</u> &ensp; It's more important to pay attention to the concepts that are taught in class rather than mindlessly writing everything down. Professors will typically record their lectures, so that crucial explanations can be revisited at your own leisure.
                      Paying attention to distinct words can help you uncover things that written notes couldn't.
                    </h3>
                  </li>

                  <li>
                    <h3>
                      <u>Break a problem into pieces.</u> &ensp; Compartmentalize. Understand what is required for the problem and think about what classes, interfaces, and functions are needed to accomplish the task.
                      If you need a data structure to return the game state of a board, write a function for it.
                      If you need to update the board, write a function for it.
                      This way, when you understand what needs to be done, you can simply call that function and focus your time on the next task.
                      This also makes it easier to focus and not be overwhelmed.
                    </h3>
                  </li>

                  <li>
                    <h3>
                      <u>Learn to be resourceful.</u> &ensp;
                      Collaboration is crucial, but one of the most important things I learned is that Google is your best friend.
                      In Computer Security, I was required to complete a variety of esoteric labs found on Seed Labs and the most important thing was not whether or not I understood Cybersecurity.
                      It's the fact that I was willing to learn and was willing to continue searching through the Web until I found the information that I needed.
                      This also enabled me to create a web page and connect it to an advanced relational database with the help of a partner despite having no prior experience.
                      That can be located on my{" "}
                      <a style={{ cursor: "pointer", textDecorationColor: "pink" }} href="https://github.com/nazimzee8">
                        github
                      </a>
                      .
                    </h3>
                  </li>

                  <li>
                    <h3>
                      <u>Use visuals to help.</u> &ensp; Creating visual diagrams is very useful for analyzing how a data structure works or discerning a pattern in an algorithm.
                    </h3>
                  </li>

                  <li>
                    <h3>
                      <u>Use inductive reasoning. </u> &ensp;
                      Learning how to make generalizations by analyzing a sub-problem and applying it to the entire problem as a whole is very useful in simplifying and envisioning a problem.
                      Don't focus on the entire problem, create a sub-problem that is manageable.
                    </h3>
                  </li>
                </ul>

                <div className="nz-tipimages">
                  <img alt="Teamwork" src="https://nazimz99.github.io/UW-CS_Experience/img/teamwork.png" />
                  <img alt="Break" src="https://nazimz99.github.io/UW-CS_Experience/img/break.png" />
                  <img
                    alt="General Tree Structure"
                    src="https://nazimz99.github.io/UW-CS_Experience/img/General-Tree-Structure.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.contact} className="nz-section" aria-label="Contacts">
        <SectionHeader eyebrow="Get Connected" title="Contact Me" image={IMAGERY.contact} />
        <div className="nz-container">
          <div className="nz-grid-2">
            <div className="nz-card">
              <div className="nz-contact-grid">
                <a className="nz-contact-tile" href={LINKS.email}>
                  <img
                    alt="Email"
                    src="https://th.bing.com/th/id/OIP.Z2lotQUlRFaoqY7m3Ma89QHaHa?rs=1&pid=ImgDetMain"
                  />
                  <div>
                    <div className="nz-contact-title">Email</div>
                    <div className="nz-contact-value">nazerrouki@gmail.com</div>
                  </div>
                </a>

                <a className="nz-contact-tile" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <img alt="LinkedIn" src="https://www.xenneotech.com/images/linked-in.png" />
                  <div>
                    <div className="nz-contact-title">LinkedIn</div>
                    <div className="nz-contact-value">Nazim Zerrouki</div>
                  </div>
                </a>
              </div>

              <div className="nz-divider" />

              <div className="nz-prose">
                <p className="nz-muted">Prefer a quick hello? Click email or LinkedIn above — both open instantly.</p>
              </div>
            </div>

            <div className="nz-card nz-card-media">
              <div className="nz-media" style={{ backgroundImage: `url(${IMAGERY.contact})` }} />
              <div className="nz-card-overlay">
                <div className="nz-overlay-title">Open to connect</div>
                <div className="nz-overlay-sub">Email • LinkedIn • Socials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="nz-footer">
        <div className="nz-container nz-footer-inner">
          <button className="nz-footer-brand" onClick={() => scrollTo("home")} type="button">
            <span className="nz-logo-dot" />
            <span>Nazim Zerrouki</span>
          </button>

          <nav className="nz-footer-links" aria-label="Footer navigation">
            <button onClick={() => scrollTo("home")} type="button">
              Home
            </button>
            <button onClick={() => scrollTo("about")} type="button">
              About
            </button>
            <button onClick={() => scrollTo("skills")} type="button">
              Skills
            </button>
            <button onClick={() => scrollTo("purpose")} type="button">
              Purpose
            </button>
            <button onClick={() => scrollTo("tips")} type="button">
              Tips
            </button>
            <button onClick={() => scrollTo("contact")} type="button">
              Contact
            </button>
          </nav>

          <div className="nz-footer-social">
            <IconLink
              label="LinkedIn"
              href={LINKS.linkedin}
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            />
            <IconLink label="GitHub" href={LINKS.github} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <IconLink
              label="Twitter"
              href={LINKS.twitter}
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            />
            <IconLink
              label="Facebook"
              href={LINKS.facebook}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            />
          </div>
        </div>

        <div className="nz-footer-bottom">
          <div className="nz-container">
            <div className="nz-muted">2025 Nazim Zerrouki | All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
