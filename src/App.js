import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Subscribe from './pages/Subscribe/Subscribe';
import Footer from './pages/shared/Header/Footer';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Register from './pages/Register/Register';  
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import RequireAuth from './RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Dashboard/Orders';
import Review from './pages/Dashboard/Review';
import Payment from './pages/Dashboard/Payment';
import Profile from './pages/Dashboard/Profile';
import RequireAdmin from './hooks/RequireAdmin';
import Admin from './pages/Dashboard/Admin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageProducts from './pages/Dashboard/ManageProducts';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<NotFound/>}/>
       <Route path='/product/:id' element={
         <RequireAuth>
           <ProductDetails/>
         </RequireAuth>
       }/>
       <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard/>
         </RequireAuth>  }>
         
         <Route path='order' element={<Orders/>}/>
         <Route path='review' element={<Review/>}/>
         <Route path='make-admin' element={
           <RequireAdmin>
             <Admin/>
           </RequireAdmin>
         }/>
         <Route path='add-product' element={
           <RequireAdmin>
             <AddProduct/>
           </RequireAdmin>
         }/>
         <Route path='manage-order' element={
           <RequireAdmin>
             <ManageOrder/>
           </RequireAdmin>
         }/>
         <Route path='manage-product' element={
           <RequireAdmin>
             <ManageProducts/>
           </RequireAdmin>
         }/>
         <Route index element={<Profile/>}/>
         <Route path='payment/:id' element={<Payment/>}/>
</Route>
     </Routes>
     <Subscribe/>
     <Footer/>
     <ToastContainer />
    </div>
  );
}

export default App;
