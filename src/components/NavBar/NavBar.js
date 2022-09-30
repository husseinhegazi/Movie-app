import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { AiFillHeart, AiFillVideoCamera } from "react-icons/ai";
import { LangContext } from "../../langContext";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLanguage } from "../../store/actions/moviesAction";
import axios from "axios";



function NavBar({data,setData}) {
  const favorites = useSelector((state) => state.fav.favorites);
  const [originalData, setOriginalDat] = useState([]);
  // const favs = useSelector((state) => state.favorites);
  const { language, setLanguage } = useContext(LangContext);
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/popular?api_key=4d2eadaa21670e503224c652f4256101&page=1&language=${language}`
      )
      .then((res) => {
        console.log("lang data", res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    console.log("current:", language);
  }, [language]);

  useEffect(() => {
    if (originalData.length == 0) {
      setOriginalDat([...data]);
    }
 else {
      setData([...originalData]);
    }
  }, []);
  return (
    <Navbar bg="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <AiFillVideoCamera color="brown" fontSize={40} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "3rem" }}>
            <Nav.Link>
              <Link
                style={{
                  color: "brown",
                  textDecoration: "none",
                  marginRight: "1.8rem",
                }}
                to="/"
              >
                Movies
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "brown", textDecoration: "none" }}
                to="/favorites"
              >
                Favorites{" "}
                {favorites.length !== 0 && (
                  <span className="counter">
                    <AiFillHeart color="red" />
                    {favorites.length}
                  </span>
                )}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar" style={{ justifyContent: "end" }}>
          <Nav>
            <Link
              className="btn"
              style={{
                textDecoration: "none",
                color: "brown",
                border: "2px solid brown",
              }}
              to="/search-result"
            >
              Search Movies{" "}
              <AiOutlineSearch
                fontSize={20}
                style={{ marginRight: "0.1rem" }}
              />
              
            </Link>
            <select
          onChange={(e) => {
            dispatch(setDataLanguage(e.target.value));
          }}
        >
          <option defaultValue="en">en</option>
          <option value="fr">fr</option>
          <option value="ar">ar</option>
        </select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
