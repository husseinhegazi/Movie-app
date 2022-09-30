import Favorites from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import SearchBar from "./components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { getMovies } from "./store/actions/moviesAction";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=4d2eadaa21670e503224c652f4256101";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  // const [filter, setFilter] = useState("filters");
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data:", data);
  }, []);
  return (
    <Router>
      <NavBar data={movies} setData={setData} />
      <Switch>
        <Route
          path="/"
          exact
          component={Movies}
          data={movies}
          setData={setData}
        />
        <Route path="/movie-details/:id" component={MovieDetails} />
        <Route path="/search-result" component={SearchBar} />
        <Route path="/favorites" component={Favorites} />
        {/* <Route path="movie-details/favorites" exact component={Favorites}/> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
