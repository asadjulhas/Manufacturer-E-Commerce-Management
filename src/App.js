import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Subscribe from './pages/Subscribe/Subscribe';
import Footer from './pages/shared/Header/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
