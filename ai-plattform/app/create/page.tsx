"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@heroui/button";
import TopicInput from "./_components/TopicInput";
import DashBoardHeader from "../dashboard/_components/DashBoardHeader";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Create() {
  const { user } = useUser();
  const [loading, setIsloading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any[]>([]);
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const handleUserInput = (fieldName: string, fieldValue: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));

    console.table(formData);
  };

  const GenerateCourseOutLine = async () => {
    const courseId = uuidv4();
    setIsloading(true);
    try {
      const result = await axios.post("/api/generate-course-outline", {
        courseId: courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      console.log(result?.data?.result);

      setIsloading(false);
      router.replace("/dashboard");
      toast("Lets go Click refresh button");
    } catch (err) {
      console.error("smäller kolla GenerateCourseOutLine ", err);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <>
      <DashBoardHeader />
      <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-16">
        <h2 className="font-bold text-2xl text-primary">
          Your Personal Study Material Let's Build it
        </h2>
        <p className="text-slate-500">
          Fill All Details to get the Best personalized course
        </p>
        <div className="mt-10">
          {step == 0 ? (
            <SelectOption
              selectedStudyType={(value: string) =>
                handleUserInput("courseType", value)
              }
            />
          ) : (
            <TopicInput
              setTopic={(value: any) => handleUserInput("topic", value)}
              setDifficultyLevel={(value: string) =>
                handleUserInput("difficultyLevel", value)
              }
            />
          )}
        </div>
        <div className="flex justify-between w-full mt-32">
          {step !== 0 ? (
            <Button
              variant="bordered"
              color="primary"
              onPress={() => setStep(0)}
            >
              Previous
            </Button>
          ) : (
            " - "
          )}
          {step == 0 ? (
            <Button
              onPress={() => setStep(1)}
              color="primary"
              className="text-white"
            >
              Next
            </Button>
          ) : (
            <Button
              color="primary"
              className="text-white"
              onPress={GenerateCourseOutLine}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Generate"}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Create;
