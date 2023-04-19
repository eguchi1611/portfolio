import { properties } from "@/lib/properties";
import Link from "next/link";

export default function SiteTitle() {
  return (
    <div className="font-mono text-3xl font-extrabold tracking-widest text-teal-500">
      <Link href="/">{properties.profile.title}</Link>
    </div>
  );
}
