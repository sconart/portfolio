import { makeStyles } from "@mui/styles";
import image from "../images/motion-background.jpg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

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
    width: "60%",
    padding: "4rem",
    textAlign: "center",
    zIndex: 1,
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "2rem 0",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    margin: "0 1rem",
  },
  footerText: {
    marginTop: "2rem",
    fontSize: "1rem",
    color: "#555",
  },
}));

const Contact = () => {
  const classes = useStyles();

  const siteProps = {
    name: "Alexandrie Grenier",
    title: "Web Designer & Content Creator",
    email: "alex@example.com",
    gitHub: "microsoft",
    instagram: "microsoft",
    linkedIn: "satyanadella",
    medium: "",
    twitter: "microsoft",
    youTube: "Code",
  };

  return (
    <section className={classes.root} id="contact" >
      <img className={classes.background} src={image} alt="background" />
      <div className={classes.content}>
        <h2>Contact</h2>
        <div className={classes.socialLinks}>
          {siteProps.gitHub && (
            <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className={classes.socialIcon} />
            </a>
          )}
          {siteProps.instagram && (
            <a href={`https://www.instagram.com/${siteProps.instagram}`} target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className={classes.socialIcon} />
            </a>
          )}
          {siteProps.linkedIn && (
            <a href={`https://www.linkedin.com/in/${siteProps.linkedIn}`} target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" className={classes.socialIcon} />
            </a>
          )}
          {siteProps.medium && (
            <a href={`https://medium.com/@${siteProps.medium}`} target="_blank" rel="noopener noreferrer">
              <img src={mediumIcon} alt="Medium" className={classes.socialIcon} />
            </a>
          )}
          {siteProps.twitter && (
            <a href={`https://twitter.com/${siteProps.twitter}`} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className={classes.socialIcon} />
            </a>
          )}
          {siteProps.youTube && (
            <a href={`https://www.youtube.com/c/${siteProps.youTube}`} target="_blank" rel="noopener noreferrer">
              <img src={youTubeIcon} alt="YouTube" className={classes.socialIcon} />
            </a>
          )}
        </div>
        <p className={classes.footerText}>
          Created by {siteProps.name}
        </p>
      </div>
    </section>
  );
};

export default Contact;
