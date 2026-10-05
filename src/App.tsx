import { useState } from "react";
import Header from "./components/Header";
import RetroCars from "./components/RetroCars";
import AboutNumbers from "./components/AboutNumbers";
import Services from "./components/Services";
import Shipping from "./components/Shipping";
import WarrantyPurchase from "./components/WarrantyPurchase";
import Financing from "./components/Financing";
import FAQ from "./components/FAQ";
import WhereToFindUs from "./components/WhereToFindUs";
import Footer from "./components/Footer";
import Cars from "./components/Cars";
import AboutUs from "./components/AboutUs";
import CarDetails, { type CarDetailsData } from "./components/CarDetails";
import ContactUs from "./components/ContactUs";

type Page =
  | "home"
  | "cars"
  | "about"
  | "services"
  | "shipping"
  | "warranty"
  | "financing"
  | "contact"
  | "details";

type CarSource = "home" | "cars";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedCar, setSelectedCar] = useState<CarDetailsData | null>(null);
  const [carSource, setCarSource] = useState<CarSource>("home");

  /* Single function: changes page, clears selected car, scrolls to top */
  const goTo = (newPage: Page, car: CarDetailsData | null = null) => {
    setPage(newPage);
    setSelectedCar(car);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------- NAVIGATION ---------- */
  const handleHomeClick = () => goTo("home");
  const handleCarsClick = () => goTo("cars");
  const handleAboutClick = () => goTo("about");
  const handleServicesClick = () => goTo("services");
  const handleShippingClick = () => goTo("shipping");
  const handleWarrantyClick = () => goTo("warranty");
  const handleFinancingClick = () => goTo("financing");
  const handleContactClick = () => goTo("contact");

  /* Back buttons on Shipping / Warranty / Financing pages */
  const handleServicesBack = () => goTo("services");

  /* ---------- CAR DETAILS ---------- */
  const openCarDetails = (car: CarDetailsData, source: CarSource) => {
    setCarSource(source);
    goTo("details", car);
  };

  const handleRetroCarClick = (car: CarDetailsData) =>
    openCarDetails(car, "home");

  const handleCarsPageCarClick = (car: CarDetailsData) =>
    openCarDetails(car, "cars");

  const handleCarDetailsBack = () =>
    goTo(carSource === "cars" ? "cars" : "home");

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header
        onCarsClick={handleCarsClick}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onServicesClick={handleServicesClick}
        onContactClick={handleContactClick}
      />

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <RetroCars
            onCarClick={handleRetroCarClick}
            onFindCarClick={handleCarsClick}
          />
          <AboutNumbers />
          <Services
            onShippingClick={handleShippingClick}
            onWarrantyClick={handleWarrantyClick}
            onFinancingClick={handleFinancingClick}
          />
          <FAQ />
          <WhereToFindUs />
        </>
      )}

      {/* CARS PAGE */}
      {page === "cars" && <Cars onCarClick={handleCarsPageCarClick} />}

      {/* ABOUT US PAGE */}
      {page === "about" && (
        <>
          <AboutUs />
          <FAQ />
        </>
      )}

      {/* SERVICES PAGE */}
      {page === "services" && (
        <Services
          onShippingClick={handleShippingClick}
          onWarrantyClick={handleWarrantyClick}
          onFinancingClick={handleFinancingClick}
        />
      )}

      {/* SHIPPING PAGE */}
      {page === "shipping" && <Shipping onBack={handleServicesBack} />}

      {/* WARRANTY PURCHASE PAGE */}
      {page === "warranty" && <WarrantyPurchase onBack={handleServicesBack} />}

      {/* FINANCING PAGE */}
      {page === "financing" && <Financing onBack={handleServicesBack} />}

      {/* CONTACT US PAGE */}
      {page === "contact" && <ContactUs />}

      {/* CAR DETAILS PAGE */}
      {page === "details" && selectedCar && (
        <CarDetails
          car={selectedCar}
          onBack={handleCarDetailsBack}
          onShippingClick={handleShippingClick}
          onWarrantyClick={handleWarrantyClick}
          onFinancingClick={handleFinancingClick}
        />
      )}

      {/* FOOTER */}
      <Footer
        onCarsClick={handleCarsClick}
        onAboutClick={handleAboutClick}
        onServicesClick={handleServicesClick}
        onContactClick={handleContactClick}
      />
    </div>
  );
}

export default App;