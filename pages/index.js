import { Fragment } from "react";
import Home from "../components/Home";
import MainNavigation from "../layouts/MainNavigation";
import LoginForm from "../layouts/LoginForm";
import Container from "react-bootstrap/Container";

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
      <Home />
      <LoginForm />
    </Fragment>
  );
}

export default HomePage;
