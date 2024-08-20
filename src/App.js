import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
