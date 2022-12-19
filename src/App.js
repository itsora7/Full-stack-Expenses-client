import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";
import Dashboard from "./pages/Dashboard.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h2>404 page not found...</h2>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
