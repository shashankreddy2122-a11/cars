import { ArrowLeft, ArrowUpRight } from "lucide-react";

type FinancingProps = {
  onBack: () => void;
};

const Financing = ({ onBack }: FinancingProps) => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
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

          <h1 className="font-unbounded text-4xl font-bold leading-none tracking-[-2px] text-[#3A3C35] sm:text-5xl md:text-6xl lg:text-7xl">
            Financing
          </h1>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Image */}
          {/* CHANGED: mobile uses natural height so the full image is visible; md+ fills the column as before */}
          <div className="w-full overflow-hidden rounded-[10px]">
            <img
              src="/assets/S3.png"
              alt="Classic car financing"
              className="block h-auto w-full object-cover object-center transition-transform duration-500 hover:scale-105 md:h-full md:min-h-[400px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Our financing options are designed to accommodate various budgets
              and preferences. Whether you are a seasoned collector or a
              first-time buyer, our team is dedicated to finding a financing
              plan that suits your needs. Benefit from competitive interest
              rates and straightforward terms that align with the timeless
              value of the classic car you desire.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Applying for financing with us is a hassle-free process. Our
              knowledgeable team is ready to guide you through the application,
              ensuring that you have a clear understanding of the terms and
              conditions. We believe in transparency, and our commitment is to
              provide you with a financing solution that enhances your
              enjoyment of the classic car of your dreams.
            </p>

            <p className="mt-5 font-unbounded text-[9px] font-normal leading-5 text-[#3A3C35] sm:text-[10px] sm:leading-6 md:text-[11px] md:leading-6">
              Take the next step in your journey to classic car ownership by
              exploring our financing options. ALL CLASSIC MOTORS VELVA is here
              to make your dream car a reality, with financing plans that
              reflect our dedication to your satisfaction and the preservation
              of automotive history.
            </p>

            {/* Button */}
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

export default Financing;