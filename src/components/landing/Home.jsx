import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import React from 'react';

const Home = () => {
   return (
      <>
         {/* <div className=" items-center justify-center h-screen flex flex-col gap-4">
            <h2 className="text-purple-600 text-6xl font-serif tracking-normal">
               Ivory IT Company
            </h2>
            <p className="font-bold text-xl text-shadow-md text-zinc-600">
               currently developing. We will be out soon!!!
            </p>
         </div> */}

         <div className="flex flex-row gap-2 items-center  max-md:flex-col  h-screen justify-center px-10 lg:px-25">
            {/* left: will contain some basic info */}
            <div className="lg:basis-1/2">
               <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2.5 max-md:flex-col">
                     <div className="bg-blue-200 rounded-2xl">
                        <span className="p-2.5 flex gap-1.5 justify-center items-center text-blue-600 text-sm">
                           <BriefcaseBusiness size={16} />
                           Worked with 20+ clients
                        </span>
                     </div>
                     <div className="bg-blue-200 rounded-2xl px-2">
                        <span className="p-2.5 flex gap-1.5 justify-center items-center text-blue-600 text-sm">
                           <Sparkles size={16} />
                           Delivered over 50+ projects
                        </span>
                     </div>
                  </div>
                  <div>
                     <h1 className="text-4xl lg:text-6xl text-gray-700 font-serif">
                        Building Digital Products for the Future
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
            <div className="lg:basis-1/2">
               <div>
                  <img
                     className=""
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
