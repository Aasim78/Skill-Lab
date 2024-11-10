import React from 'react';
import { Link } from 'react-router-dom';

// Import images at the top of the file
import chocolateCakeImage from '../images/chocolate-cake.jpg';
import fruitCakeImage from '../images/fruit-cake.jpg';
import customCakeImage from '../images/custom-cake.jpg';

function CakeCategory({ cake }) {
  // Dynamically select the image based on the cake's name or id
  let imageSrc;
  switch (cake.name) {
    case 'Chocolate Cake':
      imageSrc = chocolateCakeImage;
      break;
    case 'Fruit Cake':
      imageSrc = fruitCakeImage;
      break;
    case 'Custom Cake':
      imageSrc = customCakeImage;
      break;
    default:
      imageSrc = chocolateCakeImage; // Default image in case something goes wrong
  }

  return (
    <div className="cake-category">
      <img src={imageSrc} alt={cake.name} />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
      <Link to={`/cake-details/${cake.id}`}>View Details</Link>
    </div>
  );
}

export default CakeCategory;