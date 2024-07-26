import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
