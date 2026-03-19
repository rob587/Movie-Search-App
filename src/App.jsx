import { useState } from "react";
import movies from "./movies.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import DetailCard from "./DetailCard";

function App() {
  //creazione stati

  const [inputValue, setInputValue] = useState("");
  const [filteredMovie, setFilteredMovie] = useState(movies);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovies = () => {
    setPage(1);
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredMovie(results);
    //console.log(results);
  };

  const moviesPerPage = 4;
  const start = (page - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const paginatedMovies = filteredMovie.slice(start, end);

  return (
    <>
      <div className="bg-dark min-vh-100 text-white py-5">
        <div className="container">
          {/* Header */}
          <h1 className="text-center mb-4 fw-bold">🎬 Movie Search App</h1>

          {/* Search bar */}
          <div
            className="input-group mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <input
              type="text"
              className="form-control form-control-lg bg-secondary text-white border-0"
              placeholder="Cerca un film..."
              value={inputValue}
              onKeyDown={(e) => e.key === "Enter" && searchMovies()}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (e.target.value === "") setFilteredMovie(movies);
              }}
            />
            <button className="btn btn-danger px-4" onClick={searchMovies}>
              Cerca
            </button>
          </div>

          {/* Nessun risultato */}
          {paginatedMovies.length === 0 && (
            <p className="text-center text-secondary fs-5">
              Nessun film trovato!
            </p>
          )}

          {/* Griglia film */}
          <div className="row g-4">
            {paginatedMovies.map((movie) => (
              <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="h-100 bg-secondary border-0 text-white"
                    style={{ cursor: "pointer", transition: "transform 0.2s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Card.Img
                      src={movie.poster}
                      alt={movie.title}
                      style={{ height: "320px", objectFit: "cover" }}
                    />
                    <Card.Body className="p-2">
                      <Card.Title className="fs-6 mb-1">
                        {movie.title}
                      </Card.Title>
                      <div
                        className="d-flex justify-content-between text-secondary"
                        style={{ fontSize: "13px" }}
                      >
                        <span>{movie.year}</span>
                        <span>⭐ {movie.rating}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          {/* Paginazione */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <button
              className="btn btn-outline-light"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              ← Precedente
            </button>
            <span className="text-secondary">Pagina {page}</span>
            <button
              className="btn btn-outline-light"
              disabled={end >= filteredMovie.length}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Successiva →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
