import { BriefcaseBusiness, Sparkles } from 'lucide-react';

const Home = () => {
   return (
      <>
         <div className="flex flex-row gap-2 items-center  max-md:flex-col  h-screen justify-center px-1 lg:px-25">
            {/* left: will contain some basic info */}
            <div className="lg:basis-[50%]">
               <div className="flex flex-col gap-6 max-md:px-2.5">
                  {/* md:px-28 */}
                  <div className="flex flex-row gap-0.5 md:gap-2.5 ">
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
                  <div >
                     <h1 className="text-4xl -tracking-tight lg:text-7xl text-gray-700 font-serif">
                        Building Digital Products for the Future.
                     </h1>
                  </div>
                  <div>
                     <p className="text-gray-500">
                        We help business grow by creating innovative software
                        solutions.
                     </p>
                  </div>
                  <div>
                     <div className="flex flex-row gap-3 text-sm ">
                        <button
                           className="bg-blue-400 rounded-2xl py-1.5 px-3.5 text-white"
                           type="button">
                           Get Started
                        </button>
                        <button
                           className="rounded-2xl border border-gray-500 px-3.5 py-1.5 text-gray-500"
                           type="button">
                           View Services
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            {/* right: will be the div for the image */}
            <div className="lg:basis-[40%]">
               <div className='px-2.5'>
                  <img
                     className="rounded-3xl md:h-100"
                     src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
