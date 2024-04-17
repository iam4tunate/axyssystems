import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo-transparent.png";
import { IoMenu } from "react-icons/io5";

const Header = ({ setMobileMenu }) => {
  return (
    <header className="bg-[#021927] h-20 flex items-center fixed right-0 left-0">
      <div className="padX max-w-screen-2xl mx-auto w-full flex items-center justify-between">
        <Link to="/">
          <img src={LOGO} alt="" className="w-[7rem]" />
        </Link>{" "}
        <ul className="flex items-center gap-x-8 uppercase max-lg:hidden text-white text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/our-solutions">Our solutions</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
        <IoMenu
          onClick={() => setMobileMenu((prevState) => !prevState)}
          className="text-4xl lg:hidden inline-block text-white"
        />
      </div>
    </header>
  );
};
export default Header;
