import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardActionArea, Typography, Grow } from "@mui/material";
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
  projectList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
    margin: "2rem 0",
  },
  projectItem: {
    borderRadius: "10px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
    },
    "& a": {
      textDecoration: "none",
    },
  },
}));

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling for beginners to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool for work and study.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Projects = () => {
  const classes = useStyles();

  return (
    <section className={classes.root} id="portfolio">
      <img className={classes.background} src={image} alt={imageAltText} />
      <div className={classes.content}>
        <h2>Projects</h2>
        <div className={classes.projectList}>
          {projectList.map((project, index) => (
            <Grow in={true} timeout={1000 + index * 300} key={project.title}>
              <Card className={classes.projectItem}>
                <CardActionArea href={project.url} target="_blank" rel="noopener noreferrer">
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
