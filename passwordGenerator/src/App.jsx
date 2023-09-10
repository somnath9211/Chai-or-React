import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef Hook

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]|:;<>,.?/'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numAllowed, charAllowed, PasswordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800 ">
        <h1 className=" text-lg text-white text-center my-4">
          Password Generator
        </h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            className=" outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            Copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className=" cursor-pointer"
              onChange={(e) => {
                setlLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className=" flex items-center gap-x-1 ">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className=" flex items-center gap-x-1 ">
            <input
              type="checkbox"
              id="characterInout"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
