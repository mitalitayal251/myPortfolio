import React from "react";
import {
  FaCogs,
  FaRecycle,
  FaTachometerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const engineeringApproaches = [
  {
    icon: <FaCogs size={30} className="text-purple-400" />,
    title: "Modular Architecture",
    description:
      "I structure applications using feature-based modular architecture. Each module contains its own components, utilities, and business logic to improve maintainability and scalability.",
  },
  {
    icon: <FaRecycle size={30} className="text-purple-400" />,
    title: "Reusable Component Design",
    description:
      "I design reusable React components with clean prop structures to avoid duplication and improve consistency across modules.",
  },
  {
    icon: <FaTachometerAlt size={30} className="text-purple-400" />,
    title: "Performance Optimization",
    description:
      "I focus on efficient rendering techniques, optimized state management, and structured error handling to ensure smooth user experience.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-purple-400" />,
    title: "Production Reliability",
    description:
      "Experience in on-call production support has helped me understand debugging strategies, log analysis, and impact-based issue resolution.",
  },
];

const EngineeringApproach: React.FC = () => {
  return (
    <section id="engineering-approach" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        Engineering Approach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {engineeringApproaches.map((approach, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {approach.icon}
              <h3 className="text-xl font-bold text-gray-100">
                {approach.title}
              </h3>
            </div>
            <p className="text-gray-300">{approach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringApproach;
