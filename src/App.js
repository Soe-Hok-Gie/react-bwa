import React from 'react'
import logo from './logo.svg';
import './App.css';
import ReviewItem from './Reviews';
import PropTypes from 'prop-types';//untuk mengecek nilai apa yang dibutuhkan ketika mempersiapkan API oleh Developer

function App() {
  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo  isDiscount="yes" name=" Biji Coffe"category="Coffe"/>
      <ReviewItem/>

     {/* {userLogged}
     {userLoggedJsx} */}
    </div>
  );
}

//mengecek diskon
function CheckDiscount(props) {
  const {isDiscount, discount} = props; 
  if(isDiscount =="yes" ){
    return(
      <p> {discount}% OFF</p>
    );
  } 
  else if(isDiscount == "coming"){
    return(
      <p>akan ada Diskon .... </p>
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
  const {category, name, isDiscount}=props;
  const benefits = ["tidak kusut terkena air", "bahan langsung dari petani","juga eksportir ke asia timur"]
  const listBenefits =benefits.map((x) =>
  <li key={x}>{x}</li>
  );
  return (
  <div>
    <div className="Deskripsi">
      <p className="Coffe">{category}</p>
      <h1 className="Title"> {name} </h1>
      <p className="Price">IDR 7.000.000.00</p>
      <CheckDiscount isDiscount={isDiscount} discount={20}/>
      <p className="Info">Kopi merupakan salah satu komoditas di dunia yang dibudidayakan lebih dari 50 negara. 
          Dua spesies pohon kopi yang dikenal secara umum yaitu Kopi Robusta (Coffea canephora) dan Kopi Arabika (Coffea arabica).
     </p>
      <ul>
        {listBenefits}
      </ul>                  
  
  {/* <a onMouseOver={TambahCart} href="#"> add to cart</a> //menampilkan data secara statis */}
      <a onClick={(e) =>TambahCart (name, e)} href="#"> add to cart</a>
     </div>
  </div>
  );
}

function TambahCart (e){
  return console.log("menambah produk...." + e);
}

CheckDiscount.propTypes ={
  discount: PropTypes.number.isRequired

};

export default App;
