import { properties } from "@/lib/properties";

export default function SiteDescription() {
  return (
    <div className="whitespace-pre-line text-neutral-700">
      {properties.profile.description}
    </div>
  );
}
