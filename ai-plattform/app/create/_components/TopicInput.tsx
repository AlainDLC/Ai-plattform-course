import React from "react";
import { Textarea } from "@heroui/input";
import { Select, SelectSection, SelectItem } from "@heroui/select";

interface TopicInputProps {
  setTopic: (value: string) => void;
  setDifficultyLevel: (value: string) => void;
}

function TopicInput({ setTopic, setDifficultyLevel }: TopicInputProps) {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h2>Enter topic or paste the content</h2>
      <Textarea
        placeholder="Start write here"
        className="mt-2"
        onChange={(event) => setTopic(event.target.value)}
      />
      <h2 className="mt-5 mb-3">Select level</h2>
      <Select
        aria-label="Difficulty Level"
        placeholder="Select Difficulty Level"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedValue = e.target.value;
          setDifficultyLevel(selectedValue);
        }}
      >
        <SelectSection title="Difficulty Levels">
          <SelectItem key="Beginner" value="Beginner">
            Beginner
          </SelectItem>
          <SelectItem key="Intermediate" value="Intermediate">
            Intermediate
          </SelectItem>
          <SelectItem key="Advanced" value="Advanced">
            Advanced
          </SelectItem>
        </SelectSection>
      </Select>
    </div>
  );
}

export default TopicInput;
