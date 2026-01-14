import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { project } from "../utils/projects";
import { ProjectCategory } from "../utils/projects";
import { FaCube, FaGamepad, FaGlobe, FaLayerGroup } from "react-icons/fa";

const categories: Array<{
  id: ProjectCategory | "all";
  name: string;
  icon: JSX.Element;
}> = [
  { id: "all", name: "All Projects", icon: <FaLayerGroup /> },
  { id: ProjectCategory.GAMES, name: "Games", icon: <FaGamepad /> },
  { id: ProjectCategory.WEB, name: "Web", icon: <FaGlobe /> },
  { id: ProjectCategory.GRAPHICS, name: "Graphics", icon: <FaCube /> },
];

const projectHasCategory = (
  project: project,
  category: ProjectCategory
): boolean => project.categories?.includes(category) ?? false;

const ProjectsSection = ({ projects }: { projects: project[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "all"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(project => 
        projectHasCategory(project, selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [projects, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects by title, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 input-futuristic font-tech placeholder-neon-blue/50"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
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
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 glass-strong border-neon-blue rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="text-neon-blue/70 text-sm font-tech">
          Showing {currentProjects.length} of {filteredProjects.length} projects
          {selectedCategory !== "all" && (
            <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
          )}
          {totalPages > 1 && (
            <span> (Page {currentPage} of {totalPages})</span>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentProjects.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-cyber font-semibold text-neon-blue mb-2">
              No projects found
            </h3>
            <p className="text-neon-blue/70 font-futura">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-2 mt-8"
        >
          <motion.button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 font-tech ${
              currentPage === 1
                ? "glass border-neon-blue/20 text-neon-blue/30 cursor-not-allowed"
                : "glass border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:text-neon-cyan"
            }`}
            whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </motion.button>

          <div className="flex gap-1">
            {[...Array(totalPages).keys()].map((page) => {
              const pageNumber = page + 1;
              const isCurrentPage = currentPage === pageNumber;
              const isNearCurrent = Math.abs(currentPage - pageNumber) <= 1;
              const isFirstOrLast = pageNumber === 1 || pageNumber === totalPages;

              if (isCurrentPage || isNearCurrent || isFirstOrLast) {
                return (
                  <motion.button
                    key={page}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-2 rounded-lg border transition-all duration-300 font-tech ${
                      isCurrentPage
                        ? "glass-strong border-neon-blue text-neon-blue shadow-lg shadow-neon-blue/25 neon-text"
                        : "glass border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:text-neon-cyan"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pageNumber}
                  </motion.button>
                );
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return (
                  <span key={page} className="px-2 py-2 text-neon-blue/50 font-tech">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          <motion.button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 font-tech ${
              currentPage === totalPages
                ? "glass border-neon-blue/20 text-neon-blue/30 cursor-not-allowed"
                : "glass border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:text-neon-cyan"
            }`}
            whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsSection;
