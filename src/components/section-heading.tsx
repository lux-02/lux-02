type SectionHeadingProps = {
  title: string;
  lead?: string;
};

export function SectionHeading({ title, lead }: SectionHeadingProps) {
  return (
    <header className="space-y-3">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {lead ? <p className="max-w-3xl text-base text-slate-300">{lead}</p> : null}
    </header>
  );
}
