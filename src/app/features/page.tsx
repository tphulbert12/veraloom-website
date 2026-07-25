import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore everything Veraloom offers — thoughtful design, powerful tools, and workflows that grow with you.",
};

const FEATURES = [
  {
    title: "Woven Workflows",
    body: "Compose flexible, connected workflows that adapt as your work evolves — without the complexity of traditional tools.",
    icon: (
      <path d="M4 6h16M4 12h16M4 18h10" />
    ),
  },
  {
    title: "Living Timelines",
    body: "Bring context to every moment with dynamic, richly annotated timelines that keep your story alive.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: "Intelligent Assist",
    body: "Purpose-built assistance that understands your context and gets sharper the more you work together.",
    icon: (
      <>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    title: "Private by Design",
    body: "Your data is yours. End-to-end privacy controls and thoughtful defaults keep it that way.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "Everywhere You Are",
    body: "Native experiences across the devices you already use — from your desktop to your pocket.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    title: "Built to Integrate",
    body: "Open APIs and thoughtful integrations connect Veraloom to the tools already in your workflow.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything you need. Nothing you don't."
        description="Veraloom is a carefully curated set of capabilities — each one there for a reason."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-veraloom-gradient text-white shadow-md">
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
                    {feature.icon}
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
