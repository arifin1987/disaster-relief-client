import { useLoaderData } from "react-router-dom";
interface Token {
  image: string;
  title: string;
  amount: number;
}

const ViewDetails = () => {
  const { image, title, amount }: Token = useLoaderData();

  return (
    <div className="md:flex gap-4 justify-center items-center my-4">
      <img className="h-[400px]" src={image} alt="" />
      <div>
        <h1 className="text-green-900">{title}</h1>
        <p className="text-red-500 font-bold">${amount}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
