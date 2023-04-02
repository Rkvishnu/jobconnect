import { Grid, Typography } from "@material-ui/core";
import home from "../assets/home.png";
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">
        Welcome to Job Portal
    <br/>
        Find your dream jobs...
        
        </Typography>
        <img
          src={home}
          alt="home pic"
          // className="img-fluid"
          height={500}
          width={700}
        />
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
