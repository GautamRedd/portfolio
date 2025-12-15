import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <h2 className="mb-12 text-5xl font-black">
        Featured Projects
      </h2>

      <div className="grid gap-10 lg:grid-cols-2">

        {projects.map((project) => (

          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >

            <div className="h-56 bg-slate-800 flex items-center justify-center">

              <span className="text-slate-500">
                Project Screenshot
              </span>

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                className="mt-10 inline-flex rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-500"
              >
                View on GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}