import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl

 const category="Coffea arabika"

  return (
    <div class="Parentbox">
{/* 
     {userLogged}
     {userLoggedJsx} */}
       <div class="Foto">
         <img src="kopi.jpg"/>
      </div>
      <div class="Deskripsi">
      <p class="Coffe">{category}</p>
      <h1 class="Title"> Biji Coffe </h1>
      <p class="Price">IDR 7.300.000.00</p>
      <p class="Info">Kopi merupakan salah satu komoditas di dunia yang dibudidayakan lebih dari 50 negara. 
      Dua spesies pohon kopi yang dikenal secara umum yaitu Kopi Robusta (Coffea canephora) dan Kopi Arabika (Coffea arabica).</p>              
    </div>
    </div>
  );
}

export default App;
