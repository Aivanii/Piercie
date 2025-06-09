import { useRef, useState } from "react";

interface formData {
  name: string;
  email: string;
  message: string;
}

const Contacts = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    message: "",
  });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const nameInputErrorTxtRef = useRef(null);
  const emailInputErrorTxtRef = useRef(null);
  const messageInputErrorTxtRef = useRef(null);

  const changeFormData = (event) => {
    const { name, value } = event.target;
    if (!name || !value) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    clearIncorrectTexts();

    let isFormValid: boolean = true;

    if (!isNameValid()) {
      isFormValid = false;
      setIncorrectNameText();
    }

    if (!isEmailValid()) {
      isFormValid = false;
      setIncorrectEmailText();
    }

    if (!isMessageValid()) {
      isFormValid = false;
      setIncorrectMessageText();
    }

    if (isFormValid) {
      submitValidatedForm();
    }
  };

  const isNameValid = () => {
    return formData.name.trim().length > 1;
  };

  const setIncorrectNameText = () => {
    if (!nameInputErrorTxtRef?.current) return;
    nameInputErrorTxtRef.current.textContent = "* Incorrect Name";
  };

  const isEmailValid = () => {
    const email_regexp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return email_regexp.test(formData.email);
  };

  const setIncorrectEmailText = () => {
    if (!emailInputErrorTxtRef?.current) return;
    emailInputErrorTxtRef.current.textContent = "* Incorrect Email";
  };

  const isMessageValid = () => {
    return formData.message.trim().length > 20;
  };

  const setIncorrectMessageText = () => {
    if (!messageInputErrorTxtRef?.current) return;
    messageInputErrorTxtRef.current.textContent = "* Incorrect Message";
  };

  const clearIncorrectTexts = () => {
    nameInputErrorTxtRef.current.textContent = "";
    emailInputErrorTxtRef.current.textContent = "";
    messageInputErrorTxtRef.current.textContent = "";
  };

  const submitValidatedForm = () => {
    alert("Form was successfully submited. Thank you!");
    location.reload();
  };

  return (
    <section id="contacts-section">
      <div className="bg-[#22211F] py-10 mt-20 md:mt-40 w-dvw max-w-[1920px] m-auto text-white">
        <div className="flex flex-col flex-wrap justify-around items-start md:flex-row">
          <div
            className="md:w-1/3 jost-styles text-white
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
          <form
            className="md:w-1/3 grid grid-cols-2 gap-4
        px-4 md:px-0"
            onSubmit={handleFormSubmit}
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="bg-[#2E2E2B] w-full p-2"
                onChange={changeFormData}
                ref={nameInputRef}
              />
              <span ref={nameInputErrorTxtRef} className="text-red-600"></span>
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                autoComplete="email"
                className="bg-[#2E2E2B] w-full p-2"
                name="email"
                onChange={changeFormData}
                ref={emailInputRef}
              />
              <span ref={emailInputErrorTxtRef} className="text-red-600"></span>
            </div>
            <div className="col-span-2">
              <label>Message</label>
              <textarea
                className="w-full min-h-48 bg-[#2E2E2B] p-2"
                name="message"
                onChange={changeFormData}
                ref={messageInputRef}
              />
              <span
                ref={messageInputErrorTxtRef}
                className="text-red-600"
              ></span>
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
