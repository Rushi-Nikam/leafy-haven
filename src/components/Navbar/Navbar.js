import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [search_query, setSearchQuery] = useState("")

  console.log(search_query)

  const links = [
    {
      "title" : "Plant",
      "url" : "/plant"
    }
  ]
  // const router = createBrowserRouter([{}, {}, {}]);
  const [showNav, setShowNav] = useState(false);

  const clickhandler = () => {
    console.log("Cliked")
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="main-nav bg[#fff6f4]">
        {/* first main-nav  part */}
        <div className="logo">
          <h2>
            <span>L</span>eafy
            <span>H</span>aven
          </h2>
        </div>
        <div className="Nav-link moblie-Nav-link">
          <ul>
              <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "green" : "";
                }}
                to={"/Plant"}
              >
                Plant
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "green" : "";
                }}
                to="/Seed"
              >
                Seed
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "green" : "";
                }}
                to="/G_Tools"
              >
                Gardening Tools
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "green" : "";
                }}
                to="#"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "green" : "";
                }}
                to="#"
              >
                Contact us
              </NavLink>
            </li>
            <input
                name="query"
                placeholder="Search For plants, seeds, Gardening Tools"
                className="input"
                value={search_query}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>
                <FaSearch />
              </button>
          </ul>
        </div>
        <div className="Account-cart ">
          <ul className="Account-cart-desktop">
            <li>
              <NavLink to="#">
                <MdAccountCircle />
                Account
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <FaShoppingCart /> cart
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Hamburger menu */}
        <div className="hamburger-Menu">
          <button onClick={() => clickhandler()}>
            <TiThMenu />
          </button>
        </div>
      </nav>
      {/* nav section is ended */}

      {/* <section className="Hero-section">
        <main>
          <button>Our plants</button>
        </main>
      </section> */}
    </>
  );
};

export default Navbar;
