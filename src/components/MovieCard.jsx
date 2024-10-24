import { Link } from "react-router-dom";
import Rating from "./Rating";
import FavoriteButton from "./FavoriteButton";

const MovieCard = ({ movie, setMovieList }) => {
  const imgPath = movie.poster_path
    ? `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
    : "https://placehold.co/220x330?text=no%20image%20available";
  return (
    <div className="card w-52 max-w-52 flex-none shadow-lg rounded-lg bg-gray-100 relative">
      <Link to={`/preview/${movie.id}`} className="relative">
        <img className="rounded-t-lg hover:opacity-50" src={imgPath} />
        <Rating percent={movie.vote_average} />
      </Link>
      <span className=" w-10 h-10 absolute top-[-1rem] right-[-1rem]">
        <FavoriteButton movie={movie} setMovieList={setMovieList} />
      </span>{" "}
      <div>
        <h3 className="p-2 text-center text-sm">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
