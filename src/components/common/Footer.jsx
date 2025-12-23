import React from 'react';
import {
   Facebook,
   Github,
   Mail,
   MapPin,
   Phone,
   Twitter,
   X,
} from 'lucide-react';

const Footer = () => {
   let getyear = new Date().getFullYear();

   return (
      <>
         <div className="py-8 font-serif">
            <div className="flex flex-row max-md:flex-col max-md:px-2 gap-3 px-28 pb-8">
               <div className="basis-1/3">
                  {/* for the company's name and others */}
                  <div>
                     <h4 className="text-2xl text-blue-500 font-bold">Ivory</h4>
                     <span className="italic bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-medium">
                        Building modern digital products for growing businesses
                     </span>
                  </div>
               </div>

               <div className="basis-2/3">
                  <div className="flex flex-row justify-between max-md:flex-col max-md:gap-3.5">
                     <div>
                        <h4 className="text-lg font-bold pb-1.5">
                           Quick Links
                        </h4>
                        <ul className="font-normal text-base max-md:flex max-md:gap-2.5 ">
                           <li>
                              <span className=" hover:text-blue-300 hover:underline">
                                 Home
                              </span>
                           </li>
                           <li>
                              <span className=" hover:text-blue-300 hover:underline">
                                 About
                              </span>
                           </li>
                           <li>
                              <span className=" hover:text-blue-300 hover:underline">
                                 Services
                              </span>
                           </li>
                           <li>
                              <span className=" hover:text-blue-300 hover:underline">
                                 Team
                              </span>
                           </li>
                        </ul>
                     </div>

                     <div>
                        <h4 className="text-lg font-bold pb-1.5">Contact</h4>
                        <ul>
                           <li className="flex items-center gap-2.5">
                              <Mail color="#6366f1" size={18} />
                              <span>ivory.it.company@gmail.com</span>
                           </li>
                           <li className="flex items-center gap-2.5">
                              <Phone size={18} color="#6366f1" />
                              <span>090 2419-12-88</span>
                           </li>
                           <li className="flex items-center gap-2.5">
                              <MapPin color="#6366f1" size={18} />
                              <span>Kwara state, Nigeria</span>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold pb-1.5">Follow Us</h4>
                        <div className="flex gap-2">
                           <span>
                              <a
                                 href="https://github.com/Ivory-IT-Company"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                 <Github size={24} />
                              </a>
                           </span>
                           <span>
                              <a
                                 href="https://github.com/Ivory-IT-Company"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                 <Facebook size={24} fill />
                              </a>
                           </span>
                           <span>
                              <a
                                 href="https://github.com/Ivory-IT-Company"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                 <Twitter size={24} fill />
                              </a>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <hr className=''/> */}
            <div class="flex-grow border-t border-gray-300"></div>
            <div className="text-center tracking-wide mt-8">
               <span>
                  {' '}
                  &copy; {getyear} Ivory. Built with &hearts; for startups{' '}
               </span>
            </div>
         </div>
      </>
   );
};

export default Footer;
