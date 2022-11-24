import Image from "next/image";
import facebookIcon from "./icons/facebook.svg";
import discordIcon from "./icons/discord.svg";
import twitterIcon from "./icons/twitter.svg";

const socials = [
  {
    name: "facebook",
    url: "https://www.facebook.com/firenzedev/?ref=website",
    icon: facebookIcon,
  },
  {
    name: "discord",
    url: "https://discord.com/invite/DJ5gpQtqMH",
    icon: discordIcon,
  },
  {
    name: "twitters",
    url: "https://twitter.com/firenzeDev",
    icon: twitterIcon,
  },
];

export default function Social() {
  return (
    <div className="bg-slate-200 text-center p-4">
      {socials.map((social) => (
        <span key={`social-${social.name}`}>
          <a
            href={social.url}
            title={`firenze.dev ${social.name}`}
            className="inline-block m-4"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={social.icon}
              width={30}
              height={30}
              alt={`firenze.dev ${social.name}`}
            />
          </a>
        </span>
      ))}
    </div>
  );
}
