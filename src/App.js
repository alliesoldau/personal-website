import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
// import Volunteerism from './components/Volunteerism'
import Header from "./components/Header";
import NavBarMobile from "./components/NavBarMobile";
import db from "./db.json";
import "./App.css";
import { Grid, Hidden } from "@mui/material";

function App() {
  useEffect(() => {
    console.log("🐸 secret frog 🐸");
  }, []);

  // const styling = {
  //   container: {
  //     paddingRight: 4,
  //     paddingBottom: 4,
  //     width: "100%",
  //     margin: 0,
  //   },
  // };

  return (
    <>
      {" "}
      <Hidden lgUp>
        <NavBarMobile />
      </Hidden>
      <Grid container spacing={2} className="app">
        <Hidden lgDown>
          <Grid item lg={2}>
            <Header />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
          <div className="page-container" id="HomePage">
            <LandingPage />
            <AboutMe />
            <Experience
              jobsArray={db.jobsArray}
              projectsArray={db.projectsArray}
            />
            {/* <Volunteerism /> */}
          </div>
        </Grid>
        <Grid item xs={12} id="last-updated">
          <p class="last-update">
            Last updated: <i>2024</i>
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
