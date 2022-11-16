import GlobalStyled from "./GlobalStyled";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Input from "./pages/Input/Input";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [inputData, setInputData] = useState([]);

  return (
    <Router>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={
          user
            ? <Home user={user} setUser={setUser} setInputData={setInputData}/>
            : <Navigate replace to="/login" />
        }/>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/input/:type" element={
          <Input user={user} inputData={inputData} setInputData={setInputData}/>
        }/>
      </Routes>
    </Router>
  );
}