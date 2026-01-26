import { motion } from 'motion/react';
import { serviceList } from './data/data';

const OurServices = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className="flex flex-col">
         <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="text-6xl mb-6 text-[#5FA9F8]">
               Our <span>Services</span>
            </h1>
            <span className="text-xl lg:text-2xl text-gray-300 mb-8 font-mono max-w-4xl text-center p-2">
               At Ivory, we provide comprehensive web design, development, and
               digital solutions focused on delivering exceptional client
               satisfaction. From stunning UI/UX to robust backend systems and
               ongoing support, every service prioritizes your success and
               seamless user experiences.
            </span>
         </div>

         <div>
            <div className="grid md:grid-cols-2 gap-7">
               {serviceList.map((service, idx) => (
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 0.7,
                        ease: 'easeIn',
                        type: 'spring',
                        stiffness: 10,
                        damping: 3,
                     }}
                     whileHover={{
                        y: -6,
                        scale: 1.02,
                        boxShadow:
                           '0 0 0 3px rgba(56,189,248,0.4), 0 10px 30px rgba(0,0,0,0.4)',
                        background: '#121B2F',
                     }}
                     key={idx}
                     //border border-gray-700 bg-[#0F1624]
                     className="sm:relative flex flex-col text-center items-center bg-[#0F1624]/50  min-h-full px-2 sm:px-6 py-6 rounded-md ">
                     {/* bg-[#1a1a1a] */}
                     <div className="absolute top-0.5 left-0.5 mt-1.5 size-auto ml-2 p-1.5 border border-[#4d4d4d] hover:rotate-10 rounded-md max-sm:hidden">
                        {service.icon ?? idx + 1}
                     </div>
                     <h1 className="font-bold text-slate-100 font-mono text-2xl mb-2.5">
                        {service.name}
                     </h1>
                     <span className=" sm:text-lg/7 font-mono text-[#c6cad1]">
                        {service.shortDesc}
                     </span>
                  </motion.div>
               ))}
            </div>
         </div>
      </motion.div>
   );
};

export default OurServices;
