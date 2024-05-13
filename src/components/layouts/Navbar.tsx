import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className=" bg-slate-200 md:flex justify-between items-center p-6 ">
      <h1 className="text-3xl font-semibold ">
        <span className="text-blue-500">D</span>isaster{" "}
        <span className="text-red-600">R</span>elief
      </h1>
      <ul className=" space-x-5 ">
        <NavLink className="text-blue-400 hover:text-green-500" to="/">
          Home
        </NavLink>
        <NavLink className="text-blue-400 hover:text-green-500" to="/donations">
          All Donations
        </NavLink>
        <NavLink className="text-blue-400 hover:text-green-500" to="/gratitude">
          Community Gratitude
        </NavLink>

        <NavLink className="text-blue-400 hover:text-green-500" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink to="/login">
          <Button className="bg-white text-blue-400 hover:text-green-500">
            Login
          </Button>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
