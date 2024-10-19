import { useEffect, useState } from "react";
import StorageHandler from "./StorageHandler";
import { useNavigate } from "react-router-dom";

const CommentsList = () => {
  const [commentsList, setCommentsList] = useState([]);
  // for navigation purposes
  const navigate = useNavigate();

  useEffect(() => {
    setCommentsList(StorageHandler.getCommentsList());
  }, []);

  const deleteComment = (commentId) => {
    StorageHandler.commentRemove(commentId);
    setCommentsList(StorageHandler.getCommentsList());
  };
  const showMovie = (movieId) => {
    navigate("/preview/"+movieId);
  };

  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6 md:flex gap-8 md:items-stretch">
      <div className="flex-1 mb-6 flex flex-col bg-gray-50 rounded-lg shadow-xl p-6">
      <h2 className="text-4xl font-extrabold mb-4">Comments</h2>
      <ul>
          {commentsList.map((comment) => {
            return (
              <li
                key={comment.id}
                className="flex p-2 pl-3 text-gray-800 bg-white rounded shadow mb-1 justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-sm">
                    {new Date(comment.timestamp).toLocaleString()}
                    </span>
                  <strong>{comment.movieTitle}</strong>
                  <span>{comment.text}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => showMovie(comment.movieId)} className="btn btn-green">
                    view
                  </button>
                  <button onClick={() => deleteComment(comment.id)} className="btn btn-red">
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CommentsList;
