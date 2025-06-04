import "./landing.css";
import Navbar from "@/components/landing-page/navbar";
import Hero from "@/components/landing-page/hero";
import Touch from "@/components/landing-page/touch";
import Experience from "@/components/landing-page/experience";
import Courses from "@/components/landing-page/courses";
import Features from "@/components/landing-page/features";
import Learning from "@/components/landing-page/learning";
import Connect from "@/components/landing-page/connect";
import Footer from "@/components/landing-page/footer";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Touch />
      <Experience />
      <Courses />
      <Features/>
      <Learning />
      <Connect/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
