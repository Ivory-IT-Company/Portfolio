const MissionVision = () => {
   return (
      // <section className="h-[500px] px-6 md:px-28 grid max-md:grid-cols-1">
      //    <div className="sm:relative ">
      //       <div className="sm:absolute top-10 right-0 sm:size-1/2 border border-gray-400 rounded-xl px-3">
      //          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
      //          <p className="text-gray-600 dark:text-gray-300">
      //             To empower businesses with scalable, secure, and user-friendly
      //             software solutions that solve real-world problems.
      //          </p>
      //       </div>
      //    </div>

      //    <div className="sm:relative">
      //       <div className="sm:absolute left-0 sm:bottom-20 sm:size-1/2 border rounded-xl px-3">
      //          {' '}
      //          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
      //          <p className="text-gray-600 dark:text-gray-300">
      //             To become a leading African technology company delivering
      //             world-class digital products globally.
      //          </p>
      //       </div>
      //    </div>
      // </section>

      <section className="flex max-sm:flex-col max-sm:justify-center h-150 px-5 gap-10 sm:h-80">
         <div className="sm:p-10  sm:border rounded-xl h-fit">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg text-gray-300">
               To empower businesses with scalable, secure, and user-friendly
               software solutions that solve real-world problems.
            </p>
         </div>

         <div className="sm:p-10  sm:border rounded-xl h-fit">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg text-gray-300">
               To become a leading African technology company delivering
               world-class digital products globally.
            </p>
         </div>
      </section>
   );
};

export default MissionVision;
