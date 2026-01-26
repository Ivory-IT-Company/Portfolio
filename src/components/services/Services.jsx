import OurServices from './sections/OurServices';
import Technologies from './sections/Technologies';

const Services = () => {
   return (
      <>
         <div className="flex items-center justify-center text-center h-150 md:min-h-screen  ">
            <div className="flex flex-col">
               <h1 className="text-5xl 2xl:text-8xl text-[#5FA9F8] mb-1.5">
                  Our Diversified Digital Solutions
               </h1>
               <p className="text-xl font-mono lg:text-2xl 2xl:text-3xl mb-8 leading-relaxed max-w-4xl 2xl:max-w-5xl  mx-auto text-gray-300 p-2">
                  Custom software that scales your business. From full-stack web
                  apps to enterprise systems, we build reliable solutions.
               </p>

               <div className="flex flex-col max-sm:px-5 sm:flex-row gap-4 justify-center">
                  <button className="bg-cyan-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg">
                     Start Your Project
                  </button>
                  <button className="border border-[#4d4d4d] px-10 py-4 rounded-xl text-lg font-semibold hover:px-11 transition-all">
                     View Our Work
                  </button>
               </div>
            </div>
         </div>
         <div className="pt-10 px-4 lg:px-45 2xl:px-90">
            <OurServices />
            <Technologies />
         </div>
      </>
   );
};

export default Services;
