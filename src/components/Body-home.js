import React from 'react';
import "./Body-home.css";
import {Box, Typography} from'@material-ui/core';


const Bodyhome =()=> {
    return(
      <Box clone style={{minWidth: 444,backgroundColor : 'grey', justifyContent:'center'}}>
        <body>
            <div>
                <Typography style={{fontSize: 13, fontFamily: 'Roboto'}}>Informasi Terbaru</Typography>
                <Typography style={{ color: 'grey', fontSize: 11, fontFamily: 'Roboto'}}>Informasi terbaru hanya untukmu!</Typography>
            </div>
        </body>
        </Box>
    )
}
export default Bodyhome;