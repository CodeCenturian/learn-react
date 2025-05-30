import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card'; // Ensure proper capitalization for the component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-400 rounded-xl p-4">Tailwind Test</h1>
      <Card
        name="Orion"
        className={4} // Updated to match the prop name in `Card`
        money={40000}
        height={160}
        weight={50} 
      />
    </>
  );
}

export default App;
