import React, { useState } from "react";

import classes from "./AdminPanel.module.css";

function AdminPanel() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    fetch("http://localhost:7070/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.status === 200) {
        setLogged(true);
      }
    });
  };
  return (
    <div>
      {!logged ? (
        <form className={classes.auth} onSubmit={submitHandler}>
          <input placeholder="em" value={email} onChange={EmailChangeHandler} />
          <input
            placeholder="pa"
            value={password}
            onChange={PasswordChangeHandler}
          />
          <button type="submit">.</button>
        </form>
      ) : (
        <div className={classes.admin}>s</div>
      )}
    </div>
  );
}

export default AdminPanel;
