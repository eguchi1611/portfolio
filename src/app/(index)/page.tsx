import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <Image
        alt="ロゴ"
        src="/logo.svg"
        width={257.28}
        height={56.704}
        className="h-24 w-auto"
      />
    </div>
  );
}
