import { motion } from 'motion/react';
import { BiSupport } from 'react-icons/bi';
import { FaBalanceScale, FaShieldAlt, FaUserFriends } from 'react-icons/fa';
import { GiImpactPoint, GiPriceTag } from 'react-icons/gi';
import { RxStack } from 'react-icons/rx';
import { TbTruckDelivery } from 'react-icons/tb';

const reasons_dict = [
   {
      name: 'Modern stacks',
      text: 'Ivory team uses modern cutting-edge stack for seamless integration',
      icon: <RxStack size={24} />,
   },
   {
      name: 'Scalable Applications',
      text: 'Applications designed to scale effortlessly with your growth',
      icon: <FaBalanceScale size={24} />,
   },
   {
      name: 'Clear communication',
      text: 'Transparent updates and direct access to our team',
      icon: <FaUserFriends size={24} />,
   },
   {
      name: 'Friendly pricing',
      text: 'Competitive rates with no hidden fees or surprises',
      icon: <GiPriceTag size={24} />,
   },
   {
      name: 'Reliable delivery',
      text: 'On-time delivery you can count on, every time',
      icon: <TbTruckDelivery size={24} />,
   },
   {
      name: 'Proven impact',
      text: 'Track record of delivering measurable business results',
      icon: <GiImpactPoint size={24} />,
   },
   {
      name: 'Long term support',
      text: 'Ongoing maintenance and support for sustained success',
      icon: <BiSupport size={24} />,
   },
   {
      name: 'Enterprise Security',
      text: 'SOC 2 compliant with full data protection guarantees',
      icon: <FaShieldAlt size={24} />,
   },
];

const WhyChooseUs = () => {
   return (
      <section className="h-fit md:h-160 flex flex-col justify-center px-6 pt-7 md:px-16">
         <div className="text-center mb-6">
            <h2 className="text-3xl xl:text-5xl font-bold mb-2.5 md:mb-5 text-[#5FA9F8]">
               Why Choose <span className="font-extrabold">Ivory?</span>
            </h2>
            <p className="text-sm uppercase text-[#c6ccd4]">
               {/* Definitely, because we offers you the best */}
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {reasons_dict.map((reason, idx) => (
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                     opacity: 0.85,

                     transition: { duration: 0.175 * idx, ease: 'easeInOut' },
                  }}
                  // border-blue-400
                  className="border-gray-500 bg-[#0F1624] rounded-md p-2.5"
                  key={idx}>
                  <span className="inline-block">{reason.icon}</span>
                  <p className="text-xl font-light capitalize pb-2 ">
                     {reason.name}
                  </p>
                  <span className="text-md">{reason.text}</span>
               </motion.div>
            ))}
         </div>
      </section>
   );
};

export default WhyChooseUs;
