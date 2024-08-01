import Image from "next/image";
import img1 from "@/public/icon26.svg";

export default function SecondHero() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div className="mt-16 md:flex">
          <div className="md:w-1/2">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
          </div>
          <div>
            <h2 className="text-center mt-3 w-5/6 mx-auto  text-xl md:text-left">
              Local Search Strategy
            </h2>
            <p className="text-center w-5/6 mx-auto mt-5 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
        </div>

        <div className="mt-12 md:flex md:mt-16">
          <div className="md:w-1/2">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
          </div>
          <div>
            <h2 className="text-center w-5/6 mx-auto md:text-left mt-3 text-xl">
              Local Search Strategy
            </h2>
            <p className="text-center w-5/6 mx-auto mt-5 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
        </div>

        <div className="mt-12 md:flex md:mt-16">
          <div className="md:w-1/2">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
          </div>
          <div>
            <h2 className="text-center w-5/6 mx-auto mt-3 text-xl md:text-left">
              Local Search Strategy
            </h2>
            <p className="text-center w-5/6 mx-auto mt-5 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
        </div>

        <div className="mt-12 md:flex md:mt-16 ">
          <div className="md:w-1/2">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
          </div>
          <div>
            <h2 className="text-center  w-5/6 mx-auto mt-3 text-xl md:text-left">
              Local Search Strategy
            </h2>
            <p className="text-center w-5/6 mx-auto mt-5 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 md:flex">
          <div className="md:w-1/2">
            <Image
              src={img1}
              alt="img"
              width={200}
              height={200}
              className="size-20 mx-auto"
            />
          </div>
          <div>
            <h2 className="text-center w-5/6 mx-auto  mt-3 text-xl md:text-left">
              Local Search Strategy
            </h2>
            <p className="text-center w-5/6 mx-auto mt-5 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              mollitia dolore consequatur dignissimos odit, aspernatur sint
              quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
