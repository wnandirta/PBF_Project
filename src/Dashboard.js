import React from "react";

import "./Dashboard.css";
import { logout } from "./firebase";

function Dashboard() {

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
