import React from 'react';
import { FaCar, FaDoorOpen } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import carimage from '../../Assets/image2.png';
import './Mainpagecarcard.css';

const cars = [
  {
    name: "Toyota Corolla",
    Image: carimage,
    doors: 4,
    passengers: 5,
    price: "$50 /Per Day"
  },
  {
    name: "Honda Civic",
    Image: carimage,
    doors: 4,
    passengers: 5,
    price: "$55 /Per Day"
  },
  {
    name: "Ford Mustang",
    Image: carimage,
    doors: 2,
    passengers: 4,
    price: "$80 /Per Day"
  },
  {
    name: "Chevrolet Camaro",
    Image: carimage,
    doors: 2,
    passengers: 4,
    price: "$85 /Per Day"
  }
];

const MainPageCard = () => {
  const navigate = useNavigate();

  const handleBookClick = (car) => {
    navigate('/bookingcar', { state: { car } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="car-cards-container">
      {cars.map((car, index) => (
        <div key={index} className="car-card">
          <img className="car-image" src={car.Image} alt={car.name} />
          <div className="car-type">
            <span>{car.name}</span>
          </div>
          <div className="car-details">
            <div className="detail-item">
              <FaDoorOpen className="icon" style={{color:'#2d74ba'}}/>
              <span>{car.doors} Doors</span>
            </div>
            <div className="detail-item">
              <FaCar className="icon" style={{color:'#2d74ba'}}/>
              <span>{car.passengers} Passengers</span>
            </div>
          </div>
          <hr className="separator" />
          <div className="price-container">
            <span className="price">{car.price}</span>
            <div className="book-button" onClick={() => handleBookClick(car)}>
              <span className="book-text">Book</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPageCard;
