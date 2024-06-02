import {
  AlertTitle,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Fade,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
import GetUsers from "../../api/get-user/get";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router";

function Signin() {
  const navigate = useNavigate();
  const [isToastSuccess, setIsToastSuccess] = useState(false);
  const [isToastError, setIsToastError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSignUpClick(e: any) {
    e.preventDefault();
    setIsToastError(false);

    console.log(e.target);
    const { password, email } = e.target;
    GetUsers().then((users) => {
      console.log(users);
      const findUser = users.find(
        (user) => user.email === email.value && user.password === password.value
      );
      
      if (!(!!password.value || !!email.value)) {
        console.log("khalie");
      } else if (findUser) {
        setIsToastSuccess(true);
        setLoading(true);
        // setTimeout(() => navigate("/homee"), 3000);
      } else {
        console.log("nadare");
        setIsToastError(true);
      }
    });
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {/* TOAST */}
        <Box
          sx={{
            position: "absolute",
            right: "0",
            textAlign: "center",
          }}
        >
          {/* TOAST SUCCESS  */}
          {isToastSuccess && (
            <Fade in={isToastSuccess} timeout={1000}>
              <Alert
                sx={{ top: "10px", right: "10px" , mt:2 , mr:2 }}
                variant="filled"
                severity="success"
              >
                <AlertTitle>Success</AlertTitle>
                This is a filled success Alert.
              </Alert>
            </Fade>
          )}

          {/* TOAST ERROR INCORRECT */}
          {isToastError && (
            <Fade in={isToastError} timeout={1000}>
              <Alert
                sx={{ top: "10px", right: "10px" , mt:2 , mr:2 }}
                variant="filled"
                severity="error"
              >
                <AlertTitle>error</AlertTitle>
                This is a filled error Alert.
              </Alert>
            </Fade>
          )}
        </Box>

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
          }}
        >
          <source src="./src/assets/images/rainy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box sx={{ width: "30%", pl: "50px" }}>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{}}>
              Sign in
            </Typography>
            <Box
              component="form"
              sx={{}}
              onSubmit={(e) => handleSignUpClick(e)}
            >
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
                sx={{}}
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, py: 2 }}
              >
                {" "}
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
                Sign In
              </Button>

              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="?mode=signup" variant="body2" sx={{}}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Signin;

// import React, { useState } from "react";
// import {
//   Alert,
//   AlertTitle,
//   Avatar,
//   Box,
//   Button,
//   CircularProgress,
//   CssBaseline,
//   Fade,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Link from "@mui/material/Link";
// import GetUsers from "../../api/get-user/get";

// function Signin() {
//   const [isToastSuccess, setIsToastSuccess] = useState(false);
//   const [isToastError, setIsToastError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSignUpClick = (e) => {
//     e.preventDefault();
//     setIsToastError(false);

//     const { password, email } = e.target;
//     GetUsers().then((users) => {
//       const findUser = users.find(
//         (user) => user.email === email.value && user.password === password.value
//       );
//       if (!(password.value || email.value)) {
//         console.log("khalie");
//       } else if (findUser) {
//         setIsToastSuccess(true);
//         setLoading(true);
//         // setTimeout(() => navigate("/homee"), 3000);
//       } else {
//         console.log("nadare");
//         setIsToastError(true);
//       }
//     });
//   };

//   return (
//   <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         position: "relative",
//       }}
//     >
//       {isToastSuccess && (
//         <Fade in={isToastSuccess} timeout={1000}>
//           <Alert sx={{ position: "absolute", top: "10px", right: "10px" }} variant="filled" severity="success">
//             <AlertTitle>Success</AlertTitle>
//             This is a filled success Alert.
//           </Alert>
//         </Fade>)
//       }

//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: -1,
//         }}
//       >
//         <source src="./src/assets/images/rainy.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <Box sx={{ width: "30%", paddingLeft: "50px" }}>
//         {isToastError && (
//           <Alert sx={{ position: "absolute", bottom: 0, right: 0 }} variant="filled" severity="error">
//             <AlertTitle>Error</AlertTitle>
//             This is a filled error Alert.
//           </Alert>
//         )}

//         <CssBaseline />
//         <Paper sx={{ marginTop: 10, padding: 2, borderRadius: 3, display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "primary.contrastText" }}>
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" sx={{}} onSubmit={handleSignUpClick}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               variant="filled"
//               autoFocus
//               sx={{ background: "main", color: "primary.contrastText" }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               variant="filled"
//               sx={{}}
//               id="password"
//               autoComplete="current-password"
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2, py: 2 }}>
//               <Fade in={loading}>
//                 <CircularProgress
//                   sx={{
//                     color: (theme) => (theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"),
//                     animationDuration: "1330ms",
//                     position: "absolute",
//                     left: "30px",
//                   }}
//                 />
//               </Fade>
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs />
//               <Grid item>
//                 <Link href="?mode=signup" variant="body2">
//                   Don't have an account? Sign Up
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   );
// }

// export default Signin;
