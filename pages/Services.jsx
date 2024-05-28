import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Grow } from "@mui/material";
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
    width: "80%",
    padding: "3rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
  serviceList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  serviceItem: {
    borderRadius: "10px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
    },
  },
}));

const imageAltText = "service-related background image";

const serviceList = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern web applications tailored to your needs using the latest technologies.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating seamless and user-friendly mobile applications for both Android and iOS platforms.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces to enhance user experience and satisfaction.",
  },
  {
    title: "Database Services",
    description:
      "Offering comprehensive database services that are scalable, secure, and optimized for performance and production",
  },
  {
    title: "Cloud Services",
    description:
      "Providing cloud integration, deployment, and management services to scale your applications efficiently.",
  },
];

const Services = () => {
  const classes = useStyles();

  return (
    <section className={classes.root} id="services">
      <img className={classes.background} src={image} alt={imageAltText} />
      <div className={classes.content}>
        <h2>Our Services</h2>
        <div className={classes.serviceList}>
          {serviceList.map((service, index) => (
            <Grow in={true} timeout={1000 + index * 300} key={service.title}>
              <Card className={classes.serviceItem}>
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
