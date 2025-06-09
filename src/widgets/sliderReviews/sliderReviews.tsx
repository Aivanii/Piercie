import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const slides = [
  {
    text: "Piercie redefined my piercing experience! The studio is immaculate, and the staff's expertise is unmatched. My new piercing healed beautifully, all thanks to their modern techniques. Highly recommend anyone in London looking for a safe and stylish piercing!",
    author: "Sophie Turner",
  },
  {
    text: "I had an exceptional experience at Piercie! The staff was professional, and the studio's atmosphere was welcoming. My piercing process was smooth and pain-free, thanks to their state-of-the-art techniques. I couldn't be happier with the result!",
    author: "Emily Green",
  },
  {
    text: "Piercie exceeded my expectations! From the moment I walked in, I felt at ease. The team's professionalism and precision made the entire experience stress-free. My piercing healed quickly and looks fabulous. Highly recommend for anyone seeking quality piercings in London!",
    author: "Alex Martin",
  },
];

const SliderReviews = () => {
  return (
    <section>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        customTransition={"all .69s ease-in-out"}
        className="w-dvw max-w-[1920px] m-auto mt-12 md:mt-40 pb-20"
      >
        {slides.map((elem) => (
          <div
            key={elem.author}
            className="max-w-[1280px] m-auto 
        flex flex-col gap-6 px-20"
          >
            <h3 className="jost-styles font-semibold text-2xl md:text-3xl">{elem.text}</h3>
            <span className="jost-styles">- {elem.author}</span>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default SliderReviews;
