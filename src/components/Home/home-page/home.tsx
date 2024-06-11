import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  ImageList,
  TextField,
  Typography,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";
import { GetWheather } from "../../../api/get-user/get";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import logoo from "../../../assets/images/logoo.png";
import logo from "../../../assets/images/logoapp.png";
import { Login } from "@mui/icons-material";
import OneCity from "../OneCity/OneCity";
import { useNavigate } from "react-router";

type informationCityType = {
  city: string;
  temp: string;
  country: string;
  description: string;
  icon: string;
};

function Home() {
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
  const allCities = getLocalStorage("cities") || [];

  const navigate = useNavigate();

  function searchTemp() {
    setShowError(false);
    GetWheather(city).then((data) => {
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
    <Box sx={{ position: "relative", height: "100vh" }}>
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

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "20px",
          height: "50px",
        }}
      >
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
            cursor: "pointer",
          }}
        >
          <FmdGoodIcon />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <TextField
            InputLabelProps={{ style: { color: "gray", fontSize: "12px" } }}
            InputProps={{
              disableUnderline: true,
              style: { color: "#fff", fontSize: "15px", paddingLeft: "5px" },
            }}
            id="filled-search"
            label="Search places or city..."
            type="search"
            variant="filled"
            sx={{
              bgcolor: "primary.main",
              width: "900px",
              fontSize: "2px",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              height: "100%",
              "& .MuiFilledInput-root": {
                backgroundColor: "transparent",
                "&::before": {
                  borderBottom: "none",
                },
              },
            }}
            onChange={valueInput}
          />
          <Button
            variant="contained"
            sx={{
              color: "white",
              borderRadius: 0,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              boxShadow: "none",
              height: "100%",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
            onClick={searchTemp}
          >
            Search
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
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <Login />
        </Box>
      </Box>

      {/* <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}> 
    <ImageList sx={{ width: "500px", height: "100%" }}>
      <img src={logo} alt="" style={{ height: "100%" }} />
    </ImageList>
  </Box> */}

      <Typography
        variant="h3"
        sx={{
          pt: 5,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "sa",
        }}
      >
        Weather App Ghayoum
      </Typography>

      {/* Main */}
      <Grid
        container
        spacing={2}
        sx={{
          backgroundSize: "cover",
          height: "calc(100vh - 150px)",
          display: "flex",
          alignItems: "center",
          flexDirection: showModalCity ? "row" : "column",
          px: "100px",
          justifyContent: "space-evenly",
        }}
      >
        {/* ERROR */}
        {showError && (
          <Box
            sx={{
              mt: "30px",
              bgcolor: "#ea0000de",
              color: "primary.light",
              px: 3,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              {`it is not the name of a city aizam`}{" "}
            </Typography>
          </Box>
        )}

        {/* MODAL TEMP ONE CITY */}
        {showModalCity && (
          <Card
            sx={{
              width: 400,
              borderRadius: 10,
              bgcolor: "primary.main",
              color: "white",
              padding: 2,
              opacity: 0.8,
              transition: "all 0.3s ease",
              transform: showModalCity ? "translateX(0)" : "translateX(-100vw)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5">
                  {informationCity.city}, {informationCity.country}
                </Typography>
                <iframe
                  width={"100%"}
                  src={informationCity.icon}
                  title="Weather Icon"
                ></iframe>
              </Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                {informationCity.temp}°C
              </Typography>
              <Typography variant="body1">
                {informationCity.description}
              </Typography>
            </CardContent>
          </Card>
        )}

        {/* MODAL TEMP RECENT CITIES */}
        <Grid
          container
          sx={{
            gap: 3,
            flex: 1,
            overflowY: "auto",
            padding: "10px",
            maxHeight: "50vh",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            marginBottom: "70px",
            transition: "all 0.3s ease",
            transform: "translateX(0)",
            width: showModalCity ? "50%" : "100%",
          }}
        >
          {allCities.map((city: informationCityType, index) => {
            return (
              <OneCity
                key={index}
                icon={city.icon}
                city={city.city}
                country={city.country}
                temp={city.temp}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
