import Main from "@/components/common/Main";
import LearningAreaGrid from "./LearningAreaGrid";
import BackgroundBoxes from "@/components/common/BackgroundBoxes";

const LearningArea = () => {
  return (
    <main>
      <BackgroundBoxes
        title="Learning Area"
        description="Explore our learning area and start your journey to becoming a developer"
      />
      <Main>
        <LearningAreaGrid />
      </Main>
    </main>
  );
};

export default LearningArea;
