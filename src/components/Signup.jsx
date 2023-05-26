import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [userObject, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleUserDetails(event) {
    const { name, value } = event.target;

    setUserDetails((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          email: prevValue.email,
          password: prevValue.password,
        };
      } else if (name === "email") {
        return {
          username: prevValue.username,
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          email: prevValue.email,
          password: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/users/register", userObject)
      .then((response) => {
        // console.log(userObject);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="background-signup">
      <div className="input-login">
        <form onSubmit={handleSubmit}>
          <div className="logo-login"></div>
          <h1 className="head-login h3 my-4 fw-normal">Sign Up</h1>

          <div className="form-floating">
            <input
              name="username"
              type="text"
              onChange={handleUserDetails}
              className="my-2 form-control"
              // id="floatingInput"
              placeholder="username"
              value={userObject.username}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="login-form-style">
            <div className="form-floating">
              <input
                name="email"
                type="email"
                onChange={handleUserDetails}
                className="my-2 form-control"
                // id="floatingInput"
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

export default Signup;
