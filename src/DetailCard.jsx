import React from "react";
import movies from "./movies.json";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));
  if (!movie)
    return (
      <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
        <p className="text-white fs-4">Film non trovato!</p>
      </div>
    );
  return (
    <>
      <div className="bg-dark min-vh-100 text-white py-5">
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Bottone torna indietro */}
          <Link to="/" className="btn btn-outline-light mb-4">
            ← Torna indietro
          </Link>

          <div className="row g-4">
            {/* Poster */}
            <div className="col-md-4">
              <img
                src={movie.poster}
                alt={movie.title}
                className="img-fluid rounded"
              />
            </div>

            {/* Dettagli */}
            <div className="col-md-8">
              <h1 className="fw-bold mb-2">{movie.title}</h1>
              <div
                className="d-flex gap-3 text-secondary mb-3"
                style={{ fontSize: "14px" }}
              >
                <span>{movie.year}</span>
                <span>⏱ {movie.duration} min</span>
                <span>⭐ {movie.rating}</span>
              </div>

              {/* Generi */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                {movie.genre.map((g) => (
                  <span key={g} className="badge bg-danger">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-secondary">{movie.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
