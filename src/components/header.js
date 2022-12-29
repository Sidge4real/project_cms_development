import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const drawerWidth = 150
const navItems = ["home", "platforms", "contact"]
// links hover:
function changeColor(e) {
  e.target.style.color = "#1A74E8"
}
function resetColor(e) {
  e.target.style.color = "#000"
}

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //navbar in hamburger menu:
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} style={{ fontWeight: "bold" }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                {item === "home" ? (
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    to={`/${item}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                )}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    //appbar = navbar, navbar desktop:
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Link
            to="/"
            style={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <StaticImage
              alt="logo"
              src="../images/logo.png"
              style={{ width: "40px" }}
            />
            <Typography
              className="header-title"
              variant="h1"
              component="h1"
              style={{
                margin: "0",
                padding: "0",
                fontWeight: "bold",
                color: "#000",
                fontFamily: "sans-serif",
                fontSize: "25px",
              }}
            >
              Wiz
            </Typography>
          </Link>
          {/* hamburger menu (button + icon) => zichtbaar wanneer mobile view */}
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            style={{ position: "absolute", right: "0" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              gap: "10px",
            }}
            style={{ alignItems: "center" }}
          ></Typography>
          {/* navbar links wnr desktop view */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item === "home" ? (
                  <Link
                    to="/"
                    onMouseEnter={changeColor}
                    onMouseLeave={resetColor}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    to={`/${item}`}
                    onMouseEnter={changeColor}
                    onMouseLeave={resetColor}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* mobile view */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default DrawerAppBar
