export type WorkExperience = {
  company: string;
  period: [Date, Date | null];
  type: "Freelance" | "Remote" | "Full Time" | "Internship";
  details: string[];
  tech: string[];
};
