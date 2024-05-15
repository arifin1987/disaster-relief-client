import { useLoaderData } from "react-router-dom";
interface Token {
  image: string;
  title: string;
  amount: number;
  details: string;
}

const ViewDetails = () => {
  const data = useLoaderData() as Token;
  const { image, title, amount, details } = data;

  return (
    <div className="md:flex gap-4 justify-center items-center my-4">
      <img className="h-[400px] rounded-md" src={image} alt="" />
      <div>
        <h1 className="text-blue-600 text-2xl">{title}</h1>
        <p className="text-green-500 w-2/3">{details}</p>
        <p className="text-red-500 font-bold">${amount}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
