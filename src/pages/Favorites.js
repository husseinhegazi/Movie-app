import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const favorites = useSelector((state) => state.fav.favorites);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
      {favorites.length === 0 ? (
        <div
          // className="text-dark"
          style={{
            marginTop: "5rem",
            color:"white",
            textAlign: "center",
            width: "100%",
            fontSize: "2.5rem",
          }}
        >
          Favorites list is empty 
        </div>
      ) : (
        ""
      )}
      {favorites?.map((movie) => (
        <MovieCard movie={movie} favoriteValue={true} key={movie.id} />
      ))}
    </div>
  );
}
export default Favorites;
