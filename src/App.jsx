import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex, Text } from "@radix-ui/themes";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import getAllHouses from "../services/houses.api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Notfound from "./pages/Notfound";

function App() {
  getAllHouses()
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="property" element={<Property />} />
          <Route path="contacts" element={<Contacts />} />

        </Route>
        <Route path="*" element={<notfound />} />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
