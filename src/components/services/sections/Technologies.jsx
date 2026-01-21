import { useState } from 'react';
import { TechnologyList } from './data/data';
import { FaChevronDown } from 'react-icons/fa6';

const Technologies = () => {
   const [open, setOpen] = useState();
   return (
      <>
         <div className="pb-5 pt-14">
            <div className="text-center">
               <h3 className="text-2xl sm:text-4xl mb-4 font-bold">
                  Tech Stacks We Use at Ivory
               </h3>
               <p className="mb-6 font-mono max-sm:px-4 max-w-3xl mx-auto leading-relaxed">
                  The Ivory team brings a modern, battle-tested skillset to
                  design, build, and scale high-performance applications. We
                  blend cutting-edge frameworks, robust backend systems, and
                  seamless DevOps practices to deliver solutions that drive real
                  business impact.
               </p>
            </div>

            <div className="px-4 lg:px-36">
               {Object.entries(TechnologyList).map(([category, items], idx) => (
                  <div key={category} className="mb-4 border border-gray-500 rounded-xl ">
                     <button
                        key={category}
                        className={`flex ${
                           open === idx ? 'border-b border-b-gray-600' : 'hidden:border-b'
                        } justify-between items-center text-lg lg:text-2xl w-full h-12 lg:h-24 px-3 rounded-xl`}
                        onClick={() => setOpen(open === idx ? null : idx)}
                        aria-expanded={open === idx}
                        aria-controls={`disclosure-content-${idx}`}
                        style={{ fontWeight: 'bold' }}>
                        {category}
                        <FaChevronDown
                           className={open === idx ? 'rotate-180' : ''}
                        />
                     </button>
                     {open === idx && (
                        <div className=" my-4 px-2.5 flex flex-wrap gap-2">
                           {items.map((item, idx) => (
                              <div
                                 id={`disclosure-content-${idx}`}
                                 className="inline-flex gap-4 py-1 px-2 border rounded-lg items-center bg-violet-300/5 backdrop-blur-sm "
                                 key={idx}>
                                 {' '}
                                 <span className='text-lg font-mono'>{item.name}</span>
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
