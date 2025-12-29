const services = [
   'Web Application Development',
   'Mobile App Development',
   'UI/UX Design',
   'Backend & API Development',
   'Cloud Solutions',
];

const ServicesOverview = () => {
   return (
      <section className="px-6 md:px-28">
         <h2 className="text-3xl font-bold mb-6">What We Do</h2>
         <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            {services.map((service) => (
               <li
                  key={service}
                  className="border rounded-lg p-4 hover:border-blue-500 transition">
                  {service}
               </li>
            ))}
         </ul>
      </section>
   );
};

export default ServicesOverview;
