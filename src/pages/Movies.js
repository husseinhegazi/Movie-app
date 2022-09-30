import React from "react";
import MovieCard from "../components/MovieCard";
import { useEffect, useState, useContext } from "react";
import axiosInstance from "../Network/Config";
import { useSelector } from "react-redux";
import { LangContext } from "../langContext";

export default function Movies({setData}) {
  // const [movies, setMovies] = useState([]);
  const value = useContext(LangContext);
  const favorites = useSelector((state) => state.favorites);
  const { movies } = useSelector((state) => state.movies);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/")
  //     .then((res) => {
  //       setMovies(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
        {movies?.map((movie,index) => {
          return (
            <div className="col" key={index}>
              <MovieCard
                movie={movie}
                isFav={favorites?.indexOf(movie)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
