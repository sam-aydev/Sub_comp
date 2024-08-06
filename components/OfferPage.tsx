"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "@/public/07-we-offer.svg";
import { GoDot } from "react-icons/go";
import img1 from "@/public/icon26.svg";

export default function OfferComp() {
  return (
    <div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        className="mt-16 px-8  md:w-4/5 md:mx-auto md:flex md:justify-around md:items-center"
      >
        <div className="md:w-1/2 md:mx-auto">
          <h2 className="text-2xl font-bold ">
            We Offer a Full Range of Digital Marketing Services!
          </h2>
          <div className="flex w-1/2 mt-3">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-4 ">
              <GoDot className="size-20 text-red-600" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quam repudiandae magni pariatur fugit repellendus
                laborum praesentium.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <GoDot className="size-20 text-red-600" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quam repudiandae magni pariatur fugit repellendus
                laborum praesentium.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <GoDot className="size-20 text-red-600" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quam repudiandae magni pariatur fugit repellendus
                laborum praesentium.
              </p>
            </div>
          </div>
          <div className="flex space-x-5 mt-6 md:flex-col md:space-y-4 md:space-x-0">
            <button className="text-xs bg-white text-center text-black border-2 border-black px-5 py-2 rounded-full md:w-2/3 md:py-4">
              LEARN MORE
            </button>
            <button className="text-xs  text-center  text-white bg-green-600 px-5 py-2 rounded-full md:w-2/3 md:py-4">
              GET A QUOTE
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:mx-auto">
          <div className="mt-12">
            <Image src={img2} width={500} height={600} alt="ims" className="" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <div className="mt-16 ">
          <h2 className="text-2xl font-bold text-center w-4/5 mx-auto">
            Affordable SEO services packages
          </h2>
          <div className="flex w-1/2 mt-3 mx-auto justify-center items-center md:w-1/3 lg:w-1/4">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8 text-center mx-auto w-3/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:px-10">
            <div className="mt-10">
              <Image
                src={img1}
                alt="img"
                width={200}
                height={200}
                className="size-20 mx-auto"
              />
              <h2 className="text-center mt-3 font-bold text-xl">Objective</h2>
              <p className="text-center w-5/6 mx-auto mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam mollitia dolore consequatur dignissimos odit, aspernatur
                sint quaerat.
              </p>
            </div>

            <div className="mt-7 md:mt-10">
              <Image
                src={img1}
                alt="img"
                width={200}
                height={200}
                className="size-20 mx-auto"
              />
              <h2 className="text-center mt-3 font-bold text-xl">Strategy</h2>
              <p className="text-center w-5/6 mx-auto mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam mollitia dolore consequatur dignissimos odit, aspernatur
                sint quaerat.
              </p>
            </div>

            <div className="mt-7 md:mt-10">
              <Image
                src={img1}
                alt="img"
                width={200}
                height={200}
                className="size-20 mx-auto"
              />
              <h2 className="text-center mt-3 font-bold text-xl">Technology</h2>
              <p className="text-center w-5/6 mx-auto mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam mollitia dolore consequatur dignissimos odit, aspernatur
                sint quaerat.
              </p>
            </div>

            <div className="mt-7 md:mt-10">
              <Image
                src={img1}
                alt="img"
                width={200}
                height={200}
                className="size-20 mx-auto"
              />
              <h2 className="text-center mt-3 font-bold text-xl">Technology</h2>
              <p className="text-center w-5/6 mx-auto mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam mollitia dolore consequatur dignissimos odit, aspernatur
                sint quaerat.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-xs bg-black text-center text-white border-2 border-black px-5 py-2 rounded-full md:py-4">
              MORE INFO
            </button>
            <button className="text-xs  text-center  text-white bg-green-600 px-5 py-2 rounded-full md:py-4">
              GET SRARTED!
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
