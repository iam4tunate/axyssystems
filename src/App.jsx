import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="our-solutions" element={<Solutions />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
