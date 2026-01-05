import React from 'react';
import { socialIcons } from './footer_section/FooterInfo';
import { FooterDown } from './footer_section/FooterContact';
import { FooterMain } from './footer_section/FooterMain';

const Footer = () => {
   console.log(socialIcons);
   const currentYear = new Date().getFullYear();
   return (
      <>
         <footer className="bg-neutral-primary-soft">
            <div className="mx-auto w-full p-4 py-6 lg:py-8">
               <FooterMain />
               <FooterDown />
            </div>
         </footer>
      </>
   );
};


export default Footer;
