import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/AddData";
import Dashboard from "./pages/Dashboard";
import EditData from "./pages/EditData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/edit-data/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
