import { FadeIn } from "../../configs/animsSettings";

const MainScreen = () => {
  return (
    <section>
      <div className="max-w-[1920px] m-auto min-h-96 relative">
        <div className="max-w-[1920px] m-auto min-h-96 relative">
          <img
            className="object-cover relative h-220 w-full
          "
            src="./young-woman-doing-piercing-at-beauty-studio-salon.jpeg"
            alt="background"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#130e03] opacity-60"></div>
        </div>
        <div>
          <div
            className="absolute top-1/2 left-1/12 -translate-y-1/2 
      text-white w-3/7"
          >
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-7xl jost-styles">
                Advanced Piercing Techniques Available
              </h1>
              <p className="font-normal text-xl jost-styles">
                Experience cutting-edge piercing techniques at Piercie's, your
                London destination for modern body art excellence and safety.
              </p>
              <a href = "#contacts-section"
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
