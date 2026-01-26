import { socialIcons } from './data/data';

export const FooterDown = () => {
   const currentYear = new Date().getFullYear();
   return (
      <>
         <hr className=" sm:mx-auto mb-4 text-gray-800" />
         <div className="sm:flex sm:items-center sm:justify-between text-[#9CA3AF]">
            <span className="text-sm text-body sm:text-center">
               © {currentYear}{' '}
               <a href="home" className="hover:underline">
                  Ivory™
               </a>
               . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
               {' '}
               <span className="text-sm">Follow Us On</span>
               {socialIcons.map((val, idx) => (
                  <a
                     key={idx}
                     href={val.href}
                     className="text-body hover:text-heading  ms-5">
                     {val.icon}
                     <span className="sr-only">{val.label}</span>
                  </a>
               ))}
            </div>
         </div>
      </>
   );
};
