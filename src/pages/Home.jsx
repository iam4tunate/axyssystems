import Layout from '../components/Layout';
import BANNER from '../assets/images/banner-home.png';
import CORE1 from '../assets/images/core1.png';
import CORE2 from '../assets/images/core2.png';
import CORE3 from '../assets/images/core3.png';
import CORE4 from '../assets/images/core4.png';
import CORE5 from '../assets/images/core5.png';
import CORE6 from '../assets/images/core6.png';
import CORE7 from '../assets/images/core7.png';
import CORE8 from '../assets/images/core8.png';
import cubegroup from '../assets/images/cubegroup.png';
import secureID from '../assets/images/secureID.png';
import roaddynamics from '../assets/images/roadDynamics.png';
import abujacourt from '../assets/images/abujacourt.png';
import osunstate from '../assets/images/osunstate.png';
import ferma from '../assets/images/ferma.png';
import fhc from '../assets/images/fhc.png';
import heirs from '../assets/images/heirs.png';
import zenith from '../assets/images/zenith.png';
import wema from '../assets/images/wema.svg';
import providus from '../assets/images/providus.png';
import { Activity } from '../components/Activity';

const Home = () => {
  return (
    <Layout>
      {/* BANNER  */}
      <div
        style={{ background: `url(${BANNER})` }}
        className='h-[43rem] max-md:h-[38rem] w-full bg-no-repeat bg-cover bg-bottom padX pt-28 max-md:pt-20'
      >
        <div className='w-[80%] max-lg:w-[90%] max-md:w-full max-w-screen-xl space-y-6 bg-black bg-opacity-50 rounded-lg h-fit py-12 px-6'>
          <h1 className='font-clashSemibold text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl space-x-4 max-sm:space-x-0'>
            <span className='text-primary'>
              Empowering Success Across Industries:
            </span>
            <br className='sm:hidden' />
            <span className='text-white'>
              Welcome to Axys Systems & Solutions Limited
            </span>
          </h1>
          <p className='text-white text-2xl max-sm:text-lg max-[370px]:text-base w-[70%] max-md:w-[90%] max-sm:w-full'>
            From digital solutions to brand development, we&apos;re your partner
            from start-up, innovation, and holistic growth.
          </p>
        </div>
      </div>
      {/* INTRODUCTION  */}
      <div className='max-w-screen-md mx-auto text-center pt-16 pb-12 padX'>
        <h3 className='text-primary text-2xl font-clashSemibold pb-2'>
          Welcome to Axys Systems & Solutions Limited
        </h3>
        <p className=''>
          At Axys Systems & Solutions Limited, we are committed to shaping a
          better tomorrow through our multi-dimensional capabilities and
          far-reaching solutions. With a sterling reputation for qualitative and
          timely delivery, we excel in various areas of human endeavor.
        </p>
      </div>
      {/* CORE ACTIVITIES  */}
      <div className='container mx-auto py-12 padX text-center'>
        <div className='bg-secondary text-white rounded-md w-fit mx-auto text-center px-4 py-4'>
          Our Core Business Activities
        </div>
        <div className='space-y-24 max-lg:space-y-20 max-md:space-y-16 max-sm:space-y-12 pt-12'>
          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-12 gap-y-14'>
            <Activity
              heading='Digital Solutions Development, Deployment and Support'
              paragraph='Axys Systems & Solutions delivers comprehensive digital software solutions, offering customized, scalable solutions leveraging cutting-edge technology and industry exrtise.'
              image={CORE4}
            />
            <Activity
              heading='Business Development and Process Re-engineering'
              paragraph='We excel in transforming ideas into profitable ventures, providing expert investment guidance for high returns, and optimizing operational efficiency through process reengineering for challenged businesses..'
              image={CORE1}
            />
            <Activity
              heading='Property Development'
              paragraph='From sourcing prime properties to facilitating rent, lease, or
                outright purchase, our property development unit serves
                high-net-worth individuals and organizations across Africa,
                Europe, and America.'
              image={CORE2}
            />
            <Activity
              heading='Infrastructure and Facility Management'
              paragraph='Leveraging business concepts like Build Operate and Transfer
                (BOT), Public Private Partnership (PPP), and more, we excel in
                managing both public and private assets with efficiency and
                innovation.'
              image={CORE3}
            />
            <Activity
              heading='Access Control System'
              paragraph='Advanced technology for secure facilities, providing multi-factor authentication, intrusion detection, enhanced security, convenience, and reduced security risk.'
              image={CORE7}
            />
            <Activity
              heading='Automated Entrances'
              paragraph='Technology-driven automated entrances for seamless building access, improving accessibility, energy efficiency, and reducing labor costs'
              image={CORE5}
            />
            <Activity
              heading='Toll Roads & Traffic Management'
              paragraph='Managed toll infrastructure and traffic systems using advanced technologies for optimal travel and maintenance'
              image={CORE6}
            />
            <Activity
              heading='Car Parking System'
              paragraph='Integrated hardware and software for seamless parking, optimizing operations and user satisfaction.'
              image={CORE8}
            />
          </div>
        </div>
      </div>
      {/* OUR CLIENTS/PATNERS */}
      <div className='pt-12 pb-16 bg-gray-100'>
        <h3 className='text-primary text-2xl font-clashSemibold pb-8 text-center mx-auto padX'>
          OUR CLIENTS/PATNERS
        </h3>
        <div className='max-w-screen-md mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-12'>
          <img src={osunstate} alt='' className='w-[7rem] max-md:w-[6rem]' />
          <img src={cubegroup} alt='' className='w-[16rem] max-md:w-[10rem]' />
          <img src={fhc} alt='' className='w-[6rem] max-md:w-[5rem]' />
          <img src={heirs} alt='' className='w-[10rem] max-md:w-[9rem]' />
          <img src={zenith} alt='' className='w-[6rem] max-md:w-[5rem]' />
          <img src={abujacourt} alt='' className='w-[16rem]' />
          <img src={ferma} alt='' className='w-[6rem]' />
          <img src={wema} alt='' className='w-[10rem]' />
          <img src={roaddynamics} alt='' className='w-[6rem] max-md:w-[5rem]' />
          <img src={secureID} alt='' className='w-[12rem] py-2 px-4 bg-black' />
          <img src={providus} alt='' className='w-[12rem] max-md:w-[10rem]' />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
