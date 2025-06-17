import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col ">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="travel" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Expert Travel Planning
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Your Journey Starts Here
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]  ">
            With Nira Travel, planning your perfect trip has never been easier. Our experienced team
            provides personalized travel consultation, handles all your bookings, and ensures every
            detail is taken care of. From business trips to family vacations, we're here to make
            your travel dreams come true.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="travel destinations"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]lg:top-20">
          <Image
            src="/meter.svg"
            alt="travel planning"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col ">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20 ">Next Destination</p>
                <p className="bold-16 text-green-50">2 hours</p>
              </div>
              <p className="bold-20 mt-2">Dubai, UAE</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20 ">From</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Erbil International Airport
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
