import Home from "./pages/Home/Home.jsx";
import { Routes, Route,  } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Player/Player.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {


  return (
    <AuthProvider>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
