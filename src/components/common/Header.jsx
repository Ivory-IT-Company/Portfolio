import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { List } from 'lucide-react';

const Header = () => {
   const navItems = [
      {
         text: 'Home',
         link: 'home',
      },
      {
         text: 'About',
         link: 'about',
      },
      {
         text: 'Services',
         link: '',
      },
      {
         text: 'Team',
         link: '',
      },
      {
         text: 'Contact',
         link: '',
      },
   ];
   return (
      <header className="px-10 pt-4 pb-2.5 max-md:px-2 border-b border-gray-300">
         <div className="flex flex-row justify-between text-center  items-center">
            <div>
               <a href="/home">
                  <h4 className="font-semibold text-lg">Ivory</h4>
               </a>
            </div>

            {/* large screen nav */}
            <div className="max-md:hidden">
               <nav className="flex gap-10">
                  <ul className="flex flex-row gap-9 font-serif font-light">
                     {navItems.map((itm) => (
                        <a href={itm.link}>
                           <li>{itm.text}</li>
                        </a>
                     ))}
                  </ul>
                  {/* <button className="bg-blue-500 px-4 py-1 rounded-xl">
                     <span className="text-amber-50 text-base">
                        Get started
                     </span>
                  </button> */}
               </nav>
            </div>

            {/* small screen nav */}
            <div className="md:hidden">
               <Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-start  border gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold  inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                     <List size={16} />
                  </MenuButton>

                  <MenuItems
                     transition
                     className="border absolute right-0 z-10 mt-2 w-24 origin-top-right text-start bg-white rounded-md outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                     <div className="py-1">
                        {navItems.map((itm) => (
                           <MenuItem href={itm.link}>
                              <a
                                 className="block px-4 py-2 text-sm  data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                 href={itm.link}>
                                 {itm.text}
                              </a>
                           </MenuItem>
                        ))}
                     </div>
                  </MenuItems>
               </Menu>
            </div>
         </div>
      </header>
   );
};

export default Header;
