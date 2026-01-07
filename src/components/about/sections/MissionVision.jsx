const MissionVision = () => {
   return (
      <section className="h-[400px] py-4 px-6 md:px-28 grid max-md:grid-cols-1 lg:gap-4 bg-slate-300 dark:bg-slate-600 ">
         <div className="lg:relative ">
            <div className="lg:absolute top-10 right-0 lg:size-1/2">
               <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
               <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses with scalable, secure, and user-friendly
                  software solutions that solve real-world problems.
               </p>
            </div>
         </div>

         <div className="lg:relative">
            <div className="lg:absolute left-0 bottom-10 lg:size-1/2">
               {' '}
               <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
               <p className="text-gray-600 dark:text-gray-300">
                  To become a leading African technology company delivering
                  world-class digital products globally.
               </p>
            </div>
         </div>
      </section>
   );
};

export default MissionVision;
