import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext, useState } from "react";
import "@fontsource-variable/montserrat";
import { OrderForm } from "../../context/context";

export default function Step2() {
  const [imgSelect, setImgSelect] = useState("../canvas0.svg");
  const [canvasSize, setCanvasSize] = useState("");
  const { petsContext, peopleContext, canvasContext } = useContext(OrderForm);
  const [canvasContextValue, setCanvasContextValue] = canvasContext;
  const [incompleteForm, setIncompleteForm] = useState(true);

  const handleSelect = (event) => {
    setIncompleteForm(false);
    if (event.target.value === "8x10") {
      setImgSelect("../canvas1.svg");
      setCanvasSize("8x10");
    }
    if (event.target.value === "9x12") {
      setImgSelect("../canvas2.svg");
      setCanvasSize("9x12");
    }
    if (event.target.value === "11x14") {
      setImgSelect("../canvas3.svg");
      setCanvasSize("11x14");
    } else return;
  };
  const handleClick = () => {
    setCanvasContextValue(canvasSize);
  };
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

            fontWeight: "bold",
            fontFamily: "Montserrat Variable",
          }}
          margin={2}
          variant="h2"
        >
          Step 2:
        </Typography>

        <Typography
          style={{
            position: "relative",
            textAlign: "center",
            flexBasis: "100%",
            fontWeight: "bold",
            fontFamily: "Montserrat Variable",
          }}
          variant="h5"
        >
          Choose a Canvas Size
        </Typography>
        <Typography
          style={{
            color: "",
            textAlign: "center",
            position: "relative",
            color: "#5A5A5A",
            fontFamily: "Montserrat Variable",
          }}
          margin={2}
          variant="h6"
        >
          Select from 3 available canvas sizes on the right. Your painting can
          be oriented in either portrait or landscape position to fit your
          needs.{" "}
        </Typography>
        <Link
          className={incompleteForm ? "disabled" : ""}
          style={{ marginBottom: "20px", textDecoration: "none" }}
          href="./stepthree"
          passHref
        >
          <Button
            disabled={incompleteForm}
            onClick={handleClick}
            style={{
              width: "",
              height: "",
              position: "relative",
              bottom: "8%",
            }}
            variant="contained"
          >
            {" "}
            Confirm
          </Button>
        </Link>
      </div>

      <div
        style={{
          // position: "relative",
          zIndex: "2",
          height: "430px",
          width: "370px",
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
        <img style={{ opacity: "80%" }} src={imgSelect} />
        <div style={{ position: "relative", bottom: "35px", left: "10px" }}>
          {" "}
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onChange={handleSelect}
                value="8x10"
                control={<Radio />}
                label="8x10"
              />
              <FormControlLabel
                onChange={handleSelect}
                value="9x12"
                control={<Radio />}
                label="9x12"
              />
              <FormControlLabel
                onChange={handleSelect}
                value="11x14"
                control={<Radio />}
                label="11x14"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
