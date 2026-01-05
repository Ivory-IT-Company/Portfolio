import React from 'react';
import { serviceList } from './data/data';
const OurServices = () => {
   return (
      <div className="flex flex-col">
         <div className="flex flex-col justify-center items-center mb-16">
            <h1 className="text-6xl mb-6">
               Our <span>Services</span>
            </h1>
            <span className='lg:px-52 text-center text-gray-600 dark:text-gray-400'>
               At Ivory, we provide comprehensive web design, development, and
               digital solutions focused on delivering exceptional client
               satisfaction. From stunning UI/UX to robust backend systems and
               ongoing support, every service prioritizes your success and
               seamless user experiences.
            </span>
         </div>

         <div className="px-4 lg:px-20 xl:px-30">
            <div className="grid md:grid-cols-2 gap-7">
               {serviceList.map((service, idx) => (
                  <div
                     key={idx}
                     className="flex flex-col text-center items-center rounded-tl-lg rounded-tr-lg min-h-full px-6 py-6 border">
                     <img className="w-full" src={service.imgUrl} alt="" />
                     <h1 className="font-bold font-mono text-2xl mb-2.5">
                        {service.name}
                     </h1>
                     <span className="text-gray-400 text-sm/6 text-center">{service.shortDesc}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default OurServices;
