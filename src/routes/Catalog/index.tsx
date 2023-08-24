import React from 'react';
import ActionAreaCard from '../../components/shareds/cards';
import '../../styles/catalog.scss';

const Catalog = () => {
  const numberOfCards = 10;

  const cardArray = Array.from({ length: numberOfCards }, (_, index) => (
    <ActionAreaCard key={index} />
  ));

  return (
    <div className="catalog">
      <div className="catalog__menu" />
      <div className="catalog__product">{cardArray}</div>
    </div>
  );
};

export default Catalog;
