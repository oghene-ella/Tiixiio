import WelcomeBanner from "@/components/layout/Welcome";
import ApiKey from "@/components/layout/Apikey";
import ApiOverviewComponent from "@/components/layout/OverviewComp";

// Overview.js
const Overview = () => {
  return (
    <div className="p-4 flex flex-col gap-5">
      <WelcomeBanner/>
      <ApiOverviewComponent />
      <ApiKey />
    </div>
  );
};

export default Overview;
