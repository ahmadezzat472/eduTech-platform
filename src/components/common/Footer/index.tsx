import { HealthServices } from "./HealthServices";
import { HealthResources } from "./HealthResources";
import QuickAccess from "./QuickAccess";
import BottomBar from "./BottomBar";

const MinistryFooter = () => {
  return (
    <footer className="bg-primary-700 pt-16 pb-8 text-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <HealthServices />
          <HealthResources />
          <QuickAccess />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};

export default MinistryFooter;
