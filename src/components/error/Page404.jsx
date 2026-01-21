
const Page404 = () => {
   return (
      <section className="flex h-125 items-center justify-center">
         <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
               <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                  404
               </h1>
               <p className="mb-4 text-3xl tracking-tight font-bold">
                  Something's missing.
               </p>
               <p className="mb-4 text-lg font-light text-gray-400">
                  Sorry, we can't find that page. You'll find lots to explore on
                  the home page.{' '}
               </p>
               
            </div>
         </div>
      </section>
   );
};

export default Page404;
