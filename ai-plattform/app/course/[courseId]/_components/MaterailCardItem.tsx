import React from "react";
import { MaterialListProps } from "./StudyMaterialSection";
import Image from "next/image";
import { Button } from "@heroui/button";

interface MaterialCardItemProps {
  item: MaterialListProps;
}

function MaterailCardItem({ item }: MaterialCardItemProps) {
  return (
    <div className="border shadow-md rounded-lg p-5 flex flex-col items-center">
      <h2 className="p-1 px-2 bg-blue-400 text-white rounded-full text-[10px] mb-2">
        Ready
      </h2>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-medium mt-3">{item.name}</h2>
      <p className="text-slate-500 text-sm text-center">{item.desc}</p>
      <Button className="mt-3  w-full bg-slate-50 border-small">View</Button>
    </div>
  );
}

export default MaterailCardItem;
