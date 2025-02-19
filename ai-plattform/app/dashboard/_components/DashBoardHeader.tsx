import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function DashBoardHeader() {
  return (
    <div className=" p-5 shadow-sm flex justify-end gap-3 items-center">
      <Link
        href={"/dashboard"}
        className="text-2xl text-[#E1306C] hover:text-[#C13584]"
      >
        <FaInstagram />
      </Link>

      <FaFacebook className="text-2xl text-[#1877F2] hover:text-[#0E56A5]" />

      <FaYoutube className="text-2xl text-[#FF0000] hover:text-[#C4302B]" />

      <UserButton />
    </div>
  );
}

export default DashBoardHeader;
