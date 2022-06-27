import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import { myWorkData } from "../constant/data.js";

const styles = makeStyles({
  cardBox: {
    display: "flex",
    marginTop: 20,
    paddingBottom: 100,
    flexDirection: "row",
  },
  cards: {
    border: "2px solid primary",
    boxShadow: "0 0px 6px yellow",
  },
  anchorTag: {
    textDecoration: "none",
  },
});
const Work = () => {
  const classes = styles();
  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  // const myWorkData = [
  //   {
  //     name: "Tech Anda",
  //     url: "/images/techAnda1.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Techee_Website_In_ReactJS",
  //     codes: "https://www.github.com/imfarruk/Techee_Website_In_ReactJS",
  //   },
  //   {
  //     name: "Live Weather",
  //     url: "/images/contact.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Live-Weather-Search/",
  //     codes: "https://github.com/imfarruk/Live-Weather-Search",
  //   },
  //   {
  //     name: "Flipkart Clone",
  //     url: "/images/dev6.jpg",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Flipkart_Clone/",
  //     codes: "https://github.com/imfarruk/Flipkart_Clone",
  //   },
  //   {
  //     name: "Blogging ",
  //     url: "/images/programmer.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Blogging_Website/",
  //     codes: "https://github.com/imfarruk/Blogging_Website",
  //   },
  //   {
  //     name: "Todoapp ",
  //     url: "/images/programmer.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Todoapp/",
  //     codes: "https://github.com/imfarruk/Todoapp",
  //   },
  //   {
  //     name: "Weather App By ExpressJS",
  //     url: "/images/programmer.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Todoapp/",
  //     codes: "https://github.com/imfarruk/Weather-App-By-ExpressJS",
  //   },
  //   {
  //     name: "Inc/Dec with Redux",
  //     url: "/images/inc_dec.png",
  //     title: "My Work",
  //     link: "https://imfarruk.github.io/Increment_Decrement_with_Redux/",
  //     codes: "https://github.com/imfarruk/Increment_Decrement_with_Redux",
  //   },
  // ];
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            lg={6}
            spacing={4}
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 22 }}>
              <Typography
                sx={{
                  transform: "scale(1.5)",
                  fontSize: 25,
                  fontWeight: 900,
                  textDecoration: "underline solid  30%",
                }}
              >
                LATEST WORK
              </Typography>
              <br />
              These are some of my recent favorites – always subject to change.
            </Typography>
          </Grid>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // id="work"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            spacing={2}
            container
            className={classes.cardBox}
          >
            {myWorkData.map((item, i) => (
              <Grid
                item
                xs={8}
                sm={5}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card className={classes.cards} key={i}>
                  <CardActionArea>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.url}
                        alt={item.title}
                      />

                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "orange" }}
                        >
                          {item.name}
                        </Typography>
                        <Typography>
                          This my first technical website which is designed with
                          the help of reactjs library.
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      href={item.codes}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.anchorTag}
                    >
                      <Button
                        size="large"
                        sx={{ fontWeight: 700, color: "orange" }}
                      >
                        Codes
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Work;
