import React from 'react'
import "./Header-home.css";
import {Typography, InputBase, Box} from'@material-ui/core';
import icon from '../image/iconn.png';
import icon1 from '../image/iconn1.png';
import icon2 from '../image/iconn2.png';

const Headerhome = () => {
  return (
    <Box>
    <header className="kotak">
      <div>
        <Typography style={{
          fontSize: 10, 
          fontWeight: 'bold', 
          color: "#808080", 
          fontFamily: "Roboto"
          }}>
            Kamu berbelanja di
          </Typography>
      </div>
      <div className="justify-between-center">
        <div className="align-center">
          <div>
            <img src={icon} alt="icon" style={{widht: 15, height: 15}}></img>
          </div>
          <div style={{ marginLeft: 8}}>
            <Typography style={{ 
              fontSize: 11, 
              color: "black", 
              fontWeight: 'bold', 
              fontFamily: "Roboto"
              }}>
                Freshvo Cilandak (Jabodetabek)
            </Typography>
          </div>
        </div>
        <div className="align-center">
          <div>
            <Typography style={{ fontSize: 10, color: "#6495ED"}}>
              Ubah
            </Typography>
          </div>
          <div style={{ marginLeft: 8 }}>
            <img src={icon1} alt="icon1" style={{widht: 8, height: 15}}></img>
          </div>
        </div>
      </div>
      <div>
        <div style={{backgroundColor: '#f0f0f0',borderRadius: 25, marginTop: 10, paddingTop: 10, paddingBottom: 10}}>
          <div style={{marginLeft: 5}}>
          <img src={icon2} 
          alt="icon2" 
          style={{widht: 15, height: 15, marginLeft: 5}}>
          </img>
          <InputBase style={{fontSize: 12, fontFamily: "Roboto", marginLeft: 10}}placeholder="Cari produk.."/>
        </div>
        </div>
      </div>
    </header>
    </Box>
  )
}

export default Headerhome;