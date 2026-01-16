import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeIconsRow from "./components/ThreeIconsRow";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import AchievementSection from "./components/AchievementSection";
import CoursesSection from "./components/CoursesSection";
import LabelCard from "./components/LabelCard";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import ImageSection from "./components/ImageSection";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Header/>
      <Navbar />
      <Hero />
      <ThreeIconsRow />
      <Welcome />
      <Services />
      <AchievementSection />
      <CoursesSection />
      <LabelCard />
      <WhyChooseUs />
      <Courses />
      <ImageSection />
      <PreFooter />
      <Footer />
    </>
  );
}