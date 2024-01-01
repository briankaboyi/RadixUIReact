import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex, Text } from "@radix-ui/themes";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Nav />
      <Hero/>
    </div>
  );
}

export default App;
  