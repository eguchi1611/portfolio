import propertiesJson from "@/properties.json";

export default function SiteDescription() {
  return (
    <div className="whitespace-pre-line text-neutral-700">
      {propertiesJson.profile.description}
    </div>
  );
}
