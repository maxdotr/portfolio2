import Header from '../components/Header';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
    </React.Fragment>
  );
};

export default Home;
