import React from 'react';


interface FoodCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  };
  onClick: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onClick }) => {
  return (
    <div className="food-card" onClick={onClick}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className='price'>Price: {item.price}</p>
      <button className='purchase-button'>Purchase</button>
    </div>
  );
};

export default FoodCard;

