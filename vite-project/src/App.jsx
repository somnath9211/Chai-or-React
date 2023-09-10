import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-6">
        Tailwind CSS
      </h1>
      <Card userName="Somnath" btnText="Click Me" />
      <Card userName="Ankush" btnText="Visit Me" />
    </>
  );
}

export default App;
