import React from "react";

import propTypes from "prop-types";

function Study({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Study;

Study.propTypes = {
  title: propTypes.string.isRequired,
};
