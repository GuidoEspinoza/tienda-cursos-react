import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './container/ItemListContainer';
import ItemListCategoryContainer from './container/itemListCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import ContentHome from './container/Home';
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ContentHome />} />
            <Route path='/cursos' element={<ItemListContainer />} />
            <Route path='/categoria/:categoryId' element={<ItemListCategoryContainer />} />
            <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<h1>Carrito de Compras</h1>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;