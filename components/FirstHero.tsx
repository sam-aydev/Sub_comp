import Image from "next/image";
import slide1 from "@/public/03-slide.svg";

export default function FirstHero() {
  return (
    <div>
      <div className="bg-[#fc3e59] pt-40 pb-20 md:flex md:px-6">
        <div className="md:w-1/2">
          <Image
            src={slide1}
            width={1000}
            height={1000}
            alt="slde"
            className=""
          />
        </div>
        <div className=" md:w-1/2">
          <h2 className="text-3xl font-semibold text-center w-4/5 mt-10 mx-auto md:text-left lg:text-5xl">
            Search Media Marketing Services
          </h2>
          <p className="text-white mt-7 text-lg  text-center w-4/5 mx-auto md:text-left lg:text-xl">
            An effective social stratgey can help you grow your business,
            maintain your social presence and engage with the audience.
          </p>
          <div className="flex items-center justify-center space-x-5 mt-6 md:flex-col md:space-x-0 md:space-y-5 md:justify-start lg:flex-row lg:space-y-0 lg:space-x-5 lg:justify-start lg:px-8">
            <button className="text-xs bg-black text-center text-white border-2 border-black px-5 py-2 rounded-full md:py-5 md:px-5">
              VIEW DETAILS
            </button>
            <button className="text-xs  text-center border-2 border-white px-5 py-2 rounded-full md:py-5 md:px-5">
              CHECK DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
