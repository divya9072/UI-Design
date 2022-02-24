
import "./App.css";
import Facts from "./components/facts";
import Features from "./components/features";
import FeaturesIntro from "./components/featuresintro";
import Header from "./components/header";
import Offer from "./components/offer";
import Progress from "./components/progress";
import Sample from "./components/sample";
import Slider from "./components/Slider";
import Team from "./components/team";
import Try from "./components/try";

function App() {
  return (
    <>
      {/* <Header />
      <Offer />
      <Features />
      <FeaturesIntro />
      <Progress />
      <Sample /> */}
      <Facts/>
      <Team/>
      <Slider/>
      {/* <Try/> */}
    </>
  );
}

export default App;
