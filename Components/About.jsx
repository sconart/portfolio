import { makeStyles } from "@mui/styles";
import image from "../images/motion-background.jpg";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  content: {
    position: "relative",
    backgroundColor: "white",
    width: "50%",
    padding: "4rem",
    textAlign: "center",
    zIndex: 1,
  },
  skillsList: {
    textAlign: "left",
    columns: 2,
    fontSize: "1.25rem",
    margin: "2rem 3rem",
    gap: "3rem",
  },
  detailOrQuote: {
    padding: "1rem 3rem 0",
  },
}));

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  const classes = useStyles();

  return (
    <section className={classes.root} id="about">
      <img className={classes.background} src={image} alt={imageAltText} />
      <div className={classes.content}>
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className={classes.skillsList}>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className={classes.detailOrQuote}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
