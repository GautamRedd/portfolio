import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-5xl font-black">
          About Me
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-4 text-2xl font-bold">
              Enterprise Software
            </h3>

            <p className="text-slate-400 leading-8">
              Designing scalable enterprise applications,
              backend services and cloud-native solutions
              using .NET, Python, Azure and PostgreSQL.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-4 text-2xl font-bold">
              Cloud Engineering
            </h3>

            <p className="text-slate-400 leading-8">
              Experience deploying applications on Azure,
              containerizing services with Docker and
              implementing CI/CD pipelines.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-4 text-2xl font-bold">
              Artificial Intelligence
            </h3>

            <p className="text-slate-400 leading-8">
              Passionate about machine learning, LLMs,
              predictive analytics and intelligent
              software systems.
            </p>

          </div>

        </div>
      </motion.div>
    </section>
  );
}