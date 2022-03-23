import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import classes from './ProjectCards.module.css';
import cardImg1 from '../../imgs/card1.png';
import cardImg2 from '../../imgs/card2.png';
import cardImg3 from '../../imgs/card3.png';
import cardImg4 from '../../imgs/card4.png';
import cardImg5 from '../../imgs/card5.png';
import cardImg6 from '../../imgs/card6.png';
import cardImg7 from '../../imgs/card7.png';
import cardImg8 from '../../imgs/card8.png';
import cardImg9 from '../../imgs/card9.png';

const cardImage1 = cardImg1;
const cardImage2 = cardImg2;
const cardImage3 = cardImg3;
const cardImage4 = cardImg4;
const cardImage5 = cardImg5;
const cardImage6 = cardImg6;
const cardImage7 = cardImg7;
const cardImage8 = cardImg8;
const cardImage9 = cardImg9;

const cards = [
  {
    key: 1,
    src: cardImage1,
    title: 'React Meetups',
    description: 'Creating a pseudo social media using React and MongoDB.',
    class: 'projImg',
  },
  {
    key: 2,
    src: cardImage2,
    title: 'User Meetups',
    description:
      'A site where users can securely create custom user profiles and post things to their page. Using React, mongodb, React-Auth and more.',
    class: 'projImg',
  },
  {
    key: 3,
    src: cardImage3,
    title: 'Eccomerce Demo',
    description:
      'A site where users can purchase items that admins can easily add to the site. Uses React, MongoDB, Redux and more.',
    class: 'projImg',
  },
  {
    key: 4,
    src: cardImage4,
    title: 'React Auth',
    description:
      'A site demo-ing secure login through React-Redux and MongoDB.',
    class: 'projImg',
  },
  {
    key: 5,
    src: cardImage5,
    title: 'Food Ordering Site',
    description:
      'Users can easily order their favorite foods with a few clicks. Uses React, React-Redux, and MongoDB.',
    class: 'projImg',
  },
  {
    key: 6,
    src: cardImage6,
    title: 'Bootstrap Demo',
    description:
      'This site is styled with Bootstrap, for a upbeat and clean look.',
    class: 'projImg',
  },
  {
    key: 7,
    src: cardImage7,
    title: 'Vanilla JS Demo',
    description:
      'Uses nothing but vanilla JS, CSS, and HTML to create a fun typing test for users.',
    class: 'projImg',
  },
  {
    key: 8,
    src: cardImage8,
    title: 'PHP Demo',
    description:
      'Uses PHP for secure connection to a backend database for a safe user experience.',
    class: 'projImg',
  },
  {
    key: 9,
    src: cardImage9,
    title: 'More Bootstrap',
    description:
      'Uses Bootstrap to style for a very clean looking restaurant website.',
    class: 'projImg',
  },
];

const ProjectCards = () => {
  return (
    <Container>
      <Row className='mx-auto'>
        {cards.map((card) => (
          <div className='col-lg-4 col-12'>
            <Card className={classes.projCard}>
              <Card.Img
                variant='top'
                src={card.src}
                className={classes.projImg}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant='primary'></Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCards;
