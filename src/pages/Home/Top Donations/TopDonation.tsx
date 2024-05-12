import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import SingleTopDonations from "./SingleTopDonations";
import { Button } from "antd";
import { Link } from "react-router-dom";

const TopDonation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://disaster-relief-server-navy.vercel.app/donations")
      .then((res) => res.json())
      .then((data) => {
        const filteredItems = data.filter(
          (donateItem: { category: string }) =>
            donateItem.category == "Clothing"
        );
        setItems(filteredItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle subHeading="Donate for humanity" heading="Top Donations" />
      <div className="md:grid grid-cols-3 gap-4 ">
        {items.map((item) => (
          <SingleTopDonations item={item} />
        ))}
      </div>
      <div className="text-center m-4">
        <Link to="/donations">
          <Button className="bg-red-500 text-white font-semibold">
            View All Donations
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopDonation;
