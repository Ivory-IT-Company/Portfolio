import { useState } from 'react';
import { TechnologyList } from './data/data';
import { FaChevronDown } from 'react-icons/fa6';
import { motion } from 'motion/react';

const Technologies = () => {
   const [open, setOpen] = useState();
   return (
      <>
         <div className="py-14 lg:pt-54">
            <div className="text-center">
               <h3 className="text-2xl sm:text-5xl mb-4 font-bold text-[#5FA9F8]">
                  Tech Stacks We Use at Ivory
               </h3>
               <p className="mb-6 text-xl font-mono text-gray-300 max-sm:px-4 max-w-3xl mx-auto leading-relaxed">
                  The Ivory team brings a modern, battle-tested skillset to
                  design, build, and scale high-performance applications. We
                  blend cutting-edge frameworks, robust backend systems, and
                  seamless DevOps practices to deliver solutions that drive real
                  business impact.
               </p>
            </div>

            <div className="lg:px-8">
               {Object.entries(TechnologyList).map(([category, items], idx) => (
                  <div
                     key={category}
                     className="mb-4 border border-gray-800 bg-[#0F1624]/50 rounded-xl ">
                     <button
                        key={category}
                        className={`flex ${
                           open === idx
                              ? 'border-b border-b-gray-800'
                              : 'hidden:border-b'
                        } justify-between items-center text-lg lg:text-2xl w-full h-12 lg:h-24 px-3 rounded-xl`}
                        onClick={() => setOpen(open === idx ? null : idx)}
                        aria-expanded={open === idx}
                        aria-controls={`disclosure-content-${idx}`}
                        style={{ fontWeight: 'bold' }}>
                        {category}
                        <FaChevronDown
                           className={
                              open === idx
                                 ? 'rotate-180 duration-700 transition-all'
                                 : 'duration-700'
                           }
                        />
                     </button>
                     {open === idx && (
                        <div className=" my-4 px-2.5 flex flex-wrap gap-2">
                           {items.map((item, idx) => (
                              <div
                                 id={`disclosure-content-${idx}`}
                                 className="inline-flex text-[#9CA3AF] gap-4 py-1 px-2 rounded-lg items-center bg-[#252f41] backdrop-blur-sm hover:scale-x-102"
                                 key={idx}>
                                 {' '}
                                 <span className="text-lg text-[#c6cad1] font-mono">
                                    {item.name}
                                 </span>
                                 <span>{item.logo}</span>{' '}
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Technologies;
