import { useState } from "react";
import MoviePreview from "./components/MoviePreview";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Page from "./components/Page";
import MovieList from "./components/MovieList";
import MovieSearchList from "./components/MovieSearchList";
import EventBus from "./components/EventBus";
import MovieFavoritesList from "./components/MovieFavoritesList";
import CommentsList from "./components/CommentsList";

// TODO: use AbortController on fetches

function App() {
  const [movieId, setMovieId] = useState(0);
  const [apiKey, setApiKey] = useState("153a09fbeef547fb0435feeeb75d0140");

  EventBus.$on("moviePreviewChanged", (data) => {
    setMovieId(data);
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Page />}>
        <Route index element={<MovieList apiKey={apiKey} />} />
        <Route path="/preview" element={<MoviePreview apiKey={apiKey} />} />
        <Route path="/preview/:id" element={<MoviePreview apiKey={apiKey} />} />
        <Route
          path="/search"
          element={<MovieSearchList apiKey={apiKey} />}
        ></Route>
        <Route path="/favorites" element={<MovieFavoritesList />} />
        <Route path="/comments" element={<CommentsList />} />
        <Route
          path="*"
          element={
            // TODO: make proper 404 page
            <main className="flex flex-col justify-center items-center text-white">
              <h2 className="text-white text-4xl font-extrabold tracking-tight leading-none">
                404 Error
              </h2>
              <p>There's nothing here (yet)!</p>
            </main>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
