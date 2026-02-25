import React from "react";
import { motion } from "framer-motion";

// Import your PNGs
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
// ... add all your PNGs

const images = [design1, design2, design3, design4];

const GraphicsGallery: React.FC = () => {
  return (
    <section id="graphics" className="px-8 py-20 bg-[#0f0f1e]">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">
        Graphic Design Portfolio
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={img}
              alt={`Design ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GraphicsGallery;
