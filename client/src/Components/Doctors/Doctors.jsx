import React from "react";
import "./Doctors.css";
import carimage from '../../Assets/image.jpg';

const rooms = [
  {
    name: "Gem",
    price: "$200",
    bedType: "King Beds",
    stars: 5,
    discount: false,
    originalPrice: null,
    img: carimage
  },
  {
    name: "Alica",
    price: "$150",
    originalPrice: "$189",
    bedType: "Doctor",
    stars: 4.5,
    discount: true,
    img: carimage
  },
  {
    name: "JHenry",
    price: "$79",
    bedType: "Doctor",
    stars: 4.5,
    discount: false,
    originalPrice: null,
    img: carimage
  },
  {
    name: "Henry",
    price: "$90",
    bedType: "Doctor",
    stars: 4,
    discount: false,
    originalPrice: null,
    img: carimage
  }
];

const StarRating = ({ stars }) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;

  return (
    <div className="room-stars">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={i}>⭐</span>
      ))}
      {halfStar && <span>⭐</span>}
    </div>
  );
};

const RoomCard = ({ room }) => (
  <div className="room-card">
    <div className="room-img-wrapper">
      <img src={room.img} alt={room.name} className="room-img" />
      {room.discount && <div className="room-badge">20% OFF</div>}
    </div>
    <div className="room-info">
      <h2 className="room-title">{room.name}</h2>
      <StarRating stars={room.stars} />
      <p className="room-bed">{room.bedType}</p>
      <p className="room-price">
        From{" "}
        {room.originalPrice && (
          <span className="room-original-price">{room.originalPrice}</span>
        )}
        {room.price}
      </p>
    </div>
  </div>
);

export default function RoomsList() {
  return (
    <div className="room-container">
      <h1 className="room-heading">
      Top<span className="room-highlight"> Veterinarian</span>
      </h1>
      <div className="room-card-container">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
      <a href="#" className="link">
          All Veterinarian <span className="arrow">→</span>
        </a>
    </div>
  );
}
