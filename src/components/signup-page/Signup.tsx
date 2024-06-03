import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Fade,
  Paper,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PostUser from "../../api/post-user/post";
import { useNavigate } from "react-router";
import Person2Icon from "@mui/icons-material/Person2";
import { useState } from "react";
import GetUsers from "../../api/get-user/get";
function Signup() {
  const [isToastSuccess, setIsToastSuccess] = useState(false);
  const [isToastError, setIsToastError] = useState({ mode: false, text: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleCreateUser(e) {
    e.preventDefault();
    setIsToastError(false);

    const { password, email, username } = e.target;
    console.log(password, email);
    if (!!password.value && !!email.value && !!username.value) {
      GetUsers().then((users) => {
        const findUser = users.find(
          (user) =>
            user.email === email.value && user.username === username.value
        );
        console.log(findUser);
        if (findUser) {
          setIsToastError({
            mode: true,
            text: "Already registered with this email and username",
          });
        } else {
          const newUser = {
            password: password.value,
            email: email.value,
            username: username.value,
            id: Date.now(),
          };
          PostUser(newUser).then((user) => {
            console.log(user);
          });
          setIsToastSuccess(true);
          setLoading(true);
          // setTimeout(() => navigate("/"), 3000);
        }
      });
    } else {
      setIsToastError({ mode: true, text: "Please enter the values" });
    }
    setTimeout(() => {
      navigate("?mode=signin");
    }, 3000);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          transform: "scaleX(-1)",
        }}
      >
        <source src="./src/assets/images/rainy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: "absolute",
          left: "0",
          textAlign: "center",
        }}
      >
        {isToastSuccess && (
          <Fade in={isToastSuccess} timeout={1000}>
            <Alert
              sx={{ top: "10px", right: "10px", mt: 2, ml: 2 }}
              variant="filled"
              severity="success"
            >
              <AlertTitle>Success</AlertTitle>
              This is a filled success Alert.
            </Alert>
          </Fade>
        )}

        {/* TOAST ERROR INCORRECT */}
        {isToastError.mode && (
          <Fade in={isToastError} timeout={1000}>
            <Alert
              sx={{ top: "10px", right: "10px", mt: 2, ml: 2 }}
              variant="filled"
              severity="error"
            >
              <AlertTitle>error</AlertTitle>
              {isToastError.text}{" "}
            </Alert>
          </Fade>
        )}
      </Box>
      <Box component={"main"} maxWidth="xs" sx={{ width: "30%", pr: "50px" }}>
        <CssBaseline />
        <Paper
          sx={{
            marginTop: 10,
            padding: 2,

            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "primary.contrastText",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Person2Icon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{}}>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleCreateUser}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="username"
              type="username"
              variant="filled"
              sx={{ background: "primary" }}
              id="username"
              autoComplete="current-username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="filled"
              sx={{ background: "main", color: "primary.contrastText" }}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              variant="filled"
              sx={{ background: "primary" }}
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 2 }}
              // onClick={() => }
            >
              <Fade
                in={loading}
                style={
                  {
                    // transitionDelay: loading ? "800ms" : "0ms",
                  }
                }
                unmountOnExit
              >
                <CircularProgress
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
                    animationDuration: "1330ms",
                    position: "absolute",
                    left: "30px",
                    transitionDelay: loading ? "800ms" : "0ms",
                  }}
                />
              </Fade>
              Create Account{" "}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link variant="body2" href="/" sx={{}}>
                  "Do you have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Signup;
