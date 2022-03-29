import React from 'react';
import NavBar from '../components/Navbar';
import ProjectDetails from '../components/proj/ProjectDetails';
import { Routes, Route, useParams, Outlet } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../imgs/card2.png';
const ProjectDetailsPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ProjectDetails />
    </React.Fragment>
  );
};

export default ProjectDetailsPage;
