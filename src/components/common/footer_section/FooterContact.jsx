import { socialIcons } from './FooterInfo';

export const FooterDown = () => {
   const currentYear = new Date().getFullYear();
   return (
      <>
         <hr className="my-6 sm:mx-auto lg:my-8 text-gray-300 dark:text-gray-600" />
         <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">
               © {currentYear}{' '}
               <a href="home" className="hover:underline">
                  Ivory™
               </a>
               . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
               {' '}
               <span>Follow Us On Social Media</span>
               {socialIcons.map((val) => (
                  <a
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
