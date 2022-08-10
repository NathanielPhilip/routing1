import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
      <Link className="nav" to="/">
					Home
				</Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link className="nav" to="/Contact">
					Contact
				</Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link className="nav" to="/Services">
					Services
				</Link>
      </Nav.Item>
      <Link className="nav" to="/About">
					About
				</Link>
    </Nav>
  );
}


export default Navbars;