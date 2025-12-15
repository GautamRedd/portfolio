import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { Mail, ArrowRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 pt-24 lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mb-6 uppercase tracking-[8px] text-blue-400"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="text-6xl font-black leading-tight md:text-8xl"
          >
            Sai Goutham
            <br />
            Reddy
          </motion.h1>

          <div className="mt-8 text-2xl font-medium text-slate-300">

            <TypeAnimation
              sequence={[
                ".NET Developer",
                2000,
                "Python Developer",
                2000,
                "Cloud Engineer",
                2000,
                "AI Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-10 max-w-xl text-lg leading-8 text-slate-400">

            Building enterprise software, scalable cloud-native
            applications, backend systems, and AI-powered solutions
            using .NET, Python, Azure, React, Docker, and modern web
            technologies.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl border border-slate-700 px-7 py-4 transition hover:border-blue-500"
            >
              Download Resume
            </a>

          </div>

          <div className="mt-12 flex gap-8 text-slate-300">

            <a
              href="https://github.com/GautamRedd"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-goutham-reddy-864a492a0/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="mailto:gautamreddy37@gmail.com"
              className="transition hover:text-blue-400"
            >
              <Mail size={28} />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden items-center justify-center lg:flex">

          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

            <div className="mb-6 flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <pre className="space-y-3 text-sm leading-8 text-slate-300">

{`> whoami

Sai Goutham Reddy

Software Engineer

Location : Houston, TX

Experience : 5+ Years

Stack :
.NET
Python
React
Azure
Docker

Status :
Open to Opportunities`}

            </pre>

          </div>

        </div>

      </div>

    </section>
  );
}