export enum ProjectCategory {
  GAMES = "games",
  WEB = "web",
  GRAPHICS = "graphics"
}

export enum CodeLinkIcon {
  FRONTEND = "🎨",
  BACKEND = "⚙️",
  CLI = "🛠️",
  FULLSTACK = "🌐",
  TOOLS = "🛠️"
}

export interface CodeLink {
  label: string;
  url: string;
  icon: CodeLinkIcon;
}

export interface project {
  id: string;
  title: string;
  cover: string;
  tags: string[];
  code_links?: CodeLink[];
  deploy_link: string;
  desc: string;
  longDesc?: string;
  categories?: ProjectCategory[];
  features?: string[];
  techDetails?: string[];
}

export const projects: project[] = [
  {
    id: "graphic-programming-assignment",
    title: "Graphic Programming Assignment",
    cover: `${import.meta.env.BASE_URL}assets/projects/graphic-programming.png`,
    tags: ["c++", "opengl", "graphics", "3d", "directinput"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/GraphicProgrammingAssignment", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Hierarchical 3D robot simulation in C++ and OpenGL with custom animation and camera modes.",
    longDesc: "A graphics programming assignment focused on building a hierarchical 3D robot from scratch in C++ and OpenGL. The project implements articulated body parts, a state-driven animation system, and a custom input manager. Multiple camera projections and lighting features showcase a raw rendering pipeline.",
    categories: [ProjectCategory.GRAPHICS],
    features: [
      "Hierarchical modeling with parent-child body parts",
      "State-based animation for locomotion and combat moves",
      "Custom input layer integrating DirectInput and Windows input",
      "Perspective, orthographic, and frustum camera modes",
      "Lighting and texture mapping with OpenGL primitives",
      "Fine-grained articulation for hands, fingers, and wings"
    ],
    techDetails: [
      "C++ with a raw OpenGL rendering pipeline",
      "Scene graph style transforms for articulated animation",
      "GL_LIGHT0 lighting setup and texture mapping",
      "Multi-mode camera system with projection toggles",
      "Configurable input bindings for movement and articulation"
    ]
  },
  {
    id: "sport-stacking-website",
    title: "Sport Stacking Website",
    cover: `${import.meta.env.BASE_URL}assets/projects/sport-stacking.png`,
    tags: ["react", "typescript", "firebase", "tailwindcss", "vite"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/Sport-Stacking-Website", icon: CodeLinkIcon.FULLSTACK }
    ],
    deploy_link: "#",
    desc: "Full-stack tournament management platform for sport stacking events, scoring, and athlete profiles.",
    longDesc: "A comprehensive web application for managing sport stacking tournaments, brackets, and results. It supports registration, preliminary and finals scoring, and detailed athlete profiles with role-based access for organizers and admins. Built to streamline event-day operations with exports and responsive UI.",
    categories: [ProjectCategory.WEB],
    features: [
      "Tournament creation with events, brackets, and classifications",
      "Preliminary and finals scoring with automatic rankings",
      "Athlete profiles, global IDs, and performance history",
      "Online registration with team and multi-event support",
      "PDF export of results, brackets, and classifications",
      "Admin dashboard with role-based access and site settings"
    ],
    techDetails: [
      "React 18, Vite, and TypeScript for the frontend",
      "Arco Design components, Tailwind CSS, and SCSS styling",
      "React Router v6 and Jotai state management",
      "Firebase Auth, Firestore, Functions, Hosting, and Storage",
      "React Hook Form with Zod validation",
      "jsPDF and AutoTable for report generation"
    ]
  },
  {
    id: "chichis-bizarre-adventure",
    title: "Chichi's Bizarre Adventure",
    cover: `${import.meta.env.BASE_URL}assets/projects/3D-Game.png`,
    tags: ["unity", "c#", "3d", "urp", "cinemachine"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/3D-Game-Development", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Unity URP 3D adventure and puzzle game with parkour traversal and island exploration.",
    longDesc: "A third-person Unity URP game where players explore an island, solve puzzles, and gather resources to repair a broken bridge. The experience blends parkour traversal, environment interaction, and story-driven objectives as Chichi searches for a missing friend.",
    categories: [ProjectCategory.GAMES],
    features: [
      "Third-person movement with walk, run, and jump controls",
      "Parkour obstacles and platforming traversal",
      "Puzzle exploration and environment interaction",
      "Resource collection and bridge repair objectives",
      "Camera control and combat-ready input bindings",
      "Integrated menus for settings and gameplay flow"
    ],
    techDetails: [
      "Built with Unity URP and C# scripting",
      "Starter Assets ThirdPerson controller with Cinemachine",
      "Unity new Input System for character controls",
      "Asset packs for characters and environment visuals",
      "Particle effects from Unity Asset Store packages"
    ]
  },
  {
    id: "desmos-lifeline",
    title: "Desmos Lifeline",
    cover: "/assets/projects/2D-game.png",
    tags: ["unity", "c#", "2d", "equations", "linerenderer"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/Desmos-Lifeline", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Unity 2D math game where players build equations to guide a spaceship through portals.",
    longDesc: "A Unity 2D game centered on creating and tuning equations to shape the player's path. Linear, quadratic, and trigonometric curves are rendered in real time, with portals placed along each line to move the ship between points. The game includes stage selection, difficulty settings, score tracking, and multiple UI flows for win, loss, and pause states.",
    categories: [ProjectCategory.GAMES],
    features: [
      "Equation selection with drag-and-drop slot inputs",
      "Real-time linear, quadratic, and trigonometric curve rendering",
      "Portal system that moves the ship along generated lines",
      "Stage-based progression with score tracking",
      "Difficulty settings and spaceship customization",
      "Menus for stage select, pause, victory, and loss states"
    ],
    techDetails: [
      "Unity 2D project written in C#",
      "LineRenderer-driven equation visualization",
      "TMP text and slider inputs for equation parameters",
      "Persistent GameManager for stage scores and settings",
      "Audio and UI settings for player feedback"
    ]
  }
];
