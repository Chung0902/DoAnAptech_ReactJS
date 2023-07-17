//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Layout from "./components/Main/Layout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import MainDashboardAdmin from "./pages/owner/MainDashboardAdmin";
import EmployeeManager from "./pages/owner/EmployeeManager";
import AddEmployee from "./pages/owner/employees/AddEmployee";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Layout />}>
          <Route path="/main/amindashboard" element={<MainDashboardAdmin/>} />
          <Route path="/main/employeemanager" element={<EmployeeManager/>} />
          <Route path="/main/employeemanager/addemployee" element={<AddEmployee/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
