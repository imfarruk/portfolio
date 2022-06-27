import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box, Typography, Tooltip, Button } from "@mui/material";
// import Icon from "@mui/material/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";
import { deepOrange } from "@mui/material/colors";
import "./navbar.css";
import { render } from "react-dom";

const styles = makeStyles({
  details: {
    display: "flex",
    fontSize: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
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
    color: "white",
    width: 40,
    height: 40,
    border: "1px solid white",
    borderRadius: 50,
    boxShadow: "1px 1px 15px red",
    fontSize: 5,
    margin: 8,
    padding: 3,
    cursor: "pointer",
  },
  imgStyle: {
    width: "100%",
    height: "400px",
  },
});
const iconed = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon];
function Appss() {
  const classes = styles();
  const iconed = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon];
  return (
    <>
      {iconed.map((person, idx) => {
        const Iconnnn = iconed[idx];
        return <Iconnnn className={classes.icon} />;
      })}
    </>
  );
}

const icons = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    iconsName: "FacebookIcon",
    iconImage: "/images/icons8-facebook.svg",
  },
  {
    href: "https://www.twitter.com/imfarruk",
    title: "Twitter",
    iconsName: "TwitterIcon",
    iconImage: "/images/icons8-twitter (1).svg",
  },
  {
    href: "https://www.instagram.com/imfarruk",
    title: "Instagram",
    iconsName: "InstagramIcon",
    iconImage: "/images/icons8-instagram.svg",
  },
  {
    href: "https://www.linkedin.com/in/md-farhan-haider-59b843184/",
    title: "LinkedIn",
    iconsName: "LinkedInIcon",
    iconImage: "/images/icons8-linkedin.svg",
  },
];
const Home = () => {
  const classes = styles();

  return (
    <>
      <Box
        sx={{
          marginTop: 4,
          paddingBottom: 7,
          // height: "fit-content",
          height: "80vh",
        }}
      >
        <Grid
          container
          style={{ gap: 25 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={10}
            sm={10}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src="/images/beard-man.png" alt="myHome" className="img" />
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
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
              src="/images/beard-man.png"
              alt="myHome"
              style={{ width: "50%", height: "200px" }}
            />
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4} order={{ xs: 2, sm: 2 }}>
            <Box>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "orange",
                  textDecorationThickness: 5,
                  lineHeight: 2,
                  fontSize: 30,
                  fontWeight: 600,
                }}
              >
                WELCOME
              </Typography>
              <Box sx={{ display: "flex", fontFamily: "cursive" }}>
                <Typography sx={{ fontSize: 30 }}>I'M </Typography>
                <Typography
                  sx={{
                    color: deepOrange[900],
                    fontSize: 30,
                    fontWeight: 900,
                    textIndent: 4,
                    cursor: "pointer",
                    textShadow: "1px 1px 5px orange ",
                    filter: "invert",
                    fontFamily: "cursive",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ["Web", "MERN", "ReactJS", "NodeJS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
                <Typography sx={{ fontSize: 30 }}> Developer</Typography>
              </Box>
            </Box>
            <Box className={classes.icons}>
              <Typography>Follow Me ⭐</Typography>

              {icons.map((icon, i) => (
                <a href={icon.href} target="_blank" key={i}>
                  <Tooltip title={icon.title}>
                    {/* // <Icon className={classes.icon} /> */}
                    <img
                      src={icon.iconImage}
                      alt="iconsImages"
                      className={classes.icon}
                    />
                  </Tooltip>
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
