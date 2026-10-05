type FooterProps = {
  onCarsClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onServicesClick?: () => void;
};

const Footer = ({
  onCarsClick,
  onAboutClick,
  onServicesClick,
  onContactClick,
}: FooterProps) => {
  return (
    <footer className="w-full bg-white px-6 pb-10 pt-0 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-black" />

        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:items-start">
          {/* LEFT */}
          <div className="flex flex-col items-start">
            <h2 className="font-unbounded text-sm font-bold tracking-tight text-[#3A3B35] sm:text-base">
              Cars Classic Autotrader
            </h2>

            <p className="mt-4 font-unbounded text-[10px] font-normal text-[#3A3B35] sm:text-xs">
              Privacy Policies
            </p>
          </div>

          {/* CENTER */}
          <div className="grid w-fit grid-cols-2 gap-x-10 gap-y-4 md:justify-self-center">
            {/* CARS */}
            <button
              type="button"
              onClick={onCarsClick}
              className="w-fit text-left font-unbounded text-[10px] font-normal text-[#3A3B35] transition-colors duration-200 hover:text-gray-500 sm:text-xs"
            >
              Cars
            </button>

            {/* ABOUT US */}
            <button
              type="button"
              onClick={onAboutClick}
              className="w-fit text-left font-unbounded text-[10px] font-normal text-[#3A3B35] transition-colors duration-200 hover:text-gray-500 sm:text-xs"
            >
              About Us
            </button>

            {/* HOW TO RESTART */}
             <button
              type="button"
              onClick={onServicesClick}
              className="w-fit text-left font-unbounded text-[10px] font-normal text-[#3A3B35] transition-colors duration-200 hover:text-gray-500 sm:text-xs"
            >
              Services
            </button>

            {/* CONTACTS */}
            <button
              type="button"
              onClick={onContactClick}
              className="w-fit text-left font-unbounded text-[10px] font-normal text-[#3A3B35] transition-colors duration-200 hover:text-gray-500 sm:text-xs"
            >
              Contacts
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:ml-auto">
            <p className="font-unbounded text-xs font-normal text-[#3A3B35] sm:text-sm">
              +1 (701) 581-1331
            </p>

            <p className="mt-3 font-unbounded text-[9px] font-normal leading-5 text-[#3A3B35] sm:text-[10px]">
              161 Trumpeter Ave, Soldotna, Alaska
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10">
          <p className="font-unbounded text-[9px] font-normal text-gray-400 sm:text-[10px]">
            © Cars Classic Autotrader 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
