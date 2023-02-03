import React from "react";

import classes from "./Studies.module.css";
import Project from "../../components/Study/Study";

const DUMMY_STUDIES = [
  { title: "freeCodeCamp" },
  { title: "CodeCademy" },
  { title: "Udemy" },
  { title: "Wild Code School" },
];

function Studies() {
  return (
    <div className={classes.studies}>
      {DUMMY_STUDIES.map((study) => (
        <Project title={study.title} key={study.title} />
      ))}
    </div>
  );
}

export default Studies;
