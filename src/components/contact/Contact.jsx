import ContactForm from './contact_feature/ContactForm'
import ContactDetail from './contact_feature/ContactDetail'

const Contact = () => {
  return (
     <div className="flex flex-col h-screen lg:h-200 xl:h-screen items-center gap-6 max-md:pt-6 md:flex-row lg:px-14">
        <div className="md:basis-1/2">
           <ContactDetail />
        </div>
        <div className="md:basis-1/2">
           <ContactForm />
        </div>
     </div>
  );
}

export default Contact