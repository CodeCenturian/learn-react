import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);

  // using useRef Hook

  const passwordRef = useRef(null);

  // Using useCallback to optimize performance
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-=+[]{};'\,.?:";

    for (let i = 0; i < length; i++) { // Fixed loop start
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback ( ()=>{
    //to show the select effect
    passwordRef.current?.select();
    //if i am selecting a range
    // passwordRef.current.setSelectionRange(0,21);

    // to copy the password assigned to password variable using usestate
    window.navigator.clipboard.writeText(password);
  },[password] )


  // Trigger password generation when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // Removed function invocation

  return (
    <>
      <h1 className="text-4xl text-center text-white my-4">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-md px-8 py-5 my-6 text-orange-400 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none bg-gray-700 w-full py-1 px-3 text-yellow"
            placeholder="Password"
            readOnly
            ref = {passwordRef} // cause it is assigned to useRef
          />

          <button
            className="outline-none bg-orange-600 text-white px-3 py-0.5 shrink-0"
            onClick={passwordGenerator}
          >
            Generate
          </button>
          <button
          onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed} // Fixed incorrect defaultChecked
              id="characterInput" // Fixed typo in ID
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


//useref hooks for taking a reference as in coping