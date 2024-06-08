// import { Login } from "@mui/icons-material";
// import { Box, Button, ImageList, TextField } from "@mui/material";
// import React from "react";
// import logoo from "../../assets/images/logoo.png";
// function Header() {
//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to right bottom, #786a88, #4c34dd)",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         px: "20px",
//       }}
//     >
//       <Box>
//         <ImageList sx={{ width: "100px" }}>
//           <img src={logoo} alt="" />
//         </ImageList>
//       </Box>{" "}
//       {/*search input  */}
//       <Box>
//         <TextField
//           InputLabelProps={{ style: { color: "#fff" } }}
//           InputProps={{
//             style: { color: "primary.main" },
//           }}
//           id="filled-search"
//           label="Search places or city..."
//           type="search"
//           variant="filled"
//           sx={{
//             bgcolor: "primary.contrastText",

//             width:'500px',
//             borderTopLeftRadius: 20,
//             borderBottomLeftRadius: 20,
//           }}
//           // onChange={valueInput}
//         ></TextField>
//         <Button
//           variant="contained"
//           sx={{
//             height: "56px",
//             borderRadius: 0,
//             borderTopRightRadius: 20,
//             borderBottomRightRadius: 20,
//           }}
//           // onClick={searchTemp}
//         >
//           Contained
//         </Button>
//       </Box>


//       <Box sx={{bgcolor:"primary.main" , borderRadius:'10px ', height:'1'  , width:"56"}}>
//         <Login />
//       </Box>
//     </Box>
//   );
// }

// export default Header;







// import { Login } from "@mui/icons-material";
// import { Box, Button, ImageList, TextField } from "@mui/material";
// import React from "react";
// import logoo from "../../assets/images/logoo.png";

// function Header() {
//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to right bottom, #786a88, #4c34dd)",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         px: "20px",
//         height:"80px"
//       }}
//     >
//       <Box>
//         <ImageList sx={{ width: "100px" }}>
//           <img src={logoo} alt="" />
//         </ImageList>
//       </Box>


//       {/* <Box sx={{ display: "flex", alignItems: "center" }}>
//         <TextField
//           InputLabelProps={{ style: { color: "#fff" } }}
//           InputProps={{
//             style: { color: "primary.main" },
//           }}
//           id="filled-search"
//           label="Search places or city..."
//           type="search"
//           variant="filled"
//           sx={{
//             bgcolor: "primary.contrastText",
//             width: '500px',
//             borderTopLeftRadius: 20,
//             borderBottomLeftRadius: 20,
//           }}
//         ></TextField>
//         <Button
//           variant="contained"
//           sx={{
//             height:"1",
//             borderRadius: 0,
//             borderTopRightRadius: 20,
//             borderBottomRightRadius: 20,
//           }}
//         >
//           Contained
//         </Button>
//       </Box> */}

// <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
     
//      <TextField
//        InputLabelProps={{ style: { color: "#fff" } }}
//        InputProps={{
//          style: { color: "primary.main" },
//        }}
//        id="filled-search"
//        label="Search places or city..."
//        type="search"
//        variant="filled"
//        sx={{
//          bgcolor: "primary.contrastText",
//          width: '500px',
//          borderTopLeftRadius: 20,
//          borderBottomLeftRadius: 20,
//          height: "1",
//        }}
//      ></TextField>
//         <Button
//        variant="contained"
//        sx={{
//          borderRadius: 0,
//          borderTopRightRadius: 20,
//          borderBottomRightRadius: 20,
//          height: "100%",
//        }}
//      >
//        Contained
//      </Button>
//    </Box>

//       <Box
//         sx={{
//           bgcolor: "primary.main",
  
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Login />
//       </Box>
//     </Box>
//   );
// }

// export default Header;




import { Login } from "@mui/icons-material";
import { Box, Button, ImageList, TextField } from "@mui/material";
import React from "react";
import logoo from "../../assets/images/logoo.png";

function Header() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right bottom, #786a88, #4c34dd)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "20px",
        height: "50px", // Set the height of the header
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
          // InputProps={{
          //   style: { color: "primary.main" },
          // }}
          id="filled-search"
          label="Search places or city..."
          type="search"
          variant="filled"
          sx={{
            bgcolor: "primary.contrastText",
            width: '700px',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            height: "100%",
          }}
        ></TextField>
           <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            height: "100%",
          }}
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
          borderRadius: "50%", // Set border radius to full (50%)
          height: "100%",
          width:"50px"
        }}
      >
        <Login />
      </Box>
    </Box>
  );
}

export default Header;