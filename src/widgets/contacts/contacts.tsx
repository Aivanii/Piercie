const Contacts = () => {
  return (
    <section id = "contacts-section">
      <div className="bg-[#22211F] py-10 mt-40 w-dvw max-w-[1920px] m-auto text-white">
        <div className="flex flex-wrap justify-around items-start">
          <div
            className="w-1/3 jost-styles text-white
        flex flex-col gap-4 h-full p-4"
          >
            <h3 className="font-semibold text-3xl">
              Get in Touch with Piercie
            </h3>
            <p>
              Contact us for modern piercing techniques at our London location.
              We're here to assist you.
            </p>
          </div>
          <form className="w-1/3 grid grid-cols-2 gap-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                autoComplete="name"
                className="bg-[#2E2E2B] w-full p-2"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                autoComplete="email"
                className="bg-[#2E2E2B] w-full p-2"
              />
            </div>
            <div className="col-span-2">
              <label>Message</label>
              <textarea className="w-full min-h-48 bg-[#2E2E2B] p-2"></textarea>
            </div>
            <button
              className="py-4 bg-[#E5AF24] text-center hover:bg-[#D09F23] duration-150 cursor-pointer
          text-black"
              type="submit"
            >
              Submit Your Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
