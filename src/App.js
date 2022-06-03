import './style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid="md" className='mt-5'>
        <ItemListContainer name="Developer" />
      </Container>
    </div>
  );
}

export default App;