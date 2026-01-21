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
                  // transition={{}}
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
         {/* <div>
            <div className="relative w-full h-125">
               <svg
                  // key={idx}
                  className="absolute pointer-events-none"
                  style={{
                     left: 0,
                     top: 50,
                     width: 500,
                     height: 600,
                  }}>
                  {' '}
                  <polyline
                     points="0,0 0,370 480,370"
                     stroke="gray"
                     strokeWidth={2}
                     fill="gray"
                  />
               </svg>

               {steps.map((itm, idx) => (
                  <motion.span
                     key={idx}
                     initial={{ opacity: 0, scale: 0.1 }}
                     whileInView={{ opacity: 1, scale: 1.35 }}
                     whileHover={{
                        scale: 1.55,
                        color: 'oklch(60.6% 0.25 292.717)',
                     }}
                     className=" text-gray-600 dark:text-gray-400 "
                     // style={{ left: idx * 130, top: idx * 100 }}
                  >
                     {itm}
                  </motion.span>
               ))}
            </div>
         </div> */}
      </section>
   );
};

export default WorkProcess;
