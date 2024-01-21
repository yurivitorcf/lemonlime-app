import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Main/>
      <Menu/>
    </BrowserRouter>
    </>
  );
}

export default App;
