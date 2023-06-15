import { HorizontalRule } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";

import "@fontsource-variable/montserrat";
import { OrderForm } from "../../context/context.js";

export default function Step3() {
  const [imgSelect, setImgSelect] = useState("../IMG_1700.jpg");
  const [bGSelect, setBGSelect] = useState("");
  const { petsContext, peopleContext, canvasContext, bGContext } =
    useContext(OrderForm);

  const [bGContextValue, setBGContextValue] = bGContext;
  const [incompleteForm, setIncompleteForm] = useState(true);

  const handleSelect = (event) => {
    setIncompleteForm(false);
    if (event.target.value === "Single Color") {
      setImgSelect("../IMG_1700.jpg");
      setBGSelect("Single Color");
    }
    if (event.target.value === "Full Background") {
      setImgSelect("../IMG_0486.jpg");
      setBGSelect("Full");
    } else return;
  };
  const handleConfirm = () => {
    setBGContextValue(bGSelect);
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
          Step 3:
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
          Choose a Background Type
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
          <Typography
            style={{
              color: "#5A5A5A",
              textAlign: "center",
              position: "relative",
              fontFamily: "Montserrat Variable",
            }}
            margin={2}
            variant="h6"
          >
            You can choose between a single color background or a full
            background for your portrait. Due to their complexity, full
            backgrounds will increase your final price. Check out our pricing
            guide for more info.
          </Typography>
        </div>

        <Link
          className={incompleteForm ? "disabled" : ""}
          style={{ marginBottom: "20px", textDecoration: "none" }}
          href="./stepfour"
          passHref
        >
          <Button
            disabled={incompleteForm}
            onClick={handleConfirm}
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
        <div>
          <img style={{ height: "250px" }} src={imgSelect} />
        </div>
        <div>
          {" "}
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onChange={handleSelect}
                value="Single Color"
                control={<Radio />}
                label="Single Color"
              />
              <FormControlLabel
                onChange={handleSelect}
                value="Full Background"
                control={<Radio />}
                label="Full Background"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
