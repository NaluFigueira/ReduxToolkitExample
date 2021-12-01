import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./common/styles/global";
import Cart from "./features/cart/Cart";
import Grid from "./features/grid/Grid";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
