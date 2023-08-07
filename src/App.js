import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Userlogin from './components/userlogin'
import Userregister from './components/userregister'
import Products from './components/products'
import Product from './components/product'
import Admin from './components/admin'
import Admondash from './components/admindashboard'
import Contact from './components/contact'
import About from './components/about'
import Cartpage from './components/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <>
  <BrowserRouter>
  
  <Routes>
    <Route exect path='/' element={<Home/>} />
    <Route exect path='/userlogin' element={<Userlogin/>} />
    <Route exect path='/userregister' element={<Userregister/>} />
    <Route exect path='/products' element={<Products/>} />
    <Route exect path='/product' element={<Product/>}/>
    <Route exect path='/admin' element={<Admin/>}/>
    <Route exect path='/contact' element={<Contact/>}/>
    <Route exect path='/about' element={<About/>}/>
    <Route exect path='/cart' element={<Cartpage/>} />
    <Route exect path='/admindashboard' element={<Admondash/>}/>
  </Routes>
  </BrowserRouter>
   
  </>
  );
}

export default App;
