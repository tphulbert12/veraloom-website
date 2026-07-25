import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Veraloom collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 1, 2026"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <article className="prose prose-slate mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-slate-700">
              At Veraloom, we believe privacy is a fundamental right. This
              policy explains what we collect, why we collect it, and the
              controls you have over your information.
            </p>

            <Section title="Information we collect">
              <p>
                We collect information you provide directly — such as your
                name, email, and account preferences — as well as basic usage
                data needed to operate and improve the service.
              </p>
            </Section>

            <Section title="How we use information">
              <p>We use information to:</p>
              <ul>
                <li>Provide, maintain, and improve the Veraloom service</li>
                <li>Communicate with you about your account or updates</li>
                <li>Detect, prevent, and address abuse or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="Information sharing">
              <p>
                We do not sell your personal information. We share data only
                with service providers who help us operate Veraloom, and only
                under strict confidentiality obligations.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                We retain your information for as long as your account is
                active or as needed to provide the service. You may request
                deletion of your data at any time.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                Depending on your location, you may have rights to access,
                correct, export, or delete your personal information. Contact
                us to exercise these rights.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions about this policy? Reach us at{" "}
                <a
                  href="mailto:privacy@veraloom.com"
                  className="text-veraloom-700 underline underline-offset-2 hover:text-veraloom-800"
                >
                  privacy@veraloom.com
                </a>
                .
              </p>
            </Section>

            <p className="mt-10 text-sm italic text-slate-500">
              This document is provided as a placeholder and should be
              reviewed by legal counsel before publication.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
