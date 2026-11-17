
const socials = [
  { label: "GitHub", href: "https://github.com/Sujal045" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sujal045" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0c0c0e] px-6 text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[130px]" />

      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between py-8">
        <a href="/" className="text-xl font-semibold tracking-tight">
          SP<span className="text-indigo-400">.</span>
        </a>
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
          Currently building
        </span>
      </nav>

      <section className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-24">

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-7xl md:text-8xl">
          Something
          <br />
          interesting is
          <br />
          <span className="text-gray-500">taking shape.</span>
        </h1>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-gray-300 transition hover:border-indigo-400 hover:text-white"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-6xl flex-col justify-between gap-3 border-t border-white/10 py-7 text-xs text-gray-500 sm:flex-row">
        <span>© 2026 Sujal Prajapati</span>
        <span>Made with curiosity. More soon.</span>
      </footer>
    </main>
  );
}
