import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBarSearch";
import Title from "./components/Title";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
      <NavBar />
      <Container fluid>
        <Row>
          <Title />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Row>
      </Container>
    </Router>

  );
}

export default App;
