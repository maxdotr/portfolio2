import react from 'react';
import computerIcon from '../imgs/tic-computer.svg';
import classes from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Link to='/' style={{ color: '#B6B6B8' }}>
          Max Rodgers
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={classes.item}>
            <Link
              to='/projects'
              style={{ color: '#B6B6B8' }}
              className={classes.item}
            >
              Projects
            </Link>
            <Link
              to='/contact'
              style={{ color: '#B6B6B8' }}
              className={classes.item}
            >
              Contact me!
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
};

export default NavBar;
