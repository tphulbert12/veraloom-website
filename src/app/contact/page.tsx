import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Veraloom team — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Have a question, partnership idea, or just want to say hello? Drop us a line."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900">
                Reach us directly
              </h2>
              <p className="mt-3 text-slate-600">
                Prefer email? We usually reply within one business day.
              </p>

              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="font-semibold text-slate-900">General</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:hello@veraloom.com"
                      className="text-veraloom-700 hover:text-veraloom-800"
                    >
                      hello@veraloom.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Support</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:support@veraloom.com"
                      className="text-veraloom-700 hover:text-veraloom-800"
                    >
                      support@veraloom.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Press</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:press@veraloom.com"
                      className="text-veraloom-700 hover:text-veraloom-800"
                    >
                      press@veraloom.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                action="mailto:hello@veraloom.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="mt-6">
                  <Field label="Subject" name="subject" type="text" required />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-veraloom-500 focus:outline-none focus:ring-2 focus:ring-veraloom-500/30"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                  <button type="submit" className="btn-primary">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-900"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-veraloom-500 focus:outline-none focus:ring-2 focus:ring-veraloom-500/30"
      />
    </div>
  );
}
