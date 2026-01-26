import { motion } from 'motion/react';

const AboutHero = () => {
   return (
      <section className="h-screen px-6 md:px-28 flex flex-col justify-center text-center">
         <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#5FA9F8]">
            About Ivory
         </h1>
         <motion.p
            initial={{
               opacity: 0.1,
               y: 40,
            }}
            whileInView={{ opacity: 0.9, y: 10 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            // text-[#E5E7EB]
            className="max-w-7xl font-mono mx-auto text-xl sm:text-3xl  text-gray-300 tracking-wider font-light">
            Ivory is a Nigeria-based software development company focused on
            building high-quality web and mobile solutions for startups and
            growing businesses. We combine strong engineering principles with
            modern technologies to deliver reliable digital products. We build
            modern, scalable digital products that help businesses grow and
            succeed.
         </motion.p>
      </section>
   );
};

export default AboutHero;
