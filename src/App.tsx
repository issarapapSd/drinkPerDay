import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrinkPerDay from './pages/DrinkPerDay'


function App() {
  return (<DrinkPerDay/>)
}

export default App

// import React, { useState } from 'react';
// import WaterIntakeCalculator from './pages/WaterIntakeCalculator';

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div>
//       <h1> ควรดื่มน้ำวันละเท่าไหร่ ? </h1>
//       <WaterIntakeCalculator darkMode={darkMode} />
//       <button onClick={handleThemeChange}>
//         Toggle {darkMode ? 'Light' : 'Dark'} Mode
//       </button>
//     </div>
//   );
// };

// export default App;