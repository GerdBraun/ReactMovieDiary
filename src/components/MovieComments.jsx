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
    if (comment) StorageHandler.commentAdd(comment, movie);
    setCommentsList(StorageHandler.getCommentsListByMovieId(movie.id));
  };

  const deleteComment = (commentId) => {
    StorageHandler.commentRemove(commentId);
    setCommentsList(StorageHandler.getCommentsListByMovieId(movie.id));
  }

  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6 md:flex gap-8 md:items-stretch">
      <div className="flex-1 mb-6 flex flex-col bg-gray-50 rounded-lg shadow-xl p-6">
        <h2 className="text-4xl font-extrabold mb-4">Comments to &quot;{movie.title}&quot;</h2>
        <ul>
          {commentsList.map((comment) => {
            return (
              <li
                key={comment.id}
                className="flex p-2 pl-3 text-gray-800 bg-white rounded shadow mb-1 justify-between items-center"
              >
                <span>{comment.text}</span>
                <button onClick={() => deleteComment(comment.id)} className="btn btn-red">delete</button>
              </li>
            );
          })}
        </ul>

        <form onSubmit={(e) => onSubmitHandler(e)} className="flex p-2 pl-3 text-gray-800 bg-white rounded shadow mb-1 justify-between items-center">
          <textarea name="comment" className="bg-slate-200 p-1" placeholder="your comment"></textarea>
          <button type="submit" className="btn btn-green">save</button>
        </form>
      </div>
    </section>
  );
};

export default MovieComments;
