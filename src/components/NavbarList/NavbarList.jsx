import React, { useState, useRef, useEffect } from "react";
import "./NavbarList.css";

const NavbarList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar-list-wrapper">
      <button
        ref={buttonRef}
        className="burger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)} />
      )}

      <ul ref={menuRef} className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
    </div>
  );
};

export default NavbarList;
