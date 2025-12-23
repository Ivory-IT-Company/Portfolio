import React from 'react';
import { Facebook, Github, Mail, MapPin, Phone, X } from 'lucide-react';

const Footer = () => {
   let getyear = new Date().getFullYear();

   return (
      <>
         <div className=" pt-8 pb-4">
            <div className="flex flex-row justify-between max-md:flex-col  px-16 pb-4">
               {/* for the company's name and others */}
               <div>
                  <h4 className="text-2xl font-bold">Ivory</h4>
                  <span>
                     Building modern digital products for growing businesses
                  </span>
               </div>
               <div>
                  <h4 className="text-lg font-bold pb-1.5">Quick Links</h4>
                  <ul>
                     <li>Home</li>
                     <li>About</li>
                     <li>Services</li>
                     <li>Team</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-lg font-bold pb-1.5">Contact</h4>
                  <ul>
                     <li className="flex gap-1.5">
                        <Mail size={20} />
                        <span> ivory.it.company@gmail.com</span>
                     </li>
                     <li className="flex gap-1.5">
                        <Phone size={20} />
                        <span>090 2419-12-88</span>
                     </li>
                     <li className="flex gap-1.5">
                        <MapPin size={20} />
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
                           <Github size={30} />
                        </a>
                     </span>
                     <span>
                        <a
                           href="https://github.com/Ivory-IT-Company"
                           target="_blank"
                           rel="noopener noreferrer">
                           <Facebook size={30} />
                        </a>
                     </span>
                     <span>
                        <a
                           href="https://github.com/Ivory-IT-Company"
                           target="_blank"
                           rel="noopener noreferrer">
                           <X size={30} />
                        </a>
                     </span>
                  </div>
               </div>
            </div>
            <hr />
            <div className="text-center mt-4">
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
