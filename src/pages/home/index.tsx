import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";  

const index = () => {
  return (
    <div className="min-h-screen">
       <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default index;
