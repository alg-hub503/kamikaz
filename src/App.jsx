function App() {
  return (
    <div className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          KAMIKAZ
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-cyan-400">Home</a>
          <a href="#" className="hover:text-cyan-400">Services</a>
          <a href="#" className="hover:text-cyan-400">Portfolio</a>
          <a href="#" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold">
          Graphic Designer
        </h1>

        <p className="text-slate-400 mt-6">
          Branding • Social Media • UI Design
        </p>

        <button className="mt-8 bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600">
          View Portfolio
        </button>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-cyan-400">Branding</h3>
            <p className="text-slate-400 mt-4">
              Logo design and visual identity.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-cyan-400">Social Media</h3>
            <p className="text-slate-400 mt-4">
              Posts and ads for Instagram & Facebook.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-cyan-400">UI Design</h3>
            <p className="text-slate-400 mt-4">
              Modern website and app interfaces.
            </p>
          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          My Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition">
            <div className="h-52 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400">Brand Identity</h3>
              <p className="text-slate-400 mt-3">
                Logo and branding project.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition">
            <div className="h-52 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400">Social Campaign</h3>
              <p className="text-slate-400 mt-3">
                Marketing design campaign.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition">
            <div className="h-52 bg-gradient-to-r from-orange-500 to-red-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400">UI Design</h3>
              <p className="text-slate-400 mt-3">
                Website UI/UX design.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-slate-400 mb-10">
          Let’s work together on your project
        </p>

        <a
          href="https://wa.me/213000000000"
          className="bg-green-500 px-8 py-3 rounded-xl font-bold hover:bg-green-600"
        >
          WhatsApp Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        © 2026 Kamikaz Designer. All rights reserved.
      </footer>

    </div>
  )
}

export default App