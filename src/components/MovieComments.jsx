import { useEffect, useState } from "react";
import StorageHandler from "./StorageHandler";

const MovieComments = ({ movie }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    setCommentsList(StorageHandler.getCommentsListByMovieId(movie.id));
  }, [movie]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if(comment) StorageHandler.commentAdd(comment, movie);
  };

  return (
    <>
      <div>MovieComments to &quot;{movie.title}&quot;</div>
      <ul>
        {commentsList.map((comment) => {
          return <li key={comment.id}>{comment.text}</li>;
        })}
      </ul>

      <form onSubmit={(e) => onSubmitHandler(e)}>
        <textarea name="comment"></textarea>
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default MovieComments;
