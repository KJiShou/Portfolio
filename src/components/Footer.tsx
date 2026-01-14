import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <motion.footer 
      className="relative w-full py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="absolute top-10 left-1/4 w-1 h-1 bg-neon-blue rounded-full animate-pulse-neon"></div>
      <div className="absolute top-20 right-1/3 w-2 h-2 bg-neon-cyan rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-neon-purple rounded-full animate-pulse-neon"></div>
      <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-neon-pink rounded-full animate-float"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cyber font-bold text-neon-blue neon-text mb-4">
            CONNECT WITH ME
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-6"></div>
          
          <div className="flex justify-center gap-6 mb-6">
            <motion.a 
              href="mailto:jihsoukong@gmail.com" 
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
                <CiMail className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
              </div>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/kong-ji-shou-39b36a22a/" 
              target="_blank" 
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
                <FaLinkedin className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
              </div>
            </motion.a>
            <motion.a 
              href="https://github.com/KJiShou" 
              target="_blank" 
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
                <FaGithub className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
              </div>
            </motion.a>
            <motion.a 
              href="https://kjishou.itch.io/" 
              target="_blank" 
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-neon-blue group-hover:text-neon-cyan transition-colors" viewBox="0 0 245.371 220.736" fill="currentColor">
                  <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007l.008.028c.65 1.83 1.26 3.532 1.816 5.193 15.285 45.49-.88 90.038-23.1 101.32-22.22 11.283-64.728 11.283-75.01 11.283h-.012c-10.282 0-52.79 0-75.01-11.282-22.22-11.283-38.386-55.83-23.1-101.32.554-1.66 1.165-3.362 1.817-5.193l.008-.027c10.684-30.008 26.017-30.008 29.85-30.008z"/>
                </svg>
              </div>
            </motion.a>
          </div>

          <div className="glass-strong rounded-xl px-6 py-4 border border-neon-blue/20 max-w-md mx-auto">
            <p className="text-neon-cyan font-futura text-sm leading-relaxed">
              "The only way to do great work is to love what you do."
            </p>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8"></div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-blue/70 font-tech text-sm">
            © {new Date().getFullYear()} KJiShou. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
