const reasons = [
   'Modern tech stack (.NET, FastAPI, React, Cloud)',
   'Scalable system architecture',
   'Clear communication',
   'Friendly pricing',
   'Reliable delivery',
   'Proven impact',
];

const WhyChooseUs = () => {
   return (
      <section className="px-6 md:px-28">
         <h2 className="text-3xl font-bold mb-6">Why Choose Ivory</h2>
         <ul className="space-y-3 text-gray-600">
            {reasons.map((reason) => (
               <li key={reason}>• {reason}</li>
            ))}
         </ul>
      </section>
   );
};

export default WhyChooseUs;
