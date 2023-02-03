import React from "react";
import propTypes from "prop-types";

import classes from "./Project.module.css";

function Project({ link, title, children }) {
  return (
    <a className={classes.project} target="_blank" href={link} rel="noreferrer">
      <h2>{title}</h2>
      <div className={classes.tools}>{children}</div>
    </a>
  );
}

export default Project;

Project.propTypes = {
  link: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
