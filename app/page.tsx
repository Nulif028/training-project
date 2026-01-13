import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeIconsRow from "./components/ThreeIconsRow";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Gallery from "./components/ImageSection";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Header/>
      <Navbar />
      <Hero />
      <ThreeIconsRow />
      <Services />
      <Courses />
      <Gallery />
      <PreFooter />
      <Footer />
    </>
  );
}