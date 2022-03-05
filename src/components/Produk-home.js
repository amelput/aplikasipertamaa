import React from 'react';
import {Grid, Typography} from '@material-ui/core';


const Produkhome =()=> {
    return(
        <Grid
    item
    xs={12}
    style={{
    display: "flex",
    flexDirection: "row",
    padding: "16px 16px 20px"
    }}>
    <Grid item xs={9}>
        <Typography style={{ fontSize: 13, fontWeight: 700 }}>
            Produk Pilihan
        </Typography>
        <Typography
            style={{
                fontSize: 10,
                fontWeight: 400,
                color: "#252525"
            }}>
            Produk pilihan terbaik, hanya untukmu!
        </Typography>
    </Grid>
    <Grid
        item
        xs={3}
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
        }}>
        <span style={{
                color: "#2F9CF1",
                fontSize: 10,
                fontWeight: "bold",
                cursor: "pointer"
        }}>
            Lihat Semua
        </span>
    </Grid>
</Grid>
    )
    
}

export default Produkhome;