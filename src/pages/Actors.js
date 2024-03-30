import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
  }, [])

  const actorsList = actors.map(actor => {return(<article>
    <h2>{actor.name}</h2>
    {actor.movies.map((movie) => {return( <li>{movie}</li>)})}
  </article>
    
  )});

  return (
    <>
      <header>
        {<NavBar />}
        <h1>Actors Page</h1>
      </header>
      <main>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
