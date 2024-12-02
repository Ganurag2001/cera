import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Engagement from "./components/Engagement";
import EngagementPage from "./pages/EngagementPage";
import App from "./App";
import Dashboard from "../src/components/Dashboard";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Forgot from "../src/pages/Forgot";
import Table from "../src/pages/Table";
import IssueTable from "../src/components/IssueTable";
import Modal from "../src/pages/Modal";
import SettingsPage from "./pages/SettingsPage";
import TargetsPage from "./pages/targetsPage";
import IssuesPage from "./pages/IssuesPage";
import ReportMapping from "./pages/ReportMapping";
import Assessment from "./pages/Assessment";


const Root = () => {
  const [engagements, setEngagements] = useState([]); 

  const addNewEngagement = (newEngagement) => {
    setEngagements((prevEngagements) => {
      const updatedEngagements = [...prevEngagements, newEngagement];
      console.log(updatedEngagements); 
      return updatedEngagements;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={ <Dashboard/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/table" element={<Table />} />
      <Route path="/issues" element={<IssueTable />} />
      <Route path="/setings" element={<SettingsPage />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/targetsPage" element={<TargetsPage />} />
      <Route path="/issuesPage" element={<IssuesPage />} />
      <Route path="/report" element={<ReportMapping />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route
        path="/engagement"
        element={<Engagement onAddNewEngagement={addNewEngagement} />}
      />
      <Route
        path="/activeEngagement"
        element={<EngagementPage engagements={engagements} />}
      />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
