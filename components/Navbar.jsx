export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-slate-800">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-cyan-400 font-bold text-2xl">
          NB
        </h1>

        <ul className="flex gap-8 text-white">

          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}