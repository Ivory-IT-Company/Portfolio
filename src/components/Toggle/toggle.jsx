export function toggleDarkMode() {
   const isDark = document.documentElement.classList.contains('dark');

   if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';

      console.log(document.documentElement.classList);
   } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
   }
}
