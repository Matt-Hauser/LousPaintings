import {
  Box,
  Button,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
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
  const [activeStep, setActiveStep] = useState(1);
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
          marginTop: "-30%",
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
    </div>
  );
}
