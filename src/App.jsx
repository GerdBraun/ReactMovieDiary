import { useState } from "react";
import MovieList from "./components/MovieList";
import MoviePreview from "./components/MoviePreview";
import EventBus from "./components/EventBus";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [movieId, setMovieId] = useState(0);

  EventBus.$on("moviePreviewChanged", (data) => {
    setMovieId(data);
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />}>
            <Route path="/preview" element={<MoviePreview />}>
              <Route path=":id" element={<MoviePreview />}>
                <Route path=":test" element={<MoviePreview />}></Route>
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
