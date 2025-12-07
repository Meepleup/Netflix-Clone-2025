import React, { useEffect, useState } from "react";
import axios from '../../utils/axios.jsx';
import requests from '../../utils/requests.jsx';
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      }
    }
    fetchData();
  }, []);

  const truncate = (text, n) => {
    return text?.length > n ? text.slice(0, n) + "..." : text;
  };

  if (loading) return <div className="banner_loading">Loading...</div>;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_overlay"></div>

      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button" aria-label={`Play ${movie?.title}`}>Play</button>
          <button className="banner_button" aria-label={`Add ${movie?.title} to My List`}>My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
