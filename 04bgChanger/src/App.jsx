// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <>
//       <div className ='w-screen h-screen duration-300 ease-out' style={{backgroundColor : color}}>

//         <div className='fixed flex justify-center flex-wrap px-2.5 py-
//         1.5 bottom-15 inset-x-3' style={{backgroundColor : ''}}>
//           <div className='flex  flex-wrap justify-center gap-3.5 stroke-cyan-50 drop-shadow-lg bg-white px-3 py-2.5 rounded-2xl text-orange-200 '>
//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "red"}}
//             onClick = {() =>setColor("red")}>
//               Red

//               </button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "yellow"}}
//             onClick = {() =>setColor("yelow")}
//             >Yellow</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "lavender"}}onClick = {() =>setColor("lavender")}
//               >Lavender</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "Purple"}}
//             onClick = {() =>setColor("purple")}
//             >Purple</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "Magenta"}}
//             onClick = {() =>setColor("magenta")}
//             >Magenta</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : " Green"}}
//             onClick = {() =>setColor("green")}
//             >Green</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "gold"}}
//             onClick = {() =>setColor("gold")}
//             >Gold</button>

//             <button className='rounded-4xl outline-none px-4' style={{backgroundColor : "maroon"}}
//             onClick = {() =>setColor("maroon")}
//             >Maroon</button>
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default App

//BY GPT
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div className="w-screen h-screen transition-all duration-300 ease-out" style={{ backgroundColor: color }}>
//       <div className="fixed bottom-8 inset-x-0 flex justify-center">
//         <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl shadow-md">
//           {[
//             { label: "Red", color: "red" },
//             { label: "Yellow", color: "yellow" },
//             { label: "Lavender", color: "lavender" },
//             { label: "Purple", color: "purple" },
//             { label: "Magenta", color: "magenta" },
//             { label: "Green", color: "green" },
//             { label: "Gold", color: "gold" },
//             { label: "Maroon", color: "maroon" },
//           ].map(({ label, color }) => (
//             <button
//               key={label}
//               className="px-5 py-2 rounded-full text-white text-sm font-medium shadow-md hover:scale-105 transition-transform"
//               style={{ backgroundColor: color }}
//               onClick={() => setColor(color)}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// another by gpt with more visibility

import { useState } from 'react';
import './App.css';

// Function to determine ideal text color (light or dark)
const getTextColor = (bgColor) => {
  const [r, g, b] = bgColor.match(/\w\w/g).map((c) => parseInt(c, 16)); // Convert hex to RGB
  const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Calculate brightness
  return brightness > 125 ? 'black' : 'white'; // Return 'black' for bright colors, 'white' for dark
};

function App() {
  const [color, setColor] = useState("#808000"); // Default color in hex (olive)

  return (
    <div className="w-screen h-screen transition-all duration-300 ease-out" style={{ backgroundColor: color }}>
      <div className="fixed bottom-8 inset-x-0 flex justify-center">
        <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl shadow-md">
          {[
            { label: "Red", color: "#FF0000" },
            { label: "Yellow", color: "#FFFF00" },
            { label: "Lavender", color: "#E6E6FA" },
            { label: "Purple", color: "#800080" },
            { label: "Magenta", color: "#FF00FF" },
            { label: "Green", color: "#008000" },
            { label: "Gold", color: "#FFD700" },
            { label: "Maroon", color: "#800000" },
          ].map(({ label, color }) => (
            <button
              key={label}
              className="px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform"
              style={{
                backgroundColor: color,
                color: getTextColor(color), // Dynamically set text color based on background
              }}
              onClick={() => setColor(color)}// onclick expects a reference to a function
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

