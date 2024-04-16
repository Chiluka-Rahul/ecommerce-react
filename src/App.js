import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from './pages/ProductDetails'
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Shoes from "./pages/Shoes"
import './index.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/shoes" element={<Shoes />}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    // <h1>Hello World</h1>
  );
}

export default App;
