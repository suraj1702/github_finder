import logo from './logo.svg';
import './App.css';
import Logo from './components/logo';
import { Routes,Route } from 'react-router-dom';
import Users from './routes/users';
import Userinfo from './routes/userinfo';

function App() {
  return (
    <>
      <div className='min-vh-100 bg-black'>
        <div className='container text-white fs-2 py-3'>
          <Logo />
          <Routes>
            <Route path='/' element={<Users/>}></Route>
            <Route path='/:name' element={<Userinfo/>}></Route>
          </Routes>

        </div>

      </div>

    </>
  );
}

export default App;
