import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Microwave from "./container/Microwave/Microwave";
import Keranjang from "./container/Microwave/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center>
        <h2>Selamat Datang di WGFShop</h2>
        <h4>kami menjual berbagai macam merk Microwave</h4>
        <h4>langsung cek ke list produk</h4>
      <img src="https://i2.wp.com/ramesia.com/wp-content/uploads/2017/08/Chef-Bakery.jpg?w=1000&ssl=1" alt=""></img></center>
      
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center><h2>Biodata</h2>
        
        <table border="1" cellpadding="10">
          <tr>
            <td>Nama : </td>
            <td>Wardah Ghaliyah F</td>
          </tr>
          <tr>
            <td>Tempat Lahir:</td>
            <td>Surabaya</td>
          </tr>
          <tr>
            <td>Tanggal Lahir:</td>
            <td>2 Februari 2000</td>
          </tr>
          <tr>
            <td>Alamat:</td>
            <td>Joyomulyo kedawung kulon, Kec. Grati, Kab. Pasuruan</td>
          </tr>
          <tr>
            <td>Kelas:</td>
            <td>TI-3E 1841720029</td>
          </tr>
          
          <tr>
            <td>Jurusan:</td>
            <td>Teknologi Informasi</td>
          </tr>
        </table>
        
        <img src="img/wardah.jpeg" alt=""></img>

      </center>
    </div>
  );
}

function Products() {
  return (
    <div>
      <Microwave />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;