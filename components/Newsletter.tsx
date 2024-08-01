import Image from "next/image";
import newslete from "@/public/08-subscribe.svg";

export default function Newsletter() {
  return (
    <div>
      <div className="bg-blue-500 mt-16 pb-10 lg:flex lg:pb-0 lg:pt-10">
        <div className="px-10 pt-10">
          <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
          <p className="text-white mt-5">
            Join our Newsletter & Marketing Communication. We'll send you news
            and offers.
          </p>

          <input
            type="email"
            className="py-2 px-4 w-4/5 mx-auto outline-none rounded-full mt-4 md:px-4 md:font-semibold  md:py-6"
            placeholder="Your email address"
          />
          <button className="text-xs bg-black text-white py-2 px-4 rounded-full mt-4 md:py-6 md:px-6 md:mx-2">
            SUBSCRIBE
          </button>
        </div>
        <div>
          <Image
            src={newslete}
            width={400}
            height={400}
            alt="new"
            className="hidden lg:block lg:mt-14"
          />
        </div>
      </div>
    </div>
  );
}
