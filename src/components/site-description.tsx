type Props = {
  description: string;
};

export default function SiteDescription({ description }: Props) {
  return (
    <div
      className="text-neutral-700 whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
