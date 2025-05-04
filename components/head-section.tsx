interface HeadSectionProps {
  title: string;
  highlight: string;
  note?: string;
}

export default function HeadSection({
  title,
  highlight,
  note,
}: HeadSectionProps) {
  return (
    <>
      <h5 className="font-semibold">{title}</h5>
      <h3 className="font-bold text-lg text-hli leading-5 mt-2">{highlight}</h3>
      <p className="text-xs italic mt-1">{note}</p>
    </>
  );
}
