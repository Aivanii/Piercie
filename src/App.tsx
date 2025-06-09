import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";
import SliderOurWorks from "./widgets/sliderOurWorks/sliderOurWorks";
import Services from "./widgets/services/services";
import SliderReviews from "./widgets/sliderReviews/sliderReviews";
import Contacts from "./widgets/contacts/contacts";
import Location from "./widgets/location/location";
import Footer from "./widgets/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 650,
      offset: 150,
      delay: 400,
    });
  }, []);

  return (
    <>
      <Header />
      <MainScreen />
      <CompaniesScroll />
      <OurSkills />
      <SliderOurWorks />
      <Services />
      <SliderReviews />
      <Contacts />
      <Location />
      <Footer />
    </>
  );
}

export default App;
