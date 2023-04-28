import "./App.css";
import Main from "./Component/Main";
import Productdetails from "./Component/Productdetails";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import ClassComponent from "./Component/ClassComponent";
import Cart from "./Component/Cart";
import Use_ref from "./Component/Use_ref";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Main />} />
          <Route path="/productDetails/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/classcomponent" element={<ClassComponent />} />
          <Route path="/useref" element={<Use_ref />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
