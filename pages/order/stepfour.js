import { HorizontalRule } from "@mui/icons-material";
import {
  Button,
  Divider,
  TextField,
  Typography,
  useStepContext,
} from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { people } from "./stepone.js";
import "@fontsource-variable/montserrat";
import { OrderForm } from "../../context/context.js";

export default function Step4() {
  const [imgSelect, setImgSelect] = useState("../canvas0.svg");
  const { petsContext, peopleContext, canvasContext, bGContext } =
    useContext(OrderForm);

  const [petsContextValue, setPetsContextValue] = petsContext;
  const [peopleContextValue, setPeopleContextValue] = peopleContext;
  const [canvasContextValue, setCanvasContextValue] = canvasContext;
  const [currentTotal, setCurrentTotal] = useState(85);
  const singleColorPetPrices = { "8x10": 0, "9x12": 10, "11x14": 20 };
  const fullBGPetPrices = { "8x10": 15, "9x12": 25, "11x14": 40 };
  const singleColorPeoplePrices = { "8x10": 20, "9x12": 40, "11x14": 60 };
  const fullBGPeoplePrices = { "8x10": 35, "9x12": 55, "11x14": 75 };

  const calculateTotal = () => {
    const extraPetsPrice = Math.max(petsContext[0] * 20 - 20, 0);
    const extraPeoplePrice = Math.max(peopleContext[0] * 30 - 30, 0);
    if (petsContext[0] > 0 && peopleContext[0] === 0) {
      if (bGContext[0] === "Single Color") {
        if (petsContext[0] > 1) {
          setCurrentTotal(
            currentTotal +
              extraPetsPrice +
              singleColorPetPrices[canvasContext[0]]
          );
          return;
        } else {
          setCurrentTotal(
            currentTotal + singleColorPetPrices[canvasContext[0]]
          );
        }

        return;
      } else if (bGContext[0] === "Full") {
        if (petsContext[0] > 1) {
          setCurrentTotal(
            currentTotal + extraPetsPrice + fullBGPetPrices[canvasContext[0]]
          );
          return;
        } else
          setCurrentTotal(currentTotal + fullBGPetPrices[canvasContext[0]]);
        return;
      }
    } else {
      if (bGContext[0] === "Single Color") {
        setCurrentTotal(
          currentTotal +
            (extraPetsPrice + (petsContext[0] === 0 ? 0 : 20)) +
            extraPeoplePrice +
            singleColorPeoplePrices[canvasContext[0]]
        );
        return;
      } else if (bGContext[0] === "Full") {
        setCurrentTotal(
          currentTotal +
            (extraPetsPrice + (petsContext[0] === 0 ? 0 : 20)) +
            extraPeoplePrice +
            fullBGPeoplePrices[canvasContext[0]]
        );
        return;
      }
    }
  };
  useEffect(() => {
    calculateTotal();
  }, []);

  console.log(singleColorPetPrices[canvasContext[0]]);
  console.log(currentTotal);
  return (
    <div
      className="pageContain"
      style={{
        zIndex: "0",
        position: "relative",
        backgroundImage: `url("../orderbg.svg")`,
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
          height: "490px",
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

            fontWeight: "bold",
            fontFamily: "Montserrat Variable",
          }}
          margin={2}
          variant="h2"
        >
          Step 4:
        </Typography>
        <Typography
          style={{
            position: "relative",
            textAlign: "center",
            flexBasis: "100%",
            fontFamily: "Montserrat Variable",
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Upload Photo / Order Info
        </Typography>
        {/* <Typography
          style={{
            opacity: "100%",
            color: "",
            textAlign: "center",
            position: "relative",
          }}
          margin={2}
          variant="h5"
        >
          {" "}
        </Typography> */}
        <div
          style={{
            flexBasis: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "5px",
            marginBottom: "15px",
          }}
        >
          <TextField
            style={{ width: "50%", flexBasis: "51%" }}
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
          <TextField
            style={{ width: "50%", flexBasis: "51%" }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
          />
          <TextField
            style={{ width: "50%", flexBasis: "51%" }}
            id="standard-basic"
            label="Email Address"
            variant="standard"
          />
          <TextField
            style={{ margin: "0px", width: "50%", flexBasis: "51%" }}
            id="standard-basic"
            label="Additional Comments"
            variant="standard"
            multiline
            rows={2}
          />
        </div>

        <Link
          style={{ marginBottom: "20px", textDecoration: "none" }}
          href="../order"
          passHref
        >
          <Button
            style={{
              width: "",
              height: "",
              position: "relative",
              bottom: "8%",
            }}
            variant="contained"
          >
            {" "}
            Place Order
          </Button>
        </Link>
      </div>

      <div
        style={{
          // position: "relative",
          zIndex: "2",
          height: "430px",
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "25px",

          left: "2.5%",
          bottom: "-13%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            style={{
              margin: "10px",
              fontWeight: "bold",
              fontFamily: "Montserrat Variable",
            }}
            fontWeight="bold"
            variant="h4"
          >
            Your Order Details
          </Typography>

          <Divider />
          <Typography
            style={{
              margin: "10px",
              fontFamily: "Montserrat Variable",
              display: "flex",
              justifyContent: "space-between",
            }}
            variant="h6"
          >
            <div>Number of Pets:</div>
            <div>{petsContext}</div>
          </Typography>
          <Divider />

          <Typography
            style={{
              margin: "10px",
              fontFamily: "Montserrat Variable",
              display: "flex",
              justifyContent: "space-between",
            }}
            variant="h6"
          >
            <div>Number of People:</div>
            <div>{peopleContext}</div>
          </Typography>

          <Divider />
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
              fontFamily: "Montserrat Variable",
            }}
            variant="h6"
          >
            <div>Canvas Size:</div>
            <div>{canvasContext}</div>
          </Typography>
          <Divider />
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
              fontFamily: "Montserrat Variable",
            }}
            variant="h6"
          >
            <div>Background Type:</div>
            <div>{bGContext}</div>
          </Typography>
          <Divider />
          <Typography
            style={{
              margin: "10px",
              fontWeight: "bold",
              fontFamily: "Montserrat Variable",
              display: "flex",
              justifyContent: "space-between",
            }}
            variant="h5"
          >
            <div>Your Order Total:</div>
            <div>${currentTotal}</div>
          </Typography>
        </div>

        <div style={{ position: "relative", bottom: "35px", left: "10px" }}>
          {" "}
        </div>
      </div>
    </div>
  );
}
