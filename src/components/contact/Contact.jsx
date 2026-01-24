import ContactForm from './contact_feature/ContactForm';
import ContactDetail from './contact_feature/ContactDetail';

const Contact = () => {
   return (
      <div className="flex flex-col min-h-screen px-6 items-center gap-4 max-lg:py-6 py-10 lg:flex-row lg:px-26 2xl:px-60">
         <div className="lg:basis-2/5">
            <ContactDetail />
         </div>
         <div className="max-lg:max-w-xl w-full lg:basis-3/5">
            <ContactForm />
         </div>
      </div>
   );
};

export default Contact;
