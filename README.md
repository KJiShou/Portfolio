# 🚀 Modern Portfolio Website

A stunning, cyberpunk-themed portfolio website built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. Features smooth animations, interactive project showcases with dedicated project pages, and a futuristic design.

## ✨ Features

- **Interactive Design**: Cyberpunk-themed UI with neon effects and glass morphism
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Project Pages**: Dedicated detail pages for each project
- **Project Showcase**: Interactive project cards with search and category filtering
- **Skills Section**: Visual representation of technical skills and expertise
- **Experience Timeline**: Professional experience with interactive timeline
- **Magical Cursor**: Custom cursor effects for enhanced interactivity
- **Dark Theme**: Eye-friendly dark theme with neon accents

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions

### Additional Libraries
- **React Router DOM** - Client-side routing for navigation and project pages
- **React Icons** - Icon library
- **Typed.js** - Typing animation effects
- **CLSX & Tailwind Merge** - Conditional styling utilities

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       └── projects/         # Project images
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Profile.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetail.tsx    # Individual project pages
│   │   ├── Footer.tsx
│   │   ├── MagicalCursor.tsx
│   │   └── 404.tsx
│   ├── utils/
│   │   └── projects.ts      # Project data
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Key Components

- **Profile**: Hero section with animated typing effect and social links
- **Experience**: Professional timeline with animations
- **Projects**: Interactive project cards with search, filtering, and pagination
- **ProjectDetail**: Dedicated pages for individual projects with features and tech stack
- **Skills**: Visual skill representation with icons
- **Footer**: Contact information and social links
- **MagicalCursor**: Custom cursor effects
- **Navbar**: Responsive navigation with mobile menu

## 🎨 Customization

### Update Personal Information

1. **Profile Section** (`src/components/Profile.tsx`)
   - Update name, tagline, and social links
   - Modify typing animation strings

2. **Experience Section** (`src/components/Experience.tsx`)
   - Update work experience data

3. **Projects** (`src/utils/projects.ts`)
   - Add/modify project data
   - Update project images in `public/assets/projects/`
   - Each project needs a unique `id` for routing

4. **Skills** (`src/components/Skills.tsx`)
   - Update skill icons and names

### Add Project Images

Place your project images in `public/assets/projects/` and reference them in the projects data:

```typescript
{
  id: "my-project",
  cover: "/assets/projects/my-project.png",
  // ... other fields
}
```

### Color Scheme

Colors are defined in `tailwind.config.js`. Current theme:
- Neon Blue: `#00d4ff`
- Neon Cyan: `#00ffff`
- Neon Purple: `#8b5cf6`
- Neon Pink: `#ff0080`
- Neon Green: `#00ff41`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Modern React patterns and hooks
- Component-based architecture

## 🌟 Features Breakdown

### Project Pages
Each project has its own dedicated page accessible via `/project/:id` route, displaying:
- Full project description
- Technologies used
- Key features list
- Technical implementation details
- Links to live demo and source code
- Project screenshots

### Search & Filter
- Search projects by title, description, or tags
- Filter by categories (Frontend, Backend, Full Stack, AI/ML, DevOps, Tools)
- Pagination for large project lists

### Animations
- Page transitions
- Hover effects
- Scroll animations
- Custom cursor tracking
- Neon glow effects
- Glass morphism

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

Update your contact information in:
- `src/components/Profile.tsx`
- `src/components/Footer.tsx`
- `src/components/Navbar.tsx`

---

⭐ Star this repository if you found it helpful!

Built with ❤️ using React, TypeScript, and TailwindCSS