import { useState } from "react";
import validate from "../components/SignUp-Login/validateInfo";
const signUpUrl = "http://localhost:3001/sign-up"


const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
    password2: ""
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
    e.preventDefault()
    setErrors(validate(values))
    const newValues = {...values}
    delete newValues.password2
    
    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newValues),
      // redirect: "http://localhost:3000"
    })
    .then(res => res.json())
    .then(res => {
      if(res.errors){
        this.setState({alerts: Response.errors})
      }
      else {
        localStorage.setItem('token', res.token)
      }
    })
  }
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
