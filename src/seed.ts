// ============================================================
// FILE: src/seed.ts
// ============================================================
import { storage as storage2 } from "./storage.js";

function logSeed(message: string, level: "info" | "error" | "warn" = "info") {
  const timestamp = new Date().toISOString();
  const prefix = level === "error" ? "❌" : level === "warn" ? "⚠️" : "✓";
  console.log(`${prefix} [${timestamp}] [SEED] ${message}`);
}

export async function seedDatabase() {
  try {
    let existingProjects: any[] = [];
    try {
      existingProjects = await storage2.getProjects();
    } catch (err) {
      logSeed("Tables don't exist yet or database empty, proceeding with seeding...");
    }

    if (existingProjects.length > 0) {
      logSeed("Database already seeded, skipping...", "warn");
      return;
    }

    logSeed("Starting database seed...");

    const projectList = [
      {
        title: "Portfolio Website",
        description: "Modern portfolio website built with React, TypeScript, and Express backend featuring a sci-fi themed UI with animated skill trees and glassmorphism effects.\n\nBackend Source: https://github.com/abdhesh369/Backend.git",
        techStack: ["React", "TypeScript", "Express", "MySQL", "TailwindCSS"],
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        category: "Web",
        githubUrl: "https://github.com/abdhesh369/Frontend.git",
        liveUrl: "https://abdheshsah.com.np",
        problemStatement: "Needed a professional online presence to showcase projects and skills to potential employers and collaborators with a unique, memorable design.",
        motivation: "Create a modern, responsive portfolio that demonstrates full-stack development capabilities with cutting-edge UI/UX design principles.",
        systemDesign: "Full-stack application with React frontend using Framer Motion for animations, Express REST API backend, MySQL database with Drizzle ORM for type-safe queries, and custom sci-fi themed component library.",
        challenges: "Implementing complex animations like the skill tree without performance issues, creating a cohesive sci-fi design language, and ensuring responsive design across all devices.",
        learnings: "Advanced animation techniques with Framer Motion, full-stack development workflow, API design patterns, and the importance of consistent design systems.",
      },
      {
        title: "Calculator Application",
        description: "A comprehensive scientific calculator with advanced mathematical functions including trigonometry, logarithms, factorial, and expression parsing.",
        techStack: ["React", "TypeScript", "CSS3"],
        imageUrl: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=800&auto=format&fit=crop",
        category: "Utility",
        githubUrl: "https://github.com/abdhesh369",
        liveUrl: null,
        problemStatement: "Users needed a convenient way to perform both basic and scientific calculations without switching between multiple tools or dealing with clunky interfaces.",
        motivation: "Built to demonstrate complex state management in React and provide a practical tool for students and professionals doing mathematical computations.",
        systemDesign: "Component-based React architecture with custom math expression parser, history tracking, keyboard support for accessibility, and responsive design for mobile use.",
        challenges: "Implementing correct operator precedence and parenthesis evaluation, handling floating-point precision issues in JavaScript, and creating an intuitive UI for complex operations.",
        learnings: "Improved understanding of React state management patterns, event handling, expression parsing algorithms, and computer arithmetic precision limitations.",
      },
      {
        title: "Student Record System",
        description: "C++ based student record and marksheet management system with binary file persistence, search/sort capabilities, and comprehensive CRUD operations.",
        techStack: ["C++", "File Handling", "STL"],
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        category: "Academic",
        githubUrl: "https://github.com/abdhesh369",
        liveUrl: null,
        problemStatement: "Manual marksheet management in educational institutions was inefficient, error-prone, and time-consuming, especially when dealing with large student datasets.",
        motivation: "Academic project to practice file persistence, data structure implementation, and object-oriented design principles in C++.",
        systemDesign: "Binary file storage with structured records, implementing efficient search algorithms using STL containers, sorting capabilities, and a menu-driven console interface.",
        challenges: "Maintaining data consistency during file operations, implementing efficient search on binary files, and handling edge cases in student data validation.",
        learnings: "Strong understanding of file I/O in C++, binary vs text file trade-offs, data structures for efficient searching, and the importance of data validation.",
      },
    ];

    let successCount = 0;
    let failCount = 0;

    for (const proj of projectList) {
      try {
        await storage2.createProject(proj);
        logSeed(`Seeded project: ${proj.title}`);
        successCount++;
      } catch (err) {
        logSeed(`Failed to seed project: ${proj.title} - ${err}`, "error");
        failCount++;
      }
    }

    logSeed(`Projects: ${successCount} succeeded, ${failCount} failed`);

    const skillList = [
      { name: "C", category: "Languages", icon: "Code" },
      { name: "C++", category: "Languages", icon: "Code2" },
      { name: "Python", category: "Languages", icon: "Snake" },
      { name: "JavaScript", category: "Languages", icon: "FileJson" },
      { name: "TypeScript", category: "Languages", icon: "FileCode" },
      { name: "HTML5", category: "Web", icon: "Layout" },
      { name: "CSS3", category: "Web", icon: "Palette" },
      { name: "React", category: "Web", icon: "Component" },
      { name: "Node.js", category: "Web", icon: "Server" },
      { name: "Express", category: "Web", icon: "Route" },
      { name: "TailwindCSS", category: "Web", icon: "Paintbrush" },
      { name: "SQL", category: "Database", icon: "Database" },
      { name: "MySQL", category: "Database", icon: "Database" },
      { name: "Git", category: "Tools", icon: "GitBranch" },
      { name: "GitHub", category: "Tools", icon: "Github" },
      { name: "Data Structures", category: "Core", icon: "Binary" },
      { name: "Algorithms", category: "Core", icon: "Cpu" },
      { name: "OOP", category: "Core", icon: "Box" },
      { name: "8085 Microprocessor", category: "Hardware", icon: "Chip" },
      { name: "Digital Electronics", category: "Hardware", icon: "CircuitBoard" },
    ];

    successCount = 0;
    failCount = 0;

    for (const skill of skillList) {
      try {
        await storage2.createSkill(skill);
        logSeed(`Seeded skill: ${skill.name}`);
        successCount++;
      } catch (err) {
        logSeed(`Failed to seed skill: ${skill.name} - ${err}`, "error");
        failCount++;
      }
    }

    logSeed(`Skills: ${successCount} succeeded, ${failCount} failed`);

    const experienceList = [
      {
        role: "Bachelor of Engineering Student",
        organization: "Tribhuvan University",
        period: "2024 – 2028",
        description: "Pursuing B.E. in Electronics & Communication Engineering. Relevant coursework: Data Structures, Computer Programming, Digital Electronics, Microprocessors, and Engineering Mathematics.",
        type: "Education",
      },
      {
        role: "Self-Taught Developer",
        organization: "Personal Projects",
        period: "2023 – Present",
        description: "Building web applications and automation tools. Learning modern web technologies including React, TypeScript, and Node.js through hands-on projects.",
        type: "Experience",
      },
    ];

    successCount = 0;
    failCount = 0;

    for (const exp of experienceList) {
      try {
        await storage2.createExperience(exp);
        logSeed(`Seeded experience: ${exp.role}`);
        successCount++;
      } catch (err) {
        logSeed(`Failed to seed experience: ${exp.role} - ${err}`, "error");
        failCount++;
      }
    }

    logSeed(`Experiences: ${successCount} succeeded, ${failCount} failed`);

    try {
      await storage2.createMessage({
        name: "Portfolio System",
        email: "system@portfolio.local",
        subject: "Database Initialized",
        message: "This is a sample message created during database seeding. Your contact form is working correctly!",
      });
      logSeed("Seeded sample message");
    } catch (err) {
      logSeed(`Failed to seed sample message: ${err}`, "error");
    }

    logSeed("Database seeding completed successfully! 🎉");
  } catch (err) {
    logSeed(`Database seeding failed: ${err}`, "error");
    throw err;
  }
}