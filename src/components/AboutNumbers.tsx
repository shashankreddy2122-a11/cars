const AboutNumbers = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-4 pt-12 pb-0 sm:pt-16 md:px-6 md:pt-20 md:pb-0 lg:px-8 lg:pt-24 lg:pb-0">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          {/* Heading */}
          <div className="max-w-[600px]">
            {/* CHANGED: smaller on very small phones */}
            <h2 className="font-unbounded text-3xl font-bold leading-[0.95] tracking-[-1px] text-[#3A3C35] min-[380px]:text-4xl sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-7xl">
              About us
              <br />
              in numbers
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[300px] md:mt-3 lg:max-w-[320px]">
            <p className="font-unbounded text-[10px] font-normal leading-[1.45] text-[#3A3C35] sm:text-xs">
              From acquisition to restoration, we specialize in iconic
              automobiles, ensuring each drive is a celebration of timeless
              style. Elevate your journey with our passion for preserving
              automotive heritage.
            </p>
          </div>
        </div>

        {/* Numbers + Car */}
        <div className="relative mt-10 sm:mt-16 md:mt-20">
          {/* CIRCLES */}
          {/* CHANGED: smaller gap on mobile */}
          <div className="relative z-10 flex w-full items-center justify-center gap-1 md:gap-2">
            {/* Circle 1 */}
            {/* CHANGED: w-[32%] on mobile, w-[27.3%] from sm up (desktop unchanged) */}
            <div className="relative flex aspect-square w-[32%] max-w-[330px] shrink-0 items-center justify-center rounded-full border border-[#777771] sm:w-[27.3%]">
              <div className="px-1 text-center">
                <h3 className="font-unbounded text-2xl font-bold leading-none text-[#3A3C35] min-[420px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  32
                </h3>

                <p className="mt-1.5 font-unbounded text-[7px] leading-tight text-[#3A3C35] min-[420px]:text-[8px] sm:mt-3 sm:text-xs">
                  Retro car
                </p>
              </div>
            </div>

            {/* Circle 2 */}
            <div className="relative flex aspect-square w-[32%] max-w-[330px] shrink-0 items-center justify-center rounded-full border border-[#777771] sm:w-[27.3%]">
              <div className="px-1 text-center">
                <h3 className="font-unbounded text-2xl font-bold leading-none text-[#3A3C35] min-[420px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  400
                </h3>

                <p className="mt-1.5 font-unbounded text-[7px] leading-tight text-[#3A3C35] min-[420px]:text-[8px] sm:mt-3 sm:text-xs">
                  Satisfied clients
                </p>
              </div>
            </div>

            {/* Circle 3 */}
            <div className="relative flex aspect-square w-[32%] max-w-[330px] shrink-0 items-center justify-center rounded-full border border-[#777771] sm:w-[27.3%]">
              <div className="px-1 text-center">
                <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                  <h3 className="font-unbounded text-2xl font-bold leading-none text-[#3A3C35] min-[420px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                    5
                  </h3>

                  <span className="font-unbounded text-[6px] text-[#3A3C35] min-[420px]:text-[7px] sm:text-xs">
                    Years
                  </span>
                </div>

                <p className="mt-1.5 font-unbounded text-[7px] leading-tight text-[#3A3C35] min-[420px]:text-[8px] sm:mt-3 sm:text-xs">
                  Delighting our clients
                </p>
              </div>
            </div>
          </div>

          {/* CAR */}
          {/* CHANGED: full width and slightly more pull-up on mobile, desktop (md+) unchanged */}
          <div className="pointer-events-none relative z-30 mx-auto -mt-[27%] -mb-[6%] w-full sm:-mt-[25%] sm:w-[95%] md:-mt-[23%] md:w-[90%]">
            <img
              src="/assets/A1.png"
              alt="Vintage retro car"
              className="mx-auto block h-auto w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumbers;