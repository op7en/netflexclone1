import React, { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const languages = ["en-US", "ru-RU"];
        let video = null;

        for (let lang of languages) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=${lang}`,
            options
          );
          const data = await res.json();

          if (!data.results) continue;

          video =
            data.results.find(
              (v) => v.type === "Trailer" && v.site === "YouTube"
            ) ||
            data.results.find(
              (v) => v.type === "Teaser" && v.site === "YouTube"
            ) ||
            data.results[0];

          if (video) break;
        }

        setVideoData(video || null);
      } catch (err) {
        console.error("Failed to fetch video:", err);
        setVideoData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div className="player">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill={"#ffffff"}
        viewBox="0 0 24 24"
           onClick={() => navigate(-1)}
        className="back-arrow"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
        <path d="m12 8-4 4 4 4v-3h4v-2h-4z"></path>
      </svg>
      {videoData?.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${videoData.key}`}
          title={videoData.name || "trailer"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available for this movie</p>
      )}

      <div className="player-info">
        <p>{videoData?.published_at?.slice(0, 10) || "Unknown date"}</p>
        <p>{videoData?.name || "No title available"}</p>
        <p>{videoData?.type || "Unknown type"}</p>
      </div>
    </div>
  );
};

export default Player;
