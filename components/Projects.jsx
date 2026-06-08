export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div className="border p-4 rounded text-white hover:border-cyan-400">
          <h3>Password Generator</h3>
          <p>Built using JavaScript.</p>
        </div>

        <div className="border p-4 rounded text-white hover:border-cyan-400">
          <h3>Portfolio Website</h3>
          <p>Built using Next.js.</p>
        </div>

      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="border p-4 rounded text-white hover:border-cyan-400">
          <h3>file integrity checker</h3>
          <p>Built using python.</p>
        </div>
        <div className="border p-4 rounded text-white hover:border-cyan-400">
          <h3>port scanning and wifi scanner</h3>
          <p>Built using python</p>
        </div>
      </div>
    </section>
  );
}