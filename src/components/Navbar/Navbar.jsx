<<<<<<< HEAD

import React, { useRef, useEffect,  } from "react";
=======
import React, { useRef, useEffect } from "react";
>>>>>>> temp_branch
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import NavbarList from '../NavbarList/NavbarList'
=======
import NavbarList from "../NavbarList/NavbarList";
>>>>>>> temp_branch
import SearchBar from "../SearchBar/SearchBar";
import Notifications from "../Notifications/Notifications";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import KidsAdultsMode from "../KidsAdultsMode/KidsAdultsMode";
<<<<<<< HEAD
=======

>>>>>>> temp_branch
const Navbar = () => {
  const navRef = useRef();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

<<<<<<< HEAD

=======
>>>>>>> temp_branch
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
<<<<<<< HEAD
      <NavbarList/>
=======
        <NavbarList />
>>>>>>> temp_branch
      </div>

      <div className="navbar-right">
        <p className="name">Hello, {currentUser?.name || "Guest!"}</p>
        <SearchBar />
        <Notifications />
<<<<<<< HEAD
        <KidsAdultsMode/>
        <ProfileMenu onLogout={handleLogout}/>
=======
        <KidsAdultsMode />
        <ProfileMenu onLogout={handleLogout} />
>>>>>>> temp_branch
      </div>
    </div>
  );
};

export default Navbar;
