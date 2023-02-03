import { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import autoAnimate from "@formkit/auto-animate";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import Studies from "./pages/Studies/Studies";
import AdminPanel from "./components/AdminPanel/AdminPanel";

import classes from "./App.module.css";

function App() {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div className={classes.App} ref={parentRef}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
