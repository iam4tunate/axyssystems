import BREMS from "../assets/images/brems.png";

const Solution = () => {
  return (
    <div>
      <div className="padX grid grid-cols-[50%_50%] max-lg:grid-cols-1 max-lg:gap-y-8 items-center justify-between gap-x-12">
        <div className="">
          <h3 className="text-primary text-2xl font-clashSemibold pb-2">
            Birth Regitration Management System (BReMS)
          </h3>
          <p className="max-lg:w-[80%] max-md:w-full">
            Our cutting-edge Essential Records Application System at Integrated
            Intelligent Imaging West Africa Limited, ensures secure and
            organized health information record-keeping for health management
            organizations.
          </p>
          <div className="flex flex-wrap items-end pt-3">
            <span className="text-primary font-geistSemibold pr-1.5">
              Products Recipients:
            </span>
            <span>Health centers</span>
            <hr className="bg-primary h-6 w-[1.4px] mx-2" />
            <span>Local governments</span>
          </div>
        </div>
        <div className="">
          <img src={BREMS} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Solution;
