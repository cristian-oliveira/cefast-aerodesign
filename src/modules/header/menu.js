import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { css } from "@emotion/css";

const MENU_LIST = ["LOREM", "LOREM", "LOREM", "LOREM"];

const Menu = () => {
  return (
    <Grid container spacing={5}>
      {MENU_LIST.map((item, index) => (
        <Grid item key={index}>
          <span>{item}</span>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
