
const ContactForm = () => {
   return (
      <div className=" flex flex-col rounded-xl bg-transparent">
         <form className="mt-8 mb-2 w-80 max-w-6xl sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
               <div className="w-full max-w-sm min-w-50">
                  <label className="block mb-2 text-sm ">Your Name</label>
                  <input
                     type="text"
                     className="w-full bg-transparent placeholder:text-slate-400 text-slate-200 text-md border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                     placeholder="Your Name"
                  />
               </div>
               <div className="w-full max-w-smmin-w-50">
                  <label className="block mb-2 text-sm ">Email</label>
                  <input
                     type="email"
                     className="w-full bg-transparent placeholder:text-slate-400 text-slate-200 text-md border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                     placeholder="Your Email"
                  />
               </div>
               <div className="w-full max-w-sm min-w-50">
                  <label className="block mb-2 text-sm ">Messagee</label>
                  <textarea
                     rows={5}
                     type="message"
                     className="w-full  bg-transparent placeholder:text-slate-400 text-slate-200 text-md border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                     placeholder="Your message our pleasure!!!"></textarea>
               </div>
            </div>
            <button
               className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button">
               send the message
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
