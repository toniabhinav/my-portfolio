"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPython, FaLinkedin, FaEnvelope, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa";
import { SiPandas, SiMysql } from "react-icons/si";
import { TbFileSpreadsheet } from "react-icons/tb";

export default function Page() {
  const [active, setActive] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dark, setDark] = useState(true);
  const [showTop, setShowTop] = useState(false);


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
      setShowTop(window.scrollY > 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
<main className={`relative w-full flex justify-center overflow-x-hidden
  ${dark ? "bg-gradient-to-b from-black via-neutral-950 to-black text-white"
         : "bg-white text-black"}`}>

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-50">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-[spin_30s_linear_infinite]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-[spin_30s_linear_infinite]" />
      </div>

      {/* CURSOR SPOTLIGHT */}
      <motion.div
  className="pointer-events-none fixed inset-0 -z-50"


        animate={{
          background: `radial-gradient(
            600px at ${mouse.x}px ${mouse.y}px,
            rgba(255,255,255,0.05),
            transparent 80%
          )`
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />

      {/* NAVBAR */}
<nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b
  ${dark ? "bg-black/60 border-neutral-800"
         : "bg-white/70 border-gray-200"}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between text-sm">
          <span className="font-semibold tracking-tight">Abhinav</span>


          <div className="relative flex gap-6 text-gray-400">
            {["about","skills","projects","contact"].map((item)=>(
              <a
                key={item}
                href={`#${item}`}
                className={`relative pb-1 transition ${
                  active===item ? "text-white" : "hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase()+item.slice(1)}

                {active===item && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  />
                )}
              </a>
            ))}
          </div>
          {/* RIGHT SIDE BUTTONS */}
<div className="flex items-center gap-3">
  {/* Moon Button */}
  <button
  onClick={() => setDark(!dark)}
  className="p-3 rounded-xl border border-neutral-700 bg-neutral-900/60 backdrop-blur hover:border-white/40 transition"
>
  {dark ? "🌙" : "☀️"}
</button>

</div>

        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-5xl w-full px-6 py-10 mt-24 space-y-10">


        {/* HERO */}
{/* HERO */}
<motion.section
  {...fadeUp}
className="relative py-12 pb-10 border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.05)] overflow-visible backdrop-blur-sm"
>
{/* STRIPED BACKGROUND */}
<div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:40px_100%]" />
{/* NOISE TEXTURE */}
<div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

    {/* LEFT SIDE */}
<div className="flex items-center gap-6 md:gap-8">

      {/* PROFILE IMAGE */}
      {/* PROFILE IMAGE — HOVER GLOW */}
<div className="relative group -mb-6 ml-3">

  {/* Glow layer */}
  <span className="absolute inset-0 rounded-full blur-2xl opacity-0 
  group-hover:opacity-60 transition duration-300 bg-white/30"></span>

  {/* Image */}
  {/* PROFILE IMAGE — AESTHETIC HOVER GLOW */}
<div className="relative group -mb-6 ml-3">

  {/* Aesthetic gradient glow */}
  <span className="
    absolute -inset-2 rounded-full blur-xl opacity-0
    group-hover:opacity-100 transition duration-500
    bg-gradient-to-tr from-blue-500/40 via-purple-500/40 to-cyan-400/40
  "></span>

  {/* Image */}
  <Image
    src="/Profile.jpg"
    alt="Profile"
    width={180}
    height={180}
    className="
      relative rounded-full border-2 border-neutral-700
      object-cover shadow-xl
      transition duration-500
      group-hover:scale-[1.03]
    "
    priority
  />
</div>

</div>


      <div>
        <div className="flex items-center gap-2">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight relative">
<span className="absolute -inset-3 blur-2xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 -z-10 rounded-lg"></span>

            Abhinav Kumar
          </h1>
          <span className="text-blue-400">✔️</span>
        </div>

        {/* TECH STACK LINE */}
<p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xl">
  My main <span className="font-semibold text-white">Tech Stack</span> is

<span className="ml-2 inline-flex flex-wrap items-center gap-2 align-middle">

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">Python</span>

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">SQL</span>

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">Excel</span>

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">Power BI</span>

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">Tableau</span>

    <span className="px-3 py-1 rounded-md bg-neutral-900/70 backdrop-blur border border-white/5 hover:border-white/30 transition
 text-xs">Pandas</span>

  </span>
</p>
        {/* ACTION BUTTONS */}
<div className="flex items-center gap-3 mt-4">

  {/* Resume Button */}
  <a
    href="/Resume.pdf"
    target="_blank"
    className="px-5 py-2 rounded-lg border border-neutral-700 bg-neutral-900/60 backdrop-blur hover:border-white/40 hover:scale-105 transition text-sm"
  >
    📄 Resume / CV
  </a>

</div>
{/* SOCIAL ICONS */}
<div className="flex items-center gap-4 mt-4 text-gray-400">

  <a
    href="https://github.com/toniabhinav"
    target="_blank"
    className="hover:text-white transition hover:scale-110"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/abhinav-kumar-b174a4310/"
    target="_blank"
    className="hover:text-white transition hover:scale-110"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&to=abhinavkm048@gmail.com"
    target="_blank"
    className="hover:text-white transition hover:scale-110"
  >
    <FaEnvelope size={18} />
  </a>
  <a
  href="https://www.instagram.com/toni_abhinav/"
  target="_blank"
  className="hover:text-white transition hover:scale-110"
>
  <FaInstagram size={18} />
</a>

</div>


      </div>
    </div>

    {/* RIGHT SIDE BUTTONS */}
    <div className="flex items-center gap-3">

<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 whitespace-nowrap">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-sm text-gray-300">Let's Work</span>
      </div>

      <a
  href="#contact"
  className="flex items-center gap-2 px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition whitespace-nowrap"
>

        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        Book a free call
      </a>

    </div>
  </div>
</motion.section>




        {/* ABOUT */}
<motion.section
  id="about"
  {...fadeUp}

  className={`snap-start relative p-10 rounded-xl border overflow-hidden ${
    dark
      ? "bg-neutral-900 border-neutral-800 text-white"
      : "bg-white border-gray-200 text-black shadow-sm"
  }`}
>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-400 mt-2">
            Entry-level Data Analyst with hands-on experience in data analysis, reporting, and dashboard development using Python, SQL, Excel, and Power BI. Strong foundation in exploratory data analysis
(EDA), data transformation, KPI analysis, and visualization to support data-driven business decisions.
Experienced in working with structured datasets and communicating actionable insights.
          </p>
          {/* ADD THIS BLOCK BELOW */}
<div className="mt-6">
  <p className="text-sm text-gray-400 mb-2">Skills</p>

  <div className="flex items-center gap-4 text-xl text-gray-400">
    <FaPython className="hover:text-white hover:scale-110 transition" />
    <SiMysql className="hover:text-white hover:scale-110 transition" />
    <SiPandas className="hover:text-white hover:scale-110 transition" />
    <TbFileSpreadsheet className="hover:text-white hover:scale-110 transition" />
  </div>
</div>
        </motion.section>

        {/* SKILLS */}
<motion.section
id="skills"
  {...fadeUp}
  className={`snap-start relative p-10 rounded-xl border overflow-hidden ${
    dark
      ? "bg-neutral-900 border-neutral-800 text-white"
      : "bg-white border-gray-200 text-black shadow-sm"
  }`}
>
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
            {[
              {name:"Python",icon:<FaPython/>},
              {name:"SQL",icon:<SiMysql/>},
              {name:"Excel",icon:<TbFileSpreadsheet/>},
              {name:"Power BI",icon:<TbFileSpreadsheet/>},
              {name:"Pandas",icon:<SiPandas/>},
            ].map((skill)=>(
              <div key={skill.name}
                className={`border p-4 rounded-xl flex flex-col items-center gap-2 hover:-translate-y-1 transition ${
  dark
    ? "bg-black border-neutral-700 text-white hover:border-white"
    : "bg-gray-50 border-gray-200 text-black hover:border-gray-400"
}`}
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
  className={`snap-start relative p-10 rounded-xl border overflow-hidden ${
    dark
      ? "bg-neutral-900 border-neutral-800 text-white"
      : "bg-white border-gray-200 text-black shadow-sm"
  }`}
>
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="mt-6 grid gap-5">


            <div className="bg-black border border-neutral-700 p-6 rounded-xl transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5">
              <h3 className="text-lg font-semibold">Sales Data Analysis Dashboard</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Built interactive dashboards in Power BI and analyzed sales trends using Excel datasets.
              </p>
              <p className="text-gray-400 mt-2 text-sm">
              Excel | Data Analysis | Pivot Tables | Charts | Data Cleaning | Business Insights
              </p>
              <div className="flex gap-4 mt-4 text-sm">
                <a
              href="https://github.com/toniabhinav/Sales-Market-Insights-Analysis-using-Excel"
              target="_blank"
              className="underline hover:text-white text-gray-400"
              >
              GitHub
              </a>
                <a className="underline hover:text-white text-gray-400">Live Demo</a>
              </div>
            </div>



            <div className="bg-black border border-neutral-700 p-6 rounded-xl transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5">
              <h3 className="text-lg font-semibold">Blinkit Grocery Sales Dashboard</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Power BI dashboard analyzing grocery sales trends and KPIs.
              </p>
              <p className="text-gray-400 mt-2 text-sm">
              Power BI | Data Visualization | Dashboard Design | DAX | Data Cleaning | Business Insights
              </p>
              <div className="flex gap-4 mt-4 text-sm">
              <a
              href="https://github.com/toniabhinav/Blinkit-Grocery-Sales-Analytics-Dashboard-Power-BI-"
              target="_blank"
              className="underline hover:text-white text-gray-400"
              >
              GitHub
              </a>

                <a className="underline hover:text-white text-gray-400">Live Demo</a>
              </div>
            </div>


            <div className="bg-black border border-neutral-700 p-6 rounded-xl transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5">
              <h3 className="text-lg font-semibold">Sales analysis for Online Bookstore SQL</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Analyzed online bookstore sales data using SQL queries including joins, group by, and aggregations to identify top-selling books, customer trends, and revenue insights.
              </p>
              <p className="text-gray-400 mt-2 text-sm">
              SQL | Data Analysis | Joins | Aggregation
              </p>
              <div className="flex gap-4 mt-4 text-sm">
                <a
              href="https://github.com/toniabhinav/Sales-analysis-for-Online-Bookstore-SQL"
              target="_blank"
              className="underline hover:text-white text-gray-400"
              >
              GitHub
              </a>
                <a className="underline hover:text-white text-gray-400">Live Demo</a>
              </div>
            </div>



          </div>
        </motion.section>

        {/* CONTACT */}
<motion.section
id="contact"
  {...fadeUp}
  className={`snap-start relative p-10 rounded-xl border overflow-hidden ${
    dark
      ? "bg-neutral-900 border-neutral-800 text-white"
      : "bg-white border-gray-200 text-black shadow-sm"
  }`}
>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-400 mt-2">Open to internships and opportunities.</p>

          <div className="flex gap-4 mt-4">

            <a
              href="https://www.linkedin.com/in/abhinav-kumar-b174a4310/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2 rounded-lg border border-neutral-700 bg-neutral-900/60 backdrop-blur hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300"
            >
              <FaLinkedin className="text-lg transition group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=abhinavkm048@gmail.com"
              target="_blank"
              className="group flex items-center gap-2 px-5 py-2 rounded-lg border border-neutral-700 bg-neutral-900/60 backdrop-blur hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300"
            >
              <FaEnvelope className="text-lg transition group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              Email
            </a>

          </div>
        </motion.section>

{/* FOOTER */}
<footer className="text-center text-sm text-gray-400 py-10">
  <p>
    Design & Developed by <span className="text-white font-medium">Abhinav Kumar</span>
  </p>
  <p className="mt-1 text-xs text-gray-500">
    © {new Date().getFullYear()} All rights reserved
  </p>
</footer>

</div>   {/* ← this closes the max-w-5xl container */}

{/* BACK TO TOP BUTTON */}
{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-neutral-700 bg-neutral-900/80 backdrop-blur hover:scale-110 hover:border-white/40 transition shadow-lg"
  >
    <FaArrowUp size={14} />
  </button>
)}

    </main>
  );
}
