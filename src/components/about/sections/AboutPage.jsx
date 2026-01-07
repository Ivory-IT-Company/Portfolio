import AboutHero from './sections/AboutHero';
import WhoWeAre from './sections/WhoWeAre';
import MissionVision from './sections/MissionVision';
import WorkProcess from './sections/WorkProcess';
import Values from './sections/Values';
import WhyChooseUs from './sections/WhyChooseUs';
import CallToAction from './sections/CallToAction';

const AboutPage = () => {
   return (
      <main className="space-y-24">
         <AboutHero />
         <WhoWeAre />
         <MissionVision />
         <WorkProcess />
         <Values />
         <WhyChooseUs />
         <CallToAction />
      </main>
   );
};

export default AboutPage;
