"use client";
import Image from "next/image";
import { useState } from "react";

interface OptionsProps {
  name: string;
  icon: string;
}

interface SelectOptionProps {
  selectedStudyType: (studyType: string) => void;
}

function SelectOption({ selectedStudyType }: SelectOptionProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const Options: OptionsProps[] = [
    {
      name: "Exam",
      icon: "/lap.png",
    },
    {
      name: "Job Interview",
      icon: "/lap.png",
    },
    {
      name: "Practice",
      icon: "/lap.png",
    },
    {
      name: "Coding Prep",
      icon: "/lap.png",
    },
    {
      name: "Others",
      icon: "/lap.png",
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">Choose your target</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3">
        {Options.map((option, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:border-primary cursor-pointer
                ${selectedOption === option.name && "border-primary"}`}
            onClick={() => {
              setSelectedOption(option.name);
              selectedStudyType(option.name);
            }}
          >
            <Image src={option.icon} alt={option.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
