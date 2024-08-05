"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import recImg from "@/public/case5.jpg";
import Author8 from "@/public/author8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sign from "@/public/sign.svg";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const data = [
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum illo. Corporis rem reprehenderit consequatur deleniti, molestias recusandae rerum saepe.",
      Author: "Frank Lima0",
      title: "Owner",
    },
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum illo. Corporis rem reprehenderit consequatur deleniti, molestias recusandae rerum saepe.",
      Author: "Bala Sami",
      title: "Founder",
    },
  ];
  return (
    <div>
      <div className="bg-yellow-500 py-10 mt-10 md:flex md:justify-center md:px-10 ">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          className=" md:w-1/2  md:mx-auto w-4/5 mx-auto mt-10 relative pt-20"
        >
          <div>
            <Image
              src={Author8}
              width={400}
              height={400}
              alt="author8"
              className="size-20 
              mx-auto 
              bg-white 
              p-2 
              rounded-full 
              z-50 right-0 
              left-0 top-0  
              lg:-left-[470px] 
              xl:-left-[580px]
              lg:top-10 
              absolute"
            />
          </div>
          <Slider {...settings} className="-mt-10 lg:-mt-20">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-black rounded-[40px] lg:rounded-[80px] lg:py-8 lg:px-14  p-4 "
              >
                <div>
                  <p className="text-white mt-7">{item.message}</p>
                  <p className="text-yellow-500 font-semibold mt-7">
                    {item.Author}
                  </p>
                  <p className="text-slate-500">{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          className="text-black text-2xl font-bold px-10 mt-16 md:text-4xl md:w-1/2 md:mx-auto"
        >
          <h2>What Our Clients Say About TopTen</h2>
          <Image
            src={Sign}
            alt="si"
            width={500}
            height={500}
            className="w-3/4 mt-10"
          />
        </motion.div>
      </div>
    </div>
  );
}
