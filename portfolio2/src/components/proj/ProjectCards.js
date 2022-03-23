import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cardImg1 from '../../imgs/card1.png';
import cardImg2 from '../../imgs/card2.png';
import cardImg3 from '../../imgs/card3.png';
import cardImg4 from '../../imgs/card4.png';
import cardImg5 from '../../imgs/card5.png';
import cardImg6 from '../../imgs/card6.png';
import cardImg7 from '../../imgs/card7.png';
import cardImg8 from '../../imgs/card8.png';
import cardImg9 from '../../imgs/card9.png';

const card1 = {
  key: 1,
  src: { cardImg1 },
  title: 'React Meetups',
  description: 'Creating a pseudo social media using React and MongoDB.',
  class: 'projImg1',
};
const card2 = {
  key: 2,
  src: { cardImg2 },
  title: 'User Meetups',
  description:
    'A site where users can securely create custom user profiles and post things to their page. Using React, mongodb, React-Auth and more.',
  class: 'projImg2',
};
const card3 = {
  key: 3,
  src: { cardImg3 },
  title: 'Eccomerce Demo',
  description:
    'A site where users can purchase items that admins can easily add to the site. Uses React, MongoDB, Redux and more.',
  class: 'projImg3',
};
const card4 = {
  key: 4,
  src: { cardImg4 },
  title: 'React Auth',
  description: 'A site demo-ing secure login through React-Redux and MongoDB.',
  class: 'projImg4',
};
const card5 = {
  key: 5,
  src: { cardImg5 },
  title: 'Food Ordering Site',
  description:
    'Users can easily order their favorite foods with a few clicks. Uses React, React-Redux, and MongoDB.',
  class: 'projImg5',
};
const card6 = {
  key: 6,
  src: { cardImg6 },
  title: 'Bootstrap Demo',
  description:
    'This site is styled with Bootstrap, for a upbeat and clean look.',
  class: 'projImg6',
};
const card7 = {
  key: 7,
  src: { cardImg7 },
  title: 'Vanilla JS Demo',
  description:
    'Uses nothing but vanilla JS, CSS, and HTML to create a fun typing test for users.',
  class: 'projImg7',
};
const card8 = {
  key: 8,
  src: { cardImg8 },
  title: 'PHP Demo',
  description:
    'Uses PHP for secure connection to a backend database for a safe user experience.',
  class: 'projImg8',
};
const card9 = {
  key: 9,
  src: { cardImg9 },
  title: 'More Bootstrap',
  description:
    'Uses Bootstrap to style for a very clean looking restaurant website.',
  class: 'projImg9',
};

const ProjectCards = () => {
  return <React.Fragment></React.Fragment>;
};

export default ProjectCards;
