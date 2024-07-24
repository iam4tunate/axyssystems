export function Activity({ heading, paragraph, image }) {
  return (
    <div className=''>
      <h2 className='text-primary text-2xl font-clashSemibold pb-2 leading-6'>
        {heading}
      </h2>
      <p className='text-base leading-[20px]'>{paragraph}</p>
      <img src={image} alt='' className='mt-6 justify-self-end self-end' />
    </div>
  );
}
