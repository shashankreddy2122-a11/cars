import Services from "./Services";
import FAQ from "./FAQ";
import WhereToFindUs from "./WhereToFindUs";

export type CarDetailsData = {
  image: string;
  price: string;
  name: string;
  miles: string;
};

type CarDetailsProps = {
  car: CarDetailsData;
  onBack: () => void;
  onShippingClick?: () => void;
  onWarrantyClick?: () => void;
  onFinancingClick?: () => void;
};

const CarDetails = ({ car, onBack, onShippingClick, onWarrantyClick, onFinancingClick }: CarDetailsProps) => {
  return (
    <main className="w-full bg-white px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* CAR NAME + BACK BUTTON */}
        <div className="relative mb-10 flex items-center justify-center md:mb-14">
          <button
            type="button"
            onClick={onBack}
            className="absolute left-0 flex items-center font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500 sm:text-base"
            aria-label="Go back"
          >
            <span className="text-2xl leading-none sm:text-3xl">
              ←
            </span>
          </button>

          <h1 className="px-10 text-center font-unbounded text-2xl font-bold leading-tight text-[#3A3C35] sm:text-3xl md:text-4xl lg:text-5xl">
            {car.name}
          </h1>
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* LEFT SIDE - MAIN IMAGE */}
          {/* CHANGED: fixed heights replaced with aspect-[4/3], object-cover fills the whole box */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px]">
            <img
              src={car.image}
              alt={car.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT SIDE - FOUR IMAGES */}
          <div className="grid grid-cols-2 gap-4">

            {/* IMAGE 1 */}
            <div className="aspect-[4/3] overflow-hidden rounded-[20px]">
              <img
                src={car.image}
                alt={`${car.name} view 1`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="aspect-[4/3] overflow-hidden rounded-[20px]">
              <img
                src="/assets/R5.png"
                alt={`${car.name} view 2`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="aspect-[4/3] overflow-hidden rounded-[20px]">
              <img
                src="/assets/R1.png"
                alt={`${car.name} view 3`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="aspect-[4/3] overflow-hidden rounded-[20px]">
              <img
                src="/assets/R3.png"
                alt={`${car.name} view 4`}
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* BLACK LINE */}
        <div className="mt-10 h-px w-full bg-black md:mt-14" />

        {/* DETAILS + ABOUT */}
        <div className="grid grid-cols-1 gap-12 py-10 md:py-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="w-full">

            {/* CAR HEADING */}
            <h2 className="font-unbounded text-xl font-bold leading-tight text-[#3A3C35] sm:text-2xl md:text-3xl">
              {car.name}
            </h2>

            {/* PRICE */}
            <button
              type="button"
              className="mt-5 rounded-full bg-[#3A3C35] px-6 py-3 font-unbounded text-sm font-medium text-white sm:text-base"
            >
              {car.price}
            </button>

            {/* SPECIFICATIONS */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">

              {/* LEFT COLUMN - 5 ITEMS */}
              <div className="w-full">

                {/* Make */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Make
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    Chevrolet
                  </span>
                </div>

                {/* Model */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Model
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    Chevelle SS
                  </span>
                </div>

                {/* Transmission */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Transmission
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    4-speed manual
                  </span>
                </div>

                {/* VIN */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    VIN
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    138176A142692
                  </span>
                </div>

                {/* Body Color */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Body Color
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    Red
                  </span>
                </div>

              </div>

              {/* RIGHT COLUMN - 5 ITEMS */}
              <div className="w-full">

                {/* Mileage */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Mileage
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    28,432 miles
                  </span>
                </div>

                {/* Engine Size */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Engine Size
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    427ci
                  </span>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Year
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    1966
                  </span>
                </div>

                {/* Type */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Type
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    Hardtop
                  </span>
                </div>

                {/* Interior Color */}
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                  <span className="font-unbounded text-[10px] font-bold text-[#3A3C35] sm:text-xs">
                    Interior Color
                  </span>
                  <span className="text-right font-unbounded text-[10px] text-gray-600 sm:text-xs">
                    Red
                  </span>
                </div>

              </div>

            </div>

            {/* RENT BUTTON */}
            <button
              type="button"
              className="mt-10 rounded-full bg-[#3A3C35] px-8 py-3.5 font-unbounded text-xs font-medium text-white transition-all duration-200 hover:bg-black sm:text-sm"
            >
              Rent
            </button>
          </div>

          {/* RIGHT SIDE - ABOUT THE CAR */}
          <div className="w-full">
            <h2 className="font-unbounded text-xl font-bold text-[#3A3C35] sm:text-2xl">
              About the car
            </h2>

            <div className="mt-6 space-y-5">

              <p className="font-unbounded text-[10px] font-normal leading-6 text-[#3A3C35] sm:text-xs">
                1966 Chevrolet Chevelle SS – STK 2801
              </p>

              <p className="font-unbounded text-[10px] font-normal leading-6 text-[#3A3C35] sm:text-xs">
                The 1966 Chevelle SS396 captivated onlookers with its striking
                appearance. The revamped Fisher body ushered in a new era for
                the mid-size Chevy, establishing it as a performance icon. In
                this iteration, the SS396 evolved into a distinct model within
                the Chevelle lineup, showcasing numerous styling upgrades and
                an unwavering focus on performance.
              </p>

              <p className="font-unbounded text-[10px] font-normal leading-6 text-[#3A3C35] sm:text-xs">
                This ‘138’ code Chevelle SS396 underwent an impressive
                frame-off restoration in 2013, emerging as a visual
                masterpiece. A professional application of Bolero Red paint
                revitalized the exterior, complemented by a meticulous
                restoration of the interior in original red vinyl. Every
                authentic detail, including the Muncie ‘hypodermic’ shifter,
                was thoughtfully recreated. The cabin features a complete set
                of SunPro gauges alongside a column-mounted tachometer, tinted
                windows, and an aftermarket AM/FM/cassette stereo system.
              </p>

              <p className="font-unbounded text-[10px] font-normal leading-6 text-[#3A3C35] sm:text-xs">
                Under the hood, the original 396ci ‘Rat’ powerplant gave way
                to a robust 427ci big-block. This powerhouse, meticulously
                rebuilt, boasts an aluminum intake, dual-line Holley
                carburetor, and a street-savvy cam. Paired with a 4-speed
                manual transmission, the throaty exhaust note resonates with
                power. (Trivia: A few years later, Don Yenko Chevrolet in
                Pittsburgh adopted a similar drivetrain package for their COPO
                Chevelles.)
              </p>

              <p className="font-unbounded text-[10px] font-normal leading-6 text-[#3A3C35] sm:text-xs">
                GM Rally wheels with trim rings and centers embrace sturdy 15”
                BFG Radial T/A tires. Steering is managed manually, while
                power disc/drum brakes, a front sway bar, and HD shocks
                contribute to a balanced driving experience.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* EXISTING SECTIONS */}
      <Services
        onShippingClick={onShippingClick}
        onWarrantyClick={onWarrantyClick}
        onFinancingClick={onFinancingClick}
      />
      <FAQ />
      <WhereToFindUs />
    </main>
  );
};

export default CarDetails;