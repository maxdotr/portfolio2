import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './ProjectHeader.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectHeader = () => {
  return (
    <Container className='mx-auto'>
      <h1 className={`mx-auto ${classes.projectHeaderText}`}>
        Some of my stuff:
      </h1>
    </Container>
  );
};

export default ProjectHeader;
