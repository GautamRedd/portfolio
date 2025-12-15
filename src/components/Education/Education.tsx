import { education } from "../../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <h2 className="mb-12 text-5xl font-black">
        Education
      </h2>

      <div className="grid gap-8">

        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <h3 className="text-2xl font-bold">
              {item.school}
            </h3>

            <p className="mt-2 text-blue-400">
              {item.degree}
            </p>

            <p className="mt-3 text-slate-400">
              {item.duration}
            </p>

            <p className="text-slate-500">
              {item.location}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}