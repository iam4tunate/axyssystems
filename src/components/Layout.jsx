import { LiaTimesSolid } from "react-icons/lia";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="relative w-full h-full min-h-screen">
      <Header setMobileMenu={setMobileMenu} />
      <div className="pt-20">{children}</div>
      <Footer />
      {mobileMenu && (
        <div className="h-screen fixed top-20 right-0 left-0 bottom-0 bg-white flex items-start pt-[8rem] justify-center z-50">
          <LiaTimesSolid
            className="text-3xl absolute top-6 right-8 max-md:right-4 max-sm:right-4"
            onClick={() => setMobileMenu((prevState) => !prevState)}
          />
          <ul className="space-y-12 text-center text-xl max-sm:text-lg uppercase">
            <li onClick={() => setMobileMenu((prevState) => !prevState)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMobileMenu((prevState) => !prevState)}>
              <Link to="/about-us">About us</Link>
            </li>
            <li onClick={() => setMobileMenu((prevState) => !prevState)}>
              <Link to="/our-solutions">Our solutions</Link>
            </li>
            <li
              className="bg-secondary text-white rounded-md w-fit mx-auto text-center px-4 py-4"
              onClick={() => setMobileMenu((prevState) => !prevState)}
            >
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Layout;
