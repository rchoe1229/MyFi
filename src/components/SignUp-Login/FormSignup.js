import React from "react";
import useForm from "../../customHook/useForm";
import validate from "./validateInfo";
import "./FormSignUp.css";

export default function FormSignup({ history }) {
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
            Helping people become financially aware! Create your account by
            filling out the information below!
          </h2>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              className="form-input"
              placeholder="Enter your age"
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && <p>{errors.age}</p>}
          </div>
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
          <div className="form-inputs">
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
          </div>
          <button className="form-input-btn" type="submit">
            Sign Up
          </button>
          <span className="form-input-login">
            Already have an account? Login{" "}
            <a href="http://localhost:3000/login">here</a>
          </span>
        </form>
      </div>
    </div>
  );
}
