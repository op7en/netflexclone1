import React, { useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import NavbarList from "../NavbarList/NavbarList";
import SearchBar from "../SearchBar/SearchBar";
import Notifications from "../Notifications/Notifications";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import KidsAdultsMode from "../KidsAdultsMode/KidsAdultsMode";

const Navbar = () => {
  const navRef = useRef();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) navRef.current.classList.add("nav-dark");
      else navRef.current.classList.remove("nav-dark");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <NavbarList />
      </div>

      <div className="navbar-right">
        <p className="name">Hello, {currentUser?.name || "Guest!"}</p>
        <SearchBar />
        <Notifications />
        <KidsAdultsMode />
        <ProfileMenu onLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
