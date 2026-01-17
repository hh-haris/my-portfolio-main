import { useState } from "react";
import { PageTransition } from "./PageTransition.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { RippleButton } from "./RippleButton.jsx";
import { motion } from "framer-motion";

const Lab = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  // Update with your projects
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. Explain what it does, the technologies used, and your role in building it.",
      type: "open-source",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "Another project description. Highlight the key features and what makes this project special or interesting.",
      type: "client",
      liveUrl: "https://example.com",
    },
    {
      title: "Project Three",
      description: "Description for your third project. Share the challenges you faced and how you overcame them.",
      type: "open-source",
      githubUrl: "https://github.com/yourusername/project-three",
    },
  ];

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.section
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-title-gap">
              <h2 className="t-section">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="text-muted-foreground font-space text-xs text-center px-4">
                      Project Screenshot
                    </span>
                  </div>

                  <div className="pt-3">
                    <h3 className="t-item-title mb-1">{project.title}</h3>

                    <div className="mb-3">
                      <p className={`t-body ${expandedProject === index ? "" : "line-clamp-2"}`}>
                        {project.description}
                      </p>
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="text-xs font-space text-primary hover:underline mt-1"
                      >
                        {expandedProject === index ? "Show less" : "Read more"}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <RippleButton variant="default" rippleOnHover className="px-3 py-1.5 text-xs">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                            Demo
                          </RippleButton>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <RippleButton variant="outline" rippleOnHover className="px-3 py-1.5 text-xs">
                            <FontAwesomeIcon icon={faGithub} className="w-3 h-3" />
                            GitHub
                          </RippleButton>
                        </a>
                      )}
                      {project.downloadUrl && (
                        <a href={project.downloadUrl} download>
                          <RippleButton variant="outline" rippleOnHover className="px-3 py-1.5 text-xs">
                            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                            Download
                          </RippleButton>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Lab;
