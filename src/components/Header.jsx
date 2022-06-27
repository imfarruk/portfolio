import React from "react";
import { useStyles } from "./styles/portfolioStyles";
import { AppColors } from "./color/AppColors";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Home from "./Home";
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.header} id="header">
        <Navbar />
        <Box>
          <Typography variant="h4">
            <Home />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
