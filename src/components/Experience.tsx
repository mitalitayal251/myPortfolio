import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities?: string[];
  skills?: string;
  key?: string[];
  impact?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "HERE Technologies",
    role: "Software Developer II",
    period: "July 2023 - Present",
    key: [
      "Developed scalable frontend features using React.js and TypeScript.",
      "Structured modular repository architecture with reusable components and shared utilities.",
      "Integrated REST APIs for real-time geospatial data visualization.",
      "Implemented clustering and heatmap visualizations to handle large datasets efficiently.",
      "Contributed to centralized design system using Storybook.",
      "Translated Figma designs into production-ready UI components.",
      "Participated in code reviews and quality improvements.",
      "Supported production systems during on-call rotations.",
    ],
    impact: [
      "Improved UI consistency across modules.",
      "Accelerated feature delivery through reusable components.",
      "Reduced manual workflows via API integrations.",
      "Strengthened application reliability through performance optimizations.",
    ],
    responsibilities: [
      "Worked on Mapmaking UI (MMUI), a large-scale geospatial application used for data visualization and map editing workflows. The platform handles high-volume map data and supports multiple internal operational teams.",
    ],
    skills:
      "React.js, Redux, JavaScript/TypeScript, NodeJS, REST API, Web Components",
  },
  {
    company: "HERE Technologies",
    role: "SDE Intern",
    period: "July 2022 – July 2023",
    key: [
      "Created, executed, and debugged test cases.",
      "Used Cypress for automation testing.",
      "Ensured product quality through rigorous testing.",
      "Contributed to feature development using React.js.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        My Experience
      </h2>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#1a1a2e] p-8 rounded-2xl shadow-lg border-l-4 border-purple-500"
          >
            <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
            <p className="text-purple-400 font-semibold">{exp.company}</p>
            <p className="text-gray-300 mb-4">{exp.period}</p>

            {/* Responsibilities */}
            {exp.responsibilities && (
              <div className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            )}

            {/* Key Achievements */}
            {exp.key && (
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  Key Contributions:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.key.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact */}
            {exp.impact && (
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  Impact:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {exp.skills && (
              <p className="mt-4 text-gray-400">
                <span className="font-semibold text-purple-400">
                  Technical Skills:{" "}
                </span>
                {exp.skills}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
