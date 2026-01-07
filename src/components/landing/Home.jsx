import { BriefcaseBusiness, Sparkles } from 'lucide-react';

const Home = () => {
   return (
      <>
         <div className="">
               <div className="flex flex-col justify-center items-center text-center gap-6 max-md:px-2.5 max-h-screen max-xl:h-[980px] xl:h-screen ">
                  {/* md:px-28 */}
                  <div className="flex flex-row gap-0.5 max-md:hidden max-sm:w-fit max-sm:gap-1.5 md:gap-2.5 ">
                     <div className="bg-blue-200 rounded-2xl">
                        <span className="p-1 md:p-2.5 flex gap-0.5 md:gap-1.5 justify-center items-center text-xs md:text-sm text-blue-600 ">
                           <BriefcaseBusiness size={16} />
                           Worked with 20+ clients
                        </span>
                     </div>
                     <div className="bg-blue-200 rounded-2xl px-2">
                        <span className="p-1 md:p-2.5 flex gap-0.5 md:gap-1.5 justify-center items-center text-blue-600 text-xs md:text-sm">
                           <Sparkles size={16} />
                           Delivered over 50+ projects
                        </span>
                     </div>
                  </div>
                  <div>
                     <h1 className="max-md:text-center text-4xl -tracking-tight lg:text-7xl text-gray-700 dark:text-gray-300 font-serif">
                        Building Digital Products for the Future.
                     </h1>
                  </div>
                  <div>
                     <p className="text-gray-600 text-xl max-md:text-center dark:text-gray-400">
                        We help business grow by creating innovative software
                        solutions.
                     </p>
                  </div>
                  <div>
                     <div className="flex flex-row gap-3 text-sm max-md:justify-center">
                        <button
                           className="bg-blue-400 rounded-2xl py-1.5 px-3.5 text-white lg:py-3.5 lg:px-8"
                           type="button">
                           Get Started
                        </button>
                        <button
                           className="rounded-2xl border border-gray-500 px-3.5 py-1.5 text-gray-600 dark:text-gray-400" onClick={() => {
                              
                           }}
                           type="button">
                           View Services
                        </button>
                     </div>
                  </div>
               </div>
            </div>
      
         
      </>
   );
};

export default Home;
