import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl



  return (
    <div class="Parentbox">
{/* 
     {userLogged}
     {userLoggedJsx} */}
     <div class="Foto">
       <img src="kopi.jpg"/>
     </div>
     <div class="Deskripsi">
     <p class="Coffe">coffe</p>
      <h1 class="Title"> Biji Coffe </h1>
      <p class="Price">IDR 73.400.00</p>
      <p class="Info">coffe blabla</p>
           
           
    </div>
    </div>
  );
}

export default App;
