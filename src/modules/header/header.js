import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { css } from "@emotion/css";
import colors from "../../theme/colors";
import Menu from "./menu";

const Header = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item>
        <img
          src={"/images/logo.svg"}
          className={css`
            padding: 32px;
            font-size: 24px;
            color: ${colors.white};
          `}
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
