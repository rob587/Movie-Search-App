import { useState } from "react";
import movies from "./movies.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  //creazione stati

  const [inputValue, setInputValue] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovies = () => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredMovie(results);
    //console.log(results);
  };

  return (
    <>
      <h1>Movie Search App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={searchMovies}>Cerca</button>

      {movies.map((movie) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={movie.poster} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{movie.year}</ListGroup.Item>
              <ListGroup.Item>{movie.rating}</ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </>
  );
}

export default App;
