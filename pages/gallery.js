import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const paintings = [
    "/IMG_0512.jpg",
    "/IMG_0486.jpg",
    "/IMG_0564.jpg",
    "/IMG_0001.jpg",
    "/IMG_0345.jpg",
    "/IMG_1700.jpg",
    "/IMG_1329.jpg",
    "/IMG_1726.jpg",
    "/IMG_0906.jpg",
    "/IMG_0621.jpg",
    "/IMG_0501.jpg",
    "/IMG_0508.jpg",
    "/IMG_3531.jpg",
    "/IMG_0009.jpg",
    "/IMG_2018.jpg",
    "/IMG_0483.jpg",
    "/IMG_1926.jpg",
    "/IMG_6875.jpg",
  ];

  const gallery = paintings.map((painting, idx) => {
    return (
      <>
        <Card
          style={{
            width: "250px",
            height: "300px",
            margin: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",

                height: "250px",

                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Image
                onClick={() => setIndex(idx)}
                className="painting"
                src={painting}
                fill="true"
                objectFit="contain"
                style={{ marginTop: "20px" }}
              />
            </CardMedia>
            <CardContent style={{ textAlign: "center" }}></CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          justifyContent: "center",
          backgroundImage: `url("../orderbg.svg")`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain",
        }}
      >
        <img
          style={{ marginTop: "60px", marginBottom: "-20px" }}
          src="../Gallery-2.svg"
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            maxWidth: "80%",
            paddingTop: "2%",
            paddingBottom: "2%",
            justifyContent: "center",
            borderRadius: "30px",
            marginBottom: "40px",
          }}
        >
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={[
              { src: "./IMG_0512.jpg" },
              { src: "./IMG_0486.jpg" },
              { src: "./IMG_0564.jpg" },
              { src: "./IMG_0001.jpg" },
              { src: "./IMG_0345.jpg" },
              { src: "./IMG_1700.jpg" },
              { src: "./IMG_1329.jpg" },
              { src: "./IMG_1726.jpg" },
              { src: "./IMG_0906.jpg" },
              { src: "./IMG_0621.jpg" },
              { src: "./IMG_0501.jpg" },
              { src: "./IMG_0508.jpg" },
              { src: "./IMG_3531.jpg" },
              { src: "./IMG_0009.jpg" },
              { src: "./IMG_2018.jpg" },
              { src: "./IMG_0483.jpg" },
              { src: "./IMG_1926.jpg" },
              { src: "./IMG_6875.jpg" },
            ]}
          />
          {gallery}
        </div>
      </div>
    </>
  );
}
