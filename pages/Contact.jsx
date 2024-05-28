import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardActionArea, Typography, Grow } from "@mui/material";
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
    background: "rgba(0, 0, 0, 0.7)",
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
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    width: "60%",
    padding: "3rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  },
  input: {
    width: "80%",
    padding: "1rem",
    margin: "0.5rem 0",
    fontSize: "1rem",
  },
  textarea: {
    width: "80%",
    padding: "1rem",
    margin: "0.5rem 0",
    fontSize: "1rem",
    height: "100px",
  },
  button: {
    width: "80%",
    padding: "1rem",
    margin: "1rem 0",
    fontSize: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: "#444",
      transform: "translateY(-5px)",
    },
  },
  successBox: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#dff0d8",
    color: "#3c763d",
    borderRadius: "5px",
    border: "1px solid #d6e9c6",
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
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  footerText: {
    marginTop: "2rem",
    fontSize: "1rem",
    color: "#555",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const siteProps = {
    name: "Thanh Tran",
    title: "Web Designer & Content Creator",
    email: "ttran@example.com",
    gitHub: "microsoft",
    instagram: "microsoft",
    linkedIn: "satyanadella",
    medium: "",
    twitter: "microsoft",
    youTube: "Code",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section className={classes.root} id="contact">
      <img className={classes.background} src={image} alt="background" />
      <div className={classes.content}>
        <h2>Contact</h2>
        {isSubmitted && (
          <div className={classes.successBox}>
            Your message has been sent successfully!
          </div>
        )}
        <form className={classes.form} onSubmit={handleSubmit}>
          <input type="text" className={classes.input} placeholder="Your Name" />
          <input type="email" className={classes.input} placeholder="Your Email" />
          <textarea className={classes.textarea} placeholder="Your Message"></textarea>
          <button type="submit" className={classes.button}>Send Message</button>
        </form>
        <div className={classes.socialLinks}>
          {siteProps.gitHub && (
            <Grow in={true} timeout={1000}>
              <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer">
                <img src={gitHubIcon} alt="GitHub" className={classes.socialIcon} />
              </a>
            </Grow>
          )}
          {siteProps.instagram && (
            <Grow in={true} timeout={1300}>
              <a href={`https://www.instagram.com/${siteProps.instagram}`} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className={classes.socialIcon} />
              </a>
            </Grow>
          )}
          {siteProps.linkedIn && (
            <Grow in={true} timeout={1600}>
              <a href={`https://www.linkedin.com/in/${siteProps.linkedIn}`} target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" className={classes.socialIcon} />
              </a>
            </Grow>
          )}
          {siteProps.medium && (
            <Grow in={true} timeout={1900}>
              <a href={`https://medium.com/@${siteProps.medium}`} target="_blank" rel="noopener noreferrer">
                <img src={mediumIcon} alt="Medium" className={classes.socialIcon} />
              </a>
            </Grow>
          )}
          {siteProps.twitter && (
            <Grow in={true} timeout={2200}>
              <a href={`https://twitter.com/${siteProps.twitter}`} target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className={classes.socialIcon} />
              </a>
            </Grow>
          )}
          {siteProps.youTube && (
            <Grow in={true} timeout={2500}>
              <a href={`https://www.youtube.com/c/${siteProps.youTube}`} target="_blank" rel="noopener noreferrer">
                <img src={youTubeIcon} alt="YouTube" className={classes.socialIcon} />
              </a>
            </Grow>
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
