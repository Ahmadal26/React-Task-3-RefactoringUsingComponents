import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <div className="body">
      <div>
        <Header />
        <ProductList />
      </div>
    </div>
  );
}
export default App;
