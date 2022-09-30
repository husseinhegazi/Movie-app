import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axiosInstance from "../Network/Config";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";


function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  // console.log(params.id);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?`, {
        params: {
          api_key: "4d2eadaa21670e503224c652f4256101",
        },
      })
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "black",
          color: "darkgray",
          marginTop: "4rem",
        }}
      >
        <h3 className="card-header" style={{ textAlign: "center" }}>
          {movieDetails.title}
        </h3>
        <div className="card-body row g-0">
          <img
            className="col-12 col-md-6"
            width="60%"
            height="455px"
            src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
          />
          <blockquote
            className="blockquote mb-0 col-12 col-md-6"
            style={{ paddingLeft: "2rem" }}
          >
            <p>
              Release Date:
              <br /> {movieDetails.release_date}
            </p>
            <p>
              Overview:
              <br />
              {movieDetails.overview}
            </p>
            <p>Budget: {movieDetails.budget}$</p>
            <p>Vote Count: {movieDetails.vote_count}</p>
            <footer className="blockquote-footer">
              Rate:{"  "}
              {movieDetails.vote_average < 5 ? (
          <span
            style={{
              
              fontSize: "20px",
            }}
            className="text-danger"
          >
            {movieDetails.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </span>
        ) : movieDetails.vote_average < 8 ? (
          <span
            style={{
            
              fontSize: "20px",
              color: "orange",
            }}
          >
            {movieDetails.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </span>
        ) : (
          <span
            style={{
             
              fontSize: "20px",
              // border: "1px solid green",
            }}
            className="text-success"
          >
            {movieDetails.vote_average}{" "}
            <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
          </span>
        )}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
