import React from 'react';
import {Button, Box, Typography,} from '@material-ui/core';
import "./Button-home.css";
import button1 from '../image/button1.PNG';
import button2 from '../image/button2.PNG';
import button3 from '../image/button3.PNG';
import button4 from '../image/button4.PNG';
import button5 from '../image/button5.PNG';

const Buttonhome =()=> {
    return(
        <Box>
            <div style={{marginTop: 1, justifyContent:'center', display: 'flex', paddingTop: 20, paddingBottom: 5, paddingRight: 20, paddingLeft: 20}}>
            <div style={{border: '0.5px solid gainsboro', marginRight: 7, borderRadius: 10}}>
                <Button><img src={button1} alt="button1" style={{widht: 25, height: 43}}></img></Button>
            </div>
            <div style={{border: '0.5px solid gainsboro', marginRight: 7, borderRadius: 10}}>
                <Button><img src={button2} alt="button2" style={{widht: 25, height: 43}}></img></Button>
            </div>
            <div style={{border: '0.5px solid gainsboro', borderRadius: 10}}>
                <Button><img src={button3} alt="button3" style={{widht: 25, height: 43}}></img></Button>
            </div>
            <div style={{border: '0.5px solid gainsboro', marginLeft: 7, borderRadius: 10}}>
                <Button><img src={button4} alt="button4" style={{widht: 25, height: 43}}></img></Button>
            </div>
            <div style={{border: '0.5px solid gainsboro', marginLeft: 7, borderRadius: 10}}>
                <Button><img src={button5} alt="button5" style={{widht: 25, height: 43}}></img></Button>
            </div>
        </div>
        <div style={{marginTop: 1, justifyContent:'center', display: 'flex',paddingBottom: 20, paddingRight: 20, paddingLeft: 20}}>
            <div style={{marginRight: 20}}>
            <Typography style={{fontSize: 13 }}>Semua</Typography>
            </div>
            <div style={{marginLeft: 22}}>
            <Typography style={{fontSize: 13 }}>Buah</Typography>
            </div>
            <div style={{marginLeft:32}}>
            <Typography style={{fontSize: 13 }}>Sayuran</Typography>
            </div>
            <div style={{marginLeft: 26}}>
            <Typography style={{fontSize: 13 }}>Protein</Typography>
            </div>
            <div style={{marginLeft: 32}}>
            <Typography style={{fontSize: 13 }}>Bumbu</Typography>
            </div>
        </div>
                {/* <Grid className={classes.scrollingWrapper}>
                  {topSellers.map(item => {
                    return <Slider top={item} />;
                  })}
                  <Grid className={classes.sliderMarginEnd} />
                </Grid> */}
        </Box>
        
    )
}
export default Buttonhome;