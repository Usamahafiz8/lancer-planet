import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExceptionalDevelopers from "@/components/Landing/ExceptionalDevelopers";
import HeroSection from "@/components/Landing/HeroSection";
import HiringSteps from "@/components/Landing/HiringSteps";
import TechStack from "@/components/Landing/TechStack";
import WeAreGlobal from "@/components/Landing/WeAreGlobal";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Header />
      <HeroSection />
      <ExceptionalDevelopers />
      <HiringSteps />
      <WeAreGlobal />
      {/* <TechStack /> */}
      <Footer />
    </>
  );
}
