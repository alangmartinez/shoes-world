import Header from "./components/Header";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Home />
      <Categories />
      <Footer />
    </div>
  )
  
}

export default App;
