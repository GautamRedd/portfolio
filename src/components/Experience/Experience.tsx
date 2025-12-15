import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <h2 className="mb-12 text-5xl font-black">
        Professional Experience
      </h2>

      <div className="space-y-10">

        {experiences.map((job) => (
          <div
            key={job.company}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div className="flex flex-col justify-between lg:flex-row">

              <div>

                <h3 className="text-3xl font-bold">
                  {job.company}
                </h3>

                <p className="mt-2 text-blue-400">
                  {job.role}
                </p>

                <p className="mt-2 text-slate-500">
                  {job.duration}
                </p>

              </div>

              <p className="text-slate-500">
                {job.location}
              </p>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              {job.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}