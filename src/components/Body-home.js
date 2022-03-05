import React from 'react';
import "./Body-home.css";
import {Typography, Box,} from '@material-ui/core';
import Carousel from "./Carousel";



const Bodyhome =()=> {
    return(
        <Box className="garis">
            <body style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20, marginTop: 5, paddingBottom: 100}}>
                <div>
                    <Typography style={{fontSize: 13, fontWeight:'bold', fontFamily: 'Roboto'}}>Informasi Terbaru</Typography>
                    <Typography style={{ color: 'grey', fontSize: 10, fontFamily: 'Roboto'}}>Informasi terbaru hanya untukmu!</Typography>
                </div>
                <Carousel/> 
            </body>
            
        </Box>
 
    )
}
export default Bodyhome;