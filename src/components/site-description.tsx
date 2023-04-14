type Props = {
  description: string;
};

export default function SiteDescription({ description }: Props) {
  return (
    <div
      className="whitespace-pre-line text-neutral-700"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
