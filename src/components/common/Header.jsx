import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { List } from 'lucide-react';
import ToggleButton from '../Toggle/ToggleButton';
import { NavLink } from 'react-router';

const Header = () => {
   // const [isActive, setIsActive] = useState(false);
   // const itemClicked = () => {
   //       setIsActive(true);
   // };

   // useEffect(() => {
   //    itemClicked
   // }, [isActive])

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
         link: 'services',
      },
      {
         text: 'Team',
         link: 'team',
      },
      {
         text: 'Contact',
         link: 'contact',
      },
   ];

   return (
      <header className="px-10 select-none pt-4 pb-2.5 max-md:px-2 border-b border-gray-500">
         <div className="flex flex-row justify-between text-center items-center">
            <div>
               <a href="/">
                  <h4 className="font-semibold font-mono text-lg">IVORY</h4>
               </a>
            </div>

            {/* large screen nav */}
            <div className="max-md:hidden">
               <div className="flex items-center gap-6 font-serif font-light">
                  {navItems.map((itm, index) => (
                     <NavLink
                        to={itm.link}
                        className={({ isActive }) =>
                           isActive
                              ? ' bg-gray-600/55  px-3 rounded-lg hover:backdrop-blur-sm hover:bg-gray-600/55'
                              : 'px-2 rounded-lg hover:backdrop-blur-sm hover:bg-gray-600/55'
                        }
                        key={index}>
                        {itm.text}
                     </NavLink>
                  ))}
               </div>
               {/* <nav className="flex gap-10">
                  <ul className="flex flex-row items-center gap-8 font-serif font-light">
                     {navItems.map((itm, index) => (
                        <a
                           key={index}
                           onClick={() => itemClicked(index)}
                           className={`${
                              isActive ? 'active:bg-amber-400 ' : ''
                           } px-2 rounded-lg hover:backdrop-blur-sm hover:bg-white/25`}
                           href={itm.link}>
                           <li>{itm.text}</li>
                        </a>
                     ))}
                  </ul>

                  <ToggleButton />
               </nav> */}
            </div>

            <div className="max-md:hidden">
               <ToggleButton />
            </div>

            {/* small screen nav */}
            <div className="flex items-center gap-2 md:hidden">
               <ToggleButton />
               <Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-start  border gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold  inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                     <List size={16} />
                  </MenuButton>

                  <MenuItems
                     transition
                     className=" absolute right-0 z-10 mt-2 w-24 origin-top-right text-start bg-white dark:bg-gray-700 rounded-md outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
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
