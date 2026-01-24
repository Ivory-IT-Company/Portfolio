import { motion } from 'motion/react';

const steps = [
   'Discovery & Planning',
   'Design & Architecture',
   'Development',
   'Testing & QA',
   'Deployment & Support',
];

const WorkProcess = () => {
   return (
      <section className="flex sm:items-center gap-6 sm:gap-20 max-sm:flex-col max-sm:justify-center px-6 md:px-14 h-screen sm:h-92 py-6">
         <div className="sm:basis-md">
            <h2 className="text-4xl xl:text-5xl font-serif mb-4 text-[#5FA9F8]">
               Our Work Cycle
            </h2>
            <p className="text-lg xl:text-xl leading-relaxed ">
               At Ivory, we follow a strict work cycle for every project,
               demonstrating our dedication through each required phase. Every
               project is unique to us, and we tailor each phase to meet its
               specific needs.
            </p>
         </div>
         <motion.div className="flex flex-col gap-5 h-fit ">
            {steps.map((step, idx) => (
               <motion.span
                  className="max-sm:text-xl text-2xl hover:underline"
                  initial={{ opacity: 0 / 1, x: 30 * idx }}
                  whileInView={{
                     opacity: 0.95,
                     x: 0,
                     transition: { ease: 'easeOut', duration: 0.5 * idx },
                  }}
                  whileHover={{
                     scaleX: 1.1,
                     transition: {
                        type: 'spring',
                        duration: 0.3,
                        stiffness: 100,
                        damping: 40,
                     },
                  }}
                  transition={{
                     duration: 0.8,
                     delay: 0.1,
                     stiffness: 200,
                     damping: 80,
                  }}
                  key={idx}>
                  {step}
               </motion.span>
            ))}
         </motion.div>
      </section>
   );
};

export default WorkProcess;
