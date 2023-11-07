import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import LogoImage from "@logos/logo.png";

const Logo = () => {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 10}
          className="flex items-center justify-center"
        >
          <Image
            alt="Anychat Logo"
            className="rounded-full dark:filter dark:invert"
            src={LogoImage}
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
