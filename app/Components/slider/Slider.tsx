'use client'
// components/CustomSlider.tsx
import React, { useState } from 'react';

import styles from './CustomSlider.module.css';
import DealCart from '../ui/DealCart';

const CustomSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const deals = [
    <DealCart key={1} />, <DealCart key={2} />, <DealCart key={3} />, <DealCart key={4} />, <DealCart key={5} />, <DealCart key={6} />,
    <DealCart key={7} />, <DealCart key={8} />, <DealCart key={9} />, <DealCart key={10} />, <DealCart key={11} />, <DealCart key={12} />,
    <DealCart key={13} />, <DealCart key={14} />,<DealCart key={15} />,<DealCart key={16} />
  ];

  const itemsPerRow = 6;
  const totalItems = deals.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getVisibleDeals = () => {
    const visibleDeals = [];
    for (let i = 0; i < itemsPerRow; i++) {
      visibleDeals.push(deals[(currentIndex + i) % totalItems]);
    }
    return visibleDeals;
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevSlide} className={styles.navButton}>❮</button>
      <div className={styles.sliderContent}>
        {getVisibleDeals().map((deal, index) => (
          <div key={index} className={styles.slide}>
            {deal}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.navButton}>❯</button>
    </div>
  );
};

export default CustomSlider;
