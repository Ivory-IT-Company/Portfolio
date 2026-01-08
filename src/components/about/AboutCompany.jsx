import AboutHero from './sections/AboutHero';
import MissionVision from './sections/MissionVision';
import WorkProcess from './sections/WorkProcess';
import Values from './sections/Values';
import WhyChooseUs from './sections/WhyChooseUs';
import CallToAction from './sections/CallToAction';
import { motion } from 'motion/react';

const AboutPage = () => {
   return (
      <main className="lg:px-44 2xl:px-96">
         <AboutHero />
         <MissionVision />
         <WorkProcess />
         <Values />
         <WhyChooseUs />
         <CallToAction />
      </main>
   );
};

export default AboutPage;
