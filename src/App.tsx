
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CartPage from "./views/CartPage";
import LandingPage from "./views/LandingPage";
import PurchaseSuccessPage from "./views/Purchase/PurchaseSuccessPage";
import PurchaseFailedPage from "./views/Purchase/PurchaseFailedPage";
import PurchaseCanceledPage from "./views/Purchase/PurchaseCanceledPage";
import config from "./config";

function App() {
  return (
    <Router basename={config.path_prefix}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase/success" element={<PurchaseSuccessPage />} />
        <Route path="/purchase/failed" element={<PurchaseFailedPage />} />
        <Route path="/purchase/canceled" element={<PurchaseCanceledPage />} />
      </Routes>
    </Router>
  );
}

export default App;
