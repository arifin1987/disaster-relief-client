import { Button } from "@/components/ui/button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-img">
      <div className="text-center py-40">
        <h1 className="text-8xl text-white font-semibold ">
          Your Home <br /> Your Help
        </h1>
        <p className="text-white text-2xl my-2">
          Leading crowdfunding platform
        </p>
        <Button className="bg-white text-blue-600 font-bold">
          Start a Disaster Relief
        </Button>
      </div>
    </div>
  );
};

export default Banner;
