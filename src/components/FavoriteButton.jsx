import StorageHandler from "./StorageHandler";
import { useNavigate } from "react-router-dom";


const FavoriteButton = ({ movie }) => {
  // for navigation purposes
  const navigate = useNavigate();
  /**
   * movie add to / remove from favs
   */
  const toggleFav = () => {
    if (!StorageHandler.isFavorite(movie)) {
      StorageHandler.favoriteAdd(movie);
    } else {
      StorageHandler.favoriteRemove(movie);
    }
    navigate("/favorites");
  };

  return (
    <button
      onClick={toggleFav}
      className={
        StorageHandler.isFavorite(movie)
          ? "action-button w-10 h-10 active"
          : "action-button w-10 h-10"
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
  );
};

export default FavoriteButton;
