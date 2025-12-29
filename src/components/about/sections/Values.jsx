const values = [
   'Quality over shortcuts',
   'Transparency and trust',
   'Continuous learning',
   'Client-focused solutions',
   'Long-term partnerships',
   'Innovation Edge'
];

const Values = () => {
   return (
      <section className="px-6 md:px-28">
         <h2 className="text-3xl font-bold mb-6">Our Values</h2>
         <ul className="grid sm:grid-cols-2 gap-4 text-gray-600">
            {values.map((value) => (
               <li key={value} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  {value}
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Values;
