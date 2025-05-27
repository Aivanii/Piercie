import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";
import SliderOurWorks from "./widgets/sliderOurWorks/sliderOurWorks";
import Services from "./widgets/services/services";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CompaniesScroll />
      <OurSkills />
      <SliderOurWorks />
      <Services />
    </>
  );
}

export default App;
