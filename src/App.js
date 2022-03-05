import "./App.css";
import Container from '@mui/material/Container';
import Headerhome from "./components/Header-home";
import Bodyhome from "./components/Body-home";
import Buttonhome from "./components/Button-home";
import Produkhome from "./components/Produk-home";


export default function App() {
  return (
    <Container maxWidth="xs" className="Container">
      <Headerhome />
      <Bodyhome />
      <Buttonhome />
      <Produkhome />
    </Container>
 
  );
}