import { motion } from 'motion/react';
import { members } from './TeamMembers';

const Team = () => {
   return (
      <section className="">
         <div className="h-128">
            <div className="container px-6 py-10 mx-auto">
               <h1 className="text-2xl font-semibold text-center font-serif  capitalize lg:text-3xl text-white">
                  The IVORY Team
               </h1>

               <div className="flex justify-center mx-auto mt-6">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
               </div>

               <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-gray-200">
                  Welcome!! The Ivory consists of talented, problem-solvers and
                  hardworking members. The Team expertises in diverse languages,
                  designs, analysis, stacks, frameworks. The Ivory does not end
                  there, we are cost friendly, treat our customers with urgency
                  & care, and provide a long-lasting, scalable solutions.
               </p>
            </div>
         </div>

         <div className="container max-sm: sm:max-w-6xl px-6 py-12 lg:py-20 mx-auto -mt-50 sm:-mt-80 md:-mt-96">
            <div className="grid grid-cols-1 gap-8 mt-8 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
               {members.map((mem, idx) => (
                  <motion.div
                     key={idx}
                     className="flex flex-col items-center text-center p-3 sm:p-3 rounded-xl border-gray-700 transition delay-250 duration-400 ease-in-out hover:-translate-y-2 hover:scale-105 bg-[#0F1624] hover:bg-[#0F1624]/50 backdrop-blur-none">
                     <img
                        loading="lazy"
                        className="object-cover w-full rounded-xl aspect-square"
                        src={
                           mem.ImageUrl ??
                           'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                        }
                        alt="team-image"
                     />

                     <h1 className="mt-4 text-xl font-semibold capitalizetext-white">
                        {mem.Name}
                     </h1>

                     <p className="mt-2 capitalize text-lg text-gray-300">
                        {mem.Role}
                     </p>

                     <div className="flex mt-3 -mx-2">
                        {mem.SocialMedia.map((media, index) => (
                           <a
                              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
                              key={index}
                              href={media.link}
                              aria-label={media.name}>
                              {media.icon}
                           </a>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Team;
