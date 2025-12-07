import React from "react";
import Row from "../Row/Row.jsx";
import requests from "../../../utils/requests.jsx";
import "./RowList.css";

function RowList() {
  const rows = [
    { title: "Netflix Originals", fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
    { title: "Trending Now", fetchUrl: requests.fetchTrending },
    { title: "Top Rated", fetchUrl: requests.fetchTopRated },
    { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
    { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
    { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
    { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
  ];

  return (
    <div className="rowList">
      {rows.map((row) => (
        <Row
          key={row.title}
          title={row.title}
          fetchUrl={row.fetchUrl}
          isLargeRow={row.isLargeRow}
        />
      ))}
    </div>
  );
}

export default RowList;
