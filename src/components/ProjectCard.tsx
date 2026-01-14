import { motion } from "framer-motion";
import { ProjectType } from "../types";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <motion.div
      className="group relative card-futuristic glass-strong rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500 h-[520px] max-w-[380px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
      }}
    >
      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      <div className="relative overflow-hidden flex-shrink-0 h-52 w-full">
        <motion.img
          src={project.cover || `${import.meta.env.BASE_URL}assets/projects/placeholder.png`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <div className="absolute inset-0 bg-neon-pink mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-neon-cyan mix-blend-overlay" style={{ animationDelay: '0.1s' }}></div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col min-h-0 relative z-10">
        <Link
          to={`/project/${project.id}`}
          className="block group/title"
        >
          <motion.h3 
            className="text-xl font-cyber font-bold text-neon-blue mb-3 group-hover/title:text-neon-cyan transition-colors duration-300 line-clamp-2 overflow-hidden neon-text"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
        </Link>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
            {project.tags.slice(0, 4).map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-tech bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-full hover:bg-neon-blue/20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
                }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-tech bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded-full">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        )}

        <p className={cn("text-gray-300 text-sm line-clamp-4 overflow-hidden leading-relaxed flex-shrink-0 mb-4 font-futura", project.title.length > 20 && "line-clamp-3")}>
          {project.desc}
        </p>

        <div className="mt-auto pt-4 border-t border-neon-blue/20 flex-shrink-0">
          <div className="flex items-center justify-between">
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-blue text-sm font-tech transition-colors duration-300 group/link"
            >
              <span className="group-hover/link:neon-text">VIEW DETAILS</span>
              <motion.svg
                className="w-4 h-4 group-hover/link:text-neon-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </Link>
            
            {project.code_links && project.code_links.length > 0 && (
              <div className="flex gap-2">
                {project.code_links.map(link => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full glass border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 text-lg group/icon"
                    title={link.label + ' Code'}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)"
                    }}
                  >
                    <span className="group-hover/icon:text-neon-cyan transition-colors duration-300">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-neon-blue/20 group-hover:border-t-neon-blue/40 transition-all duration-500"></div>
    </motion.div>
  );
}
