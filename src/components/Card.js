import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ name, description, price, imgSrc, productId }) {
  // Use the productId as the route parameter
  const productLink = `/product/${productId}`;

  return (
      <Card className="product-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} /> {/* Replace with the image URL */}
        <Card.Body  style={{ backgroundColor: '#2F302C' , color: 'white' }} >
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <b>{description}</b></Card.Text>
          <Card.Text> <b>Price: {price}</b></Card.Text>
          <Button variant="primary" style={{ backgroundColor: 'rgb(0, 225, 255)', color: 'white' }}>
  Add to Cart
</Button>

        </Card.Body>
      </Card>
  );
}

export default BasicExample;
