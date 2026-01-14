import { FaRocket, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const experienceData = [
  {
    title: "Bachelor of Computer Science (Honours)",
    company: "TARUMT - Interactive Software Technology",
    period: "June 2026 - Present",
    icon: <FaGraduationCap className="text-xl" />,
    description: "Currently pursuing Bachelor's degree specializing in Interactive Software Technology",
    skills: ["Python", "C++ (DirectX)", "OpenGL", "C# for Unity", "Unity", "Game Development"],
    color: "neon-skyblue",
    status: "active"
  },
  {
    title: "Programmer Intern",
    company: "Enlliance Management Sdn. Bhd.",
    period: "October 2024 - January 2025",
    icon: <FaRocket className="text-xl" />,
    description: "Built backend logic in Go and developed frontend pages with React and TypeScript",
    skills: ["Go", "TypeScript", "React", "Web Development", "API Integration"],
    color: "neon-green",
    status: "completed"
  },
  {
    title: "Diploma in Computer Science",
    company: "TARUMT",
    period: "June 2023 - June 2025",
    icon: <FaGraduationCap className="text-xl" />,
    description: "Completed comprehensive foundation in computer science and software development",
    skills: ["C Programming", "HTML", "CSS", "JavaScript", "SQL", "Unity"],
    color: "neon-cyan",
    status: "completed"
  },
];

export const Experience = () => {
  return (
    <motion.div 
      className="relative w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-blue"></div>
      
      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}>
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                }`}
              >
                <motion.div
                  className={cn(
                    "glass-strong rounded-xl p-6 border",
                    `border-${exp.color}/30 hover:border-${exp.color} transition-all duration-300`
                  )}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={cn("text-2xl font-cyber font-bold mb-2", `text-${exp.color} neon-text`)}>
                    {exp.title}
                  </div>
                  <div className="text-neon-cyan font-tech mb-2">{exp.company}</div>
                  <div className="text-neon-blue/70 text-sm mb-3 font-futura">{exp.period}</div>
                  <p className="text-gray-300 mb-4 font-futura">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className={cn(
                          "px-3 py-1 text-xs font-tech rounded-full border",
                          `bg-${exp.color}/10 text-${exp.color} border-${exp.color}/30`
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  className={cn(
                    "w-16 h-16 rounded-full glass-strong border-4 flex items-center justify-center",
                    `border-${exp.color} text-${exp.color}`
                  )}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.icon}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
