import Link from "next/link";
import Hero from "@/components/Hero";

const HIGHLIGHTS = [
  {
    title: "Thoughtfully designed",
    body: "Every detail — from the smallest button to the largest layout — is crafted with intention.",
  },
  {
    title: "Quietly powerful",
    body: "Serious capability without the noise. Veraloom stays out of your way until you need it.",
  },
  {
    title: "Made to grow",
    body: "Start simple. Scale gracefully. Veraloom adapts to your workflow, not the other way around.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Highlights */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A different kind of platform
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Veraloom is built around three simple ideas.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-veraloom-100 text-veraloom-700">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-veraloom-gradient px-8 py-16 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to weave something remarkable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Join early access and be the first to explore what Veraloom can
              do for you and your team.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-veraloom-700 shadow-md transition hover:bg-slate-100"
              >
                Get in touch
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
