import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router';

const Home = () => {
   const name = 'Ivory';
   return (
      <div className="flex flex-row h-screen gap-2 my-4 px-11 sm:px-28 xl:gap-8 xl:px-40 items-center">
         <div className="sm:basis-2xl xl:basis-4xl">
            <div>
               <div className="flex flex-row max-md:hidden text-md gap-2.5 mb-4">
                  <div className="bg-[#c0d7f7] rounded-xl hover:bg-[#DCEAFF]">
                     <span className="p-2.5 flex gap-1.5 justify-center items-center text-[#2563EB]">
                        <BriefcaseBusiness
                           size={18}
                           style={{ color: '#2563EB' }}
                        />
                        Worked with 0+ clients
                     </span>
                  </div>
                  <div className="bg-[#c0d7f7] rounded-xl px-2 hover:bg-[#DCEAFF]">
                     <span className="p-2.5 flex gap-1.5 justify-center items-center text-[#2563EB]">
                        <Sparkles size={16} />
                        Delivered over 0+ projects
                     </span>
                  </div>
               </div>
               <h1 className="max-md:text-center sm:max-w-xl text-4xl -tracking-tight lg:text-7xl text-[#E8EEF6] pb-4">
                  Building Digital Products for the Future.
               </h1>
               <p className="text-xl max-md:text-center text-[#AAB4C5] mb-6">
                  We help business grow by creating innovative software
                  solutions.
               </p>
               <div className="flex flex-col sm:flex-row gap-3 max-sm:px-6  max-md:justify-center text-center">
                  <NavLink
                     className="bg-[#4F8CFF] p-3.5 md:px-10 xl:px-14 rounded-xl hover:scale-104 hover:bg-[#5a83cf]"
                     to="/contact"
                     type="button">
                     Get Started
                  </NavLink>
                  <NavLink
                     className="p-3.5 border border-transparent md:px-10 xl:px-14 rounded-xl hover:px-12 bg-[rgb(255,255,255)] text-[#E9EEF5] hover:scale-x-105 "
                     to="/services"
                     type="button">
                     View Services
                  </NavLink>
               </div>
            </div>
         </div>
       
      </div>
   );
};

export default Home;
