import Image from "next/image";
import facebookIcon from "./icons/facebook.svg";
import discordIcon from "./icons/discord.svg";
import xIcon from "./icons/x.svg";
import linkedinIcon from "./icons/linkedin.svg";
import openCollectiveIcon from "./icons/opencollective.svg";

const socials = [
  {
    name: "Discord",
    url: "https://discord.com/invite/DJ5gpQtqMH",
    icon: discordIcon,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/firenzedev/?ref=website",
    icon: linkedinIcon,
  },
  {
    name: "Open collective",
    url: "https://opencollective.com/firenzedev",
    icon: openCollectiveIcon,
  },
  {
    name: "X",
    url: "https://twitter.com/firenzeDev",
    icon: xIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/firenzedev/?ref=website",
    icon: facebookIcon,
  },
];

export default function Social() {
  return (
    <div className="flex items-end">
      {socials.map((social) => (
        <span key={`social-${social.name}`} title={social.name}>
          <a
            href={social.url}
            title={`${social.name}`}
            className="inline-block my-3 mx-6"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={social.icon}
              height={40}
              alt={social.name}
              title={social.name}
              className="hover:bg-slate-300 hover:rounded p-1"
            />
          </a>
        </span>
      ))}
    </div>
  );
}
