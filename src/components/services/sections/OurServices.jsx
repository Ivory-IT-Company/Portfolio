import { serviceList } from './data/data';

const OurServices = () => {
   return (
      <div className="flex flex-col">
         <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="text-6xl mb-6">
               Our <span>Services</span>
            </h1>
            <span className="text-xl lg:text-2xl mb-8  max-w-4xl text-center p-2">
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
                     className="relative flex flex-col text-center items-center bg-slate-600 min-h-full px-6 py-6 border border-gray-600 rounded-xl ">
                     <div className="absolute top-0.5 left-0.5 mt-1.5 size-auto ml-2 p-2 border rounded-xl  max-sm:hidden">
                        {service.icon ?? idx + 1}
                     </div>
                     <h1 className="font-bold text-cyan-200 font-mono text-xl sm:text-2xl mb-2.5">
                        {service.name}
                     </h1>
                     <span className=" text-lg/7 font-mono ">
                        {service.shortDesc}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default OurServices;
