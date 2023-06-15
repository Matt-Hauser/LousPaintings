import { Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";
import { useEffect, useState } from "react";
import "@fontsource-variable/montserrat";
import { OrderForm } from "../../context/context";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Step1() {
  const [people, setPeople] = useState(0);
  const [pets, setPets] = useState(0);
  const { petsContext, peopleContext } = useContext(OrderForm);
  const [petsContextValue, setPetsContextValue] = petsContext;
  const [peopleContextValue, setPeopleContextValue] = peopleContext;
  const [incompleteForm, setIncompleteForm] = useState(true);
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
            fontSize: "5vh",
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
            fontSize: "5vh",
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
