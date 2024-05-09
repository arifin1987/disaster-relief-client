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
const SingleAllDonations = ({ item }: productType) => {
  const { image, title, amount, _id } = item;
  return (
    <div>
      <div className=" border-2 border-slate-950 p-4">
        <img className="h-[400px]" src={image} alt="" />
        <h1 className="text-green-900">{title}</h1>
        <p className="text-red-500 font-bold">${amount}</p>
        <Link to={`/donations/${_id}`}>
          <Button className="bg-blue-500">View Details</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SingleAllDonations;
