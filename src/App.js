import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckoutService from './components/CheckoutService/CheckoutService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/checkout/:serviceId" element={ <CheckoutService/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
