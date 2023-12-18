import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Cart from './pages/Cart/Cart';
 import Orders from './pages/Orders/Orders';
import Checkout from './pages/Checkout/Checkout';
import Landing from './components/LandingPage/Landing';
import { store } from './store';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <AppProvider> 

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
       
      </Routes>

    </BrowserRouter>
     </AppProvider>
  </Provider>
   
);

