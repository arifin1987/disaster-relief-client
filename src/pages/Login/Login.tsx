import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-[50%] mx-auto ">
      <h1 className="text-red-500 text-2xl my-4">Account Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Login
        </Button>
        <p className="text-center">Don't have an account?</p>
        <p>
          Please{" "}
          <NavLink to="/register">
            <span className="text-blue-500 font-bold">Register</span>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
