import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
 const [movieCards, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error))
  }, []);

  const movieList = movieCards.map((movie) => <MovieCard key={movie.id} movie={movie}/>)

  return (
    <>
      <header>
        {<NavBar />}
        <h1>Home Page</h1>
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
