const StorageHandler = {
  localStorageNameFav: "favList",
  localStorageNameComments: "commentsList",

  // get the list
  getFavoritesList() {
    return JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
  },

  // add movie if not present
  favoriteAdd(movie) {
    // prevent duplicates
    if (!this.isFavorite(movie)) {
      const list =
        JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
      list.push(movie);
      localStorage.setItem(this.localStorageNameFav, JSON.stringify(list));
    }
  },

  // remove movie from list
  favoriteRemove(movie) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
    const newlist = list.filter((item) => item.id !== movie.id);
    localStorage.setItem(this.localStorageNameFav, JSON.stringify(newlist));
  },

  // check if movie is already a fav
  isFavorite(movie) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameFav)) || [];
    const found = list.find((item) => item.id === movie.id);
    return !!found;
  },

  commentAdd(text, movie) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameComments)) || [];

    movie = movie || { id: 4711, title: "blah" };

    const commentObj = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      movieId: movie.id,
      movieTitle: movie.title,
      text: text,
    };
    list.unshift(commentObj);
    localStorage.setItem(this.localStorageNameComments, JSON.stringify(list));
  },

  // remove movie from list
  commentRemove(id) {
    const list =
      JSON.parse(
        localStorage.getItem(this.localStorageNameComments)
      ) || [];
    const filteredList = list.filter((item) => item.id !== id);
    localStorage.setItem(
      this.localStorageNameComments,
      JSON.stringify(filteredList)
    );
  },

  // get the list
  getCommentsList() {
    return (
      JSON.parse(localStorage.getItem(this.localStorageNameComments)) || []
    );
  },

  // get the list ba movie id
  getCommentsListByMovieId(movieId) {
    const list =
      JSON.parse(localStorage.getItem(this.localStorageNameComments)) || [];
    return list.filter(
      (comment) => parseInt(comment.movieId) === parseInt(movieId)
    );
  },
};

export default StorageHandler;
