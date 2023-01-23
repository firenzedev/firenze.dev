import H1 from "../../Heading/H1";
import ErrorImage from "./images/error.svg";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "../../Button/SecondaryButton";

export default function FourOrFour() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <div className="lg:border flex justify-center  ">
        <Image src={ErrorImage} alt="Error Icon" />
      </div>

      <div className="text-center mb-16 mt-16">
        <Link href="/">
          <SecondaryButton>Torna alla Home Page</SecondaryButton>
        </Link>
      </div>
    </main>
  );
}
