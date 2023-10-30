import Image from "next/image";
import facebookIcon from "./icons/facebook.svg";
import discordIcon from "./icons/discord.svg";
import xIcon from "./icons/x.svg";
import linkedinIcon from "./icons/linkedin.svg";

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
      <div className="text-center">
        {socials.map((social) => (
          <span key={`social-${social.name}`}>
            <a
              href={social.url}
              title={`${social.name}`}
              className="inline-block my-3 mx-6"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={social.icon}
                width={30}
                height={30}
                alt={social.name}
                className="hover:bg-slate-300 hover:rounded p-1"
              />
            </a>
          </span>
        ))}
      </div>
  );
}
