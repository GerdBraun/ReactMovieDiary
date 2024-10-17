const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-950 to-red-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6 flex justify-between">
        <h1 className="text-white text-4xl font-extrabold tracking-tight leading-none">
          Movie Diary
        </h1>
        <form id="searchForm" data-action="search">
          <input
            type="text"
            id="searchString"
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
