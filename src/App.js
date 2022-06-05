import React from "react";
import { Routes, Route } from "react-router-dom";
import History from "./components/History/History";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
