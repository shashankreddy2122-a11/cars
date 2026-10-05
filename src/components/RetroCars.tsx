import type { CarDetailsData } from "./CarDetails";

const retroCars: CarDetailsData[] = [
  {
    image: "/assets/R1.png",
    price: "$39,000",
    name: "1967 Toyota 2000GT",
    miles: "14,900 miles",
  },
  {
    image: "/assets/R2.png",
    price: "$45,500",
    name: "1965 Ford Mustang",
    miles: "21,400 miles",
  },
  {
    image: "/assets/R3.png",
    price: "$52,000",
    name: "1969 Chevrolet Camaro",
    miles: "18,700 miles",
  },
  {
    image: "/assets/R4.png",
    price: "$48,900",
    name: "1968 Porsche 911",
    miles: "16,200 miles",
  },
  {
    image: "/assets/R5.png",
    price: "$42,500",
    name: "1966 Jaguar E-Type",
    miles: "19,800 miles",
  },
  {
    image: "/assets/R6.png",
    price: "$55,000",
    name: "1970 Dodge Challenger",
    miles: "12,600 miles",
  },
];

type RetroCarsProps = {
  onCarClick: (car: CarDetailsData) => void;
  onFindCarClick?: () => void;
};

const RetroCars = ({
  onCarClick,
  onFindCarClick,
}: RetroCarsProps) => {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-unbounded text-3xl font-bold leading-tight text-[#3A3C35] sm:text-4xl md:text-5xl lg:text-6xl">
            Retro cars 1960-1970
          </h2>

          <div className="mt-6 flex items-center gap-5">
            <p className="font-unbounded text-xs text-[#3A3C35] sm:text-sm">
              Vintage retro cars USA
            </p>

            {/* Find a car button */}
            <button
              type="button"
              onClick={onFindCarClick}
              className="group flex w-fit items-center gap-3 rounded-full border border-[#3A3C35] px-5 py-2.5 font-unbounded text-xs text-[#3A3C35] transition-all duration-200 hover:bg-[#3A3C35] hover:text-white sm:text-sm"
            >
              <span>Find a car</span>

              <span className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* Cars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {retroCars.map((car, index) => {
            const isLastCard = index === retroCars.length - 1;

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (isLastCard) {
                    onFindCarClick?.();
                  } else {
                    onCarClick(car);
                  }
                }}
                className="group relative block aspect-[960/541] w-full overflow-hidden rounded-[24px] bg-gray-200 text-left"
              >
                <img
                  src={car.image}
                  alt={isLastCard ? "All classic cars" : car.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                  {/* First 5 Cards */}
                  {!isLastCard && (
                    <>
                      <p className="mb-1 font-unbounded text-sm font-normal sm:text-base">
                        {car.price}
                      </p>

                      <h3 className="font-unbounded text-base font-medium sm:text-lg md:text-xl">
                        {car.name}
                      </h3>
                    </>
                  )}

                  {/* Last Card */}
                  <div className={`${isLastCard ? "" : "mt-4"} flex flex-wrap items-center gap-2`}>
                    <span className="flex items-center gap-3 rounded-full bg-white px-4 py-2 font-unbounded text-[10px] font-medium text-black sm:px-5 sm:py-2.5 sm:text-xs">
                      <span>{isLastCard ? "All cars" : "Rent"}</span>

                      <span className="text-sm">
                        ↗
                      </span>
                    </span>

                    <span className="rounded-full border border-white px-4 py-2 font-unbounded text-[10px] text-white sm:px-5 sm:py-2.5 sm:text-xs">
                      {isLastCard ? "22 cars" : car.miles}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RetroCars;

