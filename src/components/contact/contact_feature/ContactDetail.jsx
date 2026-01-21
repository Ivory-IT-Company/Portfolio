import { CiLocationOn, CiMail, CiVoicemail } from "react-icons/ci";


const ContactDetail = () => {

   const contacts = [
      {
         icon: <CiMail size={18} className="text-indigo-500" />,
         text: 'ivory.it.company@gmail.com',
      },
      {
         icon: <CiVoicemail size={18} className="text-indigo-500" />,
         text: '090 2419-12-88',
      },
      {
         icon: <CiLocationOn size={18} className="text-indigo-500" />,
         text: 'Kwara State, Nigeria',
      },
   ];
   return (
      <div>
         <div className="px-12 max-w-xl">
            {' '}
            <h4 className="block text-2xl font-medium mb-4">
               Get in Touch with Us
            </h4>{' '}
            <p className="font-light">
               {' '}
               There are several ways to connect with Ivory and get started with
               your ideas. We're excited to hear from you and respond within 24
               hours whether you have questions, feedback, or a project in mind.
            </p>
            <div className="pt-4">
               <ul className="text-body  font-normal">
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

export default ContactDetail;
