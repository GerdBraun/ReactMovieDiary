import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePreview = (props) => {
  const [movieData, setMovieData] = useState({});

  const {id} = useParams();
  
  useEffect(() => {
    getMovieData(id);
  }, [id]);

  const getMovieData = async (movieId) => {
    if (!movieId || movieId === 0) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=153a09fbeef547fb0435feeeb75d0140&append_to_response=credits`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.info("finished loading movie data");
        setMovieData(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      MoviePreview {movieData.title}
    </div>
  );
};

export default MoviePreview;
