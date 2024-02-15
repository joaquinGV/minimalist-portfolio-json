// import { useState } from "preact/hooks";
// const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
// console.log(darkModeMediaQuery.matches);

// export function toggleMode() {
//   const [isDarkMode, setIsDarkMode] = useState(darkModeMediaQuery.matches); // Obtener el estado de darkMode

//   // Función para cambiar el estado de darkMode
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     if (!isDarkMode) {
//       document.querySelector("ninja-keys")?.classList.remove("dark");
//       document.documentElement.classList.remove("dark");
//     } else {
//       document.querySelector("ninja-keys")?.classList.add("dark");
//       document.documentElement.classList.add("dark");
//     }
//   };

//   return { isDarkMode, toggleDarkMode };
// }
