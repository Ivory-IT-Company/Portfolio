import { IoSunnyOutline } from 'react-icons/io5';
// import { toggleDarkMode } from './toggle';
import { useState, useEffect } from 'react';

const ToggleButton = () => {
   const [isDark, setIsDark] = useState(
      document.documentElement.classList.contains('dark')
   );

   useEffect(() => {
      document.documentElement.classList.toggle('dark', isDark);
   }, [isDark]);
   return (
      <label className="relative flex items-center w-14 h-7 cursor-pointer">
         <input
            type="checkbox"
            className="peer sr-only"
            checked={isDark}
            onChange={() => setIsDark((prev) => !prev)}
         />
         {/* Track */}
         <div className="w-full h-6 rounded-full bg-gray-700 peer-checked:bg-white transition-colors"></div>
         {/* Knob */}
         <div
            className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform translate-x-0 bg-gray-200 dark:translate-x-7 dark:bg-gray-700
          `}
         />
         {/* Icons */}
         <span className="pointer-events-none absolute right-1 text-sm">
            🌙
         </span>
         {/* ☀️ */}
         <span className="pointer-events-none absolute left-1.5 text-sm"><IoSunnyOutline size={16} color='orange'/></span>
      </label>
   );
};

export default ToggleButton;
