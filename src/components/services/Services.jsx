import OurServices from './sections/OurServices';
import Technologies from './sections/Technologies';

const Services = () => {
   return (
      <>
         <div className="">
            <div className="flex items-center justify-center text-center h-150 md:min-h-screen  ">
               <div className="flex flex-col">
                  <h1 className="text-5xl lg:text-8xl text-cyan-700 mb-1.5">
                     Our Diversified Digital Solutions
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto p-2">
                     Custom software that scales your business. From full-stack
                     web apps to enterprise systems, we build reliable
                     solutions.
                  </p>

                  <div className="flex flex-col max-sm:px-5 sm:flex-row gap-4 justify-center">
                     <button className="bg-cyan-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg">
                        Start Your Project
                     </button>
                     <button className="border-2 border-gray-300  px-10 py-4 rounded-xl text-lg font-semibold hover:px-11 transition-all">
                        View Our Work
                     </button>
                  </div>
               </div>
            </div>
            <div className="pt-10">
               <OurServices />
               <Technologies />
            </div>
         </div>
      </>
   );
};

export default Services;
