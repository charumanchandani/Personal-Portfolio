import "../styles/skills.css";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Fundamentals",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "CRUD Operations",
        "API Integration",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Vite",
        "npm",
        "Postman",
        "Chrome DevTools",
        "Figma",
      ],
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Clear Communication",
        "Time Management",
        "Adaptability",
        "Attention to Detail",
      ],
    },
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      provider: "Oracle",
      year: "2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=19F4BE4CB83069CD7168E93DBD58EB7B498D8E5228F26363D5BD8B0795851915"
    },
    {
      title: "Data Analytics Job Simulation",
      provider: "Deloitte",
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_5YbnFcxzZTJbZu5JQ_1741849501729_completion_certificate.pdf"
    },
    {
      title: "Full Stack Development",
      provider: "Softpro X AKTU",
      year: "2025",
      link: "https://media.licdn.com/dms/image/v2/D5622AQF2Mr4TYK1Rug/feedshare-shrink_2048_1536/B56ZrAdxTrK4Aw-/0/1764165625994?e=1772668800&v=beta&t=qnV-CVYVUNKblyOdVLvRF_KY58U7HBhCCHdRLTXoT3U"
    },
    {
      title: "Python for Data Visualization",
      provider: "IBM",
      year: "2024",
      link: "https://www.credly.com/badges/925c5fba-6678-41b5-b0fd-178fe07898d9"
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and skills I use to build scalable full-stack applications
          </p>
        </div>

        <div className="skills-wrapper">

          {/* 4 Skill Cards */}
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <div className="card-header">
                  <span className="card-icon">{category.icon}</span>
                  <h3 className="card-title">{category.title}</h3>
                </div>

                <div className="card-body">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <span className="skill-tick">✓</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center Line only (clean version) */}
          <div className="center-line">
            <div className="line"></div>
          </div>

        </div>

        {/* Certifications */}
        <div className="certification-section">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">
              Professional training and verified technical achievements
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-provider">{cert.provider}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
