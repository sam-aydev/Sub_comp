import Image from "next/image";
import partners1 from "@/public/clients3.png";

export default function Sponsors() {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Our Valuable Clients</h2>
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
  );
}
