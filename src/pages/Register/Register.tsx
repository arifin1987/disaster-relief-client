import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-[50%] mx-auto ">
      <h1 className="text-red-500 text-2xl my-4">Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="">Your Name:</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div>
          <label className="">Your Email:</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div>
          <label className="">Your Password:</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-600">Password is required</span>
          )}
        </div>
        <Button
          className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
          type="submit"
        >
          Register
        </Button>
        <p className="text-center">Already have an account?</p>
        <p>
          Please{" "}
          <NavLink to="/login">
            <span className="text-blue-500 font-bold">Login</span>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
