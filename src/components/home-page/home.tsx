import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  ImageList,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetCities, GetWheather } from "../../api/get-user/get";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import logoo from "../../assets/images/logoo.png";
import { Login } from "@mui/icons-material";
import Lottie from "react-lottie";

type informationCityType = {
  city: string;
  temp: string;
  country: string;
  description: string;
  icon: string;
};

function Home() {
  const [dataa, setDataa] = useState({});
  const [informationCity, setInformationCity] = useState({
    city: "",
    temp: "",
    country: "",
    description: "",
    icon: "",
  });
  const [city, setCity] = useState("");
  const [showModalCity, setShowModalCity] = useState(false);
  const [showError, setShowError] = useState(false);

  const allCities = getLocalStorage("cities");
  let weatherIcon;

  function searchTemp() {
    setShowError(false);
console.log(city)
    GetWheather(city).then((data) => {
      console.log(data);
      let weatherIcon;

      if (data) {
        if (data.description.includes("of rain")) {
          weatherIcon =
            "https://lottie.host/embed/2181dbf6-ac02-4416-b6cb-770a52f1d2a9/pIlPejiPjl.json";
        } else {
          weatherIcon =
            "https://lottie.host/embed/809659fe-6318-472e-9e8c-3a29e3910ada/VrObjXj9md.json";
        }
        const user = {
          city: data.address,
          country: data.resolvedAddress.split(",")[1],
          temp: data.currentConditions.temp,
          description: data.description,
          icon: weatherIcon,
        };

        setShowModalCity(true);
        setInformationCity(user);

        setLocalStorage("cities", [user, ...getLocalStorage("cities")]);
        console.log(user);
      } else if (data === false) {
        setShowModalCity(false);
        setShowError(true);
      }
    });
  }

  function valueInput(e) {
    setCity(e.target.value);
  }

  return (
    <Box>
     
      <video
  autoPlay
  loop
  muted
  style={{
    position: "absolute",
    width: "100vw", 
    height: "100vh", 
    objectFit: "cover",
    zIndex: -1,
  }}
>
  <source src="./src/assets/images/weather.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      {/* header */}
      <Box
        sx={{
          // background: "linear-gradient(to right bottom, #786a88, #4c34dd)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "20px",
          height: "50px",
        }}
      >
        <Box>
          <ImageList sx={{ width: "100px", height: "100%" }}>
            <img src={logoo} alt="" style={{ height: "100%" }} />
          </ImageList>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <TextField
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
            id="filled-search"
            label="Search places or city..."
            type="search"
            variant="filled"
            sx={{
              bgcolor: "primary.main",
              width: "900px",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              height: "1",
            }}
            onChange={valueInput}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              color: "white",
              borderRadius: 0,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              height: "100%",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
            onClick={searchTemp}
          >
            Contained
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            height: "100%",
            width: "50px",
            color: "white",
          }}
        >
          <Login />
        </Box>
      </Box>

      <Typography
        variant="h3"
        sx={{ pt: 5, fontWeight: "bold" , textAlign: "center"}}
      >
        Weather App
      </Typography>

      {/* main */}
      <Grid
        spacing={2}
        sx={{
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          px: "100px",
          justifyContent: "space-evenly",
        }}
      >
        {/* Header App */}

        {/* ERROR */}
        {showError && (
          <Box
            sx={{
              bgcolor: "#ea0000de",
              color: "primary.light",
              px: 5,
              py: 4,
              borderRadius: 5,
              
            }}
          >
            <Typography sx={{fontSize:"30px",
              fontFamily: "sans-serif",
              fontWeight : "bold"}}>There is no such city</Typography>
          </Box>
        )}

        {/* MODAL TEMP ONE CITY */}
        {showModalCity ? (
          <Box
            sx={{
              opacity: 0.8,
              bgcolor:"primary.light",
              // bgcolor: "secondary.main",
              width: "65%",
              height: "25%",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              p: 3,
              borderRadius: 5,
              my:"40px"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "17px" }}>City : </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {informationCity.city}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "17px" }}>Temp : </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {informationCity.temp + "°C"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "17px" }}>Country :</Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {informationCity.country}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "17px" }}>Description :</Typography>
              <Typography>{informationCity.description}</Typography>
            </Box>
            <Box sx={{ position: "absolute", right: "15%", top: "25%" }}>
              {informationCity.icon !== "rainy" ? (
                <iframe
                  width={"50%"}
                  src="https://lottie.host/embed/809659fe-6318-472e-9e8c-3a29e3910ada/VrObjXj9md.json"
                ></iframe>
              ) : (
                <iframe
                  width={"50%"}
                  src="https://lottie.host/embed/2181dbf6-ac02-4416-b6cb-770a52f1d2a9/pIlPejiPjl.json"
                ></iframe>
              )}
            </Box>
          </Box>
        ) : (
          ""
        )}

        {/* MODAL TEMP RECENT CITIES */}
        {allCities.length != 0 ? (
          <Grid
            container
    //         sx={{
    //           // gap: 3,
    //           // flexWrap:"nowrap",
    //           // overflowX : "auto"   flex: 1, // Make the Grid container occupy remaining vertical space
    // overflowY: "auto", // Enable vertical scrolling when content exceeds the viewport height
    // padding: "10px"
    //         }}

    sx={{
      gap: 3,
      flex: 1,
      overflowY: "auto",
      padding: "10px",
      "&::-webkit-scrollbar": {
        display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari)
      },
      scrollbarWidth: "none", // Hide the scrollbar for non-WebKit browsers
    }}
  
          >
            {allCities.map((cityy: informationCityType, index) => {
              return (
                <Grid item xs={4}
                  sx={{   
                      opacity: 0.8,
                    bgcolor:"primary.main",
                    maxWidth: { xs: "100%", sm: 300 },
                    margin: { xs: "10px", sm: "auto" },
                    marginTop: "20px",
               
                    borderRadius: "50px"
                  }}
                >
                  <Box>
                    <iframe width={"100%"} src={cityy.icon}></iframe>
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={"white"}>
                      {cityy.city}, {cityy.country}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" color={"white"}> */}
                    <Typography variant="body2" color={"white"}>
                    Temperature: {cityy.temp}°C
                    </Typography>
                  </CardContent>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
}

export default Home;
