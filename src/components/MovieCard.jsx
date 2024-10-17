import { Link } from "react-router-dom";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const imgPath = movie.poster_path
    ? `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
    : "https://placehold.co/220x330?text=no%20image%20available";
  return (
    <>
      <Link to={`/preview/${movie.id}`}>
        <img
          className="rounded-t-lg hover:opacity-50"
          src={imgPath}
        />
      </Link>
      <Rating percent={movie.vote_average} />
      <div>
        <h3 className="p-2 text-center text-sm">{movie.title}</h3>
      </div>
    </>
  );
};

export default MovieCard;
