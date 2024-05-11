import { Button } from "@/components/ui/button";
import {
  useDeleteDonationsMutation,
  useGetDonationsQuery,
} from "@/redux/api/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type propsType = {
  title: string;
  category: string;
  amount: number;
  details: string;
  _id: string;
  image: string;
};

const DashboardAllDonation = () => {
  const { data, isLoading } = useGetDonationsQuery(undefined);
  const [deleteDonation] = useDeleteDonationsMutation();
  const handleDelete = (_id: string) => {
    console.log(_id);
    deleteDonation(_id);

    if (_id) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `deleted successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <p>loading.....</p>;
  }
  return (
    <div>
      <h2>Total Users:{data.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full bg-sky-300">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((donation: propsType) => (
              <tr>
                <td>
                  <img className="w-[100px]" src={donation.image} alt="" />{" "}
                </td>
                <td>{donation.title}</td>
                <td>{donation.category}</td>
                <td>${donation.amount}</td>
                <td>
                  <Link to={`/dashboard/${donation._id}`}>
                    <Button>Edit </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={() => handleDelete(donation._id)}>
                    Delete{" "}
                  </Button>
                </td>
                <td>
                  <Link to="/dashboard/create-donation">
                    <Button>Add </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllDonation;
