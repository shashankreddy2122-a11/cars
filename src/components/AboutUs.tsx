const AboutUs = () => {
  return (
    <main className="w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* ABOUT INTRO */}
        <section>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT SIDE */}
            {/* CHANGED: min-h only from lg up, and a small gap on mobile */}
            <div className="flex flex-col items-start gap-6 lg:min-h-[520px] lg:justify-between lg:gap-0">
              <h1 className="font-unbounded text-4xl font-bold leading-tight text-[#3A3C35] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Who</span>
                <span className="block">are we?</span>
              </h1>

              <button
                type="button"
                className="group flex items-center gap-3 rounded-full border border-[#3A3C35] bg-[#3A3C35] px-5 py-2.5 font-unbounded text-xs font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#3A3C35] sm:text-sm"
              >
                <span>Read reviews</span>

                <span className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h2 className="font-unbounded text-sm font-bold leading-6 text-[#3A3C35] sm:text-base">
                1966 Chevrolet Chevelle SS – STK 2801
              </h2>

              <div className="mt-6 space-y-6">
                <p className="font-unbounded text-xs font-normal leading-6 text-[#3A3C35] sm:text-sm">
                  The 1966 Chevelle SS396 captivated onlookers with its
                  striking appearance. The revamped Fisher body ushered in a
                  new era for the mid-size Chevy, establishing it as a
                  performance icon. In this iteration, the SS396 evolved into
                  a distinct model within the Chevelle lineup, showcasing
                  numerous styling upgrades and an unwavering focus on
                  performance.
                </p>

                <p className="font-unbounded text-xs font-normal leading-6 text-[#3A3C35] sm:text-sm">
                  This ‘138’ code Chevelle SS396 underwent an impressive
                  frame-off restoration in 2013, emerging as a visual
                  masterpiece. A professional application of Bolero Red paint
                  revitalized the exterior, complemented by a meticulous
                  restoration of the interior in original red vinyl. Every
                  authentic detail, including the Muncie ‘hypodermic’ shifter,
                  was thoughtfully recreated. The cabin features a complete
                  set of SunPro gauges alongside a column-mounted tachometer,
                  tinted windows, and an aftermarket AM/FM/cassette stereo
                  system.
                </p>

                <p className="font-unbounded text-xs font-normal leading-6 text-[#3A3C35] sm:text-sm">
                  Under the hood, the original 396ci ‘Rat’ powerplant gave way
                  to a robust 427ci big-block. This powerhouse, meticulously
                  rebuilt, boasts an aluminum intake, dual-line Holley
                  carburetor, and a street-savvy cam. Paired with a 4-speed
                  manual transmission, the throaty exhaust note resonates with
                  power. (Trivia: A few years later, Don Yenko Chevrolet in
                  Pittsburgh adopted a similar drivetrain package for their
                  COPO Chevelles.)
                </p>

                <p className="font-unbounded text-xs font-normal leading-6 text-[#3A3C35] sm:text-sm">
                  GM Rally wheels with trim rings and centers embrace sturdy
                  15” BFG Radial T/A tires. Steering is managed manually, while
                  power disc/drum brakes, a front sway bar, and HD shocks
                  contribute to a balanced driving experience.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* NUMBERS + CAR */}
        <div className="relative mt-10 sm:mt-16 md:mt-20">
          {/* CIRCLES */}
          <div className="relative z-10 flex w-full items-center justify-center gap-1 md:gap-2">
            {/* Circle 1 */}
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
          <div className="pointer-events-none relative z-30 mx-auto -mt-[27%] -mb-[6%] w-full sm:-mt-[25%] sm:w-[95%] md:-mt-[23%] md:w-[90%]">
            <img
              src="/assets/A1.png"
              alt="Vintage retro car"
              className="mx-auto block h-auto w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutUs;