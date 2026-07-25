import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-veraloom-gradient opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-veraloom-300 opacity-30 blur-3xl" />
      </div>

      <div className="container-page py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-veraloom-200 bg-veraloom-50 px-3 py-1 text-xs font-medium text-veraloom-700">
            <span className="h-1.5 w-1.5 rounded-full bg-veraloom-500" />
            Now in early access
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Weave your truth into{" "}
            <span className="bg-veraloom-gradient bg-clip-text text-transparent">
              every moment
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Veraloom is the modern platform for building meaningful, connected
            experiences — thoughtfully designed, quietly powerful, and made to
            grow with you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get early access
            </Link>
            <Link href="/features" className="btn-secondary">
              Explore features →
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            No credit card required · Cancel anytime
          </p>
        </div>

        {/* Placeholder visual */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative rounded-2xl border border-slate-200 bg-white/60 p-2 shadow-2xl shadow-veraloom-600/10 backdrop-blur">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-veraloom-gradient">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-xs font-medium uppercase tracking-widest opacity-80">
                    Product Preview
                  </p>
                  <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                    Something beautiful is being woven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
