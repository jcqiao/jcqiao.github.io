import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";
import FlipPage from "./Components/FilpPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<FlipPage />} /> */}
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
