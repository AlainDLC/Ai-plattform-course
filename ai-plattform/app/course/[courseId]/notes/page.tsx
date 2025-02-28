"use client";

import { Button } from "@heroui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

function ViewNotes() {
  const { courseId } = useParams();
  const [notes, setNotes] = useState<any>();
  const [stepCount, setStepCount] = useState<number>(0);
  const rout = useRouter();

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "notes",
    });
    console.log("GetNotes", result?.data);
    setNotes(result?.data);
  };

  return (
    notes && (
      <div>
        <div className="flex gap-5 items-center">
          {stepCount != 0 && (
            <Button
              aria-label="previous"
              variant="light"
              onPress={() => setStepCount(stepCount - 1)}
            >
              Previous
            </Button>
          )}
          {notes?.map((item: any, index: any | undefined) => (
            <div
              key={item.id}
              className={`w-full h-2 rounded-full ${
                index < stepCount ? "bg-primary" : "bg-slate-200"
              }`}
            ></div>
          ))}
          <Button
            aria-label="next"
            color="primary"
            onPress={() => setStepCount(stepCount + 1)}
          >
            Next
          </Button>
        </div>
        <div className="mt-10">
          <div
            dangerouslySetInnerHTML={{
              __html: notes[stepCount]?.notes?.replace("```html", " "),
            }}
          />
          {notes?.length == stepCount && (
            <div className="flex items-center gap-10 flex-col justify-center">
              <h2>End of notes</h2>
              <Button
                aria-label="next"
                color="primary"
                onPress={() => rout.back()}
              >
                Go to Course Page
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default ViewNotes;
