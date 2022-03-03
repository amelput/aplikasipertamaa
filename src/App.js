import './App.css';
// import NavbarComponent from './components/NavbarComponent';
import {Typography, InputBase} from'@material-ui/core';
import Container from '@mui/material/Container';
import icon from './image/iconn.png';
import icon1 from './image/iconn1.png';
import icon2 from './image/iconn2.png';
// import {Link, animatedScroll as Scroll} from "react-scroll";

const App = () => {
  return (
    <div className="bgcolor">
    <Container maxWidth="xs" style={{maxWidth: 444, backgroundColor: "white", paddingBottom : "80px"}}className="Container">
      <div className="App">
      <header > 
        <Typography style={{fontSize: 10, fontWeight: 'bold', color: "#808080", fontFamily: "Roboto"}}>
         Kamu berbelanja di
        </Typography>
        <div style={{display:'flex', alignItems: "center", marginTop: 5}}>
          <img src={icon} alt="icon" style={{widht: 15, height: 15}}></img>
          <Typography style={{ fontSize: 11, color: "black", fontWeight: 'bold', marginLeft : 5, fontFamily: "Roboto"}}>
            Freshvo Cilandak (Jabodetabek)
          </Typography>
            <div style={{marginLeft: 155}}>
            <Typography style={{ fontSize: 10, color: "#6495ED"}}>
              Ubah
            </Typography>
            </div>
            <div style={{marginLeft : 5}}>
              <img src={icon1} alt="icon2" style={{widht: 20, height: 20}}></img>
            </div>
              <div style={{paddingRight: 210, paddingLeft: 10 ,marginTop: 100, backgroundColor: '#f0f0f0', borderRadius: 20, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={icon2} alt="icon2" style={{widht: 20, height: 20, marginLeft: 5}}></img>
            <InputBase style={{paddingBottom : 10, paddingTop: 10, fontSize: 12, fontFamily: "Roboto", marginLeft: 10}}placeholder="Cari produk.."/>
            </div>
            </div>
        
      </header>
      </div>
    </Container>
    </div>
  );
}

export default App;
