import GlobalStyled from "./GlobalStyled";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={
          user ? <Home/> : <Navigate replace to="/login" />
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}