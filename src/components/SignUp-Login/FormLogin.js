import React from "react";
import useForm from "../../customHook/useForm";
import validate from "./validateInfo";
import "./FormLogin.css";

export default function FormSignup({ history }) {
  console.log(history);
  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    history
  );
  return (
    <div className="form-container">
      <div className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <h1>MyFi</h1>
          <h2>
            Welcome Back! Let us continue to help with your financial
            budgetting!
          </h2>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          {/* <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div> */}
          <button className="form-input-btn" type="submit">
            Login
          </button>
          <span className="form-input-login">
            Do not have an account? Create an account{" "}
            <a href="http://localhost:3000/">here</a>
          </span>
        </form>
      </div>
    </div>
  );
}
