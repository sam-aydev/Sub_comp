"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pricing1 from "@/public/pricing1.svg";

export default function Pricing() {
  return (
    <div>
      <div className="bg-slate-100 pt-16 pb-10">
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
          <h2 className="font-bold text-3xl text-center">
            Our Pricing Packages
          </h2>
          <div className="flex w-1/2 mt-3 mx-auto justify-center items-center">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8 text-center mx-auto w-4/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odit quod sequi accusamu.
          </p>
        </motion.div>

        <div className="lg:grid-cols-3 md:grid md:grid-cols-2 md:align-middle md:place-items-center md:items-center">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-white hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto mt-16"
          >
            <Image
              src={pricing1}
              width={400}
              height={400}
              alt="impr"
              className="size-20 mx-auto"
            />
            <h2 className="text-xl mt-6 font-bold">PERSONAL</h2>
            <p className="text-sm mt-10">
              <span className="font-bold">5</span> Analytics Campaigns
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">300</span> Keywords
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">250,000</span> Crawled Pages
            </p>
            <p className="text-sm mt-4">-</p>
            <p className="text-sm mt-4">
              <span className="font-bold">15</span> Social Accounts
            </p>
            <h2 className="font-extrabold text-3xl mt-7">$49.99</h2>
            <button className="text-white mt-7 text-xs bg-black rounded-full px-5 py-2">
              ORDER NOW
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-white hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto mt-5 md:mt-16"
          >
            <Image
              src={pricing1}
              width={400}
              height={400}
              alt="impr"
              className="size-20 mx-auto"
            />
            <h2 className="text-xl mt-6 font-bold">PERSONAL</h2>
            <p className="text-sm mt-10">
              <span className="font-bold">5</span> Analytics Campaigns
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">300</span> Keywords
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">250,000</span> Crawled Pages
            </p>
            <p className="text-sm mt-4">-</p>
            <p className="text-sm mt-4">
              <span className="font-bold">15</span> Social Accounts
            </p>
            <h2 className="font-extrabold text-3xl mt-7">$49.99</h2>
            <button className="text-white mt-7 text-xs bg-black rounded-full px-5 py-2">
              ORDER NOW
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="bg-white lg:mt-16 mt-5 hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto "
          >
            <Image
              src={pricing1}
              width={400}
              height={400}
              alt="impr"
              className="size-20 mx-auto"
            />
            <h2 className="text-xl mt-6 font-bold">PERSONAL</h2>
            <p className="text-sm mt-10">
              <span className="font-bold">5</span> Analytics Campaigns
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">300</span> Keywords
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold">250,000</span> Crawled Pages
            </p>
            <p className="text-sm mt-4">-</p>
            <p className="text-sm mt-4">
              <span className="font-bold">15</span> Social Accounts
            </p>
            <h2 className="font-extrabold text-3xl mt-7">$49.99</h2>
            <button className="text-white mt-7 text-xs bg-black rounded-full px-5 py-2">
              ORDER NOW
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
