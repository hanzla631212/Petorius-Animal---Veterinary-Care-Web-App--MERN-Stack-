import React from 'react';
import './Feed.css';
import { FaDog, FaFish, FaCat } from 'react-icons/fa';

const feedData = [
  {
    id: 1,
    petName: 'Buddy',
    petType: 'Dog',
    food: 'Chicken & Rice',
    time: 'Today, 9:00 AM',
    icon: <FaDog />,
  },
  {
    id: 2,
    petName: 'Whiskers',
    petType: 'Cat',
    food: 'Salmon Wet Food',
    time: 'Today, 8:30 AM',
    icon: <FaCat />,
  },
  {
    id: 3,
    petName: 'Bubbles',
    petType: 'Fish',
    food: 'Tropical Flakes',
    time: 'Today, 8:00 AM',
    icon: <FaFish />,
  },
];

const Feed = () => {
  return (
    <div className="feed-container">
      <h2 className="feed-title">Pet Feeding Activity</h2>
      <div className="feed-cards">
        {feedData.map(({ id, petName, petType, food, time, icon }) => (
          <div className="feed-card" key={id}>
            <div className="feed-icon">{icon}</div>
            <div className="feed-details">
              <h3>{petName} ({petType})</h3>
              <p><strong>Food:</strong> {food}</p>
              <p className="feed-time">{time}</p>
            </div>
          </div>                       
        ))}
      </div>
    </div>
  );
};

export default Feed;
