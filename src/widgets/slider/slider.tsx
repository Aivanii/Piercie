import { useState } from "react";
const slides = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIoCexBs7pGA8e0JQnaE0foh1emnFead--A&s",
    alt: "empty alt",
  },
];

const Slider = () => {
  const [currentIndexSlide, setCurrentIndexSlide] = useState<number>(0);

  const nextSlide = () => {
    if (currentIndexSlide + 1 <= slides.length - 1) {
      setCurrentIndexSlide(currentIndexSlide + 1);
    } else{
      setCurrentIndexSlide(0);
    }
  };

  const perviousSlide = () => {
    if (currentIndexSlide - 1 >= 0) {
      setCurrentIndexSlide(currentIndexSlide - 1);
    } else{
        setCurrentIndexSlide(slides.length-1);
    }
  };

  return (
    <div className="mt-20 w-dvw max-w-[1920px] m-auto relative pb-12">
      <div className="flex items-center justify-center gap-8">
        {slides.map((elem) => (
          <div key={elem.src} className="shrink-0">
            <img
              src={elem.src}
              alt={elem.alt}
              className="shrink-0 h-96 aspect-video object-cover"
            ></img>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 flex justify-between items-center h-full w-full p-6">
        {/* left */}
        <div className="z-50 w-8 h-8 flex justify-center items-center cursor-pointer"
        onClick={perviousSlide}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 32C19.1645 32 22.2579 31.0616 24.8891 29.3035C27.5203 27.5454 29.5711 25.0466 30.7821 22.1229C31.9931 19.1993 32.3099 15.9823 31.6926 12.8786C31.0752 9.77486 29.5513 6.92394 27.3137 4.6863C25.0761 2.44866 22.2251 0.924803 19.1214 0.30744C16.0177 -0.309923 12.8007 0.00693079 9.87706 1.21793C6.95344 2.42893 4.45459 4.4797 2.69649 7.11088C0.938383 9.74207 -1.10321e-06 12.8355 -8.26558e-07 16C0.0046581 20.242 1.69186 24.309 4.69144 27.3086C7.69101 30.3081 11.758 31.9953 16 32ZM16 3.20001C18.5316 3.20001 21.0063 3.95071 23.1113 5.35719C25.2162 6.76368 26.8568 8.76276 27.8256 11.1017C28.7945 13.4405 29.0479 16.0142 28.554 18.4972C28.0602 20.9801 26.8411 23.2609 25.051 25.051C23.2608 26.8411 20.9801 28.0602 18.4972 28.554C16.0142 29.0479 13.4405 28.7945 11.1016 27.8257C8.76276 26.8569 6.76367 25.2162 5.35719 23.1113C3.95071 21.0064 3.2 18.5316 3.2 16C3.20381 12.6064 4.5536 9.35289 6.95324 6.95325C9.35288 4.55361 12.6064 3.20382 16 3.20001Z"
              fill="white"
            />
            <path
              d="M20.3312 21.2688L15.0624 16L20.3312 10.7312L18.0688 8.46881L10.5376 16L18.0688 23.5312L20.3312 21.2688Z"
              fill="white"
            />
          </svg>
        </div>
        {/* right */}
        <div className="z-50 w-8 h-8 flex justify-center items-center cursor-pointer" 
        onClick={nextSlide}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C12.8355 0 9.74206 0.938383 7.11088 2.69649C4.47969 4.45459 2.42893 6.95344 1.21793 9.87706C0.00692873 12.8007 -0.309925 16.0177 0.307439 19.1214C0.924802 22.2251 2.44865 25.0761 4.68629 27.3137C6.92393 29.5513 9.77486 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9953 11.758 30.3081 7.69101 27.3086 4.69144C24.309 1.69186 20.242 0.00465855 16 0ZM16 28.8C13.4684 28.8 10.9937 28.0493 8.8887 26.6428C6.78375 25.2363 5.14315 23.2372 4.17434 20.8983C3.20554 18.5594 2.95206 15.9858 3.44595 13.5028C3.93984 11.0199 5.15892 8.73914 6.94903 6.94903C8.73915 5.15892 11.0199 3.93984 13.5028 3.44595C15.9858 2.95206 18.5595 3.20554 20.8983 4.17434C23.2372 5.14314 25.2363 6.78375 26.6428 8.8887C28.0493 10.9936 28.8 13.4684 28.8 16C28.7962 19.3936 27.4464 22.6471 25.0468 25.0467C22.6471 27.4464 19.3936 28.7962 16 28.8Z"
              fill="white"
            />
            <path
              d="M11.6688 10.7312L16.9376 16L11.6688 21.2688L13.9312 23.5312L21.4624 16L13.9312 8.4688L11.6688 10.7312Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex justify-center items-center w-full gap-3 mt-12">
        {slides.map((elem, index) => (
          <div
            key={`${elem.src}-slide`}
            className={`w-2 h-2 bg-[#000000d0] rounded-full ${
              currentIndexSlide === index ? "bg-amber-400" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
