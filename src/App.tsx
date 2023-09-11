import { useState } from "react";
import leftArrow from "./assets/left-arrow-svgrepo.svg";
import rightArrow from "./assets/right-arrow-svgrepo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [todaysDateYear, setTodaysDateYear] = useState("");
  const [todaysDateMonth, setTodaysDateMonth] = useState("");
  const [todaysDateDay, setTodaysDateDay] = useState("");

  async function getTodaysDate() {
    const d: string = await invoke("get_todays_date", {});

    var dateParts = d.split("-");
    if (dateParts.length == 3) {
      setTodaysDateYear(dateParts[0]);
      setTodaysDateMonth(dateParts[1]);
      setTodaysDateDay(dateParts[2]);
    }
  }

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    const p = await invoke("greet", { name });
    console.log(p);
    //setGreetMsg();
  }

  getTodaysDate();
  return (
    <div className="container">
      <div className="header">
        <div className="header-nav-left"><img src={leftArrow}/></div>
        <div className="header-middle-marquee">{todaysDateDay}/{todaysDateMonth}/{todaysDateYear}</div>
        <div className="header-nav-right"><img src={rightArrow}/></div>
      </div>
      <div className="content">
        <div className="actionBar">
          <a className="actionLink" href={`/add-goal`}>Add Goal</a>
          <a className="actionLink" href={`/`}>Today</a>
          <a className="actionLink" href={`/reports`}>Reports</a>
          <a className="actionLink" href={`/settings`}>Settings</a>
        </div>
        <div className="goalContent">
          <h1>Goals</h1>
          <p>No goals yet...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
