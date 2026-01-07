import React from 'react';
import OurServices from './sections/OurServices';

const Services = () => {
   return (
      <>
         {' '}
         <div className="flex items-center justify-center min-h-screen border-b mb-9 ">
            <h1 className="text-8xl text-cyan-700">Our Diversified Digital Solutions</h1>
            <span></span>
         </div>
         <div>
            <OurServices />
         </div>
      </>
   );
};

export default Services;
