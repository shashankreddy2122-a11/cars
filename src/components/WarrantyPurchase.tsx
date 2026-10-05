import { ArrowLeft, ArrowUpRight } from "lucide-react";

type WarrantyPurchaseProps = {
  onBack: () => void;
};

const WarrantyPurchase = ({ onBack }: WarrantyPurchaseProps) => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
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
          <h1 className="font-unbounded text-3xl font-bold leading-none tracking-[-2px] text-[#3A3C35] sm:text-4xl md:text-5xl lg:text-6xl">
            Warranty Purchase
          </h1>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left 50% Image */}
          {/* CHANGED: mobile uses natural height so the full image is visible; md+ fills the column as before */}
          <div className="w-full overflow-hidden rounded-[10px]">
            <img
              src="/assets/S2.png"
              alt="Classic car warranty"
              className="block h-auto w-full object-cover object-center transition-transform duration-500 hover:scale-105 md:h-full md:min-h-[400px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Our comprehensive warranty options provide an added layer of
              protection, ensuring that you can fully enjoy the beauty of your
              timeless vehicle without worry.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Choose from our range of warranty packages tailored to meet the
              unique needs of classic car enthusiasts. Our warranties cover
              essential components, providing you with confidence and assurance
              in the reliability of your cherished automobile.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              With ALL CLASSIC MOTORS VELVA’s warranty options, you’re not just
              investing in protection; you’re investing in the longevity and
              continued performance of your classic car. Our commitment to your
              satisfaction extends beyond the showroom, offering a safety net
              that aligns with the timeless quality of the vehicles in our
              collection.
            </p>

            {/* Button */}
            <button
              type="button"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-[#3A3C35] px-5 py-3 font-unbounded text-[10px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-black"
            >
              <span>I want to put</span>

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

export default WarrantyPurchase;