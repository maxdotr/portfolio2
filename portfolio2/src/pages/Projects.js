import Header from '../components/Header';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ProjectHeader from '../components/proj/ProjectHeader';
import NavBar from '../components/Navbar';
import ProjectCards from '../components/proj/ProjectCards';
import React from 'react';

const Projects = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ProjectHeader />
      <ProjectCards />
    </React.Fragment>
  );
};

export default Projects;
