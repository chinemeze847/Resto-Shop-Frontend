import React, { useEffect, useState } from 'react'
import FoodCard from '../../components/Foodcard/Foodcard';
import FoodItemDetails from '../../components/FoodItemDetails/FoodItemDetails';

interface FoodItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    more_details: string; 
}
  
  const Menu: React.FC = () => {
    const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
    const [selectedFoodItem, setSelectedFoodItem] = useState<FoodItem | null>(null); // State for selected food item
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/food-items/')
        .then((response) => response.json())
        .then((data) => setFoodItems(data))
        .catch((error) => console.error('Error fetching food items:', error));
    }, []);
  
    // Handle card click to fetch more details
    const handleCardClick = (id: number) => {
      fetch(`http://127.0.0.1:8000/api/food-items/${id}/`)
        .then((response) => response.json())
        .then((data) => setSelectedFoodItem(data))
        .catch((error) => console.error('Error fetching food item details:', error));
    };
  
    return (
      <div>
        <div className="food-cards-container">
          {foodItems.map((item) => (
            <FoodCard key={item.id} item={item} onClick={() => handleCardClick(item.id)} />
          ))}
        </div>
  
        {/* Show more details when a card is selected */}
        {selectedFoodItem && (
          <FoodItemDetails item={selectedFoodItem} onClose={() => setSelectedFoodItem(null)} />
        )}
      </div>
    );
  };

export default Menu