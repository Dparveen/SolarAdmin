import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "assets/demo/demo.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import NewInquery from "views/AddNewInquery";
import Login from "views/Login";
import ViewStaff from "views/ViewStaff";
import ViewStaffDetails from "views/ViewStaffDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/admin/addNewInquery" element={<NewInquery />} />
      <Route path="/admin/viewStaff" element={<ViewStaff />} />
      <Route path="/admin/viewStaff/:id" element={<ViewStaffDetails />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);
