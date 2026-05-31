const content = {
  name: "KAMIKAZ",
  role: "Senior Creative Designer",
  description:
    "I help brands grow through modern branding, UI/UX design, and high-impact visual storytelling.",
  about:
    "I am a professional designer focused on branding, visual identity, and digital experiences. My work combines strategy and creativity to build strong and memorable brands.",
  services: [
    {
      title: "Brand Identity",
      desc: "Complete visual identity systems for modern businesses."
    },
    {
      title: "Social Media Design",
      desc: "High-impact visuals optimized for engagement and marketing."
    },
    {
      title: "UI/UX Design",
      desc: "Clean and modern interfaces focused on user experience."
    }
  ],
  projects: [
    {
      title: "Luxury Branding",
      img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
      desc: "Premium identity design system."
    },
    {
      title: "Marketing Campaign",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48",
      desc: "Social media ad campaign visuals."
    },
    {
      title: "Mobile App UI",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      desc: "Fintech application interface design."
    },
    {
      title: "Logo System",
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      desc: "Minimal logo + branding guide."
    },
    {
      title: "Advertising Design",
      img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
      desc: "High-conversion ad creatives."
    },
    {
      title: "Web UI Concept",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern landing page design."
    }
  ],
  whatsapp: "https://wa.me/213000000000",
};

export default function App() {
  return (
    <div className="bg-[#05060a] text-white scroll-smooth">

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl flex justify-between items-center px-10 py-5 border-b border-white/10 z-50">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-widest">
          {content.name}
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#work" className="hover:text-cyan-400">Work</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[180px] opacity-20"></div>

        <h1 className="text-7xl font-extrabold leading-tight">
          Creative <span className="text-cyan-400">Designer</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          {content.description}
        </p>

        <a
          href="#work"
          className="mt-10 bg-cyan-500 px-10 py-3 rounded-xl hover:scale-110 transition shadow-lg shadow-cyan-500/20"
        >
          View Work
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {content.about}
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-cyan-400 font-bold text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Selected Work</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={p.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-cyan-400 font-bold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

        <a
          href={content.whatsapp}
          className="bg-green-500 px-10 py-3 rounded-xl hover:scale-110 transition shadow-lg"
        >
          Contact on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © 2026 {content.name}. All Rights Reserved.
      </footer>

    </div>
  );
}