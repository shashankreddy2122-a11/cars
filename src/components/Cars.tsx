import { CarDetailsData } from "./CarDetails";

const cars: CarDetailsData[] = [
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
    image: "/assets/R1.png",
    price: "$42,500",
    name: "1966 Jaguar E-Type",
    miles: "19,800 miles",
  },
  {
    image: "/assets/R5.png",
    price: "$55,000",
    name: "1970 Dodge Challenger",
    miles: "12,600 miles",
  },
  {
    image: "/assets/R5.png",
    price: "$47,500",
    name: "1968 Ford Mustang",
    miles: "17,300 miles",
  },
  {
    image: "/assets/R4.png",
    price: "$51,000",
    name: "1969 Chevrolet Corvette",
    miles: "15,800 miles",
  },
  {
    image: "/assets/R1.png",
    price: "$43,500",
    name: "1967 Chevrolet Impala",
    miles: "22,100 miles",
  },
  {
    image: "/assets/R5.png",
    price: "$58,000",
    name: "1970 Plymouth Barracuda",
    miles: "11,900 miles",
  },
  {
    image: "/assets/R3.png",
    price: "$49,500",
    name: "1966 Ford Thunderbird",
    miles: "18,400 miles",
  },
  {
    image: "/assets/R4.png",
    price: "$54,500",
    name: "1969 Pontiac Firebird",
    miles: "14,700 miles",
  },
  {
    image: "/assets/R1.png",
    price: "$46,000",
    name: "1965 Chevrolet Bel Air",
    miles: "20,500 miles",
  },
  {
    image: "/assets/R5.png",
    price: "$59,000",
    name: "1970 Chevrolet Chevelle",
    miles: "13,200 miles",
  },
  {
    image: "/assets/R3.png",
    price: "$44,500",
    name: "1967 Jaguar E-Type",
    miles: "19,100 miles",
  },
  {
    image: "/assets/R4.png",
    price: "$56,500",
    name: "1968 Dodge Charger",
    miles: "15,400 miles",
  },
];

type CarsProps = {
  onCarClick: (car: CarDetailsData) => void;
};

const Cars = ({ onCarClick }: CarsProps) => {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-unbounded text-3xl font-bold leading-tight text-[#3A3C35] sm:text-4xl md:text-5xl lg:text-6xl">
            Our Cars
          </h2>

          <button
            type="button"
            className="group flex w-fit items-center gap-3 rounded-full border border-[#3A3C35] px-5 py-2.5 font-unbounded text-xs text-[#3A3C35] transition-all duration-200 hover:bg-[#3A3C35] hover:text-white sm:text-sm"
          >
            <span>32 Cars</span>
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </button>
        </div>

        {/* CARS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cars.map((car, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onCarClick(car)}
              className="group relative block aspect-[960/541] w-full overflow-hidden rounded-[24px] bg-gray-200 text-left"
            >
              <img
                src={car.image}
                alt={car.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                <p className="mb-1 font-unbounded text-sm font-normal sm:text-base">
                  {car.price}
                </p>

                <h3 className="font-unbounded text-base font-medium sm:text-lg md:text-xl">
                  {car.name}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-3 rounded-full bg-white px-4 py-2 font-unbounded text-[10px] font-medium text-black sm:px-5 sm:py-2.5 sm:text-xs">
                    <span>Rent</span>
                    <span className="text-sm">
                      ↗
                    </span>
                  </span>

                  <span className="rounded-full border border-white px-4 py-2 font-unbounded text-[10px] text-white sm:px-5 sm:py-2.5 sm:text-xs">
                    {car.miles}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;

