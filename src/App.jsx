import { useState, useEffect } from 'react'
import Navbar from "./pages/home/Navbar";
import "./App.css"
import { getMovies } from './api';
function App() {
  async function fetchMovies(){
    const response = await getMovies();
    console.log("response", response);
  } 
  useEffect(()=>{
    fetchMovies();
  },[])
  return (
    <>
        <Navbar/>
    </>
  )
}

export default App
