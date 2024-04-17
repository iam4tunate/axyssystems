import Layout from "../components/Layout";
import BANNER from "../assets/images/banner-about.png";
import FLAG from "../assets/images/flag.svg";
import TEAM1 from "../assets/images/team1.png";
import TEAM2 from "../assets/images/team2.png";
import TEAM3 from "../assets/images/team3.png";
import TEAM4 from "../assets/images/team4.png";

const About = () => {
  return (
    <Layout>
      {/* BANNER  */}
      <div
        style={{ background: `url(${BANNER})` }}
        className="h-[30rem] w-full bg-no-repeat bg-cover bg-bottom padX pt-28 max-md:pt-20 max-sm:pt-14"
      >
        <div className="w-[90%] max-lg:w-[90%] max-md:w-full max-w-screen-sm space-y-4 bg-black bg-opacity-50 rounded-lg h-fit py-12 px-6">
          <h1 className="font-clashSemibold text-primary text-4xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl space-x-4 max-sm:space-x-0">
            About Us
          </h1>
          <p className="text-white text-lg max-sm:text-base w-[90%] leading-normal max-sm:w-full">
            Axys Systems and Solutions Limited is a wholly owned Nigerian
            Company, incorporated under Company and Allied Matters Act, CAMA,
            1990 in June, 2011.
          </p>
        </div>
      </div>
      {/* INTRODUCTION  */}
      <div className="maxW text-center pt-16 pb-16 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          COMMITTED TO FORGING A FRESH, FORWARD-THINKING, AND CUTTING-EDGE
          PARADIGM IN OUR OPERATIONS AND SERVICES,
        </h3>
        <p className="">
          Axys Systems & Solutions Limited stands as a subsidiary of Cube Group,
          a dynamic conglomerate rooted in Nigeria with a diverse array of
          domestic and international business ventures and affiliations. Our
          scope encompasses development solutions both locally in Africa and on
          a global scale.
        </p>
      </div>
      <div className="maxW padX text-center pt-16 pb-16 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          Our Core Values
        </h3>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 justify-center">
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <span>Customer and client focus</span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <span>Goal focus</span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <span>Dynamism and proactiveness</span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <span>Efficient and effective service delivery</span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <span>Teamwork</span>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto padX text-center pt-16 pb-16 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          The Team
        </h3>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-center gap-x-16 gap-y-4 justify-center">
          <figure className="bg-[#022639] text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM1}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="pb-2 pt-1">Moyosola Niran-Oladunni</p>
            <p className="font-geistSemibold text-primary">MD/CEO</p>
          </figure>
          <figure className="bg-[#022639] text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM2}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="pb-2 pt-1">Edwin Evbie</p>
            <p className="font-geistSemibold text-primary">COO</p>
          </figure>
          <figure className="bg-[#022639] text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM3}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="pb-2 pt-1">Victoria Fatu Ayoade</p>
            <p className="font-geistSemibold text-primary">
              Corporate Governance
            </p>
          </figure>
          <figure className="bg-[#022639] text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM4}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="pb-2 pt-1">Oladapo Oladunni</p>
            <p className="font-geistSemibold text-primary">Head, BD strategy</p>
          </figure>
        </div>
      </div>
    </Layout>
  );
};
export default About;
