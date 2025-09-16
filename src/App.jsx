import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Profile from './pages/Profle';



function App() {

  return (
    <>
    
     <HashRouter>
      <Routes>
      
        <Route path="/" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/profile" element ={<Profile />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </HashRouter>

    </>
  )
}

export default App
