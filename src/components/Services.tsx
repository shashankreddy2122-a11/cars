type ServicesProps = {
  onShippingClick?: () => void;
  onWarrantyClick?: () => void;
  onFinancingClick?: () => void;
};

const services = [
  {
    image: "/assets/S1.png",
    number: "01",
    title: "SHIPPING",
  },
  {
    image: "/assets/S2.png",
    number: "02",
    title: "WARRANTY PURCHASE",
  },
  {
    image: "/assets/S3.png",
    number: "03",
    title: "FINANCING",
  },
];

const Services = ({
  onShippingClick,
  onWarrantyClick,
  onFinancingClick,
}: ServicesProps) => {
  const handleServiceClick = (title: string) => {
    if (title === "SHIPPING") {
      onShippingClick?.();
    }

    if (title === "WARRANTY PURCHASE") {
      onWarrantyClick?.();
    }

    if (title === "FINANCING") {
      onFinancingClick?.();
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading + Button */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Services Heading */}
          <h2 className="font-unbounded text-4xl font-bold leading-none tracking-[-2px] text-[#3A3C35] sm:text-5xl md:text-6xl lg:text-7xl">
            Services
          </h2>

          {/* Submit Application Button */}
          <button
            type="button"
            className="group flex w-fit items-center gap-4 rounded-full border border-[#3A3C35] px-6 py-3 font-unbounded text-xs text-[#3A3C35] transition-all duration-200 hover:bg-[#3A3C35] hover:text-white sm:text-sm"
          >
            <span>Submit your application</span>

            <span className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </button>
        </div>

        {/* Services Images */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const isClickable =
              service.title === "SHIPPING" ||
              service.title === "WARRANTY PURCHASE" ||
              service.title === "FINANCING";

            return (
              <div
                key={service.number}
                onClick={() => handleServiceClick(service.title)}
                className={`group relative aspect-[588/507] w-full overflow-hidden rounded-[10px] bg-gray-200 ${
                  isClickable ? "cursor-pointer" : ""
                }`}
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Service Text */}
                <div className="absolute bottom-6 left-6 text-white sm:bottom-7 sm:left-7">
                  <p className="font-unbounded text-xs font-medium tracking-wide sm:text-sm">
                    {service.number} / {service.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
