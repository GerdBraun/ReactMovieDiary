import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import StorageHandler from "./StorageHandler";

const MovieFavoritesList = ({apiKey}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(StorageHandler.getFavoritesList());
  }, []);

  return (
    <div id="movieList">
      <ul className="{movie.id} py-8 px-4 lg:px-6 flex gap-8 overflow-x-scroll bg-red-900">
        {movieList.map((movie) => {
          return (
            <li
              key={movie.id}
              
            >
                <MovieCard movie={movie} setMovieList={setMovieList}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieFavoritesList;
