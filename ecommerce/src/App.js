import {useEffect,useState} from 'react';
import './App.css';

//Componets
import Header from './components/Header/index';
import Bannner from './components/Main/Banner';
import Form from './components/Main/Formulario/index';
import Footer from './components/Footer/index';
import ResultProducts from './components/Main/Products/index'
function getCurrentProducts() {
  return localStorage.getItem("products");
}

function App() {
  const [cartProducts, setCartProducts]= useState(0); 
  useEffect(()=>{
    const currentProducts = getCurrentProducts()
    setCartProducts(currentProducts || 0);
  },[]);
  function updateProducts() {
    const savedProducts =  +localStorage.getItem("products");
    localStorage.setItem("products", savedProducts + 1);
    setCartProducts(savedProducts + 1)
  }
  function removeCartProduct() {
    localStorage.setItem('products', 0)
    setCartProducts(0)
  }
  return (
    <div className="App">
      <Header cartProducts = {cartProducts} removeCartProduct = {removeCartProduct} />
      <Bannner />
      <Form />
      <Footer/>
      <ResultProducts updateProducts= {updateProducts}/>
     
    </div>
  );
}

export default App;
