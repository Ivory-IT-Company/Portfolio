const AboutHero = () => {
   return (

      <section className="h-[400px] min-xl:h-[600px] px-6 md:px-28 flex flex-col justify-center text-center">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Ivory</span>
         </h1>
         <p className="max-w-5xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            Ivory is a Nigeria-based software development company focused on
            building high-quality web and mobile solutions for startups and
            growing businesses. We combine strong engineering principles with
            modern technologies to deliver reliable digital products. We build
            modern, scalable digital products that help businesses grow and
            succeed.
         </p>
      </section>
   );
};

export default AboutHero;
