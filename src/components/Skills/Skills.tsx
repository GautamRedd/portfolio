import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <h2 className="mb-12 text-5xl font-black">
        Technical Expertise
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">

        {skills.map((skill) => (

          <div
            key={skill.category}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >

            <h3 className="mb-6 text-2xl font-bold">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-3">

              {skill.items.map((item) => (

                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-4 py-2"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}