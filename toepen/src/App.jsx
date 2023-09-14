import { useEffect, useState } from 'react'
import './App.css'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  useNavigate
} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

// PAGES //

// COMPONENTS //

// LAYOUTS //
import GameLayout from './layouts/GameLayout'
import HomeLayout from './layouts/HomeLayout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "game",
    element: <GameLayout />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
