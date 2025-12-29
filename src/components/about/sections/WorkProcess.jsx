const steps = [
   'Discovery & Planning',
   'Design & Architecture',
   'Development',
   'Testing & QA',
   'Deployment & Support',
];

const WorkProcess = () => {
   return (
      <section className="px-6 md:px-28">
         <h2 className="text-3xl font-bold mb-6">How We Work</h2>
         <ol className="space-y-3 text-gray-600 list-decimal list-inside">
            {steps.map((step) => (
               <li key={step}>{step}</li>
            ))}
         </ol>
      </section>
   );
};

export default WorkProcess;
