import Header from "./components/Header";
import About from "./components/About";
// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import EngineeringApproach from "./components/Approach";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1c002c] via-[#2a0047] to-[#3d006d] text-white font-sans">
      <section id="home">
        <Header />
      </section>
      <main className="pt-28 md:pt-24">
        {" "}
        <section id="home">
          <About />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
          <EngineeringApproach />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* Designs Section */}
        {/* <section id="portfolio">
          <div className="max-w-4xl px-4 text-center"></div>
        </section> */}
        {/* Contact Section */}
        <section id="contact">
          <Contact />{" "}
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
