import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionLinks = [
    { id: "experience-section", label: "EXPERIENCE" },
    { id: "projects-section", label: "PROJECTS" },
    { id: "skills-section", label: "SKILLS" },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "border-b border-neon-blue/20 backdrop-blur-md" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="text-2xl font-cyber font-bold text-neon-blue neon-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              KJiShou
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300"
              >
                HOME
              </Link>
            </motion.div>
            {sectionLinks.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={`/#${section.id}`}
                  onClick={() => handleSectionClick(section.id)}
                  className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300"
                >
                  {section.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to="https://github.com/KJiShou"
                target="_blank"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 relative group"
              >
                <FaGithub className="text-lg" />
                <span className="relative z-10">GITHUB</span>
                <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-blue/20"></div>
              </Link>
            </motion.div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="https://github.com/KJiShou" 
                target="_blank"
                className="text-neon-blue hover:text-neon-cyan transition-colors"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="text-neon-blue hover:text-neon-cyan transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden glass-strong rounded-xl mt-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <motion.div 
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/"
                      onClick={handleHomeClick}
                      className="block px-4 py-3 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 glass rounded-lg border border-neon-blue/10 hover:border-neon-blue/30"
                    >
                      HOME
                    </Link>
                  </motion.div>
                  {sectionLinks.map((section) => (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={`/#${section.id}`}
                        onClick={() => handleSectionClick(section.id)}
                        className="block px-4 py-3 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 glass rounded-lg border border-neon-blue/10 hover:border-neon-blue/30"
                      >
                        {section.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
