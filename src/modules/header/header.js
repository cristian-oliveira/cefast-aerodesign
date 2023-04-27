import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Menu from "./menu";

const Header = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item>
        <img
          src={"/images/logo.svg"}
          className={
            padding: 32px;
            font-size: 24px;
         }
          alt="logo"
        />
      </Grid>
      <Grid item>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default Header;
