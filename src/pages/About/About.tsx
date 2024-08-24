import React from 'react';
import './About.css'; 
import chef1Image from '../../assets/chef_1.jpg'; 
import chef2Image from '../../assets/chef_2.jpg';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Our Restaurant</h1>
        <p>
          Welcome to <strong>Restaurant Shop</strong>, where culinary excellence meets an unforgettable dining experience.
          Our mission is to serve delicious and remarkable food that meets the highest standards of quality, freshness, and
          seasonality. Every dish is crafted with passion and care to ensure that each bite delights your taste buds.
        </p>
      </section>

      <section className="about-history">
        <h2>Our Story</h2>
        <p>
          Our journey began in 2010 with a small, family-owned eatery that quickly became a favorite among locals.
          With a commitment to quality, fresh ingredients, and authentic flavors, we expanded our vision and grew into the
          well-loved restaurant we are today. Our legacy of fine dining, warm hospitality, and attention to detail
          continues to thrive, and we remain dedicated to offering an experience that is both memorable and unique.
        </p>
      </section>

      <section className="about-chefs">
        <h2>Meet Our Chefs</h2>
        <p>
          Our talented team of chefs brings together years of culinary expertise from around the world. From traditional
          Italian dishes to innovative fusion cuisine, our chefs are constantly exploring new flavors and techniques to
          bring you the best. Each dish is carefully prepared, reflecting our love for food and dedication to excellence.
        </p>
        <div className="chef-profiles">
          <div className="chef">
            <img src={chef1Image} alt="Chef John Doe" />
            <h3>Chef John Doe</h3>
            <p>Head Chef</p>
          </div>
          <div className="chef">
            <img src={chef2Image} alt="Chef Jane Smith" />
            <h3>Chef Jane Smith</h3>
            <p>Pastry Specialist</p>
          </div>
        </div>
      </section>

      <section className="about-ethos">
        <h2>Our Ethos</h2>
        <p>
          At <strong>Restaurant Shop</strong>, we believe in sustainability, local sourcing, and community involvement.
          We work closely with local farmers and suppliers to ensure that we use only the freshest and most responsibly
          sourced ingredients. Our commitment to ethical practices extends beyond the kitchen; we strive to create a
          welcoming and inclusive environment where everyone can enjoy a great meal.
        </p>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is simple: to be the go-to destination for food lovers seeking an exceptional culinary experience.
          We aim to set the standard for quality dining by offering innovative dishes, impeccable service, and a cozy
          ambiance that keeps our customers coming back for more.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Quality:</strong> We never compromise on the quality of our ingredients or the attention to detail in our dishes.</li>
          <li><strong>Community:</strong> We are dedicated to giving back and supporting the community that has supported us.</li>
          <li><strong>Innovation:</strong> We constantly evolve our menu, exploring new trends while honoring classic recipes.</li>
          <li><strong>Customer Satisfaction:</strong> Our guests are our priority, and we strive to create an enjoyable experience every time.</li>
        </ul>
      </section>

      <section className="about-testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "Restaurant Shop is my go-to place for special occasions. The food is always incredible, and the atmosphere is
          perfect. Highly recommend!"
        </blockquote>
        <blockquote>
          "I’ve tried almost everything on the menu, and it’s hard to pick a favorite. Every dish is prepared with care and
          tastes amazing."
        </blockquote>
      </section>

      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Whether you’re planning an event, have a special request, or simply want to share your thoughts, we’d love to
          hear from you. Feel free to reach out to us via our <a href="/contact">Contact Page</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
