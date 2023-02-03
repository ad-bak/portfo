import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import classes from "./Admin.module.css";

function Admin() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/admin");
  };

  return (
    <div className={classes.admin}>
      <button disabled={count !== 3} type="button" onClick={clickHandler}>
        Admin
      </button>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Unblock
      </button>
    </div>
  );
}

export default Admin;
