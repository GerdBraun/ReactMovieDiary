import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=153a09fbeef547fb0435feeeb75d0140"
    )
      .then((response) => response.json())
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
            <li
              key={movie.id}
              className="card w-52 max-w-52 flex-none shadow-lg rounded-lg bg-gray-100 relative"
            >
                <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieList;
