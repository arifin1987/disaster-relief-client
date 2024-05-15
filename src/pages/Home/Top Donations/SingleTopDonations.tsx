import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface productType {
  item: {
    image: string;
    amount: number;
    title: string;
    _id: string;
  };
}

const SingleTopDonations = ({ item }: productType) => {
  const { image, title, amount, _id } = item;
  return (
    <div className=" border-2 border-slate-950 p-4 rounded-md">
      <img className="h-[400px] rounded" src={image} alt="" />
      <h1 className="text-blue-600">{title}</h1>
      <p className="text-red-500 font-bold">${amount}</p>
      <Link to={`/donations/${_id}`}>
        <Button className="bg-blue-500">View Details</Button>{" "}
      </Link>
    </div>
  );
};

export default SingleTopDonations;
