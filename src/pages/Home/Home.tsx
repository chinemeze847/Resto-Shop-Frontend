
// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Restaurant Shop</h1>
          <p>Your favorite spot for delicious and freshly prepared meals. Dine, relax, and enjoy every bite!</p>
          <a href="/menu" className="cta-button">Explore Our Menu</a>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="features-section">
        <h2>What Makes Us Special</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src="https://eze-bucket.s3.amazonaws.com/feature-quality.png" alt="Quality Ingredients" />
            <h3>Quality Ingredients</h3>
            <p>We only use the freshest and finest ingredients to create dishes bursting with flavor.</p>
          </div>
          <div className="feature-item">
            <img src="https://eze-bucket.s3.amazonaws.com/feature-ambiance.png" alt="Cozy Ambiance" />
            <h3>Cozy Ambiance</h3>
            <p>Enjoy a warm and inviting atmosphere perfect for family gatherings or date nights.</p>
          </div>
          <div className="feature-item">
            <img src="https://eze-bucket.s3.amazonaws.com/feature-service.png" alt="Exceptional Service" />
            <h3>Exceptional Service</h3>
            <p>Our friendly staff is committed to making your dining experience unforgettable.</p>
          </div>
        </div>
      </section>

      <section className="featured-dishes-section">
        <h2>Featured Dishes</h2>
        <div className="dishes-grid">
          <div className="dish-item">
            <img src="https://eze-bucket.s3.amazonaws.com/dish-1.jpg" alt="Grilled Steak" />
            <h3>Grilled Steak</h3>
            <p>Juicy, perfectly grilled steak served with roasted vegetables and our signature sauce.</p>
          </div>
          <div className="dish-item">
            <img src="https://eze-bucket.s3.amazonaws.com/dish-2.jpg" alt="Pasta Carbonara" />
            <h3>Pasta Carbonara</h3>
            <p>Creamy, cheesy pasta with a hint of garlic, topped with crispy pancetta.</p>
          </div>
          <div className="dish-item">
            <img src="https://eze-bucket.s3.amazonaws.com/dish-3.jpg" alt="Chocolate Lava Cake" />
            <h3>Chocolate Lava Cake</h3>
            <p>Indulge in this rich and gooey chocolate dessert, served with vanilla ice cream.</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <blockquote>
            <p>"The food was amazing, and the ambiance made the experience even better! Can't wait to come back."</p>
            <cite>- Sarah J.</cite>
          </blockquote>
          <blockquote>
            <p>"Best steak I've ever had! The service was top-notch, and the atmosphere was so cozy and welcoming."</p>
            <cite>- Mark T.</cite>
          </blockquote>
          <blockquote>
            <p>"The desserts are to die for! If you're a foodie like me, this place is a must-visit."</p>
            <cite>- Emily R.</cite>
          </blockquote>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Experience Culinary Excellence?</h2>
        <p>Book a table or order online for a delightful dining experience at Restaurant Shop.</p>
        <div className="cta-buttons">
          <a href="/reservation" className="cta-button">Reserve a Table</a>
          <a href="/order" className="cta-button">Order Online</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
