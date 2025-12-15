export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Halliburton",
    role: "Full Stack Engineer",
    duration: "Feb 2025 - Present",
    location: "Houston, TX",
    description:
      "Developing enterprise backend applications, REST APIs, data pipelines, cloud solutions and workflow automation supporting engineering operations.",
    technologies: [
      ".NET",
      "Python",
      "Django",
      "React",
      "Azure",
      "PostgreSQL",
      "Docker"
    ]
  },

  {
    company: "Champion Energy Services (Calpine)",
    role: "Application Developer",
    duration: "May 2023 - Feb 2025",
    location: "Houston, TX",
    description:
      "Developed customer-facing enterprise applications, backend APIs, reporting platforms and workflow automation solutions.",
    technologies: [
      ".NET",
      "Python",
      "Django",
      "Azure",
      "React",
      "PostgreSQL"
    ]
  },

  {
    company: "Mindtree (Apollo Hospitals)",
    role: "Software Engineer",
    duration: "Feb 2021 - Dec 2021",
    location: "Hyderabad, India",
    description:
      "Built healthcare applications supporting patient services, scheduling, reporting systems and secure REST APIs.",
    technologies: [
      ".NET",
      "Python",
      "Django",
      "Azure",
      "PostgreSQL"
    ]
  }
];