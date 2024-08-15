import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import CartPage from "./Pages/CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
