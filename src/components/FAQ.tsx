import { Plus, ArrowUpRight } from "lucide-react";

const FAQ = () => {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[30%]">
            <div className="flex flex-col items-start">
              <h2 className="font-unbounded text-3xl font-bold leading-tight tracking-tight text-[#3A3B35] sm:text-4xl md:text-5xl lg:text-6xl">
                FAQ
              </h2>

              <button className="group mt-8 flex w-fit items-center gap-3 rounded-full border border-black bg-white px-5 py-2.5 font-unbounded text-xs font-bold text-[#3A3B35] transition-all duration-300 hover:bg-[#3A3B35] hover:text-white sm:text-sm">
                <span>Ask a Question</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="text-[#3A3B35] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[70%]">

            {/* FAQ 1 */}
            <div className="border-b border-black py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="font-unbounded text-xs font-bold leading-relaxed text-[#3A3B35] sm:text-sm">
                  Do you offer financing options for purchasing classic cars?
                </p>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Plus
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#3A3B35]"
                  />
                </button>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-black py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="font-unbounded text-xs font-bold leading-relaxed text-[#3A3B35] sm:text-sm">
                  Are the showcased cars fully restored or in original condition?
                </p>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Plus
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#3A3B35]"
                  />
                </button>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-black py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="font-unbounded text-xs font-bold leading-relaxed text-[#3A3B35] sm:text-sm">
                  Are the showcased cars fully restored or in original condition?
                </p>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Plus
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#3A3B35]"
                  />
                </button>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-black py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="font-unbounded text-xs font-bold leading-relaxed text-[#3A3B35] sm:text-sm">
                  Are the showcased cars fully restored or in original condition?
                </p>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Plus
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#3A3B35]"
                  />
                </button>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-black py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="font-unbounded text-xs font-bold leading-relaxed text-[#3A3B35] sm:text-sm">
                  Can I request additional photos before purchasing?
                </p>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Plus
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#3A3B35]"
                  />
                </button>
              </div>

              <p className="mt-5 max-w-2xl font-unbounded text-[10px] font-normal leading-6 text-[#3A3B35]/60 sm:text-xs">
                Yes, we welcome and encourage requests for more detailed
                photographs or videos of any vehicle in our inventory. Contact
                our team, and we'll arrange the necessary details for your
                peace of mind.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

