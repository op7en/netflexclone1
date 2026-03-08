import { useRef, useState, useEffect } from "react";
import "./ProfileMenu.css";

const ProfileMenu = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="navbar-profile"
      onClick={() => setOpen((p) => !p)}
    >
      <svg
        className="avatar-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="#ffffff"
        viewBox="0 0 24 24"
      >
        <path d="m19,3H5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2Zm-4,7c0,1.71-1.29,3-3,3s-3-1.29-3-3,1.29-3,3-3,3,1.29,3,3Zm-8.9,9c.46-2.28,2.48-4,4.9-4h2c2.41,0,4.43,1.72,4.9,4H6.1Z"></path>
      </svg>

      <svg
        className={`arrow ${open ? "open" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="#ffffff"
        viewBox="0 0 24 24"
      >
        <path d="m19,7H5c-.37,0-.71.21-.89.54-.17.33-.15.73.07,1.04l7,10c.19.27.49.43.82.43s.63-.16.82-.43l7-10c.21-.31.24-.7.07-1.04-.17-.33-.51-.54-.89-.54Z"></path>
      </svg>

      {open && (
        <div className="dropdown">
          <p onClick={onLogout}>Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
