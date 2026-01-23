import { CiLocationOn, CiMail, CiVoicemail } from "react-icons/ci";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";


const ContactDetail = () => {

   const contacts = [
      {
         icon: <CiMail size={22} />,
         text: 'ivory.it.company@gmail.com',
         link: 'mailto:ivory.it.company@gmail.com',
      },
      {
         icon: <CiVoicemail size={22} />,
         text: '090 2419-12-88',
         link: 'tel:+2349024191288',
      },
      {
         icon: <CiLocationOn size={22} />,
         text: 'Kwara State, Nigeria',
         link: 'https://maps.google.com?q',
      },
      {
         icon: <FaTelegramPlane size={22} />,
         text: '090 2419-12-88',
         link: 'https://tg.me/09024191288',
      },
      {
         icon: <FaWhatsapp size={22} />,
         text: '090 2419-12-88',
         link: 'https://wa.me/09024191288',
      },
   ];
   return (
      <div>
         <div className="p-2 max-w-xl">
            {' '}
            <h4 className="block text-3xl sm:text-4xl font-medium mb-4 text-gray-200">
               Get in Touch with Us
            </h4>{' '}
            <p className="font-mono text-lg">
               {' '}
               There are several ways to connect with Ivory and get started with
               your ideas. We're excited to hear from you and respond within 24
               hours whether you have questions, feedback, or a project in mind.
            </p>
            <div className="pt-4">
               <ul>
                  {contacts.map((item, index) => (
                     <li key={index} className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <a className="font-medium text-lg text-purple-400 hover:underline" href={item.link}>{item.text}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default ContactDetail;
