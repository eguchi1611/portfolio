import { socialMediaList } from "./data-social-media";
import SocialMediaCard from "./social-media-card";

export default function SocialMedia() {
  return (
    <div>
      {socialMediaList.map((social) => (
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
