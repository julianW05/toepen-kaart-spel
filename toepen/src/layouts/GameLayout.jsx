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
              <a>Restart</a>
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
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
            </div>
            <div className="mid-mid">

            </div>
            <div className="mid-right">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
            </div>
          </div>
          <div className="bottom-bar">
            <div className="bottom-left">
              <div className="call-fold">
                <a>Call</a>
                <a>Fold</a>
              </div>
            </div>
            <div className="bottom-mid">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159451863410819143/kisspng-ace-of-hearts-playing-card-card-game-stock-photogr-5afe5ddd5f6553.2813311815266196133908.jpg?ex=653112b1&is=651e9db1&hm=1846f7b1ba9a626d774dd709f7267a8793acdfeb977ab90e658cd79f858acf51&=&width=230&height=325" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159451863410819143/kisspng-ace-of-hearts-playing-card-card-game-stock-photogr-5afe5ddd5f6553.2813311815266196133908.jpg?ex=653112b1&is=651e9db1&hm=1846f7b1ba9a626d774dd709f7267a8793acdfeb977ab90e658cd79f858acf51&=&width=230&height=325" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159451863410819143/kisspng-ace-of-hearts-playing-card-card-game-stock-photogr-5afe5ddd5f6553.2813311815266196133908.jpg?ex=653112b1&is=651e9db1&hm=1846f7b1ba9a626d774dd709f7267a8793acdfeb977ab90e658cd79f858acf51&=&width=230&height=325" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159451863410819143/kisspng-ace-of-hearts-playing-card-card-game-stock-photogr-5afe5ddd5f6553.2813311815266196133908.jpg?ex=653112b1&is=651e9db1&hm=1846f7b1ba9a626d774dd709f7267a8793acdfeb977ab90e658cd79f858acf51&=&width=230&height=325" alt="kaart" />
            </div>
            <div className="bottom-right">
              <a>Toepen</a>
            </div>
          </div>
        </div>
    )
}