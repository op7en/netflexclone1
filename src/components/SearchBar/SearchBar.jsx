import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  const search = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        },
      );

      const json = await res.json();
      setResults(json.results || []);
      setOpen(Boolean(json.results?.length));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (query.trim()) search();
    }, 400);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div ref={ref} className="search-wrapper">
      <input
        type="text"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {open && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((item) => (
            <div
              key={item.id}
              className="search-item"
              onClick={() => {
                navigate(`/player/${item.id}`);
                setOpen(false);
                setQuery("");
              }}
            >
              {item.title || item.original_title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
