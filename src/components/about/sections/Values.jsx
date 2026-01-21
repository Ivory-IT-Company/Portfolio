import { motion } from 'motion/react';

const values = [
   'Quality over shortcuts',
   'Transparency and trust',
   'Continuous learning',
   'Client-focused solutions',
   'Long-term partnerships',
   'Innovation Edge',
];

const Values = () => {
   return (
      <section className="px-6 md:px-16 pt-4 sm:h-66">
         <motion.h2
            whileHover={{ scaleY: 1.1, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6 }}
    
            className="text-4xl font-bold mb-6 ">
            Our Values
         </motion.h2>
         <ul className="grid sm:grid-cols-2 gap-4 text-gray-200">
            {values.map((value) => (
               <li key={value} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  {value}
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Values;
