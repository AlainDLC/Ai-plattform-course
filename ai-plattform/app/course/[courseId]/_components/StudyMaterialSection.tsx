import MaterailCardItem from "./MaterailCardItem";

export interface MaterialListProps {
  name: string;
  desc: string;
  icon: string;
  path: string;
}

function StudyMaterialSection() {
  const MaterialList: MaterialListProps[] = [
    {
      name: "Notes",
      desc: "Read notes to prepere it",
      icon: "/lap.png",
      path: "/notes",
    },
    {
      name: "Flashcard",
      desc: "Flashcard help to remember the concepts",
      icon: "/lap.png",
      path: "/flashcard",
    },
    {
      name: "Quiz",
      desc: "Great way to test your knowledge",
      icon: "/lap.png",
      path: "/quiz",
    },
    {
      name: "Question/Answer",
      desc: "Help to pratice ypur learning",
      icon: "/lap.png",
      path: "/qa",
    },
  ];

  return (
    <div className="mt-5">
      <h2 className="font-medium text-2xl">Study Material</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        {MaterialList.map((item, index) => (
          <MaterailCardItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
