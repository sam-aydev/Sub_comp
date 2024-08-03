"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import partners1 from "@/public/clients3.png";
import partners2 from "@/public/clients1.png";
import partners3 from "@/public/clients2.png";
import partners4 from "@/public/clients4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function Sponsors() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mt-10">
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          className="text-3xl font-bold text-center"
        >
          Our Valuable Clients
        </motion.h2>
        <div className="flex w-1/3 mt-3 mx-auto justify-center items-center">
          <div className="border border-red-600 w-1/3"></div>
          <div className="border border-purple-600 w-1/3"></div>
          <div className="border border-yellow-600 w-1/3"></div>
        </div>
        <p className="text-center w-4/5 mx-auto mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="px-10">
          <Slider {...settings}>
            <div>
              <Image
                src={partners1}
                width={500}
                height={400}
                alt="so"
                className="w-40 mx-auto mt-10 opacity-85 transition-all duration-300 hover:opacity-100"
              />
            </div>
            <div>
              <Image
                src={partners2}
                width={500}
                height={400}
                alt="so"
                className="w-40 mx-auto mt-10 opacity-85 transition-all duration-300 hover:opacity-100"
              />
            </div>
            <div>
              <Image
                src={partners3}
                width={500}
                height={400}
                alt="so"
                className="w-40 mx-auto mt-10 opacity-85 transition-all duration-300 hover:opacity-100"
              />
            </div>
            <div>
              <Image
                src={partners4}
                width={500}
                height={400}
                alt="so"
                className="w-40 mx-auto mt-10 opacity-85 transition-all duration-300 hover:opacity-100"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
