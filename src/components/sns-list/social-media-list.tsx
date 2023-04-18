import SocialMediaCard from "./social-media-card";
import propertiesJson from "@/properties.json";

export default function SocialMediaList() {
  return (
    <div>
      {propertiesJson.snslist.map((social) => (
        <div key={social.href} className="border-t first:border-t-0">
          <SocialMediaCard
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        </div>
      ))}
    </div>
  );
}
