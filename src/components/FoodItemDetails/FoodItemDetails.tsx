import React from 'react';
import './FoodItemDetails.css';

interface FoodItemDetailsProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    more_details: string;
  };
  onClose: () => void;
}

const FoodItemDetails: React.FC<FoodItemDetailsProps> = ({ item, onClose }) => {
    return (
      <div className="food-item-details">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p className='price'>{item.price}</p>
          <p className='more-details'>{item.more_details}</p>
        </div>
      </div>
    );
  };

export default FoodItemDetails;
