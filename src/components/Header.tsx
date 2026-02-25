const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className="flex w-[80vw] items-center gap-8 px-10 py-3 rounded-full 
                      bg-white/10 backdrop-blur-md border border-white/20 
                      shadow-lg justify-around"
      >
        <div className="text-lg font-bold text-purple-400">👩🏻‍💻 Mitali Tayal</div>

        <div className="flex gap-6 text-white/80">
          <a href="#home" className="hover:text-purple-300 transition">
            Home
          </a>
          <a href="#aboutMe" className="hover:text-purple-300 transition">
            About Me
          </a>
          <a href="#experience" className="hover:text-purple-300 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-purple-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-300 transition">
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
