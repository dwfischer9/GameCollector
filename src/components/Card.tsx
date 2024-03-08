// Card.tsx

import React from 'react';

interface CardData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div className="card">
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default Card;
