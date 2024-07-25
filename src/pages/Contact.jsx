import { MdMailOutline } from 'react-icons/md';
import BANNER from '../assets/images/banner-contact.png';
import Layout from '../components/Layout';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
  return (
    <Layout>
      {/* BANNER */}
      <div
        style={{ background: `url(${BANNER})` }}
        className='h-[30rem] w-full bg-no-repeat bg-cover bg-center padX pt-28 max-md:pt-20'
      >
        <div className='w-[90%] max-lg:w-[90%] max-md:w-full max-w-screen-sm space-y-4 bg-black bg-opacity-50 rounded-lg h-fit py-12 px-6'>
          <h1 className='font-clashSemibold text-primary text-4xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl space-x-4 max-sm:space-x-0'>
            Contact us
          </h1>
          <p className='text-white text-lg max-sm:text-base w-[90%] leading-normal max-sm:w-full'>
            Contact Axys Systems & Solutions Limited for tailored solutions and
            expert guidance. Let&apos;s turn your vision into reality together
          </p>
        </div>
      </div>

      {/* CONTACT FORM  */}
      <div className='container mx-auto py-16 padX'>
        <div className='grid grid-cols-[40%_50%] max-md:grid-cols-1 max-md:gap-y-8 items-start justify-between gap-x-12'>
          <div className='max-md:w-[70%] max-sm:w-full'>
            <h3 className='text-primary text-2xl font-clashSemibold pb-4 uppercase'>
              Let&apos;s have a talk
            </h3>
            <p className='text-lg max-sm:text-base'>
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <span className='flex items-center gap-x-2 pt-6 pb-5'>
              <FiMapPin className='text-4xl text-primary' />
              <span>
                38 Opebi road Adebola House Suite 100, Rear Car Park Wing Ikeja,
                Lagos 100281
              </span>
            </span>
            <span className='flex items-center gap-x-2 pb-5'>
              <FiPhoneCall className='text-xl text-primary' />
              <span className='tracking-wider'>+2349166744744</span>
            </span>
            <span className='flex items-center gap-x-2'>
              <MdMailOutline className='text-xl text-primary' />
              <span>info@axyssystems.com</span>
            </span>
          </div>
          <div className='shadow-lg rounded-2xl px-10 py-6'>
            <form className='space-y-6'>
              <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-6 gap-x-3'>
                <input
                  type='text'
                  className='outline-none border border-secondary rounded-md py-2 px-2 w-full placeholder:font-geistLight'
                  placeholder='First name'
                />
                <input
                  type='text'
                  className='outline-none border border-secondary rounded-md py-2 px-2 w-full placeholder:font-geistLight'
                  placeholder='Last name'
                />
              </div>
              <input
                type='text'
                className='outline-none border border-secondary rounded-md py-2 px-2 w-full placeholder:font-geistLight'
                placeholder='Email'
              />
              <input
                type='text'
                className='outline-none border border-secondary rounded-md py-2 px-2 w-full placeholder:font-geistLight'
                placeholder='Phone number'
              />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='outline-none border border-secondary rounded-md py-2 px-2 w-full placeholder:font-geistLight'
                placeholder='Message'
              ></textarea>
              <div className='bg-secondary text-white rounded-md w-fit ml-auto text-center px-4 py-2'>
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
