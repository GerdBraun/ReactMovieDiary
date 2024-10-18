const StorageHandler = {
  localStorageNameFav: "favList",

  // get the list
  getFavList() {
    return JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
  },

  // add movie if not present
  addToFav(movie) {
    // prevent duplicates
    if (!this.isFav(movie)) {
      const list =
        JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
      list.push(movie);
      localStorage.setItem(this.localStorageNameFav, JSON.stringify(list));
    }
  },

  // remove movie from list
  removeFromFav(movie) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
    const newlist = list.filter((item) => item.id !== movie.id);
    localStorage.setItem(this.localStorageNameFav, JSON.stringify(newlist));
  },

  // check if movie is already a fav
  isFav(movie) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
    const found = list.find((item) => item.id === movie.id);
    return !!found;
  },
};

export default StorageHandler;
