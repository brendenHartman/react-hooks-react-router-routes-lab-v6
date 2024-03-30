import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.log(error))
  }, [])

  const directorList = directors.map((director) => { return(
    <article>
      <h2>{director.name}</h2>
      {director.movies.map((movie) => {return( <li>{movie}</li>)})}
    </article>)})

  return (
    <>
      <header>
        {<NavBar />}
        <h1>Directors Page</h1>
      </header>
      <main>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
