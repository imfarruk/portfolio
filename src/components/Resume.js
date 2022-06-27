import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, Grid, Button, Link, Tooltip } from "@mui/material";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Home from "@mui/icons-material/Home";
import Cake from "@mui/icons-material/Cake";
import { saveAs } from "file-saver";
import Slider from "@mui/material/Slider";
import { withStyles, makeStyles } from "@mui/styles";
import Download from "@mui/icons-material/Download";
import {
  amber,
  white,
  blueGrey,
  blue,
  deepOrange,
  grey,
} from "@mui/material/colors";
// import { Link } from "react-router-dom";
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

const CustomSlider = withStyles(() => ({
  disabled: {
    height: 10,
    color: "green",
  },
  thumb: {
    height: 25,
    color: "red",
  },
}))(Slider);

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  textColor: "green",
  "& .MuiTabs-indicator": {
    backgroundColor: "deepOrange",
    width: 15,
  },
});

const Tab1 = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[800]};
  }
  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${grey[800]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${grey[900]};
    color: ${grey[100]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel1 = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${deepOrange[700]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  customStyleOnTab: {
    fontSize: "15px",
    color: "inherit",
    letterSpacing: 1.5,
  },
  customStyleOnActiveTab: {
    color: "red",
  },
  activeTab: {
    fontSize: "17px",
    fontWeight: "600",
    width: "100%",
    letterSpacing: 2,
    color: "deepOrange",
  },
  iconAnimation: {
    position: "relative",
    animation: "iconAnim .9s linear  infinite alternate",
  },
  "@global": {
    "@keyframes iconAnim": {
      "0%": {
        bottom: -6,
      },
      "100%": {
        bottom: "4px",
      },
    },
  },
});

const Resume = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const saveFile = () => {
    saveAs("/pdf/Md-resume.pdf", "farhan-haider.pdf");
  };
  return (
    <>
      <Box
        pt={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Click on button to download resume</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={saveFile} variant="contained">
            Download <Download className={classes.iconAnimation} />
          </Button>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 5,
          // maxHeight: "auto",
          height: "82vh",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={11}
          sm={10}
          md={10}
          sx={{
            width: "100%",
          }}
        >
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab1> Personal Info </Tab1> <Tab1> Academic </Tab1>{" "}
              <Tab1> Skills </Tab1>
            </TabsList>
            <TabPanel1 value={0} sx={{ display: "flex" }}>
              <Grid item xs={12} sm={12} md={3} lg={2} order={{ xs: 2, sm: 2 }}>
                <img
                  src="/images/owner.jpg"
                  alt="personal info"
                  height="200px"
                  width="100%"
                  border="2px solid white"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={10}
                order={{ xs: 1, sm: 1 }}
              >
                <Box
                  sx={{
                    lineWidth: 10,
                    marginLeft: 2,
                  }}
                >
                  <Typography variant="h5" contained>
                    Md Farhan Haider
                  </Typography>
                  <Typography sx={{ display: "flex", paddingTop: 2 }}>
                    <Cake sx={{ pr: 2 }} />
                    06-09-1993
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      paddingTop: 2,
                      textDecoration: "none",
                    }}
                  >
                    <Tooltip title="Click to mail" placement="right">
                      <Link
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                        sx={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Email sx={{ pr: 2, textDecoration: "none" }} />
                        imfarruk@gmail.com
                      </Link>
                    </Tooltip>
                  </Typography>
                  <Typography sx={{ display: "flex", paddingTop: 2 }}>
                    <Phone sx={{ pr: 2 }} />
                    8328206725
                  </Typography>
                  <Typography sx={{ display: "flex", paddingTop: 2 }}>
                    <Home sx={{ pr: 2 }} />
                    Tolichowki,Hyderabad,Telangana
                  </Typography>
                </Box>
              </Grid>
            </TabPanel1>

            <TabPanel1 value={1} sx={{ display: "flex", paddingBottom: 10 }}>
              <Grid item xs={4} sm={4} md={3}>
                <AntTabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tab
                    label={
                      <span
                        className={
                          value === 0
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        B.Tech
                      </span>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 1
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        Intermediate
                      </span>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 2
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        High School
                      </span>
                    }
                    {...a11yProps(2)}
                  />
                </AntTabs>
              </Grid>
              <Grid item xs={8} sm={8} md={9}>
                <TabPanel value={value} index={0}>
                  <Typography
                    style={{
                      fontSize: 22,
                      // paddingRight: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 25,
                        paddingRight: 10,
                        textDecoration: "underline",
                      }}
                    >
                      University
                    </span>
                    : Maulana Azad National Urdu University, Gachibowli,
                    Hyderabad
                  </Typography>
                  <Typography mt={2} pr={12}>
                    <span>Percentage</span>: 71.53 %
                  </Typography>
                  <Typography mt={2}>
                    <span>Year Of Passing : </span>2017
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography
                    style={{
                      fontSize: 22,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 25,
                        textDecoration: "underline",
                      }}
                    >
                      School
                    </span>
                    : B V I C Shekhanpur, Ghazipur,UP
                  </Typography>
                  <Typography mt={2}>
                    <span>Percentage</span>: 56.8 %
                  </Typography>
                  <Typography mt={2}>
                    <span>Year Of Passing : </span>2011
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography
                    style={{
                      fontSize: 22,
                      paddingRight: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 25,
                        textDecoration: "underline",
                      }}
                    >
                      School
                    </span>
                    : B V I C Shekhanpur, Ghazipur,UP
                  </Typography>
                  <Typography mt={2}>
                    <span>Percentage</span>: 70 %
                  </Typography>
                  <Typography mt={2}>
                    <span>Year Of Passing : </span>2009
                  </Typography>
                </TabPanel>
              </Grid>
            </TabPanel1>

            <TabPanel1
              value={2}
              sx={{ display: "flex", paddingBottom: 10, marginTop: -10 }}
            >
              <Grid item xs={4} sm={4} md={3}>
                <AntTabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tab
                    label={
                      <span
                        className={
                          value === 0
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        HTML
                      </span>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 1
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        CSS
                      </span>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 2
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        JavaScript
                      </span>
                    }
                    {...a11yProps(2)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 3
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        React Js
                      </span>
                    }
                    {...a11yProps(3)}
                  />
                  <Tab
                    label={
                      <span
                        className={
                          value === 4
                            ? classes.activeTab
                            : classes.customStyleOnTab
                        }
                      >
                        MERN
                      </span>
                    }
                    {...a11yProps(4)}
                  />
                </AntTabs>
              </Grid>
              <Grid item xs={8} sm={8} md={9}>
                <TabPanel value={value} index={0}>
                  <Typography>
                    The HyperText Markup Language, or HTML is the standard
                    markup language for documents designed to be displayed in a
                    web browser
                  </Typography>
                  <Typography
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                    }}
                  >
                    <Grid item xs={10} sm={10} md={6}>
                      <CustomSlider
                        defaultValue={4}
                        step={1}
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                      />
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography>
                    CSS is the language we use to style an HTML document. CSS
                    describes how HTML elements should be displayed.
                  </Typography>
                  <Typography
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                    }}
                  >
                    <Grid item xs={10} sm={10} md={6}>
                      <CustomSlider
                        defaultValue={4}
                        step={1}
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                      />
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography>
                    JavaScript (JS) is a lightweight, interpreted, or
                    just-in-time compiled programming language with first-class
                    functions.
                  </Typography>
                  <Typography
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                    }}
                  >
                    <Grid item xs={10} sm={10} md={6}>
                      <CustomSlider
                        defaultValue={3.5}
                        step={1}
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                      />
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography>
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on UI components. React
                    can be used as a base in the development of single-page or
                    mobile applications.
                  </Typography>
                  <Typography
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                    }}
                  >
                    <Grid item xs={10} sm={10} md={6}>
                      <CustomSlider
                        defaultValue={3.5}
                        step={1}
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                      />
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Typography>
                    MERN Stack is a collection of powerful technologies and
                    robust, used to develop scalable master web applications
                    comprising backend, front-end, and database components.
                  </Typography>
                  <Typography
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                    }}
                  >
                    <Grid item xs={10} sm={10} md={6}>
                      <CustomSlider
                        defaultValue={3}
                        step={1}
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                      />
                    </Grid>
                  </Typography>
                </TabPanel>
              </Grid>
            </TabPanel1>
          </TabsUnstyled>
        </Grid>
      </Box>
    </>
  );
};

export default Resume;
