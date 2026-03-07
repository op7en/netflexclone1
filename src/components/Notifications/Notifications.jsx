<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react'
import './Notifications.css';

const Notifications = () => {
      const [open, setOpen] = useState(false);
  const ref = useRef();
  const notifications = [
  { id: 1, text: "New episode available" },
  { id: 2, text: "Recommended for you" }
];

=======
import { useState, useEffect, useRef } from "react";
import "./Notifications.css";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const notifications = [
    { id: 1, text: "New episode available" },
    { id: 2, text: "Recommended for you" },
  ];
>>>>>>> temp_branch

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="notification-wrapper">
<<<<<<< HEAD
      <svg  onClick={() => setOpen(prev => !prev)} className="icons"  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"#ffffff"} viewBox="0 0 24 24"><path d="M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM14.82 20H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"></path></svg>
      {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}

      {open && (
        <div className="notifications-dropdown">
          {notifications.map(n => (
            <div key={n.id} className="notification-item">{n.text}</div>
=======
      <svg
        onClick={() => setOpen((prev) => !prev)}
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="#ffffff"
        viewBox="0 0 24 24"
      >
        <path d="M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM14.82 20H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"></path>
      </svg>
      {notifications.length > 0 && (
        <span className="notification-count">{notifications.length}</span>
      )}

      {open && (
        <div className="notifications-dropdown">
          {notifications.map((n) => (
            <div key={n.id} className="notification-item">
              {n.text}
            </div>
>>>>>>> temp_branch
          ))}
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}

export default Notifications
=======
};

export default Notifications;
>>>>>>> temp_branch
