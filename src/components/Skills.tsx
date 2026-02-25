import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "HTML", "CSS", "JavaScript/TypeScript"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["React.js", "Redux", "Node.js"],
  },
  {
    title: "Technical Skills",
    items: [
      "Front-end development (UI/UX)",
      "SQL",
      "Software Testing",
      "Cypress",
      "CI/CD",
      "Basics of Cloud Computing",
      "AI/ML",
      "Data Structures & Algorithms",
      "Exposure to AWS",
    ],
  },
  {
    title: "Tools",
    items: [
      "JIRA",
      "VSCode",
      "Fork",
      "GitLab",
      "Canva",
      "PowerPoint",
      "Spreadsheets",
    ],
  },
  {
    title: "Other Skills",
    items: [
      "Graphic Designing",
      "Software Project Management",
      "Team Management",
      "Technical Content Writing",
      "Problem Solving",
      "Quick Learner",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 text-white rounded-full shadow-md cursor-default text-sm font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
