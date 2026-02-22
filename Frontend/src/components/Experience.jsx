import React, { useEffect, useRef } from "react";
import "../styles/experience.css";

const Experience = () => {
  const expRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("exp-visible");
        }
      },
      { threshold: 0.2 }
    );

    if (expRef.current) observer.observe(expRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional experience and practical industry exposure
          </p>
        </div>

        <div ref={expRef} className="exp-shell">
          {/* LEFT SUMMARY CARD */}
          <aside className="exp-list">
            <div className="exp-list-card active">
              <h4 className="exp-list-role">Frontend Developer Intern</h4>
              <p className="exp-list-company">Aroma Brand Solutions</p>
              <span className="exp-list-date">
                25 Nov 2024 – 07 Feb 2025
              </span>

              <div className="exp-list-tags">
                <span className="exp-chip primary">Internship</span>
                <span className="exp-chip">Remote</span>
                <span className="exp-chip">3 Months</span>
              </div>
            </div>
          </aside>

          {/* RIGHT DETAIL CARD */}
          <article
            className="exp-detail-card stagger"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            <h3 className="exp-detail-role">
              Frontend Developer Intern
            </h3>
            <p className="exp-detail-company">
              Aroma Brand Solutions · 25 Nov 2024 – 07 Feb 2025 · Remote
            </p>

            <p className="exp-detail-intro">
              During my internship at Aroma Brand Solutions, I worked on
              production-ready web interfaces and contributed to real-world
              marketing and branding projects, gaining hands-on industry
              experience in frontend development with exposure to full-stack
              workflows.
            </p>

            <h4 className="exp-section-title">Key Responsibilities</h4>
            <ul className="exp-detail-list">
              <li>
                Developed responsive and reusable frontend components for
                marketing and business websites.
              </li>
              <li>
                Translated design requirements into clean, user-friendly, and
                visually consistent web interfaces.
              </li>
              <li>
                Optimized UI performance, responsiveness, and cross-browser
                compatibility.
              </li>
              <li>
                Collaborated with team members to understand project goals,
                timelines, and implementation requirements.
              </li>
            </ul>

            <h4 className="exp-section-title">Technologies Used</h4>
            <div className="exp-tech">
              {["HTML", "CSS", "JavaScript", "React", "Figma"].map((tech) => (
                <span key={tech} className="exp-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <p className="exp-tagline">
              Building scalable UI solutions with a strong foundation for
              full-stack development.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
