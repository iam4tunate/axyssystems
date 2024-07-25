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
          <p className="text-white max-sm:text-base w-[90%] leading-normal max-sm:w-full">
            Axys Systems & Solutions Limited is a wholly owned Nigerian Company,
            incorporated under Company and Allied Matters Act, CAMA, 1990 in
            June, 2011.
          </p>
        </div>
      </div>
      {/* INTRODUCTION  */}
      <div className="max-w-screen-md mx-auto text-center pt-16 max-sm:pt-12 padX">
        <p className="py-1.5 leading-relaxed">
          <span className="text-primary text-2xl font-clashSemibold pb-3 block">
            About Axys Systems.
          </span>
          At Axys Systems and Solutions Limited, we are at the forefront of
          pioneering innovative solutions and redefining the landscape of IT
          solutions. With a relentless commitment to innovation and
          technological advancement, we strive to create secure and sustainable
          environments where businesses and communities can thrive.
        </p>
        <p className="py-1.5 leading-relaxed">
          Our services include cutting-edge security solutions, bespoke brand
          development, robust IT solutions, and visionary developmental
          projects. By leveraging the latest technologies and industry best
          practices, we empower clients to achieve goals confidently.
        </p>
        <p className="pt-1.5 leading-relaxed">
          At the heart of our operations lie our core values of integrity,
          excellence, and client satisfaction. We uphold the highest standards
          of integrity in all our interactions, ensuring transparency and
          accountability every step of the way.
        </p>
        <p className="py-1.5 leading-relaxed">
          Prioritizing collaboration, innovation, and sustainability, we aim for
          positive change and growth. Join us on our journey today.
        </p>
        <p className="py-16 max-sm:py-12">
          <span className="text-primary text-2xl font-clashSemibold pb-1 block">
            Our Mission
          </span>
          Fostering secure and sustainable brand development while promoting
          environments,communities, and businesses to thrive.
        </p>
        <p className="">
          <span className="text-primary text-2xl font-clashSemibold pb-1 block">
            Our Vision
          </span>
          To pioneer and revolutionize innovative IT solutions and
          infrastructure.
        </p>
      </div>
      <div className="max-w-screen-md mx-auto text-center py-16 max-sm:py-12 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          Our Core Values
        </h3>
        <div className="flex flex-wrap items-center max-sm:justify-start max-sm:text-left gap-x-14 gap-y-5 justify-center">
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <p>Customer and client focus</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <p>Goal focus</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <p>Dynamism and proactiveness</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <p>Efficient and effective service delivery</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={FLAG} alt="" />
            <p>Teamwork</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto padX text-center pb-16 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          The Team
        </h3>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-center gap-x-8 gap-y-4 justify-center">
          <figure className="bg-secondary text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM1}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="py-1">Moyosola Niran-Oladunni</p>
            <p className="font-geistSemibold text-primary text-sm">MD/CEO</p>
          </figure>
          <figure className="bg-secondary text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM2}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="py-1">Edwin Evbie</p>
            <p className="font-geistSemibold text-primary text-sm">COO</p>
          </figure>
          <figure className="bg-secondary text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM3}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="py-1">Victoria Fatu Ayoade</p>
            <p className="font-geistSemibold text-primary text-sm">
              Corporate Governance
            </p>
          </figure>
          <figure className="bg-secondary text-white w-full px-6 py-5 rounded-lg">
            <img
              src={TEAM4}
              alt="Moyosola Niran-Oladunni"
              className="w-[15rem] mx-auto"
            />
            <p className="py-1">Oladapo Oladunni</p>
            <p className="font-geistSemibold text-primary text-sm">
              Head, BD strategy
            </p>
          </figure>
        </div>
      </div>
    </Layout>
  );
};
export default About;
