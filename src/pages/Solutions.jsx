import Layout from '../components/Layout';
import BANNER from '../assets/images/banner-solutions.jpg';
import Solution from '../components/Solution';

const Solutions = () => {
  return (
    <Layout>
      {/* BANNER  */}
      <div
        style={{ background: `url(${BANNER})` }}
        className='h-[30rem] w-full bg-no-repeat bg-cover bg-bottom padX pt-28 max-md:pt-20'
      >
        <div className='w-[90%] max-lg:w-[90%] max-md:w-full max-w-screen-sm space-y-4 bg-black bg-opacity-50 rounded-lg h-fit py-12 px-6'>
          <h1 className='font-clashSemibold text-primary text-4xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl space-x-4 max-sm:space-x-0'>
            Our Solutions
          </h1>
          <p className='text-white text-lg max-sm:text-base w-[90%] leading-normal max-sm:w-full'>
            Axys Systems & Solutions Limited is a wholly owned Nigerian Company,
            incorporated under Company and Allied Matters Act, CAMA, 1990 in
            June, 2011.
          </p>
        </div>
      </div>
      {/* Solutions  */}
      <div className='container mx-auto py-16 space-y-20'>
        <Solution />
      </div>
    </Layout>
  );
};
export default Solutions;
