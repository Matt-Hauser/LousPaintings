import { Box, Button, Link, Typography } from "@mui/material";
import "@fontsource/roboto/500.css";
import "@fontsource-variable/montserrat";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";

export default function About() {
  return (
    <div style={{ height: "90vh", display: "flex" }}>
      {/* <h1>About Page!</h1> */}
      <Box
        style={{
          backgroundColor: "#f5f5f5f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingBottom: "0px",
          marginBottom: "0",
          marginTop: "40px",
        }}
        width={"50vw"}
        height={"80vh"}
      >
        <Image priority height={200} width={200} src="/louBio.jpg"></Image>
        <Typography fontFamily={"georgia"} variant="h2">
          Louis Farace
        </Typography>
        <Typography color={"#555555"} variant="h7">
          Professional Portrait Artist
        </Typography>

        <Button
          style={{ backgroundColor: "#9B59B6", margin: "30px" }}
          variant="contained"
        >
          Contact Me
        </Button>
        <Box style={{ display: "flex", gap: "5px" }}>
          <Facebook></Facebook>
          <Instagram></Instagram>
          <Twitter></Twitter>
        </Box>
      </Box>
      <Box
        style={{
          position: "relative",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          paddingBottom: "0px",
          marginTop: "40px",
          marginBottom: "0",
        }}
        width={"50vw"}
        height={"92vh"}
      >
        <Typography
          style={{
            fontFamily: "georgia",
            fontWeight: "bolder",
            color: "black",
            position: "relative",
            bottom: "15px",
            right: "3vw",
          }}
          variant="h3"
        >
          About The Artist
        </Typography>
        <Typography
          style={{
            color: "#555555",
            fontFamily: "Montserrat Variable",
            lineHeight: "23px",
            textAlign: "",
          }}
          variant="h7"
        >
          San Diego based artist Louis Farace has been painting and drawing for
          over 20 years. Using mainly acrylics, Lou paints portraits, pets, and
          landscapes utilizing a realistic yet distinct style. Lou has worked in
          art restoration for over 15 years, restoring thousands of paintings,
          portraits, posters, and sculptures. He has restored documents signed
          by George Washington, Thomas Jefferson, and Abraham Lincoln to name a
          few. Lou currently holds a Bachelor’s degree in Human Development, and
          is working on a Master’s in Psychology, while working as a behavior
          therapist and artist. Combining his love of animals and people with
          his love of art, Lou’s Paintings was created in 2019 and has since
          created over 300 commissioned paintings.
        </Typography>
        <Box style={{ display: "flex", gap: "50px", margin: "20px" }}>
          <Link style={{ textDecoration: "none" }} href="/gallery" passHref>
            <Button
              disableElevation
              style={{ backgroundColor: "black" }}
              variant="contained"
            >
              View his Work
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/" passHref>
            <Button
              disableElevation
              style={{ backgroundColor: "black" }}
              variant="contained"
            >
              Return Home
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
