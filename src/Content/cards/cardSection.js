import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './cards.css';
import { Link } from 'react-router-dom';

function CardsSection({ cardsData }) {
    return (
        <div className="cards-section">
{cardsData.map((card) => (

<Card className="custom-card">
<Card.Img variant="top" src={require('../../imge/cards5.jpg')} />
<Card.Body>
<Link to="#"><Card.Text>{card.text}</Card.Text></Link>
<Card.Text>{card.price}</Card.Text>
<div className='camper'><Button variant="primary">اضف الى العربة</Button></div>
</Card.Body>
</Card>
))}
</div>
);
}

export default CardsSection;
