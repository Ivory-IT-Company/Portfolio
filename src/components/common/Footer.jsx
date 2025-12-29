import React from 'react';
import { Facebook, Github, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { socials } from './SocialIcons';

socials
const quickLinks = [
   { name: 'Home', link: 'home' },
   { name: 'About', link: 'about' },
   { name: 'Services', link: 'services' },
   { name: 'Team', link: 'team' },
];

const contacts = [
   {
      icon: <Mail size={18} className="text-indigo-500" />,
      text: 'ivory.it.company@gmail.com',
   },
   {
      icon: <Phone size={18} className="text-indigo-500" />,
      text: '090 2419-12-88',
   },
   {
      icon: <MapPin size={18} className="text-indigo-500" />,
      text: 'Kwara State, Nigeria',
   },
];

// const socials = [
//    {
//       icon: <Github size={22} className="w-5 h-5" />,
//       href: 'https://github.com/Ivory-IT-Company',
//       label: 'GitHub',
//    },
//    {
//       icon: (
//          <Facebook
//             size={22}
//             fill="currentColor"
//             // className="text-blue-600"
//          />
//       ),
//       href: 'https://facebook.com',
//       label: 'Facebook',
//    },
//    {
//       icon: <Twitter size={22} className="text-sky-500" />,
//       href: 'https://twitter.com',
//       label: 'Twitter',
//    },
// ];

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <>
         <footer className="bg-neutral-primary-soft">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
               <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                     <a className="flex flex-col items-start">
                        <h4 className="text-2xl font-bold text-blue-500 font-serif">
                           Ivory
                        </h4>
                        <p className="italic bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-medium">
                           Building modern digital products for growing
                           businesses
                        </p>
                     </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                     <div>
                        <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                           Resources
                        </h2>
                        <ul className="text-body font-medium">
                           {quickLinks.map((link) => (
                              <li className="mb-4" key={link.link}>
                                 <a
                                    href={link.link}
                                    className="hover:text-blue-400 hover:underline transition">
                                    {link.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                           Follow us
                        </h2>
                        <ul className="text-body font-medium">
                           {socials.map(({ href, label }) => (
                              <li className="mb-4">
                                 <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="hover:scale-110 transition-transform hover:underline text-body hover:text-heading ">
                                    {label}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                           Legal
                        </h2>
                        <ul className="text-body font-medium">
                           {contacts.map((item, index) => (
                              <li
                                 key={index}
                                 className="flex items-center gap-2 mb-4">
                                 {item.icon}
                                 <span>{item.text}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <hr className="my-6 border-default sm:mx-auto lg:my-8" />
               <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-body sm:text-center">
                     © {currentYear}{' '}
                     <a href="home" className="hover:underline">
                        Ivory™
                     </a>
                     . All Rights Reserved.
                  </span>
                  <div className="flex mt-4 sm:justify-center sm:mt-0">
                     {/* {socials.map(({ icon, href, label }) => (
                        <a
                           key={label}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={label}
                           className="hover:scale-110 transition-transform text-body hover:text-heading ms-5">
                           {icon}
                        </a>
                     ))} */}
                     {socials.map((val) => (
                        <a
                           href={val.href}
                           className="text-body hover:text-heading  ms-5">
                           <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24">
                              {val.icon}
                           </svg>
                           <span className="sr-only">{val.label}</span>
                        </a>
                     ))}
                     
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
