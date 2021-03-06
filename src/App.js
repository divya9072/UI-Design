import "./App.css";
import Facts from "./components/facts";
import Features from "./components/features";
import FeaturesIntro from "./components/featuresintro";
import Footer from "./components/footer";
import Header from "./components/header";
import Headerupp from "./components/headerup";
import Headerup from "./components/headerup";
import Logo from "./components/logo";
import Map from "./components/map";
import Offer from "./components/offer";
import Price from "./components/price";
import Progress from "./components/progress";
import Purchase from "./components/purchase";
import Sample from "./components/sample";
import Slider from "./components/Slider";
import Team from "./components/team";

function App() {
  return (
    <>
      <Header />
      <Offer />
      <Features />
      <FeaturesIntro />
      <Progress />
      <Sample />
      <Facts />
      <Team />
      <Slider />
      <Price />
      <Purchase />
      <Logo />
      <Map />
      <Footer />
    </>
  );
}

export default App;
