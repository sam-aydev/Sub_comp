import { FaFacebook, FaStar, FaTwitter } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPeopleGroup, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="bg-neutral-900">
        <div className="pt-10 md:flex md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-center font-semibold text-2xl text-white">
              TopTen Company!
            </h2>
            <p className="text-sm w-4/5 mx-auto mt-7 text-slate-400 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quam temporibus esse quidem. Iure reiciendis quidem
              ipsa adipisci animi odio illo? Praesentium autem suscipit error,
              sed dolorum odio hic perspiciatis aspernatur quo magni at, non
              eum. Consequuntur, esse fugiat.
            </p>
            <div className="flex justify-center items-center space-x-3 mt-5 md:space-x-7">
              <FaFacebook className="size-8 text-blue-500" />
              <FaTwitter className="size-8 text-blue-500" />
              <FaYoutube className="size-8 text-red-600" />
            </div>
          </div>

          <div className="text-center text-white font-medium mt-10  md:mt-0">
            <h2 className="text-xl font-medium md:text-center md:text-2xl md:font-semibold">
              Services
            </h2>
            <ul className="list-disc text-sm mt-5">
              <li className="mt-3">SEO Services</li>
              <li className="mt-3">Pay-per-click</li>
              <li className="mt-3">Social Media</li>
              <li className="mt-3">Web Analytics</li>
              <li className="mt-3">Web Development</li>
            </ul>
          </div>
          <hr className="mt-6 w-4/5 mx-auto md:hidden" />

          <div className="text-center text-white font-medium mt-10 md:mt-0 lg:px-20">
            <h2 className="text-xl font-medium  md:text-2xl md:font-semibold">
              Provided
            </h2>
            <ul className="list-disc text-sm mt-5">
              <li className="mt-3">Content Management</li>
              <li className="mt-3">Blog Management</li>
              <li className="mt-3">Virtual Marketing</li>
              <li className="mt-3">Email Marketing</li>
              <li className="mt-3">Keyword Analytics</li>
            </ul>
          </div>
          <hr className="mt-6 w-4/5 mx-auto md:hidden" />
        </div>

        <hr className="mt-7 w-full mx-auto hidden md:block" />

        <div className="mt-5 md:flex md:justify-around">
          <div className="flex space-x-2 items-center justify-center text-white md:mt-6 md:flex-col md:space-y-4 md:space-x-0 md:text-center">
            <div>
              <BiPhoneCall className="size-12 text-yellow-500" />
            </div>
            <div>
              <p className="font-bold text-white">8 800 567.890.11</p>
              <p>Mon-Fri 9am-6pm</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-2 items-center justify-center text-white md:flex-col md:space-y-4 md:space-x-0 md:text-center">
            <div>
              <MdEmail className="size-12 text-red-500" />
            </div>
            <div>
              <p className="font-bold text-white">info@topten.com</p>
              <p>online support</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-2 items-center justify-center text-white md:flex-col md:space-y-4 md:space-x-0 md:text-center">
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
  );
}
