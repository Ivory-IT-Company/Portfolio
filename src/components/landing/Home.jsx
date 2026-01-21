import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router';

const Home = () => {
   return (
      <>
         <div className="flex flex-row h-screen gap-2 my-4 px-11 sm:px-28 items-center">
            <div className="sm:basis-2xl">
               <div>
                  <div className="flex flex-row max-md:hidden gap-2.5 mb-4">
                     <div className="bg-blue-200 rounded-2xl text-md">
                        <span className="p-2.5 flex gap-1.5 justify-center items-center text-blue-600">
                           <BriefcaseBusiness size={16} />
                           Worked with 0+ clients
                        </span>
                     </div>
                     <div className="bg-blue-200 rounded-2xl px-2">
                        <span className="p-2.5 flex gap-1.5 justify-center items-center text-blue-600">
                           <Sparkles size={16} />
                           Delivered over 0+ projects
                        </span>
                     </div>
                  </div>
                  <h1 className="max-md:text-center sm:max-w-xl text-4xl -tracking-tight lg:text-7xl text-gray-300 pb-4">
                     Building Digital Products for the Future.
                  </h1>
                  <p className="text-xl max-md:text-center text-gray-400 mb-6">
                     We help business grow by creating innovative software
                     solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-sm:px-6  max-md:justify-center text-center">
                     <NavLink
                        className="bg-blue-600 p-3.5 md:px-10 rounded-xl"
                        to="/contact"
                        type="button">
                        Get Started
                     </NavLink>
                     <NavLink
                        className="p-3.5 border md:px-10 rounded-xl hover:px-12"
                        to="/services"
                        type="button">
                        View Services
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className="max-sm:hidden ">
               <span className="text-xl"></span>
            </div>
         </div>
         {/* <div className="flex flex-row items-center gap-6 h-screen md:px-20 xl:px-40">
            <div className="max-h-1/2 max-w-md">
               <div className="flex flex-row max-md:hidden gap-2.5 mb-4">
                  <div className="bg-blue-200 rounded-2xl">
                     <span className="p-1 md:p-2.5 flex gap-0.5 md:gap-1.5 justify-center items-center text-xs md:text-sm text-blue-600 ">
                        <BriefcaseBusiness size={16} />
                        Worked with 0+ clients
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
                  <h1 className="max-md:text-center sm:max-w-xl text-4xl -tracking-tight lg:text-7xl text-gray-300 pb-4">
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
                  <div className="flex flex-col sm:flex-row gap-3 max-sm:px-6  max-md:justify-center text-center">
                     <NavLink
                        className="bg-blue-600 p-3.5 md:px-10 rounded-xl"
                        to="/contact"
                        type="button">
                        Get Started
                     </NavLink>
                     <NavLink
                        className="p-3.5 border md:px-10 rounded-xl hover:px-12"
                        to="/services"
                        type="button">
                        View Services
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className="max-sm:hidden flex items-center">ALways US</div>
         </div> */}
      </>
   );
};

export default Home;
