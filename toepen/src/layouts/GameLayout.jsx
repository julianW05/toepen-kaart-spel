import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavLink, Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { collection, query, where, getDocs, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase-config.jsx';

export default function GameLayout() {
  const navigate = useNavigate();
    
    return (
        <div className="game">
          <div className="top-bar">
            <div className="top-left">

            </div>
            <div className="top-mid">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
            </div>
            <div className="top-right">
              
            </div>
          </div>
          <div className="mid-bar">
            <div className="mid-left">

            </div>
            <div className="mid-mid">

            </div>
            <div className="mid-right">
              
            </div>
          </div>
          <div className="bottom-bar">
            <div className="bottom-left">

            </div>
            <div className="bottom-mid">

            </div>
            <div className="bottom-right">
              
            </div>
          </div>
        </div>
    )
}