import React from "react";
import "./App.css";
import FormLogin from "./components/SignUp-Login/FormLogin";
import FormSignup from "./components/SignUp-Login/FormSignup";
import MainPage from "./container/MainPage";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={FormSignup} />
        <Route path="/login" component={FormLogin}/>
        <Route path="/main" component={MainPage}/>
      </Switch>
    </div>
  );
}
