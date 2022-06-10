import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './container/ItemListContainer';
import ItemListCategoryContainer from './container/itemListCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import ContentHome from './container/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ContentHome />} />
          <Route path='/cursos' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListCategoryContainer />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;