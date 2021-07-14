import React, { useContext } from 'react'
import './header.css';
import { Navbar, Nav, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { FaRegUser } from 'react-icons/fa';
import UserContext from '../AppContext';  
import { useHistory } from 'react-router-dom';
function Header() {
  let history = useHistory();
  const [value, setValue] = useContext(UserContext);
  return (
    <div className="navbarBg">
      <Navbar>
        <Nav as={Link} to="/"  style={{ "color": "#E50914" ,"font-family":"Roboto","font-size":"30px"}}>Netchills</Nav>
        <Navbar.Collapse >
          <Nav>
            <Nav.Link as={Link} to="/movies" style={{ "color": "white","margin-left": "450px"}}>Movies</Nav.Link>
            <Nav.Link as={Link} to="/tvshows" style={{ "color": "white" }}>TV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/signup" style={{ "color": "white" }}>Create account</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/signin" style={{ "color": "white" }}>SignIn</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
};


export default Header;
