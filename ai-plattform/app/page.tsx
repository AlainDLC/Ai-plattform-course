import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>KING</h2>
      <Link href={"/dashboard"}>
        <Button>Kör</Button>
      </Link>
      <UserButton />
    </div>
  );
}
