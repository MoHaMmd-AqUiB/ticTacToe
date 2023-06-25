import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Login from "./Login";
import Signup from "./SignUp";
import HomePage from "./Homepage";

import Search from "./Search";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
    
    </AuthProvider>
  );
}

export default App;
