import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex, Text } from "@radix-ui/themes";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {

  return (
    <div className="main-container">
      <Nav />
      <Hero/>
      <Cards/>
    </div>
  );
}

export default App;
  