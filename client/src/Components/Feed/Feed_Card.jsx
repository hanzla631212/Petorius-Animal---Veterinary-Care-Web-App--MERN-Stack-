import React from 'react';
import { FaTags } from 'react-icons/fa';
import { GiMeal, GiSittingDog } from 'react-icons/gi';

import './Feed_Card.css';

const Feed_Card = ({ feed, expanded, onToggleExpand }) => {
  if (!feed) return null;

  const {
    name = 'Unknown Feed',
    description = 'No description available.',
    type = 'N/A',
    pet = 'N/A',
    brand = 'Unknown Brand',
    price = 'N/A',
    image,
  } = feed;

  const shouldTruncate = description.length > 75;
  const displayedDescription = expanded || !shouldTruncate
    ? description
    : description.slice(0, 75).trim();

  return (
    <div
      className={`feeds-card ${expanded ? 'expanded' : ''}`}
      tabIndex="0"
      aria-label={`Feed item: ${name}`}
    >
      <img
        src={image || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
        alt={name}
        className="feeds-card-image"
      />
      <div className="feeds-card-content">
        <h2>{name}</h2>
        <p className="feed-description" aria-expanded={expanded}>
          {displayedDescription}
          {shouldTruncate && !expanded && '...'}
          {shouldTruncate && (
            <button
              onClick={onToggleExpand}
              className="feed-see-more-btn"
              aria-label={expanded ? 'See less description' : 'See more description'}
              type="button"
            >
              {expanded ? ' See Less' : ' See More'}
            </button>
          )}
        </p>

        <div className="feeds-meta-row" role="group" aria-label="Feed type and pet category">
        <div className="feed-meta-item">
  <GiMeal className="feed-icon" />
  <span>Type: <strong>{type}</strong></span>
</div>

<div className="feed-meta-item">
  <GiSittingDog className="feed-icon" />
  <span>For: <strong>{pet}</strong></span>
</div>

<div className="feed-meta-item brand-meta">
  <FaTags className="feed-icon" />
  <span>Brand: <strong>{brand}</strong></span>
</div>

        </div>

        <div className="feeds-price"><strong>PKR {price}</strong></div>
        <button className="feed-order-btn" type="button">Order Now</button>
      </div>
    </div>
  );
};

export default Feed_Card;
