import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Houses from './Pages/Houses';
import House from './Pages/House';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Houses />} />
        <Route path="/estates" element={<Houses />} />
        <Route path="/estate/:id" element={<House />} />
      </Routes>
    </div>
  );
}


export default App;



