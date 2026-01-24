import { motion } from 'motion/react';

const MissionVision = () => {
   return (
      <section className="flex max-sm:flex-col max-sm:justify-center h-150 px-5 gap-10 sm:h-80">
         <motion.div
            initial={{ x: -40, y: -60, opacity: 0.1 }}
            whileInView={{
               opacity: 1,
               x: 0,
               y: 0,
               transition: { duration: 1 },
            }}
            whileHover={{
               scaleY: 1.1,
               boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)',
            }}
            className="sm:p-10  sm:border rounded-xl h-fit">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg text-gray-300">
               To empower businesses with scalable, secure, and user-friendly
               software solutions that solve real-world problems.
            </p>
         </motion.div>

         <motion.div
            className="sm:p-10  sm:border rounded-xl h-fit"
            initial={{ x: -40, y: 40, opacity: 0.1 }}
            whileInView={{
               opacity: 1,
               x: 0,
               y: 0,
               transition: { duration: 1 },
            }}
            whileHover={{
               scaleY: 1.1,
               boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)',
            }}>
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg text-gray-300">
               To become a leading African technology company delivering
               world-class digital products globally.
            </p>
         </motion.div>
      </section>
   );
};

export default MissionVision;
