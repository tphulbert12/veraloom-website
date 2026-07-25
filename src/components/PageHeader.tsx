type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-veraloom-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-slate-600">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
