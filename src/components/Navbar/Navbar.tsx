import { Menu, Download } from "lucide-react";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-black tracking-wide">
          Sai<span className="text-blue-400">.</span>
        </h1>

        <nav className="hidden gap-8 lg:flex">

          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {item.title}
            </a>
          ))}

        </nav>

        <div className="flex items-center gap-5">

          <a
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 transition hover:bg-blue-500 lg:flex"
          >
            <Download size={18} />
            Resume
          </a>

          <button className="lg:hidden">
            <Menu />
          </button>

        </div>

      </div>

    </header>
  );
}