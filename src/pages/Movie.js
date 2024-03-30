import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState("");
  const param = useParams();
  console.log(param)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${param.id}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error))
  }, [param.id]);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
      </main>
    </>
  );
};

export default Movie;
