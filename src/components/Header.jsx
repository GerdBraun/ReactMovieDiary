import {
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate({
        pathname: "search",
        search: createSearchParams({
            keywords: event.target.searchString.value,
        }).toString()
    });
  }

  return (
    <header className="bg-gradient-to-r from-red-950 to-red-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6 flex justify-between">
        <h1 className="text-white text-4xl font-extrabold tracking-tight leading-none">
          Movie Diary
        </h1>
        <NavBar />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchString"
            placeholder="search for something"
          />
          <button
            id="searchButton"
            className="action-button movie-button movie-button-green"
            data-action="search"
          >
            search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
