// import { createContext, useContext } from "react";

// const BrightnessContext = createContext();

// export const useBrightness = () =>{
//     return useContext(BrightnessContext)
// }

// export const BrightnessProvider = ({children}) =>{
//     const [brightness, setbrightness] = useState(100);
//     const handleBrightnessChange = (value) => {
//     // Ensure the value is clamped between 0 and 100
//     const newValue = Math.max(5, Math.min(100, value));
//     setbrightness(newValue);
//   };
// }


// const contextValue = {
//     brightness, // The current brightness value (0-100)
//     setbrightness: handleBrightnessChange, // The function to update the brightness
//   };
  
// //   return (
// //     <BrightnessContext.Provider value={contextValue}>
// //       {children}
// //     </BrightnessContext.Provider>
// //   );