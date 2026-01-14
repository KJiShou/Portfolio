import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Profile = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Game Developer",
          "Full Stack Web Developer",
          "Interactive Software Developer",
          "Unity Specialist"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full mx-auto">
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-neon-blue/40 shadow-[0_0_30px_rgba(0,212,255,0.4)]">
            <img
              src="/assets/profile/personal_image.jpeg"
              alt="Portrait of Kong Ji Shou"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl font-cyber font-black mb-4 neon-text text-neon-blue text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Kong Ji Shou
        </motion.h1>

        <div className="mb-4 text-center text-neon-cyan md:text-2xl h-6 flex items-center justify-center">
          <span ref={typedRef}></span>
        </div>

        <motion.div 
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="mailto:jihsoukong@gmail.com" className="group">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
              <CgMail className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/kong-ji-shou-39b36a22a/" target="_blank" className="group">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
              <FaLinkedin className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
            </div>
          </Link>
          <Link to="https://github.com/KJiShou" target="_blank" className="group">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
              <FaGithub className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
            </div>
          </Link>
          <Link to="https://kjishou.itch.io/" target="_blank" className="group">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-neon-blue group-hover:text-neon-cyan transition-colors" viewBox="0 0 245.371 220.736" fill="currentColor">
                <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007l.008.028c.65 1.83 1.26 3.532 1.816 5.193 15.285 45.49-.88 90.038-23.1 101.32-22.22 11.283-64.728 11.283-75.01 11.283h-.012c-10.282 0-52.79 0-75.01-11.282-22.22-11.283-38.386-55.83-23.1-101.32.554-1.66 1.165-3.362 1.817-5.193l.008-.027c10.684-30.008 26.017-30.008 29.85-30.008z"/>
              </svg>
            </div>
          </Link>
        </motion.div>

        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-strong rounded-2xl px-8 py-6 border border-neon-blue/20 max-w-2xl">
            <div className="text-xl font-futura font-medium text-neon-cyan leading-relaxed text-center">
              "Crafting Interactive Experiences & Building Innovative Solutions"
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link to="#projects-section">
            <button className="btn-futuristic">
              <span className="relative z-10">VIEW PROJECTS</span>
            </button>
          </Link>
          <Link to="mailto:jihsoukong@gmail.com">
            <button className="btn-futuristic bg-gradient-to-r from-neon-purple to-neon-pink">
              <span className="relative z-10">CONTACT ME</span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
