import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 2,
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
    src: "https://media.gettyimages.com/id/638501080/photo/hipster-girl-with-blond-hair-and-piercing-over-pink-background.jpg?b=1&s=2048x2048&w=0&k=20&c=AVkOv6CeKXymYVxM1srMJt0bmq_JlxKwqhmn9mJzq1M=",
    alt: "Hipster girl with blond hair and piercing over pink background",
  },
  {
    src: "https://media.gettyimages.com/id/1583171571/photo/ear-piercings-photos-helix-piercing-ear-rings.jpg?b=1&s=2048x2048&w=0&k=20&c=75AlxbRMTP0aIABj5jUo2Lprw0bAQduZlEvK1v7hzko=",
    alt: "ear piercings photos.Helix piercing.Ear rings",
  },
  {
    src: "https://media.gettyimages.com/id/1304153994/photo/portrait-of-tattooed-young-caucasian-woman-with-piercing-looking-at-camera-while-posing.jpg?b=1&s=2048x2048&w=0&k=20&c=EEnVLN6dreDhCwvt7806eulDA7T2fLEYBRacDH-Exn4=",
    alt: "Portrait of tattooed young caucasian woman with piercing looking at camera while posing isolated over gray background",
  },
  {
    src: "https://media.gettyimages.com/id/1960660993/photo/close-up-of-a-person-with-a-nose-piercing.jpg?b=1&s=2048x2048&w=0&k=20&c=62kX7eWRyxudqUU63yd-w9O_z9WC_Py76OAQxqFThuw=",
    alt: "Close-Up of a Person With a Nose Piercing",
  },
  {
    src: "https://media.gettyimages.com/id/1404300737/photo/young-woman-doing-piercing-at-beauty-studio-salon.jpg?b=1&s=2048x2048&w=0&k=20&c=bP6SjRVytrjQP3ow6yhPgnh0JA_9w6bVToaxPpN-23Q=",
    alt: "Young woman doing piercing at beauty studio salon.",
  },
  {
    src: "https://media.gettyimages.com/id/504827576/photo/girl-with-piercings-and-tattoos.jpg?b=1&s=2048x2048&w=0&k=20&c=Zx_UY9LDMOIRzu0VJy6fjb0HxabXgdd9v_VkhztjmbM=",
    alt: "girl with piercings and tattoos",
  },
];

const SliderOurWorks = () => {
  return (
    <section>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        customTransition={"all .69s ease-in-out"}
      >
        {slides.map((elem, index) => (
          <img
            src={elem.src}
            key={`${elem.src}-${index}`}
            alt={elem.alt}
            className="w-full h-full aspect-video p-16 object-cover"
          />
        ))}
      </Carousel>
    </section>
  );
};
export default SliderOurWorks;
