import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center mt-10">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          I’m a Software Engineer with 2.5+ years of experience building
          scalable web applications at HERE Technologies, primarily working on
          large-scale geospatial systems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          I enjoy being involved in the complete product journey — from
          translating Figma designs into clean UI components, to structuring
          modular architectures, integrating APIs, reviewing code, and
          supporting production systems. I care about how things look, how they
          function, and how they scale. Along with development, I have
          experience in testing and quality assurance, which helps me approach
          features with a reliability-first mindset. I enjoy collaborating
          across teams and contributing wherever needed to make the product
          stronger. For me, good engineering is a mix of clean structure,
          thoughtful design, and continuous improvement.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Feel free to explore my portfolio to learn more about my projects and
          skills. I'm always excited to connect and collaborate on new
          opportunities!
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
