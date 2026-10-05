import { ArrowLeft, ArrowUpRight } from "lucide-react";

type ShippingProps = {
  onBack: () => void;
};

const Shipping = ({ onBack }: ShippingProps) => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Shipping Heading */}
        <div className="mb-12 flex items-center gap-4">
          {/* Back Arrow */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to Services"
            className="group flex items-center justify-center text-[#3A3C35] transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowLeft
              size={28}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          {/* Heading */}
          <h1 className="font-unbounded text-4xl font-bold leading-none tracking-[-2px] text-[#3A3C35] sm:text-5xl md:text-6xl lg:text-7xl">
            Shipping
          </h1>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Image */}
          {/* CHANGED: mobile uses natural height so the full image is visible; md+ fills the column as before */}
          <div className="w-full overflow-hidden rounded-[10px]">
            <img
              src="/assets/S1.png"
              alt="Classic car shipping"
              className="block h-auto w-full object-cover object-center transition-transform duration-500 hover:scale-105 md:h-full md:min-h-[400px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              We partner with trusted shipping professionals experienced in
              handling classic automobiles. From meticulous loading to secure
              transit, we prioritize the safety of your vehicle throughout its
              journey to your doorstep. Our global shipping network allows us
              to cater to enthusiasts worldwide, bringing the allure of classic
              cars to every corner of the globe.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Rest easy knowing that your classic car is in the hands of experts
              who share your passion for preserving automotive history. Whether
              it’s a local delivery or an international shipment, ALL CLASSIC
              MOTORS VELVA is committed to ensuring that your timeless vehicle
              arrives with the same elegance and care it had in our showroom.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Experience worry-free shipping with ALL CLASSIC MOTORS VELVA and
              let us bring the joy of classic cars directly to you. Your journey
              with your classic car starts from the moment it leaves our hands
              to the moment it arrives at yours.
            </p>

            {/* Deliver the Car Button */}
            <button
              type="button"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-[#3A3C35] px-5 py-3 font-unbounded text-[10px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-black"
            >
              <span>Deliver the Car</span>

              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;