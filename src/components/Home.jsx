import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="top">
        <nav className="navbar sticky-top bg-body-tertiary">
          <div className="container">
            <div className="logo"></div>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  {/* <a className="nav-link m-2" href="#">
                  Log-in
                </a> */}
                  <Link className="nav-link m-2" to="/login">
                    Log-in
                  </Link>
                </li>
                <li className="nav-it em">
                  {/* <a className="nav-link m-2" href="#">
                  Sign-up
                </a> */}
                  <Link className="nav-link m-2" to="/signup">
                    Sign-up
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link m-2" href="#">
                  Order Parts
                </a> */}
                  <Link className="nav-link m-2" to="/parts">
                    Order Parts
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link m-2" href="#">
                  Service
                </a> */}
                  <Link className="nav-link m-2" to="/service">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link m-2" href="#">
                  About Us
                </a> */}
                  <Link className="nav-link m-2" to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
        <h1 className="header-title">PUSHING THE LIMITS FEELING THE RUSH</h1>
      </div>

      <div className="mid">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1>THE DRIVER'S DREAM</h1>
            <p className="mx-auto my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              cum optio quos accusamus consectetur provident quod eum,
              reprehenderit dolore ut iure doloremque impedit sunt ab
              dignissimos. Assumenda ipsum accusamus pariatur amet quia vero
              blanditiis harum nostrum numquam ad laborum totam, aliquid tenetur
              reiciendis quos mollitia consequuntur culpa corrupti. Suscipit,
              optio?
            </p>
            <p className="mx-auto my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              rerum blanditiis mollitia voluptate minus earum cupiditate est
              perferendis amet, molestias maiores voluptatem vitae, ab molestiae
              beatae illo quasi magnam adipisci.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <h1 className="text-center">OUR PRODUCTS & SERVICES</h1>
        <div className="container marketing">
          <div className="row featurette mt-5">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nihil sequi enim voluptates eos! Provident porro est nesciunt.
                Atque ut architecto mollitia hic molestias magnam rerum facilis,
                nostrum aliquid debitis repellendus? Consequatur error deserunt
                temporibus sit recusandae architecto excepturi ea!
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <div className="row featurette mt-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Second featurette heading
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                temporibus quas eum debitis repellat atque, blanditiis at illo,
                error tempora molestiae minus qui suscipit inventore magni ullam
                pariatur veniam maiores?
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <div className="row featurette mt-5">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Third featurette heading
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde sunt iusto dignissimos ipsa iure sequi error perferendis
                debitis soluta.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="footer text-center">
        <h1>CONTACT US</h1>
        <div className="col-md-4 m-3 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Forza Customs, Inc
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
