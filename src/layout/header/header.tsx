import { Login } from "@mui/icons-material";
import { Box, ImageList } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right bottom, #786a88, #4c34dd)",
                display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px:"20px"
      }}
    >
      <Box>
        <ImageList sx={{width:"100px"}}>
          <img
            src="https://weathercloud.net/images/brand/logo/png/weathercloud-logo-original-square.png"
            alt=""
          />
        </ImageList>
      </Box>
      <Box>

        <Login />
      </Box>
    </Box>
  );
}

export default Header;
