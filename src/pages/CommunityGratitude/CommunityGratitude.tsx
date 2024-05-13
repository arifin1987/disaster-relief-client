import { useGetGratitudeQuery } from "@/redux/api/api";
import CommunityGratitudeDetails from "./CommunityGratitudeDetails";

type Tgratitude = {
  image_url: string;
  message: string;
  designation: string;
  _id: string;
};
const CommunityGratitude = () => {
  const { data } = useGetGratitudeQuery(undefined);
  console.log(data);
  return (
    <div className="my-4">
      <h1 className="text-4xl text-green-500 text-center my-4">Gratitude</h1>
      <div className="md: grid grid-cols-2 gap-4">
        {data?.map((gratitude: Tgratitude) => (
          <CommunityGratitudeDetails
            key={gratitude._id}
            gratitude={gratitude}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityGratitude;
