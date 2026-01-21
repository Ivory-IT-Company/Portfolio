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
            <h2 className="text-4xl font-serif mb-4">Our Work Cycle</h2>
            <p className="text-lg leading-relaxed ">
               At Ivory, we follow a strict work cycle for every project,
               demonstrating our dedication through each required phase. Every
               project is unique to us, and we tailor each phase to meet its
               specific needs.
            </p>
         </div>
         <motion.div className="flex flex-col gap-5 h-fit ">
            {steps.map((step, idx) => (
               <motion.span
                  className="max-sm:text-xl text-2xl"
                  initial={{ visibility: false, opacity: 0 }}
                  whileHover={{
                     scaleX: 1.1,
                     transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  key={idx}>
                  {step}
               </motion.span>
            ))}
         </motion.div>
      </section>
   );
};

export default WorkProcess;
