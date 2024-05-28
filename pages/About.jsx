import { makeStyles } from "@mui/styles";
import image from "../images/motion-background.jpg";

const useStyles = makeStyles(() => ({
  '@global': {
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  root: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    animation: "$fadeIn 2s ease-in-out",
  },
  content: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "50%",
    padding: "4rem",
    textAlign: "center",
    zIndex: 1,
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    borderRadius: "10px",
    animation: "$fadeIn 2s ease-in-out",
  },
  skillsList: {
    textAlign: "left",
    columns: 2,
    fontSize: "1.25rem",
    margin: "2rem 3rem",
    gap: "3rem",
    listStyleType: "none",
    padding: 0,
  },
  skillItem: {
    padding: "0.5rem 0",
    borderBottom: "1px solid #ccc",
  },
  detailOrQuote: {
    padding: "1rem 3rem 0",
    fontStyle: "italic",
    color: "#555",
  },
  hr: {
    border: "none",
    height: "1px",
    backgroundColor: "#ccc",
    margin: "2rem 0",
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
        <hr className={classes.hr} />
        <ul className={classes.skillsList}>
          {skillsList.map((skill) => (
            <li key={skill} className={classes.skillItem}>{skill}</li>
          ))}
        </ul>
        <hr className={classes.hr} />
        <p className={classes.detailOrQuote}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
