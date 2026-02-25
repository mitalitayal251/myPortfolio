import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import {
  motion,
  type RepeatType,
  type TargetAndTransition,
} from "framer-motion";
import myPhoto from "../assets/about1.png";

const floatVariants: { [key: string]: TargetAndTransition } = {
  floatUpDown: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as RepeatType,
      ease: "easeInOut",
    },
  },
  rotate: {
    rotate: [0, 15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as RepeatType,
      ease: "easeInOut",
    },
  },
};
const About = () => {
  return (
    <section
      id="about"
      className="px-8 py-20 flex flex-col md:flex-row items-center justify-center h-[50rem] gap-[10rem] relative"
    >
      {/* Background Shapes */}
      <motion.div
        className="absolute top-10 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-70"
        animate={floatVariants.floatUpDown}
      />
      <motion.div
        className="absolute bottom-20 right-32 w-16 h-16 bg-yellow-400 rounded-full opacity-70"
        animate={floatVariants.floatUpDown}
      />
      <motion.div
        className="absolute top-32 right-10 w-14 h-14 bg-green-400 rotate-12 opacity-70"
        animate={floatVariants.rotate}
      />
      <motion.div
        className="absolute bottom-10 left-32 w-10 h-10 bg-blue-500 rotate-6 opacity-70"
        animate={floatVariants.rotate}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-red-500 opacity-80"
        animate={floatVariants.floatUpDown}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-500 opacity-80"
        animate={floatVariants.floatUpDown}
      />

      {/* Left Text */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-100">
          Hello, my name’s <span>Mitali</span>.<br />
          I’m a Software Developer.
        </h1>
        <div className="text-lg font-bold text-purple-400">
          Frontend Developer | Graphic Designer
        </div>
        <p className="mt-6 text-lg text-gray-300 max-w-lg">
          Frontend Engineer experienced in designing and developing structured,
          scalable applications used in production systems. Focused on clean
          architecture, performance optimization, and maintainable code.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/mitali-tayal/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 flex items-center gap-2"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/mitalitayal251"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 flex items-center gap-2"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:mitalitayal.work@gmail.com"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 flex items-center gap-2"
          >
            <FaEnvelope size={20} />
          </a>

          <a
            href="/assets/Mitali Tayal.pdf"
            download="Mitali_Tayal.pdf"
            className="px-6 py-2 rounded-full border border-white/50 text-white hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Right Avatar */}
      <motion.div
        className="relative flex items-center justify-center bg-[#3a006b] p-12 rounded-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Frame */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-80 h-80 rounded-3xl border-[14px] border-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.8)]"></div>
        </motion.div>

        {/* Small Shapes around Avatar */}
        <motion.div
          className="absolute w-8 h-8 bg-pink-400 rounded-full -top-6 -left-6"
          animate={floatVariants.floatUpDown}
        />
        <motion.div
          className="absolute w-10 h-10 bg-yellow-400 rotate-12 top-4 -right-8"
          animate={floatVariants.rotate}
        />
        <motion.div
          className="absolute w-6 h-6 bg-green-400 -bottom-6 left-10"
          animate={floatVariants.floatUpDown}
        />
        <motion.div
          className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-400 bottom-6 right-6 rotate-12"
          animate={floatVariants.rotate}
        />
        <motion.div
          className="absolute w-4 h-4 bg-red-500 top-10 left-[-12px]"
          animate={floatVariants.floatUpDown}
        />

        {/* Avatar Image */}
        <motion.img
          src={myPhoto}
          alt="Avatar"
          className="relative w-64 h-64 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, type: "spring" }}
        />
      </motion.div>
    </section>
  );
};

export default About;
