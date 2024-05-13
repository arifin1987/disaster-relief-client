type Tgratitude = {
  gratitude: {
    image_url: string;
    message: string;
    designation: string;
    _id: string;
  };
};
const CommunityGratitudeDetails = ({ gratitude }: Tgratitude) => {
  const { image_url, message, designation } = gratitude;
  return (
    <div className="flex gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image_url}
        alt=""
      />
      <div>
        <p className="text-blue-500">{message}</p>
        <p className="text-green-500">{designation}</p>
      </div>
    </div>
  );
};

export default CommunityGratitudeDetails;
