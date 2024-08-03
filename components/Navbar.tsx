import Image from "next/image";
import { FaPeopleGroup, FaYoutube } from "react-icons/fa6";
import Logo from "@/public/logo-dark.svg";
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";

export default function NavBar() {
  return (
    <div className="fixed bg-white w-full shadow-2xl z-50 py-4">
      <div className="flex justify-between px-3 md:px-9 lg:justify-around">
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
        <div className="hidden md:block">
          <ul className="flex space-x-10 items-center py-5">
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              About
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Services
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Case studies
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Pages
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Blog
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Shop
            </li>
            <li className="cursor-pointer hover:text-green-400 hover:border-b-2 hover:border-b-green-300 transition-all duration-200">
              Contacts
            </li>
          </ul>
        </div>
        <div className="flex space-x-6 items-center md:hidden">
          <FaPeopleGroup className="size-10 text-white bg-green-400 rounded-full p-2" />
          <HiBars3 className="size-8" />
        </div>
      </div>

      <div>
        <HiBars3BottomLeft className="size-14 -mt-4 bg-[#6C6FF2] rounded-full p-2 fixed text-white border-4 border-white right-[30%]" />
      </div>
    </div>
  );
}
