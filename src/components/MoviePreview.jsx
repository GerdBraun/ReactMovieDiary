import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import StorageHandler from "./StorageHandler";

const MoviePreview = ({ apiKey }) => {
  const [movie, setMovie] = useState({});
  const [imgPath, setImgPath] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getMovieData(id);
  }, [id]);

  const toggleFav = () => {
    if (!StorageHandler.isFav(movie)) {
      StorageHandler.addToFav(movie);
    } else {
      console.log("removing");

      StorageHandler.removeFromFav(movie);
    }
  };

  const getMovieData = async (movieId) => {
    if (!movieId || movieId === 0) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}&append_to_response=credits`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.info("finished loading movie data");
        setMovie(response);

        movie.poster_path !== ""
          ? setImgPath(
              `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${response.poster_path}`
            )
          : setImgPath(
              "https://placehold.co/1920x800?text=no%20image%20available"
            );
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgPath})`,
        }}
        className="bg-cover bg-center"
      >
        <div className="bg-[rgba(0,0,0,.75)]">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6 flex gap-8 md:items-stretch">
            <MovieCard movie={movie} />
            <button
              onClick={toggleFav}
              className={
                StorageHandler.isFav(movie) ? "action-button w-10 h-10 active" : "action-button w-10 h-10"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 245"
                fill="#c82c2c"
              >
                <path d="m56,237 74-228 74,228L10,96h240"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
