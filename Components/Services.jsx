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
    width: "60%",
    padding: "4rem",
    textAlign: "center",
    zIndex: 1,
  },
  serviceList: {
    textAlign: "left",
    fontSize: "1.25rem",
    margin: "2rem 0",
  },
  serviceItem: {
    margin: "1rem 0",
    "& h3": {
      marginBottom: "0.5rem",
    },
    "& p": {
      marginBottom: "1rem",
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
        <h2>Services</h2>
        <div className={classes.serviceList}>
          {serviceList.map((service) => (
            <div className={classes.serviceItem} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
