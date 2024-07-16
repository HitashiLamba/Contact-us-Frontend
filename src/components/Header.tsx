import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

import icon from "../assets/icon.png";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="bg-black border-b-2  py-6">
      <div className=" container mx-auto flex justify-between items-center">
        <img src={icon}></img>
        <Link
          to="/"
          className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight "
        >
          TO-LET
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
