import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // const userLogged ="Fadil"
  // const userLoggedJsx = <strong>"dasar jsx"</strong>//bisa menambahkan fungsi HTMl
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo  isDiscount="coming" name="Coffe Arabika"category="hadiah"/>
      <ReviewItem/>

     {/* {userLogged}
     {userLoggedJsx} */}
    </div>
  );
}

function ReviewItem() {
  //mempersiapkan data dummy Json

  const users = [
    {
      "id" :1,
      "name" :"amat",
      "review" : "harganya terjangkau"
    },
    {

      "id" :2,
      "name" :"amin",
      "review" : "kualitasnya bagus"
    },
    {
      "id" :3,
      "name" :"ilham",
      "review" : "bungkusannya rapi"
    }
  ];
  
  const listReview =users.map((itemReview) =>
  
    <div className="item">
      <img src="https://images.pexels.com/photos/4613045/pexels-photo-4613045.jpeg?cs=srgb&dl=pexels-aphotox-4613045.jpg&fm=jpg"/>
      <div className="user">
        <h3>{itemReview.name} </h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="Review-box">
      <h2>Review</h2>
      {listReview}
    </div>
  );
}


//mengecek diskon
function CheckDiscount(props) {
  const {isDiscount} = props; 
  if(isDiscount =="yes" ){
    return(
      <p>Diskon 50% OFF</p>
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
  <li>{x}</li>
  );
  return (
  <div>
    <div className="Deskripsi">
      <p className="Coffe">{category}</p>
      <h1 className="Title"> {name} </h1>
      <p className="Price">IDR 7.300.000.00</p>
      <CheckDiscount isDiscount={isDiscount}/>
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

export default App;
