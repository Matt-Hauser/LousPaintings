import { HorizontalRule } from "@mui/icons-material";
import {
  Button,
  Divider,
  TextField,
  Box,
  Step,
  StepButton,
  Stepper,
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
  const [activeStep, setActiveStep] = useState(3);
  const [completed, setCompleted] = useState({});

  const steps = [
    "Select Subjects",
    "Select Canvas Size",
    "Select Background",
    "Upload/Info",
  ];
  const stepNumber = ["./stepone", "./steptwo", "./stepthree", "./stepfour"];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
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
        backgroundImage: `url("../orderbg.png")`,
        backgroundSize: "cover",
        height: "100vh",
        top: "50px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "90%", alignSelf: "", marginTop: "100px" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <Link
                style={{ textDecoration: "none" }}
                href={stepNumber[index]}
                passHref
              >
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Link>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography> */}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {/* <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button> */}
                {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    // <Button onClick={handleComplete}>
                    //   {completedSteps() === totalSteps() - 1
                    //     ? "Finish"
                    //     : "Complete Step"}
                    // </Button>
                  ))} */}
              </Box>
            </>
          )}
        </div>
      </Box>
      {/* <img
    style={{ position: "fixed", zIndex: "0" }}
    width=""
    src="../orderbg.svg"
  /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10%",
          marginTop: "-35%",
        }}
      >
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
          <form
            name="order"
            method="POST"
            action="/order/index"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="order" />
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
              {/* <input
                type="hidden"
                name="orderDetails"
                id="orderDetails"
                value={
                  petsContextValue,
                  peopleContextValue,
                  bGContext,
                  canvasContextValue,
                }
              ></input> */}

              <input
                style={{ width: "50%", flexBasis: "51%" }}
                id="standard-basic"
                name="firstname"
                // label="First Name"
                // variant="standard"
              />
              <input
                style={{ width: "50%", flexBasis: "51%" }}
                id="standard-basic"
                name="lastname"
                // label="Last Name"
                // variant="standard"
              />
              <input
                style={{ width: "50%", flexBasis: "51%" }}
                id="standard-basic"
                name="email"
                // label="Email Address"
                // variant="standard"
              />
              <input
                style={{ margin: "0px", width: "50%", flexBasis: "51%" }}
                id="standard-basic"
                name="comments"
                // label="Additional Comments"
                // variant="standard"
                // multiline
                // rows={2}
              />
            </div>

            {/* <Link
              style={{ marginBottom: "20px", textDecoration: "none" }}
              href="../order"
              passHref
            > */}
            <button
              type="submit"
              style={{
                width: "",
                height: "",
                position: "relative",
                bottom: "8%",
              }}
              // variant="contained"
            >
              {" "}
              Place Order
            </button>
            {/* </Link> */}
          </form>
        </div>

        <div
          style={{
            // position: "relative",
            zIndex: "2",
            height: "450px",
            width: "450px",
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
        </div>
      </div>
    </div>
  );
}
