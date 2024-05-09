import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import SingleTopDonations from "./SingleTopDonations";

const TopDonation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/donations")
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
    </div>
  );
};

export default TopDonation;
