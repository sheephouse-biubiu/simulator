import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
    </div>
  );
}

export default App;
