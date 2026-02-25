import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6 text-gray-300 items-center"
        >
          <h3 className="text-2xl font-semibold text-gray-100">Get in Touch</h3>
          <p>
            Feel free to reach out to me via email or through my social
            profiles.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:mitalitayal.work@gmail.com"
                className="text-purple-400 hover:underline"
              >
                mitalitayal.work@gmail.com{" "}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/mitali-tayal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                linkedin.com/in/mitali-tayal
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
