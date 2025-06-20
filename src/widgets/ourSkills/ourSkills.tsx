const OurSkills = () => {
  return (
    <section>
      <div
        className="bg-[#232321] w-dvw max-w-[1920px] m-auto
      flex items-center justify-center flex-col"
      >
        <div
          className="flex justify-center items-center flex-col
        w-full p-12 pt-12 md:pt-30"
        >
          <h2
            className="font-bold text-4xl jost-styles text-white w-full text-center"
            data-aos="fade-up"
          >
            Advanced Earings Crafting
          </h2>
          <div className="flex flex-col mt-6 gap-4 md:flex-row lg:gap-8">
            <div className="relative" data-aos="fade-up" data-aos-delay="500">
              <img
                className="h-144 w-100 object-cover relative"
                src="https://media.gettyimages.com/id/1500832940/photo/pharmacist-uses-a-specialized-piercing-gun-to-create-a-new-earlobe-piercing.jpg?b=1&s=2048x2048&w=0&k=20&c=zQxj1pAFEc2SPNaD3Oq-WwJ8JUXT3Xj5SdFZGrcq4wE="
                alt="Pharmacist uses a specialized piercing gun to create a new earlobe piercing"
              />
              <div
                className="absolute w-full bottom-0 -transform-y-[50%]
            bg-[#000000b5] p-6"
              >
                <p className="jost-styles text-3xl font-bold text-white">
                  Custom Piercing Consultation
                </p>
                <p className="jost-styles text-white font-light mt-2">
                  Receive personalized advice and design ideas to achieve the
                  perfect piercing tailored for you.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-delay="600">
              <img
                className="h-144 w-100 object-cover relative"
                src="https://media.gettyimages.com/id/1161011234/photo/body-piercing-background-jewelry-rings-puncturing-implants-blurry-background.jpg?b=1&s=2048x2048&w=0&k=20&c=ayeqKfnI6GOKyfRGZVWpOttu7PQDCaSAo9VCOduF7Ek="
                alt="Body piercing background jewelry rings puncturing implants | Blurry Background"
              />
              <div
                className="absolute w-full bottom-0 -transform-y-[50%]
            bg-[#000000b5] p-6"
              >
                <p className="jost-styles text-3xl font-bold text-white">
                  High-Quality Jewelry Selection
                </p>
                <p className="jost-styles text-white font-light mt-2">
                  Choose from a curated collection of premium jewelry suitable
                  for any piercing style.
                </p>
              </div>
            </div>
            <div className="relative m-auto" data-aos="fade-up" data-aos-delay="700">
              <img
                className="h-144 w-100 object-cover relative m-auto"
                src="https://media.gettyimages.com/id/1367116547/photo/cropped-photo-of-a-smiling-woman-patient-getting-ear-piercing-procedure-by-a-specialist-in.jpg?b=1&s=2048x2048&w=0&k=20&c=AUiyi4ihJ332LWMI2Ns-uGNUxtLy6hSe1_eO7dVT0Vc="
                alt="Cropped photo of a smiling woman patient getting ear piercing procedure by a specialist in medical gloves in the cosmetologist cabinet."
              />
              <div
                className="absolute w-full bottom-0 -transform-y-[50%]
            bg-[#000000b5] p-6"
              >
                <p className="jost-styles text-3xl font-bold text-white">
                  Expert Piercing Aftercare
                </p>
                <p className="jost-styles text-white font-light mt-2">
                  Get professional guidance on caring for your new piercing to
                  ensure optimal healing and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-center items-center w-full p-12 md:pt-20
      gap-20"
          data-aos="fade-up"
        >
          <img
            src="https://media.gettyimages.com/id/1278771818/photo/london-punk-scene-portrait-of-one-male-punker.jpg?b=1&s=2048x2048&w=0&k=20&c=o2snkeAhZXHsb_JMzLc-RA8FmaDpFGNkITaQYnvY0jA="
            alt="London Punk scene, portrait of one male punker."
            className="w-80 md:w-1/2 max-w-xl aspect-square object-cover m-auto"
          />
          <div className="md:w-1/2 -mt-12 md:mt-0 flex flex-col justify-between h-full gap-4">
            <h2 className="font-bold text-4xl jost-styles text-white w-full">
              Elevating Piercing Artistry in London
            </h2>
            <p className="jost-styles text-white font-normal mt-2 text-lg">
              At Piercie, located in the heart of London, we specialize in
              modern piercing techniques that blend precision with creativity.
              Our experienced team is dedicated to providing a safe and
              welcoming environment, ensuring each client receives a
              personalized experience. By using state-of-the-art equipment and
              adhering to the highest hygiene standards, Piercie transforms body
              art into a distinctive form of self-expression. Step into our
              studio and discover the perfect piece to complement your unique
              style.
            </p>
            <button
              className="p-4 bg-[#E5AF24] text-center hover:bg-[#D09F23] duration-150 cursor-pointer
          text-black w-fit"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
