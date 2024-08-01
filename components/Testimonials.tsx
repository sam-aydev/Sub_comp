import Image from "next/image";
import recImg from "@/public/case5.jpg";
import Author8 from "@/public/author8.png";

export default function Testimonials() {
  return (
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
  );
}
