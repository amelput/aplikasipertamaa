import "./App.css";
import Container from '@mui/material/Container';
// import {Box} from'@material-ui/core';
import Headerhome from "./components/Header-home";
import Bodyhome from "./components/Body-home";

export default function App() {
  return (
    <Container maxWidth="xs" className="Container">
      <Headerhome />
      <Bodyhome />
    </Container>
  );
}
