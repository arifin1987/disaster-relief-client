import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { FaHome, FaUserShield, FaHandsHelping, FaDove } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-slate-200 md:flex justify-between items-center p-6 ">
      <h1 className="text-3xl font-semibold ">
        <span className="text-blue-500">D</span>isaster{" "}
        <span className="text-red-600">R</span>elief
      </h1>
      <ul className=" space-x-5 flex items-center">
        <NavLink
          className="text-blue-400 hover:text-green-500 flex gap-2 items-center"
          to="/"
        >
          <span className="text-blue-500">
            <FaHome />
          </span>
          Home
        </NavLink>
        <NavLink
          className="text-blue-400 hover:text-green-500 flex gap-2 items-center"
          to="/donations"
        >
          <span className="text-blue-500">
            <FaHandsHelping />
          </span>
          All Donations
        </NavLink>
        <NavLink
          className="text-blue-400 hover:text-green-500 flex gap-2 items-center"
          to="/gratitude"
        >
          <span className="text-blue-500">
            <FaDove />
          </span>
          Community Gratitude
        </NavLink>

        <NavLink
          className="text-blue-400 hover:text-green-500 flex gap-2 items-center"
          to="/dashboard"
        >
          <span className="text-blue-500">
            <FaUserShield />
          </span>
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
