import { DOMAIN } from "@/utils/constants";
import { personalData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={DOMAIN}>
      <span className="self-center text-2xl font-semibold whitespace-nowrap flex justify-between items-center bg-blue-600 shadow py-2 px-4 rounded-full w-fit">
        <div className="rounded">
          <Image
            src="/logo-symbol.png"
            width={33}
            height={0}
            className="mr-2"
            alt="logo"
          />
        </div>
        <span className="text-white font-semibold">
          {personalData.COMPANY_NAME}
        </span>
      </span>
    </Link>
  );
};

export default Logo;
