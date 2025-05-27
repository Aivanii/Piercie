import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";
import SliderOurWorks from "./widgets/sliderOurWorks/sliderOurWorks";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CompaniesScroll />
      <OurSkills />
      <SliderOurWorks />
    </>
  );
}

export default App;
