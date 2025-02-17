import { UserButton } from "@clerk/nextjs";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function DashBoardHeader() {
  return (
    <>
      <div className=" p-5 shadow-md flex justify-end gap-3 items-center">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#E1306C] hover:text-[#C13584]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#1877F2] hover:text-[#0E56A5]"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#FF0000] hover:text-[#C4302B]"
        >
          <FaYoutube />
        </a>
        <UserButton />
      </div>
    </>
  );
}

export default DashBoardHeader;
