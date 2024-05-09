import { Button } from "@/components/ui/button";
interface productType {
  item: {
    image: string;
    amount: number;
    title: string;
  };
}
const SingleAllDonations = ({ item }: productType) => {
  const { image, title, amount } = item;
  return (
    <div>
      <div className=" border-2 border-slate-950 p-4">
        <img className="h-[400px]" src={image} alt="" />
        <h1 className="text-green-900">{title}</h1>
        <p className="text-red-500 font-bold">${amount}</p>
        <Button className="bg-blue-500">View Detail</Button>
      </div>
    </div>
  );
};

export default SingleAllDonations;
