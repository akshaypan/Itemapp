import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Additem from './components/Additem';
import Viewallitem from './components/Viewallitem';

function App() {
  return (
    <div>
      <Home/>
      <Additem/>
      <Viewallitem/>
    </div>
  );
}

export default App;
