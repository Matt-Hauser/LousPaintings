import { Button, Typography } from "@mui/material";
import Link from "next/link";
import "@fontsource-variable/montserrat";

export default function Order() {
  return (
    <div
      className="pageContain"
      style={{
        zIndex: "0",
        position: "relative",
        backgroundImage: `url("../orderbg.png")`,
        backgroundSize: "cover",
        height: "100vh",

        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* <img
      style={{ position: "fixed", zIndex: "0" }}
      width=""
      src="../orderbg.svg"
    /> */}
      <div
        style={{
          // position: "relative",
          zIndex: "2",
          height: "450px",
          width: "450px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "25px",

          left: "-2.5%",
          top: "7vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexBasis: "50%",
          margin: "20px",
          maxWidth: "40vw",
          minWidth: "30vw",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            position: "relative",
            textAlign: "center",
            flexBasis: "100%",
            marginTop: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            fontWeight: "bold",
            fontFamily: "Montserrat Variable",
          }}
          variant="h2"
        >
          Ordering Your Portrait
        </Typography>
        <Typography
          style={{
            position: "relative",
            textAlign: "",
            flexBasis: "100%",

            marginLeft: "20px",
            marginRight: "20px",
            color: "#5A5A5A",
            fontFamily: "Montserrat Variable",
          }}
          variant="h6"
        >
          {" "}
          Turning photos into hand-painted portraits is easy with Lou's. Simply
          follow our quick 4-step order form to receive an estimate price for
          your portrait and confirm your order details.{" "}
        </Typography>

        <Link style={{ textDecoration: "none" }} href="/order/stepone" passHref>
          <Button
            style={{
              width: "",
              height: "",

              position: "relative",

              bottom: "8%",
              marginBottom: "10px",
            }}
            variant="contained"
          >
            {" "}
            Get Started
          </Button>
        </Link>
      </div>

      <div
        style={{
          // position: "relative",
          zIndex: "2",
          height: "410px",
          width: "530px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "25px",

          left: "2.5%",
          bottom: "-13%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <img height="350" src="../IMG_1726.jpg" />
        </div>
      </div>
    </div>
  );
}
