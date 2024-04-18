import Layout from "../components/Layout";
import { RxArrowDown } from "react-icons/rx";
import BANNER from "../assets/images/banner-home.png";
import CORE1 from "../assets/images/core1.png";
import CORE2 from "../assets/images/core2.png";
import CORE3 from "../assets/images/core3.png";
import CORE4 from "../assets/images/core4.png";
import CLIENT1 from "../assets/images/cubegroup.png";
import CLIENT2 from "../assets/images/image1.png";
import CLIENT3 from "../assets/images/image2.png";
import CLIENT4 from "../assets/images/image3.png";

const Home = () => {
  return (
    <Layout>
      {/* BANNER  */}
      <div
        style={{ background: `url(${BANNER})` }}
        className="h-[43rem] max-md:h-[38rem] w-full bg-no-repeat bg-cover bg-bottom padX pt-28 max-md:pt-20"
      >
        <div className="w-[80%] max-lg:w-[90%] max-md:w-full max-w-screen-xl space-y-6 bg-black bg-opacity-50 rounded-lg h-fit py-12 px-6">
          <h1 className="font-clashSemibold text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl space-x-4 max-sm:space-x-0">
            <span className="text-primary">
              Empowering Success Across Industries:
            </span>
            <br className="sm:hidden" />
            <span className="text-white">
              Welcome to Axys Systems & Solutions Limited
            </span>
          </h1>
          <p className="text-white text-2xl max-sm:text-lg max-[370px]:text-base w-[70%] max-md:w-[90%] max-sm:w-full">
            From Digital solutions to brand development, we&apos;re your partner
            from start-up, innovation, and holistic growth.
          </p>
        </div>
      </div>
      {/* INTRODUCTION  */}
      <div className="maxW text-center pt-16 pb-12 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-4">
          Welcome to Axys Systems & Solutions Limited
        </h3>
        <p className="">
          At Axys Systems & Solutions Limited, we are committed to shaping a
          better tomorrow through our multi-dimensional capabilities and
          far-reaching solutions. With a sterling reputation for qualitative and
          timely delivery, we excel in various areas of human endeavor.
        </p>
      </div>
      {/* CORE ACTIVITIES  */}
      <div className="maxW py-12 padX text-center">
        <div className="bg-secondary text-white rounded-md w-fit mx-auto text-center px-4 py-4">
          Our Core Business Activities
        </div>
        <RxArrowDown className="mx-auto text-3xl max-md:text-2xl mt-2" />
        <div className="space-y-24 max-lg:space-y-20 max-md:space-y-16 max-sm:space-y-12 pt-8">
          <div className="">
            <h2 className="text-primary text-2xl font-clashSemibold pb-2">
              Software Digital Solutions Development, Deployment and Support:
            </h2>
            <p className="">
              Axys Systems & Solutions Limited specializes in delivering
              comprehensive software digital solutions to empower businesses in
              the digital era. With a focus on development, deployment, and
              ongoing support, we offer customized solutions tailored to meet
              the unique needs of our clients. Our team of skilled professionals
              combines cutting-edge technology with industry expertise to create
              scalable and robust software solutions.
            </p>
            <img src={CORE4} alt="" className="mt-4" />
          </div>
          <div className="">
            <h2 className="text-primary text-2xl font-clashSemibold pb-2">
              Business Development and Process Re-engineering:
            </h2>
            <p className="">
              We thrive on turning ideas into profitable ventures, offering
              expert guidance on investment opportunities with high returns.
              Additionally, we specialize in process reengineering to enhance
              the efficiency of operational procedures for businesses facing
              challenges.
            </p>
            <img src={CORE1} alt="" className="mt-4" />
          </div>
          <div className="">
            <h2 className="text-primary text-2xl font-clashSemibold pb-2">
              Property Development:
            </h2>
            <p className="">
              From sourcing prime properties to facilitating rent, lease, or
              outright purchase, our property development unit serves
              high-net-worth individuals and organizations across Africa,
              Europe, and America.
            </p>
            <img src={CORE2} alt="" className="mt-4" />
          </div>
          <div className="">
            <h2 className="text-primary text-2xl font-clashSemibold pb-2">
              Infrastructure and Facility Management:
            </h2>
            <p className="">
              Leveraging business concepts like Build Operate and Transfer
              (BOT), Public Private Partnership (PPP), and more, we excel in
              managing both public and private assets with efficiency and
              innovation.
            </p>
            <img src={CORE3} alt="" className="mt-4" />
          </div>
        </div>
      </div>
      {/* OUR CLIENTS/PATNERS */}
      <div className="maxW text-center pt-16 pb-12 padX">
        <h3 className="text-primary text-2xl font-clashSemibold pb-8">
          OUR CLIENTS/PATNERS
        </h3>
        <div className="flex flex-wrap gap-y-12 items-center justify-center gap-x-12 w-fit mx-auto text-center ">
          <img src={CLIENT4} alt="" className="w-[5rem] max-md:w-[4rem]" />
          <img src={CLIENT1} alt="" className="w-[16rem] max-md:w-[12rem]" />
          <img src={CLIENT2} alt="" className="w-[5rem] max-md:w-[4rem]" />
          <img src={CLIENT3} alt="" className="w-[5rem] max-md:w-[4rem]" />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
