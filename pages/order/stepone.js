import { Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";
import { useEffect, useState } from "react";
import "@fontsource-variable/montserrat";
import { OrderForm } from "../../context/context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

export default function Step1() {
  const [people, setPeople] = useState(0);
  const [pets, setPets] = useState(0);
  const { petsContext, peopleContext } = useContext(OrderForm);
  const [petsContextValue, setPetsContextValue] = petsContext;
  const [peopleContextValue, setPeopleContextValue] = peopleContext;
  const [incompleteForm, setIncompleteForm] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
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
  const addPets = () => {
    setPets(pets + 1);
    setIncompleteForm(false);
  };
  const removePets = () => {
    if (pets > 0) setPets(pets - 1);
  };
  const addPeople = () => {
    setPeople(people + 1);
    setIncompleteForm(false);
  };
  const removePeople = () => {
    if (people > 0) setPeople(people - 1);
  };

  const handleConfirm = () => {
    setPeopleContextValue(people);
    setPetsContextValue(pets);
    handleComplete();
  };

  useEffect(() => {
    if (pets <= 0 && people <= 0) {
      setIncompleteForm(true);
    }
  }, [people, pets]);

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
      {/* <img
        style={{ position: "fixed", zIndex: "0" }}
        width=""
        src="../orderbg.svg"
      /> */}
      <div
        style={{
          display: "flex",
          marginTop: "-30%",
          justifyContent: "center",
          alignItems: "center",
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

            top: "7vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexBasis: "50%",
            marginLeft: "40px",
            margin: "20px",
            maxWidth: "40vw",
            minWidth: "30vw",
          }}
        >
          <Typography
            style={{
              position: "relative",

              flexBasis: "100%",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "30px",
              fontFamily: "Montserrat Variable",
            }}
            variant="h2"
          >
            Step 1:
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
            Choose Number of Subjects
          </Typography>
          <Typography
            color="#5A5A5A"
            style={{
              opacity: "100%",

              textAlign: "center",
              position: "relative",
              fontFamily: "Montserrat Variable",
            }}
            margin={2}
            variant="h6"
          >
            Select the number of people/pets that will be in your photo. Adding
            more subjects will increase the price. Check our pricing guide for
            more info{" "}
          </Typography>
          <Link
            className={incompleteForm ? "disabled" : ""}
            style={{ textDecoration: "none" }}
            href="./steptwo"
            passHref
          >
            <Button
              disabled={incompleteForm}
              style={{
                width: "",

                height: "",
                position: "relative",
                bottom: "8%",
              }}
              variant="contained"
              onClick={handleConfirm}
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
            height: "370px",
            width: "300px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "25px",

            left: "2.5%",
            bottom: "-13%",
          }}
        >
          <img
            style={{ position: "relative", left: "-30px", bottom: "20px" }}
            src="../pets.svg"
          />
          <IconButton
            onClick={addPets}
            style={{
              fontSize: "40px",
              position: "relative",
              bottom: "20%",
              left: "10%",
            }}
          >
            <AddIcon style={{ color: "black" }} fontSize="inherit" />
          </IconButton>

          <IconButton
            onClick={removePets}
            style={{
              fontSize: "40px",
              position: "relative",
              bottom: "20%",
              left: "50%",
            }}
          >
            <RemoveIcon style={{ color: "black" }} fontSize="inherit" />
          </IconButton>
          <Typography
            width="20px"
            variant="h4"
            style={{
              fontWeight: "bold",
              position: "relative",
              bottom: "33%",
              left: "45%",
            }}
          >
            {pets}
          </Typography>
        </div>
        <div
          style={{
            // position: "relative",
            zIndex: "2",
            height: "370px",
            width: "300px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "25px",

            left: "5%",
            bottom: "-13%",

            margin: "20px",
            marginRight: "25px",
          }}
        >
          <img
            style={{ position: "relative", left: "-20px", bottom: "20px" }}
            src="../people.svg"
          />
          <IconButton
            onClick={addPeople}
            style={{
              fontSize: "40px",
              position: "relative",
              bottom: "20%",
              left: "10%",
            }}
          >
            <AddIcon style={{ color: "black" }} fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={removePeople}
            style={{
              fontSize: "40px",
              position: "relative",
              bottom: "20%",
              left: "55%",
            }}
          >
            <RemoveIcon style={{ color: "black" }} fontSize="inherit" />
          </IconButton>
          <Typography
            width="20px"
            variant="h4"
            style={{
              fontWeight: "bold",
              position: "relative",
              bottom: "33%",
              left: "47%",
            }}
          >
            {people}
          </Typography>
        </div>
      </div>
    </div>
  );
}

/* <div style={{ height: "200px", width: "200px", color: "white" }}></div>
<Link style={{ textDecoration: "none" }} href="/order/steptwo" passHref>
  <Button
    variant="contained"
    style={{
      height: "7%",
      width: "13%",
      fontSize: "1.1em",
      fontWeight: "bold",
      backgroundColor: "#F7DC6F",
      position: "relative",
      left: "43%",
      fontFamily: "",
      color: "black",
      bottom: "20vh",
    }}
  >
    Confirm
  </Button>
</Link>
<div
  style={{ height: "25vh", width: "20vw", backgroundColor: "whitesmoke" }}
>
  <IconButton
    style={{
      fontSize: "5vh",
      position: "relative",
      bottom: "39vh",
      left: "10vw",
    }}
  >
    <AddIcon fontSize="inherit" />
  </IconButton>
  <IconButton
    style={{
      fontSize: "5vh",
      position: "relative",
      bottom: "39vh",
      left: "21vw",
    }}
  >
    <RemoveIcon fontSize="inherit" />
  </IconButton>
</div>
<div>
  <IconButton
    style={{
      fontSize: "5vh",
      position: "relative",
      bottom: "39vh",
      left: "37vw",
    }}
  >
    <AddIcon fontSize="inherit" />
  </IconButton>
  <IconButton
    style={{
      fontSize: "300%",
      position: "relative",
      bottom: "39vh",
      left: "49vw",
    }}
  >
    <RemoveIcon fontSize="inherit" />
  </IconButton>
</div> */
