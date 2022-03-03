import React from 'react'
import { Grid, Typography } from "@material-ui/core";

const NavbarComponent = () => {
  return (
    <Grid container item xs={12}>
       <Typography style={{ fontSize: 13, fontWeight: 700 }}>
          Informasi Terbaru
        </Typography>
    </Grid>

  )
}

export default NavbarComponent