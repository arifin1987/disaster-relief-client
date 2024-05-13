import { Button } from "@/components/ui/button";
import { useUpdateDonationsMutation } from "@/redux/api/api";

import { SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

type Inputs = {
  title: string;
  amount: number;
  description: string;
  image: string;
  category: string;
  _id: string;
};

const DashboardUpdateDonation = () => {
  const loadedUser = useLoaderData() as Inputs;
  const [updateTodo] = useUpdateDonationsMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const options = {
      id: loadedUser._id,
      data,
    };
    updateTodo(options);
    if (data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };
  return (
    <div className="w-[50%] mx-auto ">
      <h1 className="text-red-500 text-2xl my-4">Update Donation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="">Image:</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("image", { required: true })}
            placeholder="Image"
          />
          {errors.image && (
            <span className="text-red-600">Image is required</span>
          )}
        </div>
        <div>
          <label className="">Category</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("category", { required: true })}
            placeholder="Category"
          />
          {errors.category && (
            <span className="text-red-600">Category is required</span>
          )}
        </div>
        <div>
          <label className="">Title</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
          />
          {errors.title && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div>
          <label className="">Amount</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="mumber"
            {...register("amount", { required: true })}
            placeholder="Amount"
          />
          {errors.amount && (
            <span className="text-red-600">Amount is required</span>
          )}
        </div>
        <div>
          <label className="">Description</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.description && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <Button
          className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
          type="submit"
        >
          Update Donation
        </Button>
      </form>
    </div>
  );
};

export default DashboardUpdateDonation;
