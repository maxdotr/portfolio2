import react from 'react';
import computerIcon from '../imgs/tic-computer.svg';
import classes from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home' style={{ color: '#E9E9EB' }}>
          Max Rodgers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={classes.item}>
            <Nav.Link
              href='#home'
              style={{ color: '#B6B6B8' }}
              className={classes.item}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href='#link'
              style={{ color: '#B6B6B8' }}
              className={classes.item}
            >
              Contact me!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
