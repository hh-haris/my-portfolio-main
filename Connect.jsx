import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedinIn, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { PageTransition } from "./PageTransition.jsx";
import { motion } from "framer-motion";

const Connect = () => {
  // Update these with your social links
  const socialLinks = [
    {
      icon: faXTwitter,
      url: "https://x.com/yourusername",
      label: "X (Twitter)",
    },
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: faGithub,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: faDribbble,
      url: "https://dribbble.com/yourusername",
      label: "Dribbble",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="t-section section-title-gap text-6xl text-primary">
            Let's <span className="italic md:text-6xl text-primary text-6xl">Connect</span>
          </motion.h1>

          <motion.p className="t-body mb-10 max-w-2xl mx-auto" variants={itemVariants}>
            Have a project in mind or just want to chat? Feel free to reach out through any of these platforms.
          </motion.p>

          <div className="flex justify-center gap-6 md:gap-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                custom={index}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={social.icon} className="w-8 h-8 md:w-10 md:h-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Connect;
