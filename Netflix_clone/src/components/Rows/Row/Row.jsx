import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios.jsx";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);

        setMovies(request.data.results);

        // 🔥 Debug log
        console.log("Fetched movies for:", title, request.data.results);
      } catch (error) {
        console.error("Error fetching row:", title, error);
      }
    }

    fetchData();
  }, [fetchUrl, title]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    const movieName =
      movie?.name || movie?.title || movie?.original_name || "";

    movieTrailer(movieName)
      .then((url) => {
        if (!url) {
          console.warn("Trailer not found for:", movieName);
          return;
        }

        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((err) => console.log("Trailer error:", err));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          const imgPath = isLargeRow
            ? movie?.poster_path
            : movie?.backdrop_path;

          if (!imgPath) return null;

          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${imgPath}`}
              alt={movie?.name || movie?.title}
            />
          );
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
