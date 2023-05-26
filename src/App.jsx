import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderParts from "./components/OrderParts";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/parts" element={<OrderParts />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;