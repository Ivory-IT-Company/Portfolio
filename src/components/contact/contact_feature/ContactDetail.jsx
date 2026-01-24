import { motion } from 'motion/react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const ContactDetail = () => {
   const contacts = [
      {
         icon: <CiMail className="size-7" />,
         name: 'Email',
         text: 'ivory.it.company@gmail.com',
         link: 'mailto:ivory.it.company@gmail.com',
      },
      {
         icon: <LuPhoneCall className="size-7" />,
         name: 'Call',
         text: '090 2419-12-88',
         link: 'tel:+2349024191288',
      },
      {
         icon: <CiLocationOn className="size-7" />,
         name: 'Address',
         text: 'Kwara State, Nigeria',
         link: 'https://maps.google.com?q',
      },
      {
         icon: <FaTelegramPlane className="size-7" />,
         name: 'Telegram',
         text: '090 2419-12-88',
         link: 'https://tg.me/09024191288',
      },
      {
         icon: <FaWhatsapp className="size-7" />,
         name: 'Whatsapp',
         text: '090 2419-12-88',
         link: 'https://wa.me/09024191288',
      },
   ];
   return (
      <div className="p-2 md:p-8 max-w-xl">
         {' '}
         <h4 className="block text-3xl sm:text-4xl font-medium mb-4 text-gray-200">
            Get in Touch with Us
         </h4>{' '}
         <p className="font-mono text-[#97999e] text-lg">
            {' '}
            There are several ways to connect with Ivory and get started with
            your ideas. We're excited to hear from you and respond within 24
            hours whether you have questions, feedback, or a project in mind.
         </p>
         <div className="pt-4">
            <div>
               {contacts.map((item, index) => (
                  <motion.div
                     whileHover={{ rotate:0.5 }}
                     className="flex items-center gap-5 border border-[#4d4d4d] bg-[#0F1624] mb-3.5 px-5 2xl:px-7 py-3.5 rounded-lg hover:border-blue-400 hover:px-4"
                     key={index}>
                     <div>{item.icon}</div>
                     <div>
                        <h5>{item.name}</h5>
                        <span className=''>{item.text}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ContactDetail;
