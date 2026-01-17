import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSwatchbook, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const About = () => {
  const [activeSkillTab, setActiveSkillTab] = useState("Tools");
  const [ripples, setRipples] = useState({});
  const rippleIdRef = useRef(0);

  const createRipple = (e, tabName) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: rippleIdRef.current++ };
    
    setRipples(prev => ({
      ...prev,
      [tabName]: [...(prev[tabName] || []), newRipple]
    }));
    
    setTimeout(() => {
      setRipples(prev => ({
        ...prev,
        [tabName]: (prev[tabName] || []).filter(r => r.id !== newRipple.id)
      }));
    }, 600);
  };

  // Update with your tools
  const toolCategories = [
    {
      icon: faCode,
      categoryName: "Development Tools",
      tools: [
        { name: "VS Code", desc: "Code Editor" },
        { name: "Git", desc: "Version Control" },
        { name: "GitHub", desc: "Code Hosting" },
        { name: "Vercel", desc: "Deployment Platform" }
      ]
    },
    {
      icon: faSwatchbook,
      categoryName: "Design Tools",
      tools: [
        { name: "Figma", desc: "UI/UX Design" },
        { name: "Photoshop", desc: "Image Editing" },
        { name: "Illustrator", desc: "Vector Graphics" }
      ]
    },
    {
      icon: faWandMagicSparkles,
      categoryName: "Other Tools",
      tools: [
        { name: "Notion", desc: "Notes & Planning" },
        { name: "Slack", desc: "Communication" },
        { name: "Jira", desc: "Project Management" }
      ]
    }
  ];

  // Update with your languages/skills
  const languages = [
    { name: "JavaScript", proficiency: "Advanced" },
    { name: "TypeScript", proficiency: "Intermediate" },
    { name: "Python", proficiency: "Intermediate" },
    { name: "React", proficiency: "Advanced" }
  ];

  const skillTabs = ["Tools", "Languages"];

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
      <TooltipProvider delayDuration={200}>
        <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="section-gap">
              {/* About Me */}
              <motion.section
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="t-section section-title-gap">About me</h2>
                <p className="t-body leading-relaxed text-left">
                  I'm a passionate developer and designer who loves creating beautiful, functional digital experiences. 
                  With a focus on clean code and intuitive design, I build products that users love. 
                  Currently exploring new technologies and always eager to learn and grow.
                </p>
              </motion.section>

              {/* Education & Experience */}
              <motion.section
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-8 md:gap-12"
              >
                <div>
                  <h2 className="t-section section-title-gap">Education</h2>
                  <div className="item-gap">
                    <div>
                      <h3 className="t-item-title">Bachelor's Degree</h3>
                      <p className="t-body mt-1">University Name, Location</p>
                      <p className="t-meta mt-1">2020 - 2024 | Computer Science</p>
                    </div>
                    <div>
                      <h3 className="t-item-title">High School Diploma</h3>
                      <p className="t-body mt-1">School Name, Location</p>
                      <p className="t-meta mt-1">2016 - 2020</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="t-section section-title-gap">Experience</h2>
                  <div className="item-gap">
                    <div>
                      <h3 className="t-item-title">Software Developer</h3>
                      <p className="t-body mt-1">Company Name | Full-time</p>
                      <div className="mt-2 para-gap">
                        <p className="t-body text-left">
                          Developed and maintained web applications using modern technologies. 
                          Collaborated with design and product teams to deliver high-quality features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-3">
                    {skillTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={(e) => {
                          createRipple(e, tab);
                          setActiveSkillTab(tab);
                        }}
                        className={cn(
                          "relative overflow-hidden px-4 py-1.5 font-instrument text-base md:text-lg transition-all duration-300 rounded-full border border-muted-foreground/30",
                          activeSkillTab === tab
                            ? "bg-primary text-primary-foreground italic"
                            : "hover:bg-secondary"
                        )}
                      >
                        {(ripples[tab] || []).map((ripple) => (
                          <span
                            key={ripple.id}
                            className="absolute rounded-full bg-current opacity-30 animate-ripple pointer-events-none"
                            style={{
                              left: ripple.x,
                              top: ripple.y,
                              transform: "translate(-50%, -50%)"
                            }}
                          />
                        ))}
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6">
                    {activeSkillTab === "Tools" && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {toolCategories.map((category, catIndex) => (
                          <div key={catIndex} className="flex items-start gap-4">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="cursor-pointer">
                                  <FontAwesomeIcon
                                    icon={category.icon}
                                    className="w-5 h-5 text-primary mt-1 flex-shrink-0 hover:scale-110 transition-transform"
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="rounded-full px-4 py-2">
                                <p>{category.categoryName}</p>
                              </TooltipContent>
                            </Tooltip>
                            <div className="flex flex-wrap gap-2">
                              {category.tools.map((tool, index) => (
                                <Tooltip key={index}>
                                  <TooltipTrigger asChild>
                                    <span className="px-3 py-1 border border-muted-foreground/30 rounded-full text-xs md:text-sm cursor-pointer hover:border-muted-foreground transition-colors">
                                      {tool.name}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent className="rounded-full px-4 py-2">
                                    <p>{tool.desc}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeSkillTab === "Languages" && (
                      <motion.div
                        className="space-y-3 max-w-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {languages.map((lang, index) => (
                          <div key={index} className="flex items-center py-1.5">
                            <span className="font-space font-light text-sm">{lang.name}</span>
                            <div className="w-8 h-px bg-muted-foreground/30 mx-4" />
                            <span className="font-space font-light text-sm">{lang.proficiency}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </PageTransition>
  );
};

export default About;
