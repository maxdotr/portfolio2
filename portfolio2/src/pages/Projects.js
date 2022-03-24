import Header from '../components/Header';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import ProjModal from '../components/proj/ProjModal';
import ProjectCards from '../components/proj/ProjectCards';
import React from 'react';

const Projects = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ProjectCards />
    </React.Fragment>
  );
};

export default Projects;
