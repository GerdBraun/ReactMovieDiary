import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSearchParams } from "react-router-dom";

const MovieSearchList = ({ apiKey }) => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keywords = searchParams.get("keywords");

  useEffect(() => {
    getMovieList();
  }, [keywords]);

  const getMovieList = async () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keywords}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
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
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieSearchList;
