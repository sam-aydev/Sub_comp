"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import slide1 from "@/public/03-slide.svg";
import slide2 from "@/public/01-slide.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FirstHero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="bg-[#fc3e59] pt-64 pb-20 w-full h-[900px] md:flex md:px-6 ">
            <motion.div>
              <Image
                src={slide1}
                width={1000}
                height={1000}
                alt="slde"
                className="h-80 md:h-full"
              />
            </motion.div>
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

        <div>
          <div className="bg-[#F1F2EC] pb-40 w-full h-[900px]">
            <h2 className="pt-80  text-center text-3xl font-bold lg:text-5xl lg:pt-56">
              Search Engine Optimization!
            </h2>
            <p className="text-center mt-6 lg:text-2xl">
              Discover More About Our SEO Expertise!
            </p>
            <div className="flex justify-center items-center">
              <button className="text-xs text-white font-semibold mt-10 bg-black py-2 px-4 rounded-full lg:py-4 lg:px-6">
                VIEW DETAILS
              </button>
            </div>
            <motion.div initial={{ x: 200 }} whileInView={{ x: 0 }}>
              <Image
                src={slide2}
                width={700}
                height={700}
                alt="sld"
                className="mt-24 w-full lg:mt-20 lg:mx-auto lg:w-[92%]"
              />
            </motion.div>
          </div>
        </div>
      </Slider>
      <div className="relative lg:block hidden">
        <div className="absolute flex justify-center items-center w-full mx-auto right-0 left-0">
          <div className="size-44 bg-[#F1F2EC] cursor-pointer p-6 -mt-20 hover:text-white">
            <h2 className="text-xl">Organic SEO</h2>
            <p className="text-slate-500 mt-5">Get Top Ten Results.</p>
          </div>
          <div className="size-44 bg-[#FC3E59] cursor-pointer p-6 -mt-20 hover:text-white">
            <h2 className="text-xl">SMM services</h2>
            <p className="text-slate-500">Help with Facebook and Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
