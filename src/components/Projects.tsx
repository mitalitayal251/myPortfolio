import React from "react";

const projects = [
  {
    title: "Standalone Map Viewer",
    subtitle: "2nd Place — HERE Global Hackathon (Mumbai)",
    overview:
      "Developed a lightweight standalone map viewer focused on improving accessibility and performance of geospatial data visualization outside existing heavy internal systems.",
    problem:
      "Existing workflows required navigating through larger internal platforms for quick map inspection and visualization tasks. This slowed down quick analysis and data exploration.",
    solution:
      "Built an independent, optimized map viewer that allowed users to quickly load and interact with geospatial datasets with minimal overhead.",
    contributions: [
      "Developed interactive UI components for map visualization",
      "Implemented geospatial rendering logic using HERE mapping services",
      "Optimized data loading and rendering performance",
      "Focused on improving usability and responsiveness",
    ],
    impact:
      "Reduced friction in map data exploration and improved accessibility for internal users.",
    technologies: null,
  },
  {
    title:
      "MAINTAIN GAP (Automated Screening System - Safety Measure from Covid-19)",
    subtitle: null,
    overview:
      "Checks surface body temperature, performs Face-Mask detection, and Facial Recognition.",
    problem: null,
    solution: null,
    contributions: [
      "Equipped to check the surface body temperature of an individual using manual user input.",
      "Well-trained in performing facial recognition and facemask detection.",
      "Worked on Facial Recognition using TensorFlow and Keras.",
      "Integrated OpenCV for real-time face-mask detection.",
      "Used Flask for backend API development and PostgreSQL for data storage.",
    ],
    impact: null,
    technologies: "Python, OpenCV, TensorFlow, PostgreSQL, Flask",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        Projects
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-gray-300 text-lg mb-4">{project.subtitle}</p>
            )}
            {project.technologies && (
              <p className="text-gray-300 text-lg mb-4">
                <span className="font-semibold text-purple-400">
                  Technologies:
                </span>{" "}
                {project.technologies}
              </p>
            )}
            {project.overview && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-100">
                  Overview
                </h4>
                <p className="text-gray-300">{project.overview}</p>
              </div>
            )}
            {project.problem && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-100">Problem</h4>
                <p className="text-gray-300">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-100">
                  Solution
                </h4>
                <p className="text-gray-300">{project.solution}</p>
              </div>
            )}
            {project.contributions && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-100">
                  Key Contributions
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.impact && (
              <div>
                <h4 className="text-xl font-semibold text-gray-100">Impact</h4>
                <p className="text-gray-300">{project.impact}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
