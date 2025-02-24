export interface Course {
  courseId: string;
  courseLayOut: {
    chapters: string;
    chapterSummary: string;
    courseTitle: string;
    courseSummary: string;
  };
  chapters: Chapter[];
  status?: string;
}

interface Chapter {
  chapterTitle: string;
  chapterSummary: string;
  topics: string[];
}
