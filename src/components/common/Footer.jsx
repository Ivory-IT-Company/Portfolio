import React from 'react';
import { Facebook, Github, Mail, MapPin, Phone, Twitter } from 'lucide-react';

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

const socials = [
   {
      icon: <Github size={22} />,
      href: 'https://github.com/Ivory-IT-Company',
      label: 'GitHub',
   },
   {
      icon: <Facebook size={22} className="text-blue-600" />,
      href: 'https://facebook.com',
      label: 'Facebook',
   },
   {
      icon: <Twitter size={22} className="text-sky-500" />,
      href: 'https://twitter.com',
      label: 'Twitter',
   },
];

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-gray-200 font-serif">
         <div className="px-6 pt-12 pb-8">
            <div className="flex flex-col md:px-28 md:flex-row gap-8 pb-8">
               {/* Brand */}
               <div className="md:basis-1/3">
                  <h4 className="text-2xl font-bold text-blue-500">Ivory</h4>
                  <p className="italic bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-medium">
                     Building modern digital products for growing businesses
                  </p>
               </div>

               {/* Links */}
               <div className="md:basis-2/3 flex flex-col md:flex-row justify-between gap-6">
                  <nav>
                     <h4 className="text-lg font-bold pb-2">Quick Links</h4>
                     <ul className="space-y-1">
                        {quickLinks.map((link) => (
                           <li key={link.link}>
                              <a
                                 href={link.link}
                                 className="hover:text-blue-400 hover:underline transition">
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </nav>

                  {/* Contact */}
                  <div>
                     <h4 className="text-lg font-bold pb-2">Contact</h4>
                     <ul className="space-y-2">
                        {contacts.map((item, index) => (
                           <li key={index} className="flex items-center gap-2">
                              {item.icon}
                              <span>{item.text}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Socials */}
                  <div>
                     <h4 className="text-lg font-bold pb-2">Follow Us</h4>
                     <div className="flex gap-3">
                        {socials.map(({ icon, href, label }) => (
                           <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="hover:scale-110 transition-transform">
                              {icon}
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <hr className="border-gray-300" />

            <p className="text-center mt-6 tracking-wide text-sm">
               &copy; {currentYear} Ivory. Built with ❤️ for startups.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
