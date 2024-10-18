import { useState } from "react";
import MoviePreview from "./components/MoviePreview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import MovieList from "./components/MovieList";
import MovieSearchList from "./components/MovieSearchList";
import EventBus from "./components/EventBus";
import MovieFavoritesList from "./components/MovieFavoritesList";

function App() {
  const [movieId, setMovieId] = useState(0);
  const [apiKey, setApiKey] = useState('153a09fbeef547fb0435feeeb75d0140');

  EventBus.$on("moviePreviewChanged", (data) => {
    setMovieId(data);
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<MovieList apiKey={apiKey} />} />
            <Route path="/preview" element={<MoviePreview apiKey={apiKey} />}>
              <Route path=":id" element={<MoviePreview apiKey={apiKey} />}>
                <Route path=":test" element={<MoviePreview apiKey={apiKey} />}></Route>
              </Route>
            </Route>
            <Route path="/search" element={<MovieSearchList apiKey={apiKey} />}></Route>
            <Route path="/favorites" element={<MovieFavoritesList />} />
          </Route>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
