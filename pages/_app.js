import {
  AppBar,
  Box,
  ButtonGroup,
  Icon,
  Toolbar,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../global.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { Facebook, Search, Twitter } from "@mui/icons-material";
import "../gallery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Context from "../context/context";
import "../stepone.css";

export default function App(props) {
  return (
    <>
      <AppBar
        style={{ height: "100px", backgroundColor: "black" }}
        position="fixed"
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Typography variant="h5">Nav Bar!</Typography> */}
          <img
            style={{ position: "relative", top: "5px" }}
            height={200}
            src="/lousLogo.png"
          ></img>
          <Typography variant="h7">
            Made to Order, Hand-Painted Portraits
          </Typography>
          <Box
            style={{
              minWidth: "20%",
              display: "flex",
              gap: "10px",
            }}
          >
            <ButtonGroup>
              <Link style={{ textDecoration: "none" }} href="/" passHref>
                <Button variant="" style={{ color: "white" }}>
                  Home
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/about" passHref>
                <Button variant="" style={{ color: "white" }}>
                  About
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/pricing" passHref>
                <Button variant="" style={{ color: "white" }}>
                  Pricing
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/order" passHref>
                <Button variant="" style={{ color: "white" }}>
                  Order
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/gallery" passHref>
                <Button variant="" style={{ color: "white" }}>
                  Gallery
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <AppBar
        style={{
          top: "120px",
          backgroundColor: "wheat",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          zIndex: "2",
        }}
      >
        <Typography
          textAlign="center"
          fontFamily="georgia"
          color="black"
          variant="h7"
        >
          Refer a friend to recieve a 10% discount!
        </Typography>
      </AppBar> */}
      <Context>
        <props.Component></props.Component>
      </Context>

      <AppBar
        style={{
          backgroundColor: "black",
          top: "auto",
          bottom: "0px",
          height: "10vh",
        }}
        position="relative"
      >
        <Toolbar
          style={{ display: "flex", gap: "5px", justifyContent: "center" }}
        >
          {/* <img height="190vh" src="./lousLogo.png"></img> */}
          <InstagramIcon />
          <Facebook />
          <Twitter />
          Follow us on Social Media
        </Toolbar>
      </AppBar>
    </>
  );
}
