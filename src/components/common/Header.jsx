import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ToggleButton from '../Toggle/ToggleButton';
import { NavLink } from 'react-router';
import { BsJustify } from 'react-icons/bs';

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
      <header className="sticky top-0 block px-10 select-none pt-4 pb-2.5 max-md:px-2 bg-zinc-900/5 backdrop-blur-sm">
         <div className="flex flex-row justify-between text-center items-center">
            <a href="/">
               <h4 className="font-semibold font-mono text-lg">IVORY</h4>
            </a>

            {/* large screen nav */}
            <div className="max-md:hidden">
               <div className="flex items-center gap-6 font-serif font-light">
                  {navItems.map((itm, index) => (
                     <NavLink
                        to={`/${itm.link}`}
                        className={({ isActive }) =>
                           isActive
                              ? 'bg-gray-600/55  px-6 rounded-lg hover:backdrop-blur-xl hover:bg-gray-100/55'
                              : 'px-2 rounded-lg hover:backdrop-blur-xl hover:bg-gray-600/55'
                        }
                        key={index}>
                        {itm.text}
                     </NavLink>
                  ))}
               </div>
            </div>

            {/* make toogle visible if a design comes up */}
            <div className="hidden">
               <ToggleButton />
            </div>

            {/* small screen nav */}
            <div className=" md:hidden">
               {/* <ToggleButton /> */}
               <Menu as="div" className="">
                  <MenuButton className="inline-flex w-full py-2 ">
                     <BsJustify size={25} />
                  </MenuButton>

                  <MenuItems
                     transition
                     className=" absolute right-2 w-26 bg-zinc-800/10 origin-top-right text-start rounded-md outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                     <div className="py-1">
                        {navItems.map((itm, idx) => (
                           <MenuItem key={idx} href={`/${itm.link}`}>
                              <a
                                 className="block px-4 py-2 text-sm  data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                 href={`/${itm.link}`}>
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
