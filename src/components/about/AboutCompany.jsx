import AboutHero from './sections/AboutHero';
import WhoWeAre from './sections/WhoWeAre';
import MissionVision from './sections/MissionVision';
import WorkProcess from './sections/WorkProcess';
import Values from './sections/Values';
import WhyChooseUs from './sections/WhyChooseUs';
import CallToAction from './sections/CallToAction';
import { motion } from 'motion/react';

const AboutPage = () => {
   return (
      <main className="space-y">
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
