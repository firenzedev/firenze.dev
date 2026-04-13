import Image from "next/image";
import quoteImage from "./images/quote_open.svg";
import github from "./images/github.svg";
import medium from "./images/medium.svg";
import linkedin from "./images/linkedin.svg";
import email from "./images/email.svg";
import { H3 } from "@/components/ui/Heading";

interface MemberProps {
  name: string;
  intro?: string;
  github?: string;
  linkedin?: string;
  medium?: string;
  email?: string;
  image?: any;
  anchor: string;
}

export default function Member({
  member,
  reverse,
  column,
}: Readonly<{
  member: MemberProps;
  reverse?: boolean;
  column?: boolean;
}>) {
  const imageSize = 48;
  return (
    <div
      id={member.anchor}
      className={
        (column
          ? "flex flex-col-reverse"
          : "flex lg:flex-row flex-col-reverse flex-wrap py-6 ") +
        (reverse ? "lg:flex-row-reverse" : "")
      }
    >
      <div
        className={
          column ? "flex-1 flex-col justify-between items-center" : "lg:w-3/4"
        }
      >
        <H3
          className={`${column ? "text-center" : "text-center md:text-start"} mb-6`}
        >
          {member.name}
        </H3>
        <div
          className={`${column ? "flex flex-col items-center " : ""} relative`}
        >
          {member.intro && (
            <>
              <div className="inline-flex absolute -top-4 left-0">
                <Image
                  src={quoteImage}
                  alt="Quote open"
                  width={60}
                  height={48}
                  className="inline"
                />
              </div>
              <p className="italic inline-flex text-black dark:text-white pl-16">
                {member.intro}
              </p>
            </>
          )}
          <div className={`${column ? "" : "pl-16"} flex space-x-3 mt-4`}>
            {member.github && (
              <a href={member.github} target="_blank" rel="noreferrer">
                <Image
                  decoding="async"
                  src={github}
                  alt="github"
                  width={imageSize}
                  height={imageSize}
                />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <Image
                  decoding="async"
                  src={linkedin}
                  alt="linkedin"
                  width={imageSize}
                  height={imageSize}
                />
              </a>
            )}
            {member.medium && (
              <a href={member.medium} target="_blank" rel="noreferrer">
                <Image
                  decoding="async"
                  src={medium}
                  alt="medium"
                  width={imageSize}
                  height={imageSize}
                />
              </a>
            )}
            {member.email && (
              <a href={"mailto:" + member.email}>
                <Image
                  decoding="async"
                  src={email}
                  alt="email"
                  width={imageSize}
                  height={imageSize}
                />
              </a>
            )}
          </div>
        </div>
      </div>
      {member.image && (
        <div
          className={`${column ? "xl:mx-24 m-auto mb-2" : "mx-auto lg:w-1/4"} my-auto justify-start p-4`}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className="inline rounded-full"
          />
        </div>
      )}
    </div>
  );
}
