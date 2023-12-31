import { Button } from "@mui/material";
import { padding } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@fontsource/roboto";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
    },
    desktopSmall: {
      breakpoint: { max: 1300, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "",

            marginTop: "",
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* <h1>Home!</h1> */}
          <div
            style={{
              width: "100vw",
              height: "100vh",

              marginTop: "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              fill="true"
              priority
              style={{
                objectFit: "cover",
                objectPosition: "top",
                marginTop: "50px",
                zIndex: "0",
              }}
              src="/photoframe1.png"
            ></Image>
            {/* <Link
            style={{
              zIndex: "5",

              textDecoration: "none",
            }}
            href="/order"
            passHref
          >
            <Button
              variant="contained"
              style={{
                fontWeight: "bold",
                backgroundColor: "#F7DC6F",
                position: "relative",
                top: "0",
                left: "0",

                fontFamily: "",
                color: "black",
                zIndex: "5",
              }}
            >
              Learn More
            </Button>
          </Link> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "40px",
            marginTop: "100px",
          }}
        >
          <img
            style={{ margin: "10px", flex: "0 0 40vw", borderRadius: "20px" }}
            src="./catdemo.svg"
          ></img>
          <img
            style={{
              margin: "10px",

              flex: "0 0 40vw",
            }}
            src="./framefriends.svg"
          ></img>
        </div>
        <div
          style={{
            justifyContent: "center",
          }}
        >
          <Carousel autoPlay={true} infinite={true} responsive={responsive}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // style={{ marginLeft: "5vw", marginRight: "5vw" }}
                src="./carousel1.png"
              ></img>
            </div>

            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // style={{ marginLeft: "5vw", marginRight: "5vw" }}
                src="./carousel2.png"
              ></img>
            </div>

            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // style={{ marginLeft: "5vw", marginRight: "5vw" }}
                src="./carousel3.png"
              ></img>
            </div>
            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // style={{ marginLeft: "5vw", marginRight: "5vw" }}
                src="./carousel4.png"
              ></img>
            </div>
            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // style={{borderRadius: "20px", marginLeft: "5vw", marginRight: "5vw" }}
                src="./carousel5.png"
              ></img>
            </div>
          </Carousel>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "40px",
          }}
        >
          <img
            style={{ margin: "10px", flex: "0 0 40vw" }}
            src="./paintedmemories.svg"
          ></img>
          <img
            style={{
              margin: "10px",

              borderRadius: "20px",
              flex: "0 0 40vw",
            }}
            src="./weddingdemo.svg"
          ></img>
        </div>
      </div>
    </>
  );
}
