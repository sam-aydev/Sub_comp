import FirstHero from "../components/FirstHero";
import NavBar from "@/components/Navbar";
import SecondHero from "@/components/SecondHero";
import Footer from "@/components/Footer";
import OfferComp from "@/components/OfferPage";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
import Newsletter from "@/components/Newsletter";
import Skillset from "../components/Skillset";

export default function Home() {
  return (
    <div>
      <NavBar />
      <FirstHero />
      <SecondHero />
      <Skillset />
      <OfferComp />
      <CaseStudy />
      <Testimonials />
      <Pricing />
      <Sponsors />
      <Newsletter />
      <Footer />
    </div>
  );
}
