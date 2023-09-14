import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import {db, analytics, provider} from '../Firebase-config'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function HomeLayout() {

  return (
    <div className="home">
      <div className="">
        <div className="">
          <h1 className="">Welkom Bij <b>Toepen</b></h1>
          <div className=""></div>
          <p className="">klik op play om te starten met spelen</p>
        </div>
      </div>
      <div className="">
        <div className="copyright">
          <p>© 2023 Julian Wessels | Sil Theunissen | Tom Hubers</p>
        </div>
      </div>
        <div className="">
          <div className="playBtn">
            <NavLink to="/game" className="">PLAY</NavLink>
          </div>
        </div>
          <Outlet />
    </div>
  )
}