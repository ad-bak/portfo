import Admin from "../../components/Admin/Admin";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={classes.section}>
        <p>Born in 1998 in Caucasus.</p>
        <p>
          I started as a front-end developer and expanded my skills as a
          back-end developer.
        </p>
        <p>My goal is to become a full-stack developer.</p>
        <p>
          I am constantly trying to improve my skills and become better in my
          profession. I am interested in design, technology, web, mobile and
          software development.
        </p>
      </section>
      <Admin />
    </>
  );
}
