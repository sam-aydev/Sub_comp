import Image from "next/image";
import { FaPeopleGroup, FaYoutube } from "react-icons/fa6";
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";
import Logo from "@/public/logo-dark.svg";
import slide1 from "@/public/03-slide.svg";
import img1 from "@/public/icon26.svg";
import img2 from "@/public/07-we-offer.svg";
import { GoDot } from "react-icons/go";
import recImg from "@/public/case5.jpg";
import Author8 from "@/public/author8.png";
import pricing1 from "@/public/pricing1.svg";
import partners1 from "@/public/clients3.png";
import {
  FaFacebook,
  FaGoogle,
  FaStar,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="fixed bg-white w-full shadow-2xl z-50">
        <div className="flex justify-between px-9 ">
          <div className="flex space-x-2 items-center ">
            <div>
              <Image
                src={Logo}
                width={400}
                height={500}
                alt=""
                className="size-16"
              />
            </div>
            <div>
              <h2 className="text-xl">
                <span className="font-bold">TOP</span>TEN
              </h2>
              <p className="text-xs">COOL HTML TEMPLATE</p>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <FaPeopleGroup className="size-10 text-white bg-green-400 rounded-full p-2" />
            <HiBars3 className="size-8" />
          </div>
        </div>
        <div>
          <HiBars3BottomLeft className="size-14 -mt-8 bg-purple-400 rounded-full p-2 fixed text-white border-4 border-white right-[30%]" />
        </div>
      </div>

      <div>
        <div className="bg-[#fc3e59] pt-40 pb-20">
          <Image src={slide1} width={1000} height={1000} alt="slde" />
          <h2 className="text-3xl font-semibold text-center w-3/4 mt-10 mx-auto">
            Search Media Marketing Services
          </h2>
          <p className="text-white mt-7 text-lg  text-center w-4/5 mx-auto">
            An effective social stratgey can help you grow your business,
            maintain your social presence and engage with the audience.
          </p>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-xs bg-black text-center text-white border-2 border-black px-5 py-2 rounded-full">
              VIEW DETAILS
            </button>
            <button className="text-xs  text-center border-2 border-white px-5 py-2 rounded-full">
              CHECK DETAILS
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-16">
          <Image
            src={img1}
            alt="img"
            width={200}
            height={200}
            className="size-20 mx-auto"
          />
          <h2 className="text-center mt-3 text-xl">Local Search Strategy</h2>
          <p className="text-center w-5/6 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            mollitia dolore consequatur dignissimos odit, aspernatur sint
            quaerat.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src={img1}
            alt="img"
            width={200}
            height={200}
            className="size-20 mx-auto"
          />
          <h2 className="text-center mt-3 text-xl">Local Search Strategy</h2>
          <p className="text-center w-5/6 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            mollitia dolore consequatur dignissimos odit, aspernatur sint
            quaerat.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src={img1}
            alt="img"
            width={200}
            height={200}
            className="size-20 mx-auto"
          />
          <h2 className="text-center mt-3 text-xl">Local Search Strategy</h2>
          <p className="text-center w-5/6 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            mollitia dolore consequatur dignissimos odit, aspernatur sint
            quaerat.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src={img1}
            alt="img"
            width={200}
            height={200}
            className="size-20 mx-auto"
          />
          <h2 className="text-center mt-3 text-xl">Local Search Strategy</h2>
          <p className="text-center w-5/6 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            mollitia dolore consequatur dignissimos odit, aspernatur sint
            quaerat.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src={img1}
            alt="img"
            width={200}
            height={200}
            className="size-20 mx-auto"
          />
          <h2 className="text-center mt-3 text-xl">Local Search Strategy</h2>
          <p className="text-center w-5/6 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
            mollitia dolore consequatur dignissimos odit, aspernatur sint
            quaerat.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-16 px-8">
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
          <div className="flex  space-x-5 mt-6">
            <button className="text-xs bg-white text-center text-black border-2 border-black px-5 py-2 rounded-full">
              LEARN MORE
            </button>
            <button className="text-xs  text-center  text-white bg-green-600 px-5 py-2 rounded-full">
              GET A QUOTE
            </button>
          </div>
          <div className="mt-12">
            <Image src={img2} width={500} height={600} alt="ims" className="" />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-16 ">
          <h2 className="text-2xl font-bold text-center w-4/5 mx-auto">
            We Offer a Full Range of Digital Marketing Services!
          </h2>
          <div className="flex w-1/2 mt-3 mx-auto justify-center items-center">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8 text-center mx-auto w-3/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>

          <div className="mt-7">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
            <h2 className="text-center mt-3 font-bold text-xl">Strategy</h2>
            <p className="text-center w-5/6 mx-auto mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>

          <div className="mt-7">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
            <h2 className="text-center mt-3 font-bold text-xl">Technology</h2>
            <p className="text-center w-5/6 mx-auto mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-xs bg-black text-center text-white border-2 border-black px-5 py-2 rounded-full">
              MORE INFO
            </button>
            <button className="text-xs  text-center  text-white bg-green-600 px-5 py-2 rounded-full">
              GET SRARTED!
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-green-400 py-4 mt-16">
          <div>
            <h2 className="text-center text-white text-4xl font-semibold">
              96%
            </h2>
            <p className="text-center text-black font-bold">Client Retention</p>
          </div>
          <div className="mt-7">
            <h2 className="text-center text-white text-4xl font-semibold">
              10{" "}
            </h2>
            <p className="text-center text-black font-bold">Years of Service</p>
          </div>
          <div className="mt-7">
            <h2 className="text-center text-white text-4xl font-semibold">
              230+{" "}
            </h2>
            <p className="text-center text-black font-bold">Professionals</p>
          </div>
          <div className="mt-7">
            <h2 className="text-center text-white text-4xl font-semibold">
              6815
            </h2>
            <p className="text-center text-black font-bold">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center w-4/5 mx-auto">
            Recent Case Studies
          </h2>
          <div className="flex w-1/3 mt-3 mx-auto justify-center items-center">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="mt-8 text-center mx-auto w-3/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        <div className="bg-slate-200 pb-4 w-4/5 mx-auto">
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
        </div>

        <div className="bg-slate-200 pb-4 w-4/5 mx-auto mt-10">
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
        </div>

        <div className="bg-slate-200 pb-4 w-4/5 mx-auto mt-10">
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
        </div>

        <div className="flex justify-center items-center mt-10">
          <button className="text-center text-xs text-white rounded-full bg-black py-2 px-4">
            ALL PROJECTS
          </button>
        </div>
      </div>

      <div>
        <div className="bg-yellow-500 py-10 mt-10">
          <div className="bg-black rounded-2xl w-4/5 mx-auto p-4 mt-10">
            <Image
              src={Author8}
              width={400}
              height={400}
              alt="author8"
              className="size-20 mx-auto bg-white p-2 rounded-full -mt-16"
            />
            <p className="text-white mt-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              voluptatum illo. Corporis rem reprehenderit consequatur deleniti,
              molestias recusandae rerum saepe.
            </p>
            <p className="text-yellow-500 font-semibold mt-7">Frank Simpson</p>
            <p className="text-slate-500">Lead Manager</p>
          </div>
          <h2 className="text-black text-2xl font-bold px-10 mt-16">
            What Our Clients Say About TopTen
          </h2>
        </div>
      </div>

      <div>
        <div className="bg-slate-100 pt-16 pb-10">
          <div>
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
          </div>
          <div className="bg-white hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto mt-16">
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
          </div>

          <div className="bg-white hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto mt-5">
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
          </div>

          <div className="bg-white mt-5 hover:border-2 hover:border-blue-500 active:border-2 active:border-blue-500 rounded py-4 text-center w-4/5 mx-auto ">
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
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center">
            Our Valuable Clients
          </h2>
          <div className="flex w-1/3 mt-3 mx-auto justify-center items-center">
            <div className="border border-red-600 w-1/3"></div>
            <div className="border border-purple-600 w-1/3"></div>
            <div className="border border-yellow-600 w-1/3"></div>
          </div>
          <p className="text-center w-4/5 mx-auto mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <Image
            src={partners1}
            width={500}
            height={400}
            alt="so"
            className="w-40 mx-auto mt-10"
          />
        </div>
      </div>

      <div>
        <div className="bg-blue-500 mt-16 pb-10">
          <div className="px-10 pt-10">
            <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-white mt-5">
              Join our Newsletter & Marketing Communication. We'll send you news
              and offers.
            </p>

            <input
              type="email"
              className="py-2 px-4 w-4/5 mx-auto outline-none rounded-full mt-4"
              placeholder="Your email address"
            />
            <button className="text-xs bg-black text-white py-2 px-4 rounded-full mt-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-neutral-900">
          <div className="pt-10">
            <h2 className="text-center font-semibold text-2xl text-white">
              TopTen Company!
            </h2>
            <p className="text-sm w-4/5 mx-auto mt-7 text-slate-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quam temporibus esse quidem. Iure reiciendis quidem
              ipsa adipisci animi odio illo? Praesentium autem suscipit error,
              sed dolorum odio hic perspiciatis aspernatur quo magni at, non
              eum. Consequuntur, esse fugiat.
            </p>
            <div className="flex justify-center items-center space-x-3 mt-5">
              <FaFacebook className="size-8 text-blue-500" />
              <FaTwitter className="size-8 text-blue-500" />
              <FaYoutube className="size-8 text-red-600" />
            </div>
            <div className="text-center text-white font-medium mt-10">
              <h2 className="text-xl font-medium ">Services</h2>
              <ul className="list-disc text-sm mt-5">
                <li className="mt-3">SEO Services</li>
                <li className="mt-3">Pay-per-click</li>
                <li className="mt-3">Social Media</li>
                <li className="mt-3">Web ANalytics</li>
                <li className="mt-3">Web Development</li>
              </ul>
            </div>
            <hr className="mt-6 w-4/5 mx-auto" />
            <div className="text-center text-white font-medium mt-10">
              <h2 className="text-xl font-medium ">Provided</h2>
              <ul className="list-disc text-sm mt-5">
                <li className="mt-3">Content Management</li>
                <li className="mt-3">Blog Management</li>
                <li className="mt-3">Virtual Marketing</li>
                <li className="mt-3">Email Marketing</li>
                <li className="mt-3">Keyword Analytics</li>
              </ul>
            </div>
            <hr className="mt-6 w-4/5 mx-auto" />
            <div className="mt-5">
              <div className="flex space-x-2 items-center justify-center text-white">
                <div>
                  <BiPhoneCall className="size-12 text-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-white">8 800 567.890.11</p>
                  <p>Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="flex mt-6 space-x-2 items-center justify-center text-white">
                <div>
                  <MdEmail className="size-12 text-red-500" />
                </div>
                <div>
                  <p className="font-bold text-white">info@topten.com</p>
                  <p>online support</p>
                </div>
              </div>
              <div className="flex mt-6 space-x-2 items-center justify-center text-white">
                <div>
                  <FaStar className="size-12 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-white">info@topten.com</p>
                  <p>online support</p>
                </div>
              </div>
            </div>

            <div className="bg-black py-6 px-10 text-center mt-10 text-slate-500">
              <p>@ 2020 TopTen, Designed by Themefire Developed by Crumina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
