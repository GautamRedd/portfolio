export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-32 text-center"
    >

      <h2 className="text-5xl font-black">
        Let's Build Something Great
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">

        Whether you're looking for a Software Engineer,
        Full Stack Developer, or Backend Engineer,
        I'd love to connect.

      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <a
          href="mailto:gautamreddy37@gmail.com"
          className="rounded-xl bg-blue-600 px-8 py-4 hover:bg-blue-500"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sai-goutham-reddy-864a492a0/"
          target="_blank"
          className="rounded-xl border border-slate-700 px-8 py-4 hover:border-blue-500"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}