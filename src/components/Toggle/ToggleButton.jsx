import { toggleDarkMode } from "./toggle";

const ToggleButton = () => {
   return (
      <label className="relative flex items-center w-14 h-7 cursor-pointer">
         <input
            type="checkbox"
            className="peer sr-only"
            onClick={toggleDarkMode}
         />

         {/* Track */}
         <div className="w-full h-7 rounded-full bg-gray-700 peer-checked:bg-white transition-colors"></div>

         {/* Knob */}
         <div className="absolute left-0 w-7 h-7 bg-gray-200 rounded-full transition-transform peer-checked:translate-x-7"></div>

         {/* Text */}
         <span className="pointer-events-none absolute right-1 text-sm text-white peer-checked:hidden">
            🌙
         </span>
         <span className="pointer-events-none absolute left-1 text-sm text-white hidden peer-checked:block">
            ☀️
         </span>
      </label>
   );
};

export default ToggleButton;
