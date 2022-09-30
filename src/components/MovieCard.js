import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorites, deleteFavorites } from "../store/actions/favorites";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./NavBar/NavBar.css";

function MovieCard({ movie, favoriteValue,isFav }) {
  const dispatch = useDispatch();
  const [favs, setFavs] = useState(isFav != -1 ? true : false);
  const toggleFav = (movieId) => {
    setFavs(!favs);
    if (!favs && !favoriteValue) {
      dispatch(addFavorites(movie));
    } else {
      dispatch(deleteFavorites(movieId));
    }
  };
  return (
    <Card
      style={{
        width: "19.5rem",
        height: "27rem",  
        margin: "0.5rem auto",
        marginTop: "4.7rem",
      }}
      bg="dark"
    >
      <Card.Img
        variant="top"
        height="250px"
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title style={{ color: "darkgray", height: "2.5rem" }}>
          {movie.title}
        </Card.Title>
        <Card.Text style={{ color: "darkgray" }}>
          {movie.release_date}

          <div
            style={{ marginLeft: "7.5rem" }}
            className="fav-btn d-inline click"
            onClick={() => {
              toggleFav(movie.id);
            }}
          >
            {favoriteValue ? (
              <AiFillHeart fontSize={30} color={"red"} />
            ) : favs ? (
              <AiFillHeart fontSize={30} color={"red"} />
            ) : (
              <AiOutlineHeart fontSize={30} color={"red"} />
            )}
          </div>
        </Card.Text>
        {movie.vote_average < 5 ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              // border: "1px solid red",
            }}
            className="text-danger"
          >
            {movie.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </div>
        ) : movie.vote_average < 8 ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "orange",
            }}
          >
            {movie.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              // border: "1px solid green",
            }}
            className="text-success"
          >
            {movie.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </div>
        )}

        <Link
          to={`/movie-details/${movie.id}`}
          style={{ color: "brown", textDecoration: "none", fontSize: "1.2rem" }}
        >
          More Details...
        </Link>
      </Card.Body>
    </Card>
  );
}
export default MovieCard;
