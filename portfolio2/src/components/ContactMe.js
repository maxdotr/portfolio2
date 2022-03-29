import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';
import classes from './ContactMe.module.css';
import { Outlet, Link } from 'react-router-dom';

const ContactMe = () => {
  return (
    <Container className={classes.contactContainer}>
      <h1>Like what you see?</h1>
      <br />
      <br />
      <h3>
        <i>
          <b>Lets get to work.</b>
        </i>
      </h3>
    </Container>
  );
};

export default ContactMe;
