import { useState } from 'react';
import { TechnologyList } from './data/data';
import { FaChevronDown } from 'react-icons/fa6';

const Technologies = () => {
   const [open, setOpen] = useState();
   return (
      <>
         <div className="pb-5 pt-14">
            <div className="text-center">
               <h3 className="text-3xl mb-4 font-bold text-gray-300">
                  Tech Stacks We Use at Ivory
               </h3>
               <p className="mb-6 max-w-3xl mx-auto text-gray-400 leading-relaxed">
                  The Ivory team brings a modern, battle-tested skillset to
                  design, build, and scale high-performance applications. We
                  blend cutting-edge frameworks, robust backend systems, and
                  seamless DevOps practices to deliver solutions that drive real
                  business impact.
               </p>
            </div>
            {/* this was the first version, a fallback to come back to if the second version does not satify the design requirement */}
            {/* <div>
               {Object.entries(TechnologyList).map(([category, items]) => (
                  <div key={category} className="my-2 ">
                     <h1 className="text-2xl mb-4">{category}</h1>
                     <div className="flex flex-wrap gap-2">
                        {items.map((item, idx) => (
                           <div
                              className="flex py-1.5 px-2 border rounded-2xl gap-2 items-center  bg-violet-300/5 backdrop-blur-sm "
                              key={idx}>
                              {' '}
                              <span>{item.name}</span>
                              <span>{item.logo}</span>{' '}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div> */}

            <div className="px-4 lg:px-36">
               {Object.entries(TechnologyList).map(([category, items], idx) => (
                  <div key={category} className="mb-4  border rounded-xl ">
                     <button
                        key={category}
                        className="flex border-b justify-between items-center text-lg lg:text-2xl w-full h-12 lg:h-32 px-3 rounded-xl"
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
                        <div className=" mt-4 mb-2 px-2.5 flex flex-wrap gap-2">
                           {items.map((item, idx) => (
                              <div
                                 id={`disclosure-content-${idx}`}
                                 className="flex py-1.5 px-2 border rounded-2xl gap-2 items-center  bg-violet-300/5 backdrop-blur-sm "
                                 key={idx}>
                                 {' '}
                                 <span>{item.name}</span>
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
