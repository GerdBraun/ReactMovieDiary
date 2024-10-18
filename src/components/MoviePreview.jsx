import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MoviePreview = ({ apiKey }) => {
  const [movie, setMovie] = useState({});
  const [imgPath, setImgPath] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getMovieData(id);
  }, [id]);

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

        (movie.poster_path !== '')
          ? setImgPath(`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${response.poster_path}`)
          : setImgPath("https://placehold.co/1920x800?text=no%20image%20available");

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
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
