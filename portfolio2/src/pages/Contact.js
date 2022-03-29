import Header from '../components/Header';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import ContactMe from '../components/ContactMe';
import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ContactMe />
    </React.Fragment>
  );
};

export default Contact;
