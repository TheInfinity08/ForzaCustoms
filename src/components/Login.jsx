import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login() {
  const [userObject, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [authenticatedUser, setAuthUser] = useState({
    id: "",
    username: "",
    email: "",
  });

  function handleUserDetails(event) {
    const { name, value } = event.target;

    setUserDetails((prevValue) => {
      if (name === "email") {
        return { email: value, password: prevValue.password };
      } else if (name === "password") {
        return { email: prevValue.email, password: value };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/users/login", userObject)
      .then((response) => {
        const token = response.data.token;
        const decodedToken = jwt_decode(token);
        setAuthUser({
          id: decodedToken.user.id,
          username: decodedToken.user.username,
          email: decodedToken.user.email,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="background-login">
    <h1>{authenticatedUser.username}</h1>
      <div className="input-login">
        <form onSubmit={handleSubmit}>
          <div className="logo-login"></div>
          <h1 className="head-login h3 my-4 fw-normal">Log In</h1>

          <div className="login-form-style">
            <div className="form-floating">
              <input
                name="email"
                type="email"
                onChange={handleUserDetails}
                className="my-2 form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={userObject.email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                onChange={handleUserDetails}
                className="my-2 form-control"
                id="floatingPassword"
                placeholder="Password"
                value={userObject.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <button
            className="my-4 login-button-style w-100 btn btn-danger"
            type="submit"
          >
            Sign in
          </button>
          <p className="login-cp-style mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
