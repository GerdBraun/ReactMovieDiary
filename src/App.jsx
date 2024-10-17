import { useState } from "react";
import MoviePreview from "./components/MoviePreview";
import EventBus from "./components/EventBus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import MovieList from "./components/MovieList";

function App() {
  const [movieId, setMovieId] = useState(0);

  EventBus.$on("moviePreviewChanged", (data) => {
    setMovieId(data);
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<MovieList />} />
            <Route path="/preview" element={<MoviePreview />}>
              <Route path=":id" element={<MoviePreview />}>
                <Route path=":test" element={<MoviePreview />}></Route>
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              // TODO: make proper 404 page
              <main style={{ padding: "1rem" }}>
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
