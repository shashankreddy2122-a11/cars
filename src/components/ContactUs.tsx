import { useState } from "react";
import { X } from "lucide-react";

const ContactUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="relative w-full bg-white">
      {/* CONTACT SECTION */}
      <section className="px-4 pb-0 pt-12 sm:px-6 sm:pt-16 md:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          {/* CONTACT CONTENT */}
          <div className="flex w-full flex-col items-start gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
            {/* LEFT SIDE */}
            <div>
              <h1 className="font-unbounded text-4xl font-bold leading-tight text-[#3A3C35] sm:text-5xl md:text-6xl lg:text-7xl">
                Contacts
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex w-full flex-col items-start md:ml-auto md:w-fit">
              {/* PHONE */}
              <p className="font-unbounded text-sm font-bold leading-relaxed text-[#3A3B35] sm:text-base">
                +1 (701) 581-1331
              </p>

              {/* ADDRESS */}
              <p className="mt-5 font-unbounded text-xs font-normal leading-6 text-[#3A3B35] sm:text-sm">
                161 Trumpeter Ave, Soldotna, Alaska
              </p>

              {/* SUBMIT APPLICATION BUTTON */}
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group mt-7 flex w-fit items-center gap-2 rounded-full border border-[#3A3C35] bg-[#3A3C35] px-5 py-2.5 font-unbounded text-[10px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#3A3C35] sm:text-xs"
              >
                <span>Submit your application</span>
              </button>
            </div>
          </div>

          {/* CONTACT IMAGE */}
          <div className="mt-12 w-full sm:mt-16 md:mt-24">
            <img
              src="/assets/W.png"
              alt="Contact"
              className="h-[300px] w-full object-cover sm:h-[400px] md:h-[600px] lg:h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* APPLICATION POPUP */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 sm:px-6"
          onClick={() => setIsPopupOpen(false)}
        >
          {/* POPUP BOX */}
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[12px] bg-white px-5 py-7 shadow-2xl sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-11"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              aria-label="Close contact form"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#3A3C35] transition-all duration-200 hover:bg-[#3A3C35] hover:text-white sm:right-5 sm:top-5"
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            {/* POPUP HEADING */}
            <div className="mb-7 pr-10 sm:mb-8">
              <h2 className="font-unbounded text-xl font-bold leading-tight text-[#3A3C35] sm:text-2xl md:text-3xl">
                Connect With Us
              </h2>
            </div>

            {/* FORM */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsPopupOpen(false);
              }}
              className="w-full"
            >
              {/* NAME + SURNAME */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border-b border-[#3A3C35] bg-transparent px-0 py-3 font-unbounded text-xs text-[#3A3C35] outline-none placeholder:text-[#3A3C35] focus:border-black sm:text-sm"
                />

                <input
                  type="text"
                  placeholder="Surname"
                  required
                  className="w-full border-b border-[#3A3C35] bg-transparent px-0 py-3 font-unbounded text-xs text-[#3A3C35] outline-none placeholder:text-[#3A3C35] focus:border-black sm:text-sm"
                />
              </div>

              {/* PHONE + EMAIL */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

{/* PHONE */}
<div className="flex items-center border-b border-[#3A3C35]">
  {/* INDIA FLAG IMAGE */}
  <div className="shrink-0 border-r border-gray-300 py-3 pr-3">
    <img
      src="/assets/C.png"
      alt="India"
      className="h-[15px] w-[22px] object-cover"
    />
  </div>

  {/* PHONE INPUT */}
  <input
    type="tel"
    placeholder="Phone number"
    required
    className="min-w-0 flex-1 bg-transparent px-3 py-3 font-unbounded text-xs text-[#3A3C35] outline-none placeholder:text-[#3A3C35] sm:text-sm"
  />
</div>

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b border-[#3A3C35] bg-transparent px-0 py-3 font-unbounded text-xs text-[#3A3C35] outline-none placeholder:text-[#3A3C35] focus:border-black sm:text-sm"
                />
              </div>

              {/* COMMENT */}
              <div className="mt-5">
                <textarea
                  placeholder="Comment"
                  rows={4}
                  required
                  className="w-full resize-none border-b border-[#3A3C35] bg-transparent px-0 py-3 font-unbounded text-xs text-[#3A3C35] outline-none placeholder:text-[#3A3C35] focus:border-black sm:text-sm"
                />
              </div>

              {/* CONTACT BUTTON + PRIVACY CHECKBOX */}
              <div className="mt-7 flex items-center gap-4">
                {/* CONTACT BUTTON */}
                <button
                  type="submit"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-[#3A3C35] px-5 py-3 font-unbounded text-[9px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-black sm:px-6 sm:text-xs"
                >
                  <span>Contact me</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>

                {/* PRIVACY CHECKBOX */}
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    required
                    className="h-3.5 w-3.5 shrink-0 accent-[#3A3C35]"
                  />

                  <span className="font-unbounded text-[8px] leading-4 text-gray-400 sm:text-[9px]">
                    I agree with the{" "}
                    <span className="underline underline-offset-2">
                      privacy policy
                    </span>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactUs;

