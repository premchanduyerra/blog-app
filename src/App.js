import logo from './logo.svg';
import './App.css';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Pages/Login';
import { Signup } from './components/Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Services } from './components/Services';

function App() {
  return (
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/services" element={<Services/>}/>
      </Routes>
     
     </BrowserRouter>
  );
}

export default App;
