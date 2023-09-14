import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavLink, Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { collection, query, where, getDocs, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase-config.jsx';

export default function GameLayout() {
  const navigate = useNavigate();
    
    return (
        <div className="game">
        </div>
    )
}