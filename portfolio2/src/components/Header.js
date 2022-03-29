import React from 'react';
import classes from './Header.module.css';
import me from '../imgs/me.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className='container-fluid'>
      <Row>
        <Col className='col-lg-6 col-12'>
          <h1 className={classes.header}>
            <b>Max Rodgers</b> is a full stack developer creating web
            applications for <b>you</b>.
          </h1>
        </Col>
        <Col className='col-lg-6 col-12'>
          <Card className={`border-dark ${classes.cardBody}`}>
            <Card.Img variant='top' src={me} className={classes.cardImg} />
            <Card.Body>
              <Card.Title className={classes.cardTitleText}></Card.Title>
              <Card.Text className={classes.cardBodyText}>
                Experienced in a multitude of langugages, frameworks, and API's.
              </Card.Text>
              <Link to='/projects'>
                <Button
                  variant='primary'
                  className={`btn-success ${classes.cardButton}`}
                >
                  See what I can do {'>>'}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
};

export default Header;
