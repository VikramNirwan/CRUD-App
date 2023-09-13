import "./App.css";
import Navbar from "./components/Navbar";
import Crud from "./components/Crud";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
