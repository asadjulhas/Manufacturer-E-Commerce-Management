import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
