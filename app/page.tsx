"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex justify-center">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg border-b border-neutral-800 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between text-sm">
          <span className="font-semibold">Abhinav</span>

          <div className="flex gap-6 text-gray-400">
            <a
              href="#about"
              className={active === "about" ? "text-white" : "hover:text-white"}
            >
              About
            </a>

            <a
              href="#skills"
              className={active === "skills" ? "text-white" : "hover:text-white"}
            >
              Skills
            </a>

            <a
              href="#projects"
              className={active === "projects" ? "text-white" : "hover:text-white"}
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-3xl w-full p-10 mt-20">

        {/* HERO */}
        <div className="header-glow bg-neutral-900 p-8 rounded-xl border border-neutral-800 flex items-center gap-6">

          <img
            src="/Profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-neutral-700"
          />

          <div>
            <h1 className="text-5xl font-bold">Abhinav Kumar</h1>

            <p className="text-gray-400 mt-2">
              Aspiring Data Analyst | Excel • SQL • Python • Power BI • Pandas
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/abhinav-kumar-b174a4310/"
                target="_blank"
                className="bg-black border border-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-800"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="bg-black border border-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div
          id="about"
          className="fade-in mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">About Me</h2>

          <p className="text-gray-400 mt-2">
            I am passionate about data analytics and building insights using
            data. I enjoy working with dashboards, data visualization, and
            problem solving.
          </p>
        </div>

        {/* SKILLS */}
        <div
          id="skills"
          className="fade-in mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-black border border-neutral-700 px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-black border border-neutral-700 px-3 py-1 rounded-full text-sm">
              SQL
            </span>
            <span className="bg-black border border-neutral-700 px-3 py-1 rounded-full text-sm">
              Excel
            </span>
            <span className="bg-black border border-neutral-700 px-3 py-1 rounded-full text-sm">
              Power BI
            </span>
            <span className="bg-black border border-neutral-700 px-3 py-1 rounded-full text-sm">
              Data Visualization
            </span>
          </div>
        </div>

        {/* PROJECTS */}
        <div
          id="projects"
          className="fade-in mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="mt-4 bg-black border border-neutral-700 p-4 rounded-lg transition-all duration-300 hover:border-neutral-500 hover:shadow-lg hover:shadow-neutral-800">
            <h3 className="text-lg font-semibold">
              Sales Data Analysis Dashboard
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Analyzed sales dataset using Excel and Power BI to identify
              revenue trends, top-performing products, and regional performance
              insights.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Tools Used: Excel • Power BI • Data Cleaning
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
