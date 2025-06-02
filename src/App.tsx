import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";
import SliderOurWorks from "./widgets/sliderOurWorks/sliderOurWorks";
import Services from "./widgets/services/services";
import SliderReviews from "./widgets/sliderReviews/sliderReviews";
import Contacts from "./widgets/contacts/contacts";

function App() {
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
    </>
  );
}

export default App;
