import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper, Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const styles = makeStyles({
  cardBox: {
    display: "flex",
    // height: "90vh",
    paddingBottom: 11,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyle: {
    marginTop: 15,
    "&:focus": {
      background: "#5d4600",
    },
  },
  formMsg: {
    fontSize: 25,
    fontWeight: 800,
    background: "linear-gradient(0deg, green,orange)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  formInput: {
    textDecoration: "underline solid  30%",
    fontSize: 25,
    marginBottom: 2,
    background: "linear-gradient(10deg,grey,yellow)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});

const Contact = () => {
  const theme = useTheme();
  const classes = styles();
  const form = useRef();
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fou108r",
        "template_7ur5ovo",
        form.current,
        "tJbssPAO4LrXT7rv_"
      )
      .then((res) => {
        console.log(res);
        toast.success(" I will contact you shortly!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 10,
          paddingBottom: 6,
        }}
        id="contact"
      >
        <Paper
          sx={{
            mx: 10,
            my: 5,
            py: 5,
            boxShadow: "1px 2px 14px",
          }}
        >
          <Grid
            item
            md={12}
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item sm={10} md={3} xs={10} lg={3}>
              <img
                src="/images/images.png"
                alt="details"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid
              item
              sm={10}
              md={5}
              xs={10}
              lg={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ justifyContent: "center" }}>
                <Typography
                  py={2}
                  sx={{
                    fontSize: 25,
                    fontWeight: 900,
                    position: "relative",
                    textDecoration: "underline",
                    textDecoration: "underline solid  30%",
                  }}
                >
                  Contact Info
                </Typography>
                <Typography>
                  <span style={{ fontSize: 22, color: "yellow" }}>Name : </span>
                  Md Farhan Haider
                </Typography>

                <Typography>
                  <span style={{ fontSize: 22, color: "yellow" }}>Email :</span>
                  imfarruk@gmail.com
                </Typography>

                <Typography>
                  <span style={{ fontSize: 22, color: "yellow" }}>
                    Mobile :
                  </span>
                  8328206725 , 8886242903
                </Typography>

                <Typography>
                  <span style={{ fontSize: 22, color: "yellow" }}>
                    Address :
                  </span>
                  Tolichowki,Hyderabad
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2} className={classes.cardBox}>
          <Grid item xs={10} sm={5} md={6} lg={6}>
            <Typography
              className={classes.formMsg}
              sx={
                {
                  // transform: "scaleY(1.5)",
                }
              }
            >
              HELLO! LET’S TALK
              <br /> ABOUT YOUR <br />
              NEW PROJECT
            </Typography>
            <Typography className={classes.formInput}>
              ========================
            </Typography>
            <Typography>
              Your feedback / message is very important for me..
            </Typography>

            {/* email js */}
            <form
              ref={form}
              onSubmit={formSubmit}
              className={classes.formStyle}
            >
              <TextField
                label="Name"
                placeholder="Your Name"
                type="text"
                name="name"
                className={classes.inputStyle}
              />

              <TextField
                label="Email"
                placeholder="Your Email"
                type="email"
                name="email"
                className={classes.inputStyle}
              />

              <TextField
                label="Message"
                placeholder="Type your message"
                type="text"
                name="message"
                multiline
                minRows={3}
                className={classes.inputStyle}
              />

              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
              {/* <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                Send
              </Button> */}
              <input
                type="submit"
                value="Submit"
                style={{ marginTop: 10, height: "30px" }}
              />
            </form>

            {/* <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: 2 }}
              onClick={formSubmit}
            >
              Send
            </Button> */}
          </Grid>
          <Grid item xs={10} sm={5} md={4} lg={4} order={{ xs: 3, sm: 2 }}>
            {/* <img src="/images/dev11.png" alt="contact" /> */}
            <CardMedia
              component="img"
              // height="340"
              image="/images/email.png"
              alt="green iguana"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
