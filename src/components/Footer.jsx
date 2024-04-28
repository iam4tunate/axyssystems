// import LOGO from "../assets/images/logo.png";
import LOGO from "../assets/images/logo-transparent.png";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 w-full">
      <div className="padX max-w-screen-2xl mx-auto flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-y-16 max-sm:gap-y-14 items-start justify-between">
        <div className="h-full relative w-[35%] max-lg:w-[90%]">
          <img src={LOGO} alt="" className="w-32 mb-3" />
          <p>
            Empowering success through security, infrastructure management, and
            hospitality. Your partner in brand development, market domination
            and revenue expansion.
          </p>
          <p className="pt-3 text-primary text-sm">
            CAC Reg No: <span className="tracking-wider">961438</span>
          </p>
          <p className="block text-primary pt-12 max-lg:pt-6 max-sm:pt-2 text-sm">
            Copyright &copy; 2024 All Right Reserved
          </p>
        </div>
        <div className="max-lg:mx-auto max-sm:mx-0">
          <ul className="space-y-5">
            <li className="font-geistSemibold text-lg">Quicklink</li>
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
        </div>
        <div className="">
          <ul className="space-y-2">
            <li className="font-geistSemibold pb-2 text-lg">Contact Info</li>
            <li className="flex items-center gap-x-3 pb-2">
              <MdMail className="text-xl" />
              <span>info@axyssystems.com.ng</span>
            </li>
            <li className="flex items-center gap-x-3">
              <FaPhone className="text-xl" />
              <span className="tracking-wider">+2349166744744</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
