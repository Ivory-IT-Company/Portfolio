import { socialIcons } from './footer_section/data/data';
import { FooterDown } from './footer_section/FooterContact';

const Footer = () => {
   console.log(socialIcons);
   const currentYear = new Date().getFullYear();
   return (
      <>
         <footer className="bg-neutral-primary-soft">
            <div className="mx-auto w-full px-4 my-2">
               {/* filter out, might add later */}
               {/* <FooterMain /> */}
               <FooterDown />
            </div>
         </footer>
      </>
   );
};

export default Footer;
