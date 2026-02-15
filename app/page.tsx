"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 120;
        if (window.scrollY >= top) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex justify-center">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between text-sm">
          <span className="font-semibold">Abhinav</span>

          <div className="flex gap-6 text-gray-400">
            <a href="#about" className={active === "about" ? "text-white" : "hover:text-white"}>About</a>
            <a href="#skills" className={active === "skills" ? "text-white" : "hover:text-white"}>Skills</a>
            <a href="#projects" className={active === "projects" ? "text-white" : "hover:text-white"}>Projects</a>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-5xl w-full p-10 mt-20">

        {/* HERO */}
        {/* HERO */}
<section className="bg-neutral-900 p-10 rounded-xl border border-neutral-800">
  <div className="flex flex-col md:flex-row items-center gap-8">

    <Image
      src="/Profile.jpg"
      alt="Profile"
      width={110}
      height={110}
      className="rounded-full object-cover border border-neutral-700"
      priority
    />

    <div>
      <h1 className="text-5xl font-bold">Hi, I'm Abhinav 👋</h1>

      <p className="text-gray-400 mt-3 max-w-lg">
        Aspiring Data Analyst focused on building dashboards,
        extracting insights and solving business problems using
        Python, SQL, Excel and Power BI.
      </p>

      <div className="flex gap-4 mt-6">
        <a href="#projects"
           className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition">
           View Projects
        </a>

        <a href="#contact"
           className="border border-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition">
           Contact Me
        </a>
      </div>
    </div>

  </div>
</section>


        {/* ABOUT */}
        <section id="about" className="mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800
                              transition duration-300 hover:shadow-lg hover:shadow-white/5">

          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-400 mt-2">
            I am passionate about data analytics and building insights using data.
          </p>
        </section>

        {/* SKILLS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">

  {["Python","SQL","Excel","Power BI"].map((skill)=>(
    <div
      key={skill}
      className="bg-black border border-neutral-700 p-4 rounded-xl text-center
                 hover:-translate-y-1 hover:border-white transition"
    >
      {skill}
    </div>
  ))}

</div>


        {/* PROJECTS */}
        <div className="mt-6 grid gap-5">

  <div className="mt-4 bg-black border border-neutral-700 p-4 rounded-lg
                transition duration-300 hover:scale-[1.02] 
                hover:shadow-lg hover:shadow-white/5">


    <h3 className="text-lg font-semibold">
      Sales Data Analysis Dashboard
    </h3>

    <p className="text-gray-400 mt-2 text-sm">
      Built interactive dashboards in Power BI and analyzed
      sales trends using Excel datasets.
    </p>

    <div className="flex gap-4 mt-4 text-sm">
      <a className="underline hover:text-white text-gray-400">GitHub</a>
      <a className="underline hover:text-white text-gray-400">Live Demo</a>
    </div>

  </div>

</div>


      </div>

      {/* CONTACT */}
<section id="contact" className="mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
  <h2 className="text-2xl font-semibold">Contact</h2>

  <p className="text-gray-400 mt-2">
    Open to internships and data analytics opportunities.
  </p>

  <div className="flex gap-4 mt-4">
    <a className="border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800">
      LinkedIn
    </a>

    <a className="border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800">
      Email
    </a>
  </div>
</section>

    </main>
  );
}
