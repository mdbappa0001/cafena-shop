import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
