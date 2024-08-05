"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import recImg from "@/public/case5.jpg";

export default function CaseStudy() {
  return (
    <div>
      <div className="bg-[url('/pattern-bg-lime.jpg')] py-16 mt-16">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="md:mt-7"
          >
            <h2 className="text-center text-white text-4xl font-semibold md:text-5xl lg:text-7xl">
              96%
            </h2>
            <p className="text-center text-black font-bold lg:text-xl">
              Client Retention
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="mt-7"
          >
            <h2 className="text-center text-white text-4xl font-semibold md:text-5xl lg:text-7xl">
              10{" "}
            </h2>
            <p className="text-center text-black font-bold lg:text-xl">
              Years of Service
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="mt-7"
          >
            <h2 className="text-center text-white text-4xl font-semibold md:text-5xl lg:text-7xl">
              230+{" "}
            </h2>
            <p className="text-center text-black font-bold lg:text-xl">
              Professionals
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="mt-7"
          >
            <h2 className="text-center text-white text-4xl font-semibold md:text-5xl lg:text-7xl">
              6815
            </h2>
            <p className="text-center text-black font-bold lg:text-xl">
              Satisfied Clients
            </p>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center w-4/5 mx-auto">
            Recent Case Studies
          </h2>
          <div className="flex w-1/3 mt-3 mx-auto justify-center items-center md:w-1/4">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8 text-center mx-auto w-3/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </motion.div>

        <div className="md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-slate-200 pb-4 w-4/5 mx-auto md:mt-10"
          >
            <Image
              src={recImg}
              width={600}
              height={700}
              alt="im1"
              className="w-full mx-auto h-64 scale-100  transition-all duration-200 hover:scale-105"
            />
            <p className="text-center font-bold text-sm mt-4">
              Fork Food Free XD Template
            </p>
            <p className="text-center  text-sm mt-4">Food & Drinks</p>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-slate-200 pb-4 w-4/5 mx-auto mt-10"
          >
            <Image
              src={recImg}
              width={600}
              height={700}
              alt="im1"
              className="w-full mx-auto h-64 scale-100 transition-all duration-200 hover:scale-105"
            />
            <p className="text-center font-bold text-sm mt-4">
              Fork Food Free XD Template
            </p>
            <p className="text-center  text-sm mt-4">Food & Drinks</p>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-slate-200 pb-4 w-4/5 mx-auto mt-10"
          >
            <Image
              src={recImg}
              width={600}
              height={700}
              alt="im1"
              className="w-full mx-auto h-64 scale-100 transition-all duration-200 hover:scale-105"
            />
            <p className="text-center font-bold text-sm mt-4">
              Fork Food Free XD Template
            </p>
            <p className="text-center  text-sm mt-4">Food & Drinks</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          className="flex justify-center items-center mt-10"
        >
          <button className="text-center text-xs text-white rounded-full bg-black py-2 px-4 md:py-4">
            ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </div>
  );
}
