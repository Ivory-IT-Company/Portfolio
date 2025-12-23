import React from 'react';

const Header = () => {
   return (
      <header className="px-10 pt-4 pb-2.5">
         <div className="flex flex-row justify-between text-center  items-center">
            <div>
               <a href="">
                  <h4 className="font-medium text-lg">Ivory</h4>
               </a>
            </div>
            <div>
               <nav className="flex gap-10">
                  <ul className="flex flex-row gap-9 font-medium">
                     <li>Home</li>
                     <li>About</li>
                     <li>Services</li>
                     <li>Services</li>
                     <li>Contact</li>
                  </ul>
                  {/* <button className="bg-blue-500 px-4 py-1 rounded-xl">
                     <span className="text-amber-50 text-base">
                        Get started
                     </span>
                  </button> */}
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;
