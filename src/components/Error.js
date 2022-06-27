import React from "react";
import { Box, Grid } from "@mui/material";
const Error = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "83vh",
          height: "auto",
        }}
      >
        <Grid item xs={10} sm={10} md={8}>
          <img src="/images/404error2.png" alt="error-page" width="100%" />
        </Grid>
      </Box>
    </>
  );
};

export default Error;
