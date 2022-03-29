import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';
import classes from './ContactMe.module.css';
import { Outlet, Link } from 'react-router-dom';

const ContactMe = () => {
  return (
    <Container className={`p-5 ${classes.contactContainer}`}>
      <h1>Like what you see?</h1>
      <br />
      <br />
      <h3>
        <i>
          <b>Lets get to work.</b>
        </i>
      </h3>
      <Container>
        <Row className={`p-5 mx-auto`}>
          <Col className={`col-lg-6 col-12 mx-auto`}>
            <Container className={`m-5 p-2`}>
              <Card>
                <h5 className={`card-title ${classes.cardTitle} m-1`}>
                  Call/Text
                </h5>
                <b className='mx-auto'>
                  <p className={`card-text ${classes.cardText} mx-auto`}>
                    1 (916) 280-4533
                  </p>
                </b>
                <br />
                <br />
                <Button variant='outline-dark' className='btn-outline-dark m-5'>
                  Copy to clipboard!
                </Button>
              </Card>
            </Container>
          </Col>
          <Col className={`col-lg-6 col-12 mx-auto`}>
            <Container className={`m-5 p-2`}>
              <Card>
                <h5 className={`card-title ${classes.cardTitle} m-1`}>
                  Email me!
                </h5>
                <b className='mx-auto'>
                  <p className={`card-text ${classes.cardText} mx-auto m-1`}>
                    maxdotrodgers@gmail.com
                  </p>
                </b>
                <br />
                <br />
                <Button variant='outline-dark' className='btn-outline-dark m-5'>
                  Copy to clipboard!
                </Button>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactMe;
