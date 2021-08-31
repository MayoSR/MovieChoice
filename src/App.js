import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviePage from "./components/MoviePage";
import MovieDetail from "./components/MovieDetail";
import Groups from "./components/Groups";
import Favorites from "./components/Favorites";
import ViewAllMovies from "./components/ViewAllMovies";
import Profile from "./components/Profile";
import ReviewsList from "./components/ReviewsList";
import Activity from "./components/Activity";
import FriendsList from "./components/FriendsList";

function App() {

  return (
    <Router>
      <Redirect exact from="/" to="movies" />
      <Switch>
        <Route exact path="/movies">
            <MoviePage />
        </Route>
        <Route exact path="/detail">
            <MovieDetail />
        </Route>
        <Route path="/all">
            <ViewAllMovies />
        </Route>
        <Route path="/groups">
            <Groups />
        </Route>
        <Route path="/favorites">
            <Favorites />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/reviews">
          <ReviewsList />
        </Route>
        <Route path="/activity">
          <Activity />
        </Route>
        <Route path="/friends">
          <FriendsList />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
