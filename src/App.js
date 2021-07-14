import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl


  return (
    <div className="Parentbox">
{/* 
     {userLogged}
     {userLoggedJsx} */}
      
    </div>
  );
}

function fotoProduk (){
  return (

    <div className="Foto">
      <img src="kopi.jpg"/>
    </div>
  );
}

function produkInfo (){
  const category="Coffea arabika";
  return (
<div>
  <div className="Deskripsi">
  <p className="Coffe">{category}</p>
  <h1 className="Title"> Biji Coffe </h1>
  <p className="Price">IDR 7.300.000.00</p>
  <p className="Info">Kopi merupakan salah satu komoditas di dunia yang dibudidayakan lebih dari 50 negara. 
  Dua spesies pohon kopi yang dikenal secara umum yaitu Kopi Robusta (Coffea canephora) dan Kopi Arabika (Coffea arabica).</p>              
</div>
</div>
  );
}

export default App;
