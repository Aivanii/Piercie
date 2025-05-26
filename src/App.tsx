import Header from "./widgets/header/header";
import MainScreen from "./widgets/mainScreen.tsx/mainScreen";
import CompaniesScroll from "./widgets/companiesScroll/companiesScroll";
import OurSkills from "./widgets/ourSkills/ourSkills";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CompaniesScroll/>
    <OurSkills/>
    </>
  );
}

export default App;
