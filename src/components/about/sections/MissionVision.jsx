const MissionVision = () => {
   return (
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
