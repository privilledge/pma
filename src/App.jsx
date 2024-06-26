import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import Sidebar from "./Components/Sidebar";
import Calendar from "./Components/Calendar";
import Reports from "./Components/Reports";
import ViewProject from "./Components/ViewProject";
import ViewTask from "./Components/ViewTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/pma" element={<LandingPage />} />
            <Route path="/pma/home" element={<Home />} />
            <Route path="/pma/projects" element={<Projects />} />
            <Route path="/pma/tasks" element={<Tasks />} />
            <Route path="/pma/calendar" element={<Calendar />}></Route>
            <Route path="/pma/reports" element={<Reports />}></Route>
            <Route path="/pma/viewProject/:id" element={<ViewProject />} />
            <Route path="/pma/viewTask/:id" element={<ViewTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
