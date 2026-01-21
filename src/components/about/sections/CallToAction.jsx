import { NavLink } from "react-router";

const CallToAction = () => {
   return (
      <section className="px-6 md:px-28 py-16 text-center ">
         <h2 className="text-3xl font-bold mb-4">
            Ready to build something great?
         </h2>
         <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let us turn your idea into a powerful digital product.
         </p>
         <NavLink
            to="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Contact Us
         </NavLink>
      </section>
   );
};

export default CallToAction;
