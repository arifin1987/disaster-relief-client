import { useEffect, useState } from "react";
import SingleAllDonations from "./SingleAllDonations";

const AllDonations = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donations")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div className="md:grid grid-cols-4 gap-4 my-4">
      {donations.map((item) => (
        <SingleAllDonations item={item} />
      ))}
    </div>
  );
};

export default AllDonations;
