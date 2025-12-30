import { members } from "./TeamMembers";


const Team = () => {
   return (
      <section className="bg-white dark:bg-gray-900">
         <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
            <div className="container px-6 py-10 mx-auto">
               <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                  The Executive Team
               </h1>

               <div className="flex justify-center mx-auto mt-6">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
               </div>

               <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                  Welcome!! The Ivory consists of talented, problem-solvers and hardworking members. The 
                  Team expertises in diverse languages, designs, analysis, stacks, frameworks. The Ivory does not end there, we are cost friendly, treat our customers with urgency & care, and provide a long-lasting, scalable solutions. 
               </p>
            </div>
         </div>

         <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
               {members.map((mem, idx) => (
                  <div
                     key={idx}
                     className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                     <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={mem.ImageUrl ?? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                        alt=""
                     />

                     <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                        {mem.Name}
                     </h1>

                     <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                        {mem.Role}
                     </p>

                     <div className="flex mt-3 -mx-2">
                        {mem.SocialMedia.map((media, index) => (
                           <a
                              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                              key={index}
                              href={media.link}
                              aria-label={media.name}>
                              {media.icon}
                           </a>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Team;
