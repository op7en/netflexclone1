import React, { useState, useEffect, useRef } from 'react';
import "./TitleCards.css";
import { Link } from 'react-router-dom';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    }
  };

  useEffect(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
    options
  )
    .then(res => res.json())
    .then(data => {
      setApiData(data.results || []);
    })
    .catch(err => console.error("FETCH ERROR:", err));
}, [category]);


  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const current = cardsRef.current;
    if (current) {
      current.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (current) {
        current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
