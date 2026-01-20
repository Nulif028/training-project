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
import CustomerReview from "./components/CustomerReview";
import PricingSection from "./components/PricingSection";
import GallerySection from "./components/GallerySection";
import NewsUpdatesPage from "./components/NewsUpdatesPage";
import FooterA from "./components/FooterA";


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
      <CustomerReview />
      <PricingSection />
      <GallerySection />
      <NewsUpdatesPage />
      <FooterA />
    </>
  );
}