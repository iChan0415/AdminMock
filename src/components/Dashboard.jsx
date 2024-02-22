import React from "react";
import { useState } from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { UserData } from "../pages/Data";
import { UserDataPie } from "../pages/DataPie";
import "../css/Dashboard.css";

function Dashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });

  const [userDataPie, setUserDataPie] = useState({
    labels: UserDataPie.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserDataPie.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a71d0",
        ],
      },
      
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="charts_container">
      <div className="Charts">
        <div style={{ width: 400 }}>
          <BarChart chartData={userData} />
          <p style={{fontWeight: "bold", paddingTop: "10px", color: "gray"}}>NO. OF USERS</p>
        </div>
        <div style={{ width: 400}}>
          <PieChart chartData={userDataPie} />
          <p style={{fontWeight: "bold", paddingTop: "10px", color: "gray"}}>USERS CHART</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
