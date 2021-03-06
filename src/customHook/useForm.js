import { useState } from "react";
import validate from "../components/SignUp-Login/validateInfo";
const signUpUrl = "http://localhost:3001/sign-up";
const loginUrl = "http://localhost:3001/login";

const useForm = (_, history) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    const newValues = { ...values };
    delete newValues.password2;

    if (newValues.name) {
      fetch(signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValues),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            this.setState({ alerts: res.errors });
          } else {
            localStorage.setItem("token", res.token);
            history.push("/main");
          }
        });
    } else {
      fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValues),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            this.setState({ alerts: res.errors });
          } else {
            console.log("history", history);
            localStorage.setItem("token", res.token);
            history.push("/main");
          }
        });
    }
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
