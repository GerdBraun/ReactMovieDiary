import { Outlet } from "react-router-dom";
import MovieList from "./MovieList";
import Header from "./Header";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <MovieList />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Page;
