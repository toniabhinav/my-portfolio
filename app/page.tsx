"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { SiPandas, SiMysql } from "react-icons/si";

import { TbFileSpreadsheet } from "react-icons/tb";

export default function Page() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 120;
        if (window.scrollY >= top) current = id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white flex justify-center">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between text-sm">
          <span className="font-semibold">Abhinav</span>

          <div className="flex gap-6 text-gray-400">
            {["about","skills","projects","contact"].map((item)=>(
              <a
                key={item}
                href={`#${item}`}
                className={`transition ${
                  active===item
                  ? "text-white"
                  : "hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase()+item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-5xl w-full p-10 mt-20 space-y-10">

        {/* HERO */}
        <motion.section
          {...fadeUp}
          className="relative bg-neutral-900 p-10 rounded-xl border border-neutral-800 overflow-hidden"
        >
          {/* glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 blur-3xl rounded-full" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            <Image
              src="/Profile.jpg"
              alt="Profile"
              width={110}
              height={110}
              className="rounded-full border border-neutral-700"
              priority
            />

            <div>
              <h1 className="text-5xl font-bold">
                Hi, I'm Abhinav 👋
              </h1>

              <p className="text-gray-400 mt-3 max-w-lg">
                Aspiring Data Analyst focused on building dashboards,
                extracting insights and solving business problems
                using Python, SQL, Excel, Power BI and Pandas.
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href="#projects"
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          {...fadeUp}
          className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 transition hover:shadow-lg hover:shadow-white/5"
        >
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-400 mt-2">
            I am passionate about data analytics and building insights
            using Python, SQL, Excel and Power BI to solve real-world problems.
          </p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          {...fadeUp}
          className="bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">

            {[
              {name:"Python",icon:<FaPython/>},
              { name:"SQL", icon:<SiMysql/> },

              {name:"Excel",icon:<TbFileSpreadsheet/>},
              {name:"Power BI",icon:<TbFileSpreadsheet/>},

              {name:"Pandas",icon:<SiPandas/>},
            ].map((skill)=>(
              <div
                key={skill.name}
                className="bg-black border border-neutral-700 p-4 rounded-xl flex flex-col items-center gap-2
                           hover:-translate-y-1 hover:border-white transition"
              >
                <span className="text-xl">{skill.icon}</span>
                {skill.name}
              </div>
            ))}

          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          {...fadeUp}
          className="bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="mt-6 grid gap-5">

            <div className="bg-black border border-neutral-700 p-6 rounded-xl
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
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          {...fadeUp}
          className="bg-neutral-900 p-6 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="text-gray-400 mt-2">
            Open to internships and data analytics opportunities.
          </p>

          <div className="flex gap-4 mt-4">
            <a className="border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800 transition">
              LinkedIn
            </a>

            <a className="border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800 transition">
              Email
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
