export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Multi-Service AI Chatbot",
    description:
      "Containerized chatbot platform integrating Django, React, Flutter and a GPT-2 language model using Docker Swarm.",
    image: "/projects/chatbot.png",
    github: "https://github.com/GautamRedd/Chatbot_Web_Application",
    technologies: [
      "Python",
      "Django",
      "React",
      "Flutter",
      "Docker",
      "Docker Swarm",
      "GPT-2"
    ]
  },

  {
    title: "Colon Cancer Prediction",
    description:
      "Machine learning model that predicts colon cancer type by combining clinical and pathological datasets with Random Forest.",
    image: "/projects/colon.png",
    github: "https://github.com/GautamRedd/Colon_Cancer_Prediction_Model",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "NumPy",
      "Matplotlib"
    ]
  }
];