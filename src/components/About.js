import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box, Typography, Tooltip, Button } from "@mui/material";
import { Link } from "react-router-dom";

const styles = makeStyles({
  details: {
    display: "flex",
    fontSize: 25,
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  detailedInfo: {
    fontSize: 30,
    fontWeight: 800,
    color: "green",
    textShadow: "1px 2px 13px",
    textAlign: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    color: "red",
    border: "1px solid white",
    borderRadius: 50,
    boxShadow: "1px 1px 15px",
    fontSize: 25,
    margin: 10,
    padding: 7,
    cursor: "pointer",
  },
  imgStyle: {
    width: 35,
    height: 35,
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: 50,
    boxShadow: "1px 1px 15px",
    fontSize: 25,
    margin: 10,
    padding: 7,
    cursor: "pointer",
  },
});
const About = () => {
  const classes = styles();

  const aboutInfo = [
    {
      imgUrl: "/images/web2.png",
      aboutTitle: "Web Development",
      aboutDetails:
        "Web development refers to the building,creating,and maintaining of websites.A web developer is at heart an interactive artist",
    },
    {
      imgUrl: "/images/web1.png",
      aboutTitle: "UI Design",
      aboutDetails:
        "User interface (UI) design is the process designers use to build interfaces in software or computerized devices,focusing on looks or style.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          paddingBottom: 4,
          height: "auto",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
        id="about"
      >
        <Grid
          container
          xs={11}
          sm={10}
          md={10}
          lg={10}
          spacing={2}
          sx={{
            display: "flex",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            order={{ xs: 2, sm: 2, md: 1 }}
            sx={{
              display: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  transform: "scaleY(1.5)",
                  textDecoration: "underline solid  30%",
                  lineHeight: 5,
                  textUnderlinePosition: "under",
                  fontWeight: 700,
                }}
              >
                Hello, I am Farhan Khan
              </Typography>
              <Typography>
                A self taught developer who loves to codes something that will
                impact majority of the people
              </Typography>
            </Box>
            <Grid
              py={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {aboutInfo.map((info, i) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                    borderLeft: "12px solid orange",
                    paddingLeft: 1,
                    justifyContent: "center",
                  }}
                >
                  <Box className={classes.imgStyle}>
                    <img
                      src={info.imgUrl}
                      alt="webb"
                      width="30px"
                      height="30px"
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingBottom: 1,
                      color: "orange",
                      fontSize: 20,
                      textDecoration: "underline",
                      textUnderlinePosition: "under",
                    }}
                  >
                    {info.aboutTitle}
                  </Typography>
                  <Typography>{info.aboutDetails}</Typography>
                </Grid>
              ))}
            </Grid>
            {/* <Grid item xs={10} sm={10} md={6} lg={6} sx={{}}> */}
            <Box sx={{ marginTop: 2 }}>
              <Link
                to="/about/resume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  style={{ fontSize: 18, fontWeight: 700 }}
                >
                  Open CV
                </Button>
              </Link>
              <Link
                to="/work"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: 700 }}
                >
                  My Work
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/beardman.png"
              alt="myHome"
              style={{ width: "50%", height: "200px" }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/beardman.png"
              alt="myHome"
              style={{ width: "100%", height: "400px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
