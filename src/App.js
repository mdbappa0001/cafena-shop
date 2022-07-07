import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Navbar from './Shared/Navbar';
import RequireAuth from './Shared/RequireAuth';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/checkout' element=
          {
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
      </Routes>
    </>
  );
}

export default App;
