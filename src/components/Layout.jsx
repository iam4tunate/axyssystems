import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)]">
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div className="pt-20">{children}</div>
      <Footer />
      {mobileMenu && (
        <div className="h-screen fixed top-20 right-0 left-0 bottom-0 bg-white flex items-start pt-[8rem] justify-center z-50">
          <ul className="space-y-12 text-center text-lg max-sm:text-base uppercase font-geistSemibold">
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
              className="bg-secondary text-white rounded-full w-fit mx-auto text-center px-8 py-3"
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
