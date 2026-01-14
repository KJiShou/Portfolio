import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiGo, SiJavascript, 
  SiCplusplus, SiC, SiCsharp, SiUnity,
  SiDocker, SiGit, SiFirebase, SiMysql,
  SiOpengl
} from "react-icons/si";
import { useState } from "react";

type SkillCategory = "all" | "game" | "web" | "language" | "tools";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  categories: SkillCategory[];
}

const skills: Skill[] = [
  // Game Development
  { name: "Unity", icon: <SiUnity />, color: "text-white", categories: ["game", "all"] },
  { name: "C# (Unity)", icon: <SiCsharp />, color: "text-[#239120]", categories: ["game", "language", "all"] },
  { name: "OpenGL", icon: <SiOpengl />, color: "text-[#5586A4]", categories: ["game", "all"] },
  { name: "DirectX", icon: <SiCplusplus />, color: "text-[#00599C]", categories: ["game", "all"] },
  
  // Web Development
  { name: "React", icon: <SiReact />, color: "text-[#61DAFB]", categories: ["web", "all"] },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]", categories: ["web", "language", "all"] },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]", categories: ["web", "language", "all"] },
  { name: "Go", icon: <SiGo />, color: "text-[#00ADD8]", categories: ["web", "language", "all"] },
  
  // Programming Languages
  { name: "C++", icon: <SiCplusplus />, color: "text-[#00599C]", categories: ["language", "all"] },
  { name: "C", icon: <SiC />, color: "text-[#A8B9CC]", categories: ["language", "all"] },
  
  // Tools & Databases
  { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]", categories: ["tools", "all"] },
  { name: "Git", icon: <SiGit />, color: "text-[#F05032]", categories: ["tools", "all"] },
  { name: "SQL", icon: <SiMysql />, color: "text-[#4479A1]", categories: ["tools", "all"] },
  { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]", categories: ["tools", "web", "all"] },
];

const categories = [
  { id: "all" as SkillCategory, name: "All Skills", icon: "🚀" },
  { id: "game" as SkillCategory, name: "Game Dev", icon: "🎮" },
  { id: "web" as SkillCategory, name: "Web Dev", icon: "🌐" },
  { id: "language" as SkillCategory, name: "Languages", icon: "💻" },
  { id: "tools" as SkillCategory, name: "Tools", icon: "🛠️" },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(skill => 
    skill.categories.includes(selectedCategory)
  );

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 font-tech ${
              selectedCategory === category.id
                ? "glass-strong border-neon-blue text-neon-blue shadow-lg shadow-neon-blue/25 neon-text"
                : "glass border-neon-blue/30 text-neon-blue/70 hover:border-neon-blue hover:text-neon-blue"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        layout
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group relative glass-strong rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            layout
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className={`text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <div className="text-neon-cyan font-tech text-sm text-center group-hover:text-neon-blue transition-colors">
                {skill.name}
              </div>
            </div>
            <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Count */}
      <div className="text-center text-neon-blue/70 text-sm font-tech">
        Showing {filteredSkills.length} {selectedCategory === "all" ? "skills" : `${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} skills`}
      </div>
    </div>
  );
};

export default Skills;
