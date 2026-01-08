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
      <section className="px-6 md:px-28 min-h-64 lg:min-h-[600px] flex flex-col lg:pt-12">
         <h2 className="text-3xl font-serif mb-12 text-center text-gray-400">
            Our Work Cycle
         </h2>
         <div>
            <div className="relative w-full h-[500px]">
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
                     className="absolute text-gray-600 dark:text-gray-400 "
                     style={{ left: idx * 130, top: idx * 100 }}>
                     {itm}
                  </motion.span>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WorkProcess;
