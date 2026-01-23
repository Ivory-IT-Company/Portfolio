import ContactForm from './contact_feature/ContactForm'
import ContactDetail from './contact_feature/ContactDetail'

const Contact = () => {
  return (
     <div className="flex flex-col h-full lg:h-200 xl:h-screen px-6 items-center gap-4 max-md:pt-6 md:flex-row lg:px-26">
        <div className="md:basis-2/5">
           <ContactDetail />
        </div>
        <div className="w-full px-3 md:basis-3/5">
           <ContactForm />
        </div>
     </div>
  );
}

export default Contact