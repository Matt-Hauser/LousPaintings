import { HorizontalRule } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stepper,
  Step,
  StepButton,
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
  const [activeStep, setActiveStep] = useState(2);
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
        backgroundImage: `url("../orderbg.png")`,
        backgroundSize: "cover",
        height: "100vh",
        top: "50px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* <img
    style={{ position: "fixed", zIndex: "0" }}
    width=""
    src="../orderbg.svg"
  /> */}
      <Box
        sx={{
          width: "90%",
          alignSelf: "",
          marginTop: "100px",
        }}
      >
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
    </div>
  );
}
