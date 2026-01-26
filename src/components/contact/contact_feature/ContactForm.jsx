import { motion } from 'motion/react';

const ContactForm = () => {
   return (
      <motion.form
         initial={{ opacity: 0.15, x: 60 }}
         // animate={{opacity:1, x:0, duration:0.65 }}
         // transition={{ opacity: 0.9, x: 0, duration:0.65 }}
         whileInView={{ opacity: 0.9, x: 0, transition: { duration: 0.65 } }}
         className="border border-[#4d4d4d] rounded-lg bg-[#0F1624] p-5 sm:py-8 sm:px-20">
         <div className="mb-1 flex flex-col gap-6">
            <div className="w-full ">
               <label className="block mb-2 text-sm">Your Name</label>
               <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-300 text-slate-200 text-sm border border-[#666666] rounded-md p-3 transition duration-300 ease shadow-sm focus:shadow"
                  placeholder="John Doe"
               />
            </div>
            <div className="w-full">
               <label className="block mb-2 text-sm">Email</label>
               <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-300 text-slate-200 text-sm border border-[#666666] rounded-md p-3 transition duration-300 ease shadow-sm focus:shadow"
                  placeholder="yourmail@mail.com"
               />
            </div>
            <div className="w-full">
               <label className="block mb-2 text-sm">Subject</label>
               <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-300 text-slate-200 text-sm border border-[#666666] rounded-md p-3 transition duration-300 ease shadow-sm focus:shadow"
                  placeholder="I have a project for Ivory"
               />
            </div>
            <div className="w-full ">
               <label className="block mb-2 text-sm">Messagee</label>
               <textarea
                  rows={6}
                  type="message"
                  className="w-full bg-transparent placeholder:text-slate-300 text-slate-200 text-sm border border-[#666666] rounded-md p-3 transition duration-300 ease shadow-sm focus:shadow"
                  placeholder="Your message our pleasure!!!"></textarea>
            </div>
         </div>
         <button
            className="mt-4 w-full rounded-md bg-[#4F8CFF] py-2 px-4 text-center text-lg text-[#FFFFFF] transition-all active:bg-[#2F63D6] hover:bg-[#3B76F6] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            send the message
         </button>
      </motion.form>
   );
};

export default ContactForm;
