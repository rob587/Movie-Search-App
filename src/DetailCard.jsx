import React from "react";
import movies from "./movies.json";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));
  return (
    <>
      if (!movie) return <p>Film non trovato!</p>;
      <Card>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.genre}</Card.Text>
          <Card.Text>{movie.duration}</Card.Text>
          <Card.Text>{movie.rating}</Card.Text>
          <Card.Text>{movie.year}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailCard;
