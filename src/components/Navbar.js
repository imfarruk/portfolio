import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { AppColors } from "./color/AppColors";
// import Link from "@mui/material/Link";
const pages = [
  { label: "home", id: "home" },
  { label: "about", id: "about" },
  { label: "work", id: "work" },
  { label: "contact", id: "contact" },
];

const Navbar = ({ check, change }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  // const [background, setBackground] = React.useState("black");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pageUrl) => {
    navigate(pageUrl);
    setAnchorElNav(null);
  };
  const theme = useTheme();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();

  return (
    <>
      <FormGroup
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "20px",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={check}
              onChange={change}
              aria-label="login switch"
              sx={{ ml: 3, display: { xs: "flex", md: "flex" } }}
            />
          }
          label={theme.palette.mode === "light" ? "Dark Mode" : "Light Mode"}
        />

        <Typography>
          DATE ⌚{date}:{month}:{year}
        </Typography>
      </FormGroup>

      <AppBar
        position="static"
        sx={
          theme.palette.mode === "light"
            ? { background: "#1e464a" }
            : { background: "#263238" }
        }
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 10,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                FARHAN KHAN
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  marginTop: 1,
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={{
                      width: 400,
                      background: "inherit",
                      textTransform: "uppercase",
                    }}
                    key={page}
                    onClick={() => handleCloseNavMenu(`/${page.id}`)}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FARHAN HAIDER
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  // to={`${page.id}`}
                  onClick={() => handleCloseNavMenu(`${page.id}`)}
                  sx={{
                    ml: 5,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
