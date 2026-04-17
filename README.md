# 🛡️ MLATech: SOC Level 1 Bootcamp

![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FMohammadLotfiA%2Fmlatech-soc-bootcamp&labelColor=%23dce775&countColor=%23263759)

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A highly interactive, enterprise-grade React application designed to train absolute beginners into Tier 1 Security Operations Center (SOC) Analysts. 

Unlike traditional IT courses that focus on abstract theory, this platform teaches foundational computing strictly through the lens of a **Defender**. Students learn how the operating system works by observing how threat actors abuse it.

## ✨ Core Features

- **Automated 3-Level Routing:** A dynamic `CourseLayout` that automatically flattens nested arrays (Track -> Module -> Chapter) to generate seamless "Previous/Next" navigation and a responsive sidebar without hardcoded links.
- **The "GUI-First" Philosophy:** Safe, step-by-step hands-on labs that build visual muscle memory before introducing command-line interrogation.
- **Strict Knowledge Verification:** A custom, unified `<QuizEngine />` enforcing a strict evaluation protocol (Single and Multi-select) at the end of every chapter.
- **Enterprise UI Architecture:** Built with [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS for a premium, accessible, and responsive user experience.

## 📚 Curriculum: IT Fundamentals (Phase 1)

The current platform contains the **20-Chapter IT Fundamentals** track, carefully paced to prevent cognitive overload while instilling a security mindset:

1. **Module 1: The Visual OS** (Desktop, Files, Extensions, & Downloads)
2. **Module 2: Users & Settings** (Local Accounts, UAC, & Permissions)
3. **Module 3: Execution & Automation** (Task Manager, PIDs, Services, & Task Scheduler)
4. **Module 4: Security & Interrogation** (Windows Defender & Event Viewer)
5. **Module 5: The Command Line** (Read-Only Investigation & CLI Navigation)

## 🚀 Getting Started

To run this platform locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mlatech-bootcamp.git
cd mlatech-bootcamp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 🏗️ Technical Architecture

The application relies on a "Single Source of Truth" router located in `src/App.tsx`. 

To add a new chapter, simply create the component in `src/pages/` and add it to the `TRACKS` array. The application's mathematical engine automatically recalculates the sidebar hierarchy, active states, and bottom navigation blocks.

```typescript
// Example Architecture (App.tsx)
const TRACKS = [
  {
    title: "Track 1: IT Fundamentals",
    modules: [
      {
        title: "Module 1: The Visual OS",
        icon: Monitor,
        chapters: [
          { 
            id: 'chap1', 
            label: '1. What is the Desktop?', 
            component: <Chapter1 />, 
            outline: [ /* On-this-page links */ ] 
          }
        ]
      }
    ]
  }
]
```

## 🛠️ Tech Stack
* **Framework:** React 19 + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Components:** shadcn/ui + Radix UI Primitives
* **Icons:** Lucide React

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
