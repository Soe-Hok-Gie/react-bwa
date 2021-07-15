import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo name="Coffe Arabika"category="hadiah"/>
    
     {/* {userLogged}
     {userLoggedJsx} */}
    </div>
  );
}

//mengecek diskon
function CheckDiscount(props) {
  const {isDiscount} = props; 
  if(isDiscount){
    return(
      <p>Diskon 50% OFF</p>
    );
  }
  else {
    return(
      <p>Belum ada Diskon</p>
    );
  }
}

function FotoProduk (){
  return (

    <div className="Foto">
      <img src="kopi.jpg"/>
    </div>
  );
}

function ProdukInfo (props){
  const {category, name }=props;
  return (
  <div>
  <div className="Deskripsi">
  <p className="Coffe">{category}</p>
  <h1 className="Title"> {name} </h1>
  <p className="Price">IDR 7.300.000.00</p>
  <p className="Info">Kopi merupakan salah satu komoditas di dunia yang dibudidayakan lebih dari 50 negara. 
  Dua spesies pohon kopi yang dikenal secara umum yaitu Kopi Robusta (Coffea canephora) dan Kopi Arabika (Coffea arabica).</p>              
  
  {/* <a onMouseOver={TambahCart} href="#"> add to cart</a> //menampilkan data secara statis */}
  <a onClick={(e) =>TambahCart (name, e)} href="#"> add to cart</a>
  </div>
  </div>
  );
}

function TambahCart (e){
  return console.log("menambah produk...." + e);
}

export default App;
