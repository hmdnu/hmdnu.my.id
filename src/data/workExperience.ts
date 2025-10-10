import type { WorkExperience } from "@/types/workExperience";

export const workExperiences: WorkExperience[] = [
  {
    company: "CLEDS | Shoes Cleaning and Service",
    details: [
      "Developed a Fullstack web application for shoe cleaning orders, sales tracking, cluster & workshop management, and employee management.",
      "Implemented UI design into functional frontend components.",
      "Integrated secure authentication system using Jsonwebtoken (JWT) with access token and refresh token.",
      "Implemented RESTful API endpoints for frontend-backend communication.",
      "Configured database schema and ORM with Prisma for storing orders, employees, and service data.",
    ],
    period: [new Date(2025, 8), new Date(2025, 9)],
    tech: [
      "Typescript",
      "React.js",
      "Express.js",
      "Prisma",
      "Mysql",
      "React Router",
      "React Hook Form",
      "Tailwindcss",
      "Shadcn",
      "JWT",
    ],
    type: "Freelance",
  },
];
