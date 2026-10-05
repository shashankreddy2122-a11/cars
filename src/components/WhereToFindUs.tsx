import { ArrowUpRight } from "lucide-react";

const WhereToFindUs = () => {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col lg:flex-row lg:gap-20">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[30%]">
            <h2 className="font-unbounded text-3xl font-bold leading-tight tracking-tight text-[#3A3B35] sm:text-4xl md:text-5xl lg:text-6xl">
              Where
              <br />
              to find us
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="mt-12 w-full lg:mt-0 lg:w-[70%]">

            <div className="ml-auto flex w-fit flex-col items-start">

              {/* PHONE */}
              <p className="font-unbounded text-sm font-bold leading-relaxed text-[#3A3B35] sm:text-base">
                +1 (701) 581-1331
              </p>

              {/* ADDRESS */}
              <p className="mt-5 font-unbounded text-xs font-normal leading-6 text-[#3A3B35] sm:text-sm">
                161 Trumpeter Ave, Soldotna, Alaska
              </p>

              {/* BUTTON */}
              <button className="group mt-7 flex w-fit items-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 font-unbounded text-[10px] font-bold text-[#3A3B35] transition-all duration-300 hover:bg-[#3A3B35] hover:text-white sm:text-xs">
                <span>Submit your application</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#3A3B35] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                />
              </button>

            </div>

          </div>

        </div>

        {/* IMAGE (CHANGED: inside the container, so it matches the left and right text alignment; smaller height) */}
        <div className="mt-16 w-full overflow-hidden">
          <img
            src="/assets/W.png"
            alt="Where to find us"
            className="h-[220px] w-full rotate-0 object-cover opacity-100 sm:h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </div>

      </div>
    </section>
  );
};

export default WhereToFindUs;