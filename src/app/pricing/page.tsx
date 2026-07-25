import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Veraloom — from personal projects to full-scale teams.",
};

const TIERS = [
  {
    name: "Starter",
    price: "Free",
    cadence: "forever",
    description:
      "Everything you need to explore Veraloom and build your first experiences.",
    features: [
      "Up to 3 projects",
      "Community support",
      "Core Veraloom features",
      "Basic integrations",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "per month",
    description:
      "For creators and small teams building serious things with Veraloom.",
    features: [
      "Unlimited projects",
      "Priority support",
      "Advanced integrations",
      "Custom domains",
      "Analytics & insights",
    ],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "Custom",
    cadence: "let's talk",
    description:
      "For teams and organizations who need advanced controls and dedicated support.",
    features: [
      "Everything in Pro",
      "SSO & advanced security",
      "Dedicated success manager",
      "Custom SLAs",
      "Migration support",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing. Real value."
        description="Start free. Upgrade when it makes sense. No surprises, ever."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition ${
                  tier.highlight
                    ? "border-veraloom-600 bg-white shadow-veraloom-600/10 ring-1 ring-veraloom-600"
                    : "border-slate-200 bg-white hover:shadow-md"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-veraloom-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
                    Most popular
                  </span>
                )}

                <h2 className="text-xl font-semibold text-slate-900">
                  {tier.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500">
                    {tier.cadence}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-veraloom-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 ${
                    tier.highlight ? "btn-primary" : "btn-secondary"
                  } w-full`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            All plans include core Veraloom features. Prices shown in USD.
          </p>
        </div>
      </section>
    </>
  );
}
