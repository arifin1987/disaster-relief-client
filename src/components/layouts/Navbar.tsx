import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-full bg-slate-200 md:flex justify-between items-center p-6 ">
      <h1 className="text-3xl font-semibold ">
        <span className="text-blue-500">D</span>isaster{" "}
        <span className="text-red-600">R</span>elief
      </h1>
      <ul className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">All Donations</NavLink>
        <NavLink to="/">Donation Detail</NavLink>
        <NavLink to="/">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
