const MainScreen = () => {
  return (
    <section className="max-w-[1920px] w-dvw">
      <div className="max-w-[1920px] w-dvw m-auto min-h-96 relative">
        <div className="max-w-[1920px] w-dvw m-auto min-h-96 relative">
          <img
            className="object-cover relative h-180 
            m-auto w-dvw max-w-[1920px]
          "
            src="./young-woman-doing-piercing-at-beauty-studio-salon.jpeg"
            alt="background"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#130e03] opacity-60"></div>
        </div>
        <div>
          <div
            className="absolute top-1/2 left-1/12 -translate-y-1/2 
      text-white md:w-3/7"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-5xl jost-styles md:text-7xl">
                Advanced Piercing Techniques Available
              </h1>
              <p className="font-normal text-xl jost-styles">
                Experience cutting-edge piercing techniques at Piercie's, your
                London destination for modern body art excellence and safety.
              </p>
              <a
                href="#contacts-section"
                className="p-4 bg-[#E5AF24] text-center hover:bg-[#D09F23] duration-150 cursor-pointer
          text-black w-fit"
              >
                Explore piercing options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
