import { quickLinks, services, contacts, socialIcons } from "./FooterInfo";

export const FooterMain = () => {
   return (
      <div className="md:flex md:justify-between gap-2">
         <div className="mb-6 md:mb-0">
            <a className="flex flex-col items-start">
               <h4 className="text-2xl font-bold text-blue-500 font-serif">
                  Ivory
               </h4>
               <p className="italic bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-medium ">
                  Building modern digital products for growing businesses
               </p>
            </a>
         </div>
         <div className="grid grid-cols-2  max-[900px]:gap-6 max-[900px]:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            <div>
               <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Quick Links
               </h2>
               <ul className="text-body text-sm font-normal">
                  {quickLinks.map((link) => (
                     <li className="mb-2" key={link.link}>
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
                  Services
               </h2>
               <ul className="text-body text-sm font-normal">
                  {services.map((link) => (
                     <li className="mb-2" key={link.link}>
                        <a
                           className="hover:text-blue-400 hover:underline transition">
                           {link.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            {/* <div>
               <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Follow us
               </h2>
               <ul className="text-body font-light">
                  {socialIcons.map(({ href, label }) => (
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
            </div> */}
            <div>
               <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Contact
               </h2>
               <ul className="text-body text-sm font-normal">
                  {contacts.map((item, index) => (
                     <li key={index} className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <span>{item.text}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};
