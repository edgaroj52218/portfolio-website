import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edgar Steven Ojeda | Software Engineer",
  description: "Portfolio of Edgar Steven Ojeda — full-stack software engineer based in NJ.",
};

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#e5e5e5", fontFamily: "system-ui, sans-serif" }}>

      {/* Nav */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 3rem",
        borderBottom: "1px solid #1f1f1f",
        position: "sticky",
        top: 0,
        background: "#111111",
        zIndex: 100,
      }}>
        <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>
          Edgar Ojeda
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#projects" style={navLinkStyle}>Projects</a>
          <a href="#skills" style={navLinkStyle}>Skills</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        padding: "6rem 3rem",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "90vh",
        alignItems: "center",
      }}>
        <div>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4f8ef7", marginBottom: "1rem" }}>
            Harrison, NJ · Graduating 2027 · Open to internships
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(229,229,229,0.4)", marginBottom: "1.5rem" }}>
            Full-Stack Software Engineer
          </p>
          <h1 style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.15, color: "#ffffff", marginBottom: "1.5rem" }}>
            I build backend systems and ship tested APIs, then make sure the next person can actually read what I wrote.
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(229,229,229,0.55)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "480px" }}>
            For engineering teams hiring an emerging full-stack developer who works across backend infrastructure, REST APIs, and React front-ends.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#projects" style={pillButtonStyle}>View projects</a>
            <a href="mailto:edgaroj52218@gmail.com" style={outlinePillStyle}>Email me</a>
          </div>
        </div>

        {/* Terminal visual */}
        <div style={{
          background: "#0d1117",
          border: "1px solid #1f1f1f",
          borderRadius: "12px",
          overflow: "hidden",
          fontFamily: "monospace",
        }}>
          <div style={{
            background: "#161b22",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderBottom: "1px solid #1f1f1f",
          }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "rgba(229,229,229,0.3)" }}>job-tracker-api — npm test</span>
          </div>
          <div style={{ padding: "1.5rem", fontSize: "0.8rem", lineHeight: 2 }}>
            <p style={{ color: "#4f8ef7", margin: 0 }}>$ npm test</p>
            <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>&gt; jest</p>
            <br />
            <p style={{ color: "rgba(229,229,229,0.7)", margin: 0 }}>PASS  __tests__/app.test.js</p>
            <p style={{ color: "rgba(229,229,229,0.5)", margin: 0, paddingLeft: "1rem" }}>Job Tracker API</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should create a new job application</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return 400 if company or role is missing</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return all job applications</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return a single job by ID</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return 404 for a non-existent job</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should update a job status</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return 404 for a non-existent job</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should delete a job</p>
            <p style={{ color: "#28c840", margin: 0, paddingLeft: "2rem" }}>✓ should return 404 for a non-existent job</p>
            <br />
            <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>Tests: <span style={{ color: "#28c840" }}>9 passed</span>, 9 total</p>
            <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>Time: 0.838s</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem 6rem",
      }}>
        {[
          { number: "3", label: "Virtual machines configured and deployed in a distributed system" },
          { number: "9", label: "Automated integration tests passing across all API endpoints" },
          { number: "2", label: "Live deployed projects in portfolio" },
        ].map((stat) => (
          <div key={stat.number} style={{
            background: "#111",
            border: "1px solid #1f1f1f",
            borderRadius: "12px",
            padding: "2rem",
          }}>
            <p style={{ fontSize: "3rem", fontWeight: 700, color: "#4f8ef7", margin: "0 0 0.5rem" }}>{stat.number}</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(229,229,229,0.5)", margin: 0, lineHeight: 1.5 }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* How I work */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem 6rem",
      }}>
        <p style={sectionLabelStyle}>How I work</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
          {[
            { title: "Configure before coding", body: "I spent more time this semester reading systemd logs and debugging Apache configs than writing application code. Infrastructure has to work before the app matters." },
            { title: "Test what you ship", body: "I identified automated testing as a gap in my skillset through real job description research, then built a project to close it. Now I write tests by default." },
            { title: "Use AI intentionally", body: "I use AI as a collaborator, not a crutch. I direct it with clear constraints, push back when output is wrong, and own every line that ships." },
          ].map((p) => (
            <div key={p.title} style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: "12px",
              padding: "2rem",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>{p.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(229,229,229,0.55)", lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem 6rem",
      }}>
        <p style={sectionLabelStyle}>Selected projects</p>
        <p style={{ fontSize: "1.75rem", fontWeight: 600, color: "#fff", marginBottom: "3rem", maxWidth: "600px", lineHeight: 1.3 }}>
          Three projects where the work was real, the data was live, and the tests actually ran.
        </p>

        {/* Job Tracker */}
        <div style={projectCardStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={projectEyebrowStyle}>Final Project · Spring 2026 · Node.js, Express, Jest</p>
              <h3 style={projectTitleStyle}>Job Tracker API</h3>
              <p style={projectBodyStyle}>
                A REST API for tracking job applications, built to demonstrate automated testing — identified as a missing skill through analysis of real software engineering job descriptions. Covers full CRUD with 9 integration tests across all endpoints.
              </p>
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={outcomeLabelStyle}>Outcome</p>
                <p style={projectBodyStyle}>9 of 9 tests passing. Every endpoint verified for correct status codes, response shape, and graceful failure on bad input.</p>
                <p style={outcomeLabelStyle}>Proof</p>
                <p style={projectBodyStyle}>Clean GitHub repo with README, setup instructions, and test runner. Runnable in under 2 minutes.</p>
              </div>
              <a href="https://github.com/edgaroj52218/job-tracker-api" target="_blank" rel="noopener noreferrer" style={pillButtonStyle}>
                View on GitHub →
              </a>
            </div>
            <div style={{
              background: "#0d1117",
              border: "1px solid #1f1f1f",
              borderRadius: "8px",
              padding: "1.5rem",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: 1.8,
              color: "rgba(229,229,229,0.6)",
            }}>
              <p style={{ color: "#4f8ef7", margin: "0 0 0.5rem" }}>POST /jobs</p>
              <p style={{ margin: 0 }}>{`{ "company": "WebMD",`}</p>
              <p style={{ margin: 0, paddingLeft: "1rem" }}>{`"role": "Associate Engineer" }`}</p>
              <br />
              <p style={{ color: "#28c840", margin: "0 0 0.5rem" }}>201 Created</p>
              <p style={{ margin: 0 }}>{`{ "id": 1,`}</p>
              <p style={{ margin: 0, paddingLeft: "1rem" }}>{`"company": "WebMD",`}</p>
              <p style={{ margin: 0, paddingLeft: "1rem" }}>{`"role": "Associate Engineer",`}</p>
              <p style={{ margin: 0, paddingLeft: "1rem" }}>{`"status": "applied" }`}</p>
              <br />
              <p style={{ color: "#4f8ef7", margin: "0 0 0.5rem" }}>PUT /jobs/1</p>
              <p style={{ margin: 0 }}>{`{ "status": "interviewing" }`}</p>
              <br />
              <p style={{ color: "#28c840", margin: 0 }}>200 OK</p>
            </div>
          </div>
        </div>

        {/* Student Reality Lab */}
        <div style={{ ...projectCardStyle, marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={projectEyebrowStyle}>Midterm Project · Spring 2026 · React, Recharts, BLS Data</p>
              <h3 style={projectTitleStyle}>Student Reality Lab</h3>
              <p style={projectBodyStyle}>
                An interactive data story answering whether entry-level wages have kept up with inflation since 2010. Built with real BLS wage and CPI data across 15 years, featuring a nominal vs. real wage toggle and year slider.
              </p>
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={outcomeLabelStyle}>Outcome</p>
                <p style={projectBodyStyle}>Deployed to Vercel. Two interactive views with meaningful interactions that change the data shown, not just the styling.</p>
                <p style={outcomeLabelStyle}>Proof</p>
                <p style={projectBodyStyle}>Full data provenance, data dictionary, audit notes, and interaction design rationale documented in the README.</p>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="https://student-reality-lab-ojeda.vercel.app/" target="_blank" rel="noopener noreferrer" style={pillButtonStyle}>Live Site →</a>
                <a href="https://github.com/edgaroj52218/student-reality-lab-ojeda" target="_blank" rel="noopener noreferrer" style={outlinePillStyle}>GitHub →</a>
              </div>
            </div>
            <div style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: "8px",
              padding: "1.5rem",
            }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(229,229,229,0.3)", marginBottom: "1rem" }}>Real wage vs nominal wage 2010–2025</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { year: "2010", real: 63, nominal: 63 },
                  { year: "2014", real: 62, nominal: 71 },
                  { year: "2018", real: 62, nominal: 78 },
                  { year: "2021", real: 61, nominal: 87 },
                  { year: "2025", real: 59, nominal: 100 },
                ].map((d) => (
                  <div key={d.year} style={{ display: "grid", gridTemplateColumns: "40px 1fr 60px", gap: "0.5rem", alignItems: "center", fontSize: "0.75rem" }}>
                    <span style={{ color: "rgba(229,229,229,0.4)" }}>{d.year}</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ height: 6, width: `${d.nominal}%`, background: "#4f8ef7", borderRadius: 2, opacity: 0.7 }} />
                      <div style={{ height: 6, width: `${d.real}%`, background: "#28c840", borderRadius: 2, opacity: 0.7 }} />
                    </div>
                    <span style={{ color: "rgba(229,229,229,0.6)", fontSize: "0.75rem", fontWeight: 700, textAlign: "right" }}>
                      {d.real < 63 ? "↓ real" : "↑ real"}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <span style={{ fontSize: "0.7rem", color: "rgba(229,229,229,0.4)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: 8, height: 8, background: "#4f8ef7", borderRadius: 2, display: "inline-block" }} /> Nominal
                </span>
                <span style={{ fontSize: "0.7rem", color: "rgba(229,229,229,0.4)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: 8, height: 8, background: "#28c840", borderRadius: 2, display: "inline-block" }} /> Real
                </span>
              </div>
            </div>
          </div>
        </div>
                <div style={{ ...projectCardStyle, marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={projectEyebrowStyle}>Final Project · Spring 2026 · Next.js, TypeScript, CSS</p>
              <h3 style={projectTitleStyle}>Professional Portfolio</h3>
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={projectBodyStyle}>Built with Next.js and TypeScript, deployed to GitHub Pages via GitHub Actions.
                  The design went through multiple passes — dark theme, two-column layouts, a custom terminal visual, 
                  sticky scrollytelling sections, and a CSS bar chart. Every section was written and iterated deliberately, 
                  using AI as a collaborator throughout.</p>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="https://edgaroj52218.github.io/portfolio-website/" target="_blank" rel="noopener noreferrer" style={pillButtonStyle}>Live Site →</a>
                <a href="https://github.com/edgaroj52218/scrollytelling_spec_driven" target="_blank" rel="noopener noreferrer" style={outlinePillStyle}>GitHub →</a>
              </div>
            </div>
            <div style={{
              background: "#0d1117",
              border: "1px solid #1f1f1f",
              borderRadius: "8px",
              padding: "1.5rem",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: 1.8,
              color: "rgba(229,229,229,0.6)",
            }}>
              <p style={{ color: "#4f8ef7", margin: "0 0 0.5rem" }}>$ npm run build</p>
              <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>&gt; next build</p>
              <br />
              <p style={{ color: "#28c840", margin: 0 }}>✓ Compiled successfully</p>
              <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>Route (app)</p>
              <p style={{ color: "rgba(229,229,229,0.6)", margin: 0, paddingLeft: "1rem" }}>○  /  (static)</p>
              <br />
              <p style={{ color: "#4f8ef7", margin: "0 0 0.5rem" }}>$ git push origin main</p>
              <p style={{ color: "rgba(229,229,229,0.5)", margin: 0 }}>→ GitHub Actions triggered</p>
              <p style={{ color: "#28c840", margin: 0 }}>✓ Deployed to GitHub Pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem 6rem",
      }}>
        <p style={sectionLabelStyle}>Skills & tools</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
          {[
            { label: "Languages", items: "Java · PHP · JavaScript · HTML · CSS · SQL · Bash" },
            { label: "Frameworks", items: "React · Node.js · Express · Recharts" },
            { label: "Tools", items: "Git · GitHub · Docker · MySQL · MongoDB · RabbitMQ · Apache2" },
            { label: "Infrastructure", items: "Linux · systemd · CI/CD · GitHub Actions · Tailscale" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: "12px",
              padding: "1.5rem",
            }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(229,229,229,0.3)", marginBottom: "0.75rem" }}>{s.label}</p>
              <p style={{ fontSize: "0.85rem", color: "rgba(229,229,229,0.65)", lineHeight: 1.6, margin: 0 }}>{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Looking for */}
      <section id="contact" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem 6rem",
      }}>
        <div style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: "16px",
          padding: "4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          <div>
            <p style={sectionLabelStyle}>Looking for</p>
            <p style={{ fontSize: "2rem", fontWeight: 600, color: "#fff", lineHeight: 1.25, marginBottom: "1.5rem" }}>
              Engineering teams that need someone who can work across the stack without losing clarity.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(229,229,229,0.55)", lineHeight: 1.6, marginBottom: "2rem" }}>
              I want to work on systems where reliability actually matters — where a server going down or an untested endpoint has real consequences. I am especially interested in roles where I can contribute to real backend systems, learn from senior engineers, and ship work that holds up under pressure.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="mailto:edgaroj52218@gmail.com" style={pillButtonStyle}>Email me →</a>
              <a href="https://www.linkedin.com/in/ojedastevenedgar/" target="_blank" rel="noopener noreferrer" style={outlinePillStyle}>LinkedIn →</a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="https://github.com/edgaroj52218" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "1rem",
              background: "#0a0a0a", border: "1px solid #1f1f1f", borderRadius: "10px",
              padding: "1.25rem 1.5rem", textDecoration: "none", color: "#e5e5e5",
            }}>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/GitHubLogo.png`} alt="GitHub" style={{ width: 24, height: 24, objectFit: "contain" }} />
              <div>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600 }}>GitHub</p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(229,229,229,0.4)" }}>github.com/edgaroj52218</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ojedastevenedgar/" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "1rem",
              background: "#0a0a0a", border: "1px solid #1f1f1f", borderRadius: "10px",
              padding: "1.25rem 1.5rem", textDecoration: "none", color: "#e5e5e5",
            }}>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/lnLogo.png`} alt="LinkedIn" style={{ width: 24, height: 24, objectFit: "contain", filter: "invert(1)" }} />
              <div>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600 }}>LinkedIn</p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(229,229,229,0.4)" }}>ojedastevenedgar</p>
              </div>
            </a>
            <a href="mailto:edgaroj52218@gmail.com" style={{
              display: "flex", alignItems: "center", gap: "1rem",
              background: "#0a0a0a", border: "1px solid #1f1f1f", borderRadius: "10px",
              padding: "1.25rem 1.5rem", textDecoration: "none", color: "#e5e5e5",
            }}>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/emailLogo.png`} alt="Email" style={{ width: 24, height: 24, objectFit: "contain", filter: "invert(1)" }} />
              <div>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600 }}>Email</p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(229,229,229,0.4)" }}>edgaroj52218@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1f1f1f",
        padding: "2rem 3rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <p style={{ fontSize: "0.8rem", color: "rgba(229,229,229,0.3)", margin: 0 }}>
          Edgar Steven Ojeda · Harrison, NJ · NJIT Information Technology · Graduating 2027
        </p>
      </footer>

    </main>
  );
}

// Shared styles
const navLinkStyle: React.CSSProperties = {
  color: "rgba(229,229,229,0.5)",
  textDecoration: "none",
  fontSize: "0.85rem",
  letterSpacing: "0.05em",
};

const pillButtonStyle: React.CSSProperties = {
  background: "#4f8ef7",
  color: "#fff",
  textDecoration: "none",
  padding: "0.6rem 1.25rem",
  borderRadius: "100px",
  fontSize: "0.85rem",
  fontWeight: 500,
  display: "inline-block",
};

const outlinePillStyle: React.CSSProperties = {
  background: "transparent",
  color: "#e5e5e5",
  textDecoration: "none",
  padding: "0.6rem 1.25rem",
  borderRadius: "100px",
  fontSize: "0.85rem",
  fontWeight: 500,
  border: "1px solid #333",
  display: "inline-block",
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(229,229,229,0.35)",
  marginBottom: "1rem",
};

const projectCardStyle: React.CSSProperties = {
  background: "#111",
  border: "1px solid #1f1f1f",
  borderRadius: "16px",
  padding: "2.5rem",
};

const projectEyebrowStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(229,229,229,0.35)",
  marginBottom: "0.5rem",
};

const projectTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#ffffff",
  marginBottom: "0.75rem",
};

const projectBodyStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(229,229,229,0.6)",
  lineHeight: 1.6,
  marginBottom: "0.75rem",
};

const outcomeLabelStyle: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#4f8ef7",
  marginBottom: "0.25rem",
};