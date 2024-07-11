import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Additem from './components/Additem';
import Viewallitem from './components/Viewallitem';
import NavigatorBar from './components/NavigatorBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/add' element={<Additem/>}/>
      <Route  path='/viewalli' element={<Viewallitem/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
