import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ apiKey }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("something went wrong");
        return response.json();
      })
      .then((response) => {
        console.info("finished loading initial data");
        setMovieList(response.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="movieList">
      <ul className="{movie.id} py-8 px-4 lg:px-6 flex gap-8 overflow-x-scroll bg-red-900">
        {movieList.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
