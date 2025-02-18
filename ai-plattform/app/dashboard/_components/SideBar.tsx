"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "@heroui/progress";
import Link from "next/link";

interface MenyListProps {
  name: string | "";
  icon: React.ElementType;
  path: string | "";
}
function SideBar() {
  const MenyList: MenyListProps[] = [
    {
      name: "DashBoard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen shadow-md w-64 p-5">
      <div className="flex gap-2 items-center text-slate-700">
        <Image
          src={"/dlc.png"}
          alt="dlc"
          height={45}
          width={45}
          className="object-contain  rounded-lg "
        />
        <h2 className="font-bold text-lg">Ai Study </h2>
      </div>
      <div className="mt-10">
        <Link href="/create">
          <Button
            color="primary"
            className="rounded-xl text-slate-700 w-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            + Create New
          </Button>
        </Link>
        {MenyList.map((menu, index) => (
          <div
            key={index}
            className={`mt-2 text-primary flex gap-5 items-center p-3 hover:bg-green-300 hover:text-white rounded-lg cursor-pointer
              ${path === menu.path && "bg-green-300  text-white "}`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="border p-3 bg-slate-50 rounded-lg absolute bottom-10 w-[86%]">
        <h2 className="text-lg mb-2">Credits: 5</h2>
        <Progress value={30} />
        <h2 className="text-sm mt-1">1 Out 5 Credits used</h2>
        <Link href={"/dashboard/upgrade"} className="text-primary text-sm">
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
