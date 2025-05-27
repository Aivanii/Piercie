import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";
import Slider from "./widgets/slider/slider";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CompaniesScroll />
      <OurSkills />
      <Slider />
    </>
  );
}

export default App;
